import React, { useEffect, useState } from 'react'
import { Descriptions } from 'antd';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from 'axios'

const page = () => {

    const [data , setData] = useState({})

    const params = useParams();

    const idToken = useSelector(state => state.Auth.idToken);

  

    const items = [

        {
          key: '2',
          label: 'Name',
          span : 3 ,
          children: data.name,
        },
        {
          key: '3',
          label: 'Email',
          span : 3 ,
          children: data.email,
        },
        {
          key: '4',
          label: 'Phone',
          span: 3,
          children: data.phone,
        },
        {
          key: '5',
          label: 'Address',
          span : 3 ,
          children: data.address,
        },
      ];


      useEffect(()=>{
        axios.get(`https://backend.profferdeals.com/api/admin/users/${params.id}` ,
            
            { headers : {
                Authorization:`Bearer ${idToken}`
                }}
        ).then((res)=>{
            setData(res.data.data)
        }).catch(()=>{})
    },[])

    return (
       <div>
        <Descriptions bordered title="User Info" layout="horizontal" items={items} />
        </div>
    )
}

export default page
