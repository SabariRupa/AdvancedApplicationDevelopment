import React, { useEffect } from 'react'
import Sidebar from './Sidebar'

function UserDashb()
 {
  useEffect(() => {
    document.body.style.backgroundColor = '#f0f0f0';
    return () => {
      document.body.style.backgroundColor = '#f0f0f0';
    };
  }, []);
  return (

    <div className="eat">
    <Sidebar/>
    </div>
  )
}
export default UserDashb