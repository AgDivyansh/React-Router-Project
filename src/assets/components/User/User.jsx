// import React from "react";
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams() ;
  return (
    <div  className="bg-gray-600 text-white text-3xl p-4 rounded-xl"  >
      Divyansh Agarwal : {userid }
    </div>
  )
}

export default User

