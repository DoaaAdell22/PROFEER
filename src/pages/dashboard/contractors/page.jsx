import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { useSelector } from "react-redux";
import { message , Button } from 'antd';
import {  useNavigate } from 'react-router-dom';

const Page = () => {
    const navigate = useNavigate()
    const [cont, setCont] = useState([]);
    const idToken = useSelector(state => state.Auth.idToken);
    const [loading , setLoading] =useState(false)

    const columns = [

        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'profile_image',
            dataIndex: 'profile_image',
            key: 'profile_image',
            render : (text , record) => <img className='w-[100px] h-[100px]' src={record.profile_image} />
        },
        {
            title: 'action',
            dataIndex: 'action',
            key: 'action',
            render : (text , record) => 
            
                    <Button type='primary' onClick={()=>navigate(`/dashboard/contractors/show/${record.id}`)} >Show</Button>
        },
    ];

    

    useEffect(() => {
        axios.get("https://backend.profferdeals.com/api/admin/contractors" , 
            { headers : {
            Authorization:`Bearer ${idToken}`
            }}
        )
            .then((res) => {
                console.log(res)
                setCont(res.data.data)
                message.success(`Data saved successfully!`)
            })
            .catch((err) => {
                
                message.err(`Failed to save data`)
            });
    }, []);

    return (
        <div>
            <h1 className='text-3xl text-white font-bold'>Contractors</h1>
            <Table loading={loading} columns={columns} dataSource={cont} />
        </div>
    );
};

export default Page;
