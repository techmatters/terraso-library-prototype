import React, { useState } from 'react';
import Link from './Link';
import { UpdateQuery } from './CacheFunctions';


const LinkList = (props) => {
    //calls the useQuery Apollo hook to fetch the query information from the server.
    const [data, setData] = useState(JSON.parse(window.localStorage.getItem("Query")))

    return (
        <div>
            <button className="btn-secondary btn-success" onClick={() => {
                UpdateQuery()
                setData(JSON.parse(window.localStorage.getItem("Query")))
            }}>
                Refresh
          </button>
            {data &&
                <React.Fragment>
                    {data.items.map((link) => (
                        <Link key={link.id} link={link} ChangeView={props.ChangeView} />
                    ))}
                </React.Fragment>
            }
        </div>
    );
};

export default LinkList;