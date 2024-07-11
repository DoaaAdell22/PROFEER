import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { useSelector } from "react-redux";
import { message , Button } from 'antd';
import {  useNavigate } from 'react-router-dom';

const Page = () => {
    const navigate = useNavigate()
    const [add, setAdd] = useState([]);
    const idToken = useSelector(state => state.Auth.idToken);
    const [click , setClick] = useState(null)
    const [loading , setLoading] =useState(false)

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
                <Button type='primary' onClick={()=>navigate(`/dashboard/additions/show/${record.id}`)} >Show</Button>
                <Button type='primary' className='bg-[#165e34]'  onClick={()=>navigate(`/dashboard/additions/edit/${record.id}`)} >edit</Button>
                <Button loading={click === record.id} danger type='primary' onClick={()=>{deleteHandler(record.id)}} >delete</Button>
            </div>
                    
        },
    ];

    

    const request = () => {
        axios.get("https://backend.profferdeals.com/api/admin/additions" , 
            { headers : {
            Authorization:`Bearer ${idToken}`
            }}
        ).then((res) => {
            setAdd(res.data.data)
            message.success(`Data saved successfully!`)
            }).catch((err) => {
                
                message.err(`Failed to save data`)
            })
    }

    useEffect(() => {
        request()
    }, []);

    const deleteHandler = (id) =>{
        setClick(id)
        axios.delete(`https://backend.profferdeals.com/api/admin/additions/${id}` , 
            { headers : {
                Authorization:`Bearer ${idToken}`
                }}
        ).then((res)=>{
            request()
        }).catch(()=>{})
    }

    return (
        <div className=''>
            <h1 className='text-3xl text-white font-bold'>Addition</h1>
            <Button className='mb-[15px]' type='primary' onClick={()=>{navigate('/dashboard/additions/add')}}>+Add</Button>
            <Table loading={loading} columns={columns} dataSource={add} />
        </div>
    );
};

export default Page;
