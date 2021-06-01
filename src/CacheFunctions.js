import React from 'react';

const { REACT_APP_API_KEY } = process.env;
const { REACT_APP_API_URL } = process.env;

/* takes a url and attempts to store it in the cache, returns true if the cache operation was
successful, false otherwise. */
export function CacheDocument (url) {
  return caches.open('favorites').then((cache) => {
    const updateCache = fetch(url, { redirect: 'error' }).then((
      response
    ) => {
      if (!response.ok) {
        throw new TypeError('bad response status');
      }
      return cache.put(url, response);
    });
    return updateCache
      .then(() => {
        caches.open('documents').then((cache) => {
          cache.delete(url);
        });
        return true;
      })
      .catch((error) => {
        console.error('article was not cached in favorites. Reason: ', error);
        return false;
      });
  });
}

// deletes a document from the cache if it exists
export function UncacheDocument (url) {
  caches.open('favorites').then((cache) => {
    cache.delete(url);
  });
}

/* React hook used to store and retrieve values from localStorage.
used to maintain state variables across sessions */
export function UseStickyState (defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

/* updates the graphQL query stored in the Cache */
export function UpdateQuery (timestampValue) {
  const tempValue = window.localStorage.getItem('PendingTimestamp');
  window.localStorage.setItem('Timestamp', tempValue);
  window.localStorage.removeItem('PendingTimestamp');
}

// fetches documents from the GraphQL server and writes to localStorage
export async function GetDocuments () {
  const response = await fetch(
    REACT_APP_API_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/graphql',
        'x-api-key': '111111'
      },
      body: JSON.stringify({
        query: 'query MyQuery{listDocuments{items{id name url}}}',
        variables: {}
      })
    }
  ).then((res) => res.json());
  try {
    const documentList = response.data.listDocuments;
    window.localStorage.setItem('Query', JSON.stringify(documentList));
  } catch (error) {
    console.error('failed to fetch documents from GraphQL Server. Reason:', error);
  }
}

/* compares the timestamp from the server with the one in the cache, returning true
if the server timestamp is newer */
export async function CompareTimestamp (onStart) {
  const cachedResponse = window.localStorage.getItem('Timestamp');

  if (!REACT_APP_API_URL) {
    throw new Error('REACT_APP_API_URL is not defined');
  }

  const response = await fetch(
    REACT_APP_API_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/graphql',
        'x-api-key': REACT_APP_API_KEY
      },
      body: JSON.stringify({
        query: 'query MyQuery{listDocuments{items{id name url}}}',
        variables: {}
      })
    }
  ).then((res) => res.json());
  let serverTimestamp = null;
  try {
    if (response && response.data && response.data.listTimestamps) {
      serverTimestamp = response.data.listTimestamps.items[0].time;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
  window.localStorage.setItem('PendingTimestamp', serverTimestamp);
  if (serverTimestamp > cachedResponse) {
    return true;
  }
  return false;
}
