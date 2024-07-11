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
          label: 'Id',
          span : 3 ,
          children: data.id,
        },
        {
          key: '2',
          label: 'Name-en',
          span : 3 ,
          children: data.name_en,
        },
        {
          key: '3',
          label: 'Name_ar',
          span : 3 ,
          children: data.name_ar,
        },
        {
          key: '3',
          label: 'Material_image',
          span : 3 ,
          children: <img  src={data.material_image} className='w-[100px] h-[100px]' />,
        },
        {
          key: '3',
          label: 'Price',
          span : 3 ,
          children: data.price,
        },
        {
          key: '3',
          label: 'Percentage	',
          span : 3 ,
          children: data.percentage	,
        },
        {
          key: '3',
          label: 'Category',
          span : 3 ,
          children: data.category,
        },
        {
          key: '4',
          label: 'Created_at',
          span: 3,
          children: data.created_at,
        },
        
      ];


      useEffect(()=>{
        axios.get(`https://backend.profferdeals.com/api/admin/materials/${params.id}` ,
            
            { headers : {
                Authorization:`Bearer ${idToken}`
                }}
        ).then((res)=>{
            setData(res.data.data)
        }).catch(()=>{})
    },[])

    return (
       <div>
        <Descriptions bordered title="Materiale Info" layout="horizontal" items={items} />
        </div>
    )
}

export default page
