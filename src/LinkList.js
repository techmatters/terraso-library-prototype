import React, { useState } from 'react';
import Link from './Link';
import { GetDocuments } from './CacheFunctions';

const LinkList = (props) => {
  // gets document data from localStorage.
  GetDocuments();
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
