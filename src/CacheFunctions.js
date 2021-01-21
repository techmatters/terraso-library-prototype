import React from "react";

export function CachePDF(url) {
    caches.open('favorites').then(function(cache) {
      var updateCache = cache.add(url);
      updateCache.then(function() {
        console.log("article was cached in favorites")
        caches.open("documents").then(function(cache){
            cache.delete(url).then(console.log("article removed from documents cache"))
        })
        return true
        
      }).catch(function (error) {
        console.log("article was not cached in favorites")
        return false
      })
    })
  }
  export function UnCachePDF(url){
    caches.open('favorites').then(cache => {
      cache.delete(url)
    })
  }
  
  export function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

  
  