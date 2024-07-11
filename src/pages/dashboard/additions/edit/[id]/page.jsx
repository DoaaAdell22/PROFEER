import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useForm } from 'antd/es/form/Form';

const Page = () => {
    const [form] = useForm();
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const idToken = useSelector(state => state.Auth.idToken);
    const navigate = useNavigate();

    const backHandler = () => {
        return navigate(-1);
    }

    useEffect(() => {
        axios.get(`https://backend.profferdeals.com/api/admin/additions/${params.id}`,
            { headers: { Authorization: `Bearer ${idToken}` } }
        ).then((res) => {
            form.setFieldsValue({
                id : res.data.data.id ,
                name_en: res.data.data.name_en,
                name_ar: res.data.data.name_ar,
                price: res.data.data.price,
                percentage: res.data.data.percentage,
                category: res.data.data.category,
                created_at: res.data.data.created_at
            });
        }).catch((err) => {
            console.error(err);
        });
    }, []);

    const handler = (values) => {
        setLoading(true);
        axios.put(`https://backend.profferdeals.com/api/admin/additions/${params.id}`, values,
            { headers: { Authorization: `Bearer ${idToken}` } }
        ).then(() => {
            message.success('successfully updated')
            setLoading(false);
            setTimeout(() => {
                backHandler();
            }, 2000);
        }).catch((err) => {
            setLoading(false);
            message.err('failed updated')
        });
    }

    return (
        <div>
            <Form onFinish={handler} layout='vertical' form={form}>
                <Form.Item
                    label={'id'} name={"id"}
                    rules={[{ required: true, message: 'please Enter id' }]}>
                    <Input size='large' placeholder='please Enter id' />
                </Form.Item>
                <Form.Item
                    label={'Name_en'} name={"name_en"}
                    rules={[{ required: true, message: 'please Enter name_en' }]}>
                    <Input size='large' placeholder='please Enter Name_en' />
                </Form.Item>
                <Form.Item
                    label={'Name_ar'} name={"name_ar"}
                    rules={[{ required: true, message: 'please Enter Name_ar' }]}>
                    <Input size='large' placeholder='please Enter Name_ar' />
                </Form.Item>
                <Form.Item
                    label={'Price'} name={"price"}
                    rules={[{ required: true, message: 'please Enter price' }]}>
                    <Input size='large' placeholder='please Enter Price' />
                </Form.Item>
                <Form.Item
                    label={'Percentage'} name={"percentage"}
                    rules={[{ required: true, message: 'please Enter percentage' }]}>
                    <Input size='large' placeholder='please Enter Percentage' />
                </Form.Item>
                <Form.Item
                    label={'Category'} name={"category"}
                    rules={[{ required: true, message: 'please Enter category' }]}>
                    <Input size='large' placeholder='please Enter Category' />
                </Form.Item>
                <Form.Item
                    label={'Created_at'} name={"created_at"}
                    rules={[{ required: true, message: 'please Enter Created_at' }]}>
                    <Input size='large' placeholder='please Enter Created_at' />
                </Form.Item>

                <Button loading={loading} htmlType='submit'>Save</Button>
            </Form>
        </div>
    )
}

export default Page;
