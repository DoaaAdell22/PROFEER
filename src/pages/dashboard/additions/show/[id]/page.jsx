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
          key: '1',
          label: 'id',
          span : 3 ,
          children: data.id,
        },
        {
          key: '2',
          label: 'name-en',
          span : 3 ,
          children: data.name_en,
        },
        {
          key: '3',
          label: 'name_ar',
          span : 3 ,
          children: data.name_ar,
        },
        {
          key: '3',
          label: 'name_ar',
          span : 3 ,
          children: data.name_ar,
        },
        {
          key: '3',
          label: 'price',
          span : 3 ,
          children: data.price,
        },
        {
          key: '3',
          label: 'percentage	',
          span : 3 ,
          children: data.percentage	,
        },
        {
          key: '3',
          label: 'category',
          span : 3 ,
          children: data.category,
        },
        {
          key: '4',
          label: 'created_at',
          span: 3,
          children: data.created_at,
        },
        
      ];


      useEffect(()=>{
        axios.get(`https://backend.profferdeals.com/api/admin/additions/${params.id}` ,
            
            { headers : {
                Authorization:`Bearer ${idToken}`
                }}
        ).then((res)=>{
            setData(res.data.data)
        }).catch(()=>{})
    },[])

    return (
       <div>
        <Descriptions bordered title="Addition info" layout="horizontal" items={items} />
        </div>
    )
}

export default page
