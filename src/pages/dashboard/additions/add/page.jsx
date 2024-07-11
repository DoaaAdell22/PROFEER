import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Button , Form , Input , message} from 'antd';
import { useSelector } from "react-redux";


const page = () => {
    const [loading , setLoading] = useState(false)
    const idToken = useSelector(state => state.Auth.idToken);



    const navigate = useNavigate()

    const backHandler = () =>{
        
        return navigate(-1)
        }


        const handler = (values) =>{
        setLoading(true)
                axios.post("https://backend.profferdeals.com/api/admin/additions" , values , 
                    { headers: { Authorization: `Bearer ${idToken}` } }
                ).then(()=>{
                    message.success('Successfully added')
                setLoading(false)
                setTimeout(() => {
                backHandler();
                } , 2000)
                }
                ).catch((err)=>{
                    message.err('failed added')
                })
        }  

    return (
    <div>
            <Form onFinish={handler} layout='vertical'>
            <Form.Item
            label={'Name_en'} name={"name_en"}
            rules={[
                {
                    required : true,
                    message:'please Enter name_en'
                }
                ]}>
            <Input size='large' placeholder='please Enter Name_en' />
            
            </Form.Item>
            <Form.Item
            label={'Name_ar'} name={"name_ar"}
            rules={[
                {
                    required : true,
                    message:'please Enter Name_ar'
                }
                ]}>
            <Input size='large' placeholder='please Enter Name_ar' />
            
            </Form.Item>
            <Form.Item
            label={'price'} name={"price"}
            rules={[
                {
                    required : true,
                    message:'please Enter price'
                }
                ]}>
            <Input size='large' placeholder='please Enter price' />
            </Form.Item>
            <Form.Item
            label={'percentage'} name={"percentage"}
            rules={[
                {
                    required : true,
                    message:'please Enter percentage'
                }
                ]}>
            <Input size='large' placeholder='please Enter percentage	' />
            </Form.Item>
            <Form.Item
            label={'category'} name={"category"}
            rules={[
                {
                    required : true,
                    message:'please Enter category'
                }
                ]}>
            <Input size='large' placeholder='please Enter category' />
            </Form.Item>
            <Form.Item
            label={'Created_at'} name={"created_at"}
            rules={[
                {
                    required : true,
                    message:'please Enter Created_at'
                }
                ]}>
            <Input size='large' placeholder='please Enter Created_at' />
            </Form.Item>
            <Button loading={loading} htmlType='submit'>Add</Button>
            </Form>
    </div> 
  )
}

export default page
