import React, { useState } from 'react';
import Link from './Link';
import { GetDocuments } from './CacheFunctions';

const LinkList = (props) => {
  // gets document data from localStorage.
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(JSON.parse(window.localStorage.getItem('Query')));
  console.log(data);

  return (
    <div>
    <button onClick={() => GetDocuments()}>
      ttttt
    </button>
    <React.Fragment>
      {data && data.items.map((link) => (
        <Link key={link.id} link={link} ChangeView={props.ChangeView} />
      ))}
    </React.Fragment>
    </div>
  );
};

export default LinkList;
