import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { useSelector } from "react-redux";
import { message , Button } from 'antd';
import {  useNavigate } from 'react-router-dom';

const Page = () => {
    const navigate = useNavigate()
    const [proj, setProj] = useState([]);
    const idToken = useSelector(state => state.Auth.idToken);
    const [click , setClick] = useState(null)
    const [loading , setLoading] = useState(false)

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
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
            title: 'Created_at',
            dataIndex: 'created_at',
            key: 'created_at',
        },
        {
            title: 'action',
            dataIndex: 'action',
            key: 'action',
            render : (text , record) => 
            <div className='flex justify-center gap-2'>
                <Button type='primary' onClick={()=>navigate(`/dashboard/project-types/show/${record.id}`)} >Show</Button>
                <Button loading={click === record.id} danger type='primary' onClick={()=>{deleteHandler(record.id)}} >delete</Button>
            </div>
                    
        },
    ];

    

    const request = () => {
        axios.get("https://backend.profferdeals.com/api/admin/project-types" , 
            { headers : {
            Authorization:`Bearer ${idToken}`
            }}
        ).then((res) => {
                setProj(res.data.data)
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
        axios.delete(`https://backend.profferdeals.com/api/admin/project-types/${id}` , 
            { headers : {
                Authorization:`Bearer ${idToken}`
                }}
        ).then((res)=>{
            request()
        }).catch(()=>{})
    }

    return (
        <div className=''>
            <h1 className='text-3xl text-white font-bold'>Projects</h1>
            <Button className='mb-[15px]' type='primary' onClick={()=>{navigate('/dashboard/project-types/add')}}>+Add</Button>
            <Table  loading={loading} columns={columns} dataSource={proj} />
        </div>
    );
};

export default Page;
