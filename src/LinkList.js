import React from 'react'
//  import Link from './Link'
import { GetTimestamp } from './CacheFunctions'

const LinkList = (props) => {
  //  calls the useQuery Apollo hook to fetch the query information from the server.
  //  const [data, setData] = useState(JSON.parse(window.localStorage.getItem('Query')))
  return (
    <div>
    <button className='btn-secondary btn-success' onClick={() => {
      GetTimestamp()
    }}>
      Refresh
    </button>
    </div>
  )
}

export default LinkList
