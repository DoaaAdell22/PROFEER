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
          label: 'name',
          span : 3 ,
          children: data.name,
        },
        {
          key: '3',
          label: 'email',
          span : 3 ,
          children: data.email,
        },
        {
          key: '4',
          label: 'phone',
          span: 3,
          children: data.phone,
        },
        {
          key: '5',
          label: 'address',
          span : 3 ,
          children: data.address,
        },
        {
          key: '5',
          label: 'profile_image',
          span : 3 ,
          children: <img src={data.profile_image} className='w-[100px] h-[100px]' />,
        },
      ];


      useEffect(()=>{
        axios.get(`https://backend.profferdeals.com/api/admin/contractors/${params.id}` ,
            
            { headers : {
                Authorization:`Bearer ${idToken}`
                }}
        ).then((res)=>{
            setData(res.data.data)
        }).catch(()=>{})
    },[])

    return (
       <div>
        <Descriptions bordered title="contractor Info" layout="horizontal" items={items} />
        </div>
    )
}

export default page
