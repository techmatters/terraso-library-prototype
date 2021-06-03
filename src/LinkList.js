import React, { useState } from 'react';
import Link from './Link';

/**
 * @param {function} props
 * Takes Data representing documents and their URLS from localStorage and uses it to generate Link components
 */
const LinkList = (props) => {
  // gets document data from localStorage.
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(JSON.parse(window.localStorage.getItem('Query')));

  return (
    <React.Fragment>
      {data && data.items.map((link) => (
        <Link key={link.id} link={link} ChangeView={props.ChangeView} />
      ))}
    </React.Fragment>
  );
};

export default LinkList;
