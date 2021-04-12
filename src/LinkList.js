import React from 'react';
import Link from './Link';
import { UpdateQuery } from './CacheFunctions';



const LinkList = (props) => {
    //calls the useQuery Apollo hook to fetch the query information from the server.
    const data = JSON.parse(window.localStorage.getItem("Query"))

    return (
        <div>
            {data &&
                <React.Fragment>
                    {data.feed.map((link) => (
                        <Link key={link.id} link={link} ChangeView={props.ChangeView} />
                    ))}
                </React.Fragment>
            }
        </div>
    );
};

export default LinkList;