import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import {Button, Upload , Form ,Input } from 'antd';
import {  UploadOutlined } from '@ant-design/icons';

const page = () => {
    const [loading , setLoading] = useState(false)
    const idToken = useSelector(state => state.Auth.idToken);

    const navigate = useNavigate()

    const backHandler = () =>{
        
        return navigate(-1)
        }

        const handlerInputs = (values) =>{
            const formData =new FormData()
            formData.append('name_en', values.name_en);
            formData.append('name_ar', values.name_ar);
            formData.append('price', values.price);
            formData.append('percentage', values.percentage);
            formData.append('category', values.category);
            formData.append('created_at', values.created_at);


                const image  = values?.material_image?.[0]?.originFileObj
                console.log(image)
                if(image){
                formData.append('material_image' , image)}

                setLoading(true)
                axios.post("https://backend.profferdeals.com/api/admin/materials" , formData ,
                    { headers: { Authorization: `Bearer ${idToken}` 
                        
                    } }
                    
                ).then(()=>{
                setLoading(false)
                message.success('Successfully added')
                setTimeout(() => {
                backHandler();
                } , 2000)
                }
                ).catch((err)=>{
                    message.err('failed added')
                })
                    }  

            const normFile = (e) => {
                if (Array.isArray(e)) {
                return e;
                }
                return e?.fileList;
            };

    return (
    <div>
            <Form onFinish={handlerInputs} layout='vertical'>
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
            label={'Price'} name={"price"}
            rules={[
                {
                    required : true,
                    message:'please Enter price'
                }
                ]}>
            <Input size='large' placeholder='please Enter price' />
            </Form.Item>
            <Form.Item
            name="material_image"
            label="Image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
            maxCount={1}
            beforeUpload={()=>false}
            name="logo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
            <Form.Item
            label={'Percentage'} name={"percentage"}
            rules={[
                {
                    required : true,
                    message:'please Enter percentage'
                }
                ]}>
            <Input size='large' placeholder='please Enter percentage	' />
            </Form.Item>
            <Form.Item
            label={'Category'} name={"category"}
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
            <Button loading={loading} htmlType='submit' type='primary'>Add</Button>
        </Form>
    </div> 
  )
}

export default page
