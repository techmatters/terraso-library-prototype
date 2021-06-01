import React, { useState } from 'react';
import Link from './Link';

const LinkList = (props) => {
  // gets document data from localStorage.
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(JSON.parse(window.localStorage.getItem('Query')));

  return (
    <React.Fragment>
      {data.items.map((link) => (
        <Link key={link.id} link={link} ChangeView={props.ChangeView} />
      ))}
    </React.Fragment>
  );
};

export default LinkList;
