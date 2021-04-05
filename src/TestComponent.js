import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';
const FEED_QUERY = gql`
{
  feed {
    
      id
        name
        url   
  }
}
`;

const LinkList = (props) => {
    const { data } = useQuery(FEED_QUERY);
    localStorage.setItem("Query", JSON.stringify(data))
    
    return (
      <div>
                   {data.feed.map((link) => (
              <Link key={link.id} link={link} ChangeView={props.ChangeView}/>
            ))}
     </div>
      
    );
  };
export default LinkList;