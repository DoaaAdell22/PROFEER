import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { useSelector } from "react-redux";
import { message , Button } from 'antd';
import {  useNavigate } from 'react-router-dom';

const Page = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState([]);
    const idToken = useSelector(state => state.Auth.idToken);
    const [loading , setLoading] = useState(false)
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
            title: 'action',
            dataIndex: 'action',
            key: 'action',
            render : (text , record) => 
            
                    <Button type='primary' onClick={()=>navigate(`/dashboard/users/show/${record.id}`)} >Show</Button>
        },
    ];

    

    useEffect(() => {
        axios.get("https://backend.profferdeals.com/api/admin/users" , 
            { headers : {
            Authorization:`Bearer ${idToken}`
            }}
        )
            .then((res) => {
                setUsers(res.data.data)
                message.success(`Data saved successfully!`)
            })
            .catch((err) => {
                
                message.err(`Failed to save data`)
            });
    }, []);

    return (
        <div>
            <Table loading={loading} columns={columns} dataSource={users} />
        </div>
    );
};

export default Page;
