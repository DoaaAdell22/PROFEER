import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { useSelector } from "react-redux";
import { message , Button } from 'antd';
import {  useNavigate } from 'react-router-dom';

const Page = () => {
    const navigate = useNavigate()
    const [mate, setMate] = useState([]);
    const idToken = useSelector(state => state.Auth.idToken);
    const [click , setClick] = useState(null)

    const columns = [

        {
            title: 'Name_en',
            dataIndex: 'name_en',
            key: 'name_en',
        },
        {
            title: 'Name_ar',
            dataIndex: 'name_ar',
            key: 'name_ar',
        },
        {
            title: 'Material_image',
            dataIndex: 'material_image',
            key: 'material_image',
            render : (text , record) => <img src={record.material_image} className='w-[100px] h-[100px]'/> 
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Percentage',
            dataIndex: 'percentage',
            key: 'percentage',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },

        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render : (text , record) => 
            <div className='flex justify-center gap-2'>
                <Button type='primary' onClick={()=>navigate(`/dashboard/materials/show/${record.id}`)} >show</Button>
                <Button type='primary' className='bg-[#165e34]' onClick={()=>navigate(`/dashboard/materials/edit/${record.id}`)} >edit</Button>
                <Button loading={click === record.id} danger type='primary' onClick={()=>{deleteHandler(record.id)}} >delete</Button>
            </div>
                    
        },
    ];

    

    const request = () => {
        axios.get("https://backend.profferdeals.com/api/admin/materials" , 
            { headers : {
            Authorization:`Bearer ${idToken}`
            }}
        ).then((res) => {
            setMate(res.data.data)
                message.success(`Data saved successfully!`)
            }).catch((err) => {
                
                message.info(`Failed to save data`)
            })
    }

    useEffect(() => {
        request()
    }, []);

    const deleteHandler = (id) =>{
        setClick(id)
        axios.delete(`https://backend.profferdeals.com/api/admin/materials/${id}` , 
            { headers : {
                Authorization:`Bearer ${idToken}`
                }}
        ).then((res)=>{
            request()
        }).catch(()=>{})
    }

    return (
        <div className=''>
            <h1 className='text-3xl text-white font-bold'>Materials</h1>
            <Button className='mb-[15px]' type='primary' onClick={()=>{navigate('/dashboard/materials/add')}}>+Add</Button>
            <Table columns={columns} dataSource={mate} />
        </div>
    );
};

export default Page;
