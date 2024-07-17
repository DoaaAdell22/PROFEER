import React, { useEffect, useState } from 'react'
import { Descriptions } from 'antd';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from 'axios'

const page = () => {

    const [data , setData] = useState({})

    const params = useParams();

    const idToken = useSelector(state => state.Auth.idToken);

    const language = useSelector(state => state.LanguageSwitcher.language);

    const [cate , setCate] = useState({})


    const categories = [

      {id:1, name_en:"Outlets" , name_ar:"Outlets"} ,
      {id:2, name_en:"AC Switch" , name_ar:"AC Switch"} ,
      {id:3, name_en:"TELE Point" , name_ar:"TELE Point"} ,
      {id:4, name_en:"Data Point" , name_ar:"Data Point"} ,
      {id:5, name_en:"Bath Tub" , name_ar:"Bath Tub"} ,
      {id:6, name_en:"Water Sink" , name_ar:"Water Sink"} ,
      {id:7, name_en:"Water Mixer" , name_ar:"Water Mixer"} ,
      {id:8, name_en:"Toilet Cabinet" , name_ar:"Toilet Cabinet"} ,
      {id:9, name_en:"Water Heater" , name_ar:"Water Heater"} ,
    ]


    useEffect(()=>{
      axios.get(`https://backend.profferdeals.com/api/admin/materials/${params.id}` ,
          
          { headers : {
              Authorization:`Bearer ${idToken}`
              }}
      ).then((res)=>{
          setData(res.data.data)
          const allCategory = categories.find((el) => el.id === res.data.data.category)
          setCate(allCategory)
      }).catch(()=>{})
  },[])
  
    const items = [

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
          children: language === 'ar' ? cate.name_ar : cate.name_en ,
        },

        
      ];


     

    return (
       <div>
        <Descriptions bordered title="Materiale Info" layout="horizontal" items={items} />
        </div>
    )
}

export default page
