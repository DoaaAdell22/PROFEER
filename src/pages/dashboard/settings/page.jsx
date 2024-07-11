import React , {useEffect } from 'react'
import { Button, Checkbox, Form, Input , message } from 'antd';
import axios from 'axios'
import { useSelector } from "react-redux";

const page = () => {
    const [form] = Form.useForm();

    const idToken = useSelector(state => state.Auth.idToken);

    const onFinish = (values) => {
        axios.put("https://backend.profferdeals.com/api/admin/settings/update" , values ,
            { headers : {
                Authorization:`Bearer ${idToken}`
                }}
        ).then((res)=>{
            message.info(res.data.message)
        }).catch((err)=>{
            message.err(err.data.message)
        })
        };
        const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        }; 

        useEffect(() => {
            axios.get("https://backend.profferdeals.com/api/admin/settings" , 
                { headers : {
                Authorization:`Bearer ${idToken}`
                }}
            )
                .then((res) => {
                    console.log(res)
                    form.setFieldsValue({
                        privacy_policy_ar : res.data.data.privacy_policy_ar ,
                        privacy_policy_en : res.data.data.privacy_policy_en ,
                        about_us_en : res.data.data.about_us_en ,
                        about_us_ar : res.data.data.about_us_ar ,
                        terms_ar : res.data.data.terms_ar ,
                        terms_en : res.data.data.terms_en ,

                        
                    })
                    
                    message.success(`Data saved successfully!`)

                })
                .catch((err) => {
                    
                    message.err(`Failed to save data`)
    
                });
        }, []);
    return (
    <div className=' '>
            <Form  
            layout='vertical'
                name="basic"
            initialValues={{
            remember: true,
            }}
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            <Form.Item
            label="privacy_policy_ar"
            name="privacy_policy_ar"
            rules={[
            {
                required: true,
            message: 'Please input your privacy_policy_ar!',
            },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            label="privacy_policy_en"
            name="privacy_policy_en"
            rules={[
            {
                required: true,
            message: 'Please input your privacy_policy_en!',
            },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            label="about_us_en"
            name="about_us_en"
            rules={[
            {
                required: true,
            message: 'Please input your about_us_en!',
            },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            label="about_us_ar"
            name="about_us_ar"
            rules={[
            {
                required: true,
            message: 'Please input your about_us_ar!',
            },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            label="terms_ar"
            name="terms_ar"
            rules={[
            {
                required: true,
            message: 'Please input your terms_ar!',
            },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            label="terms_en"
            name="terms_en"
            rules={[
            {
                required: true,
            message: 'Please input your terms_en!',
            },
            ]}
            >
            <Input />
            </Form.Item>
            
        <Form.Item
            
        >
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
        </Form>
    </div>
    )
}

export default page
