import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import { Button , Form , Input , InputNumber, message , Select , Upload} from 'antd';
import {  UploadOutlined } from '@ant-design/icons';

const page = () => {
    const [loading , setLoading] = useState(false)
    const idToken = useSelector(state => state.Auth.idToken);
    const language = useSelector(state => state.LanguageSwitcher.language);
    console.log(language)
    const navigate = useNavigate()



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
            <InputNumber size='large' placeholder='please Enter price' />
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
            <InputNumber size='large' placeholder='please Enter percentage	' />
            </Form.Item>
            <Form.Item
            label={'category'} name={"category"}
            rules={[
                {
                    required : true,
                    message:'please Enter category'
                }
                ]}>
                <Select
                placeholder="Select a categories"
                loading={loading}
              >
                {categories.map(categories => (
                  <Option key={categories.id} value={categories.id}>
                    {language === 'ar' ? categories.name_ar : categories.name_en}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Button loading={loading} htmlType='submit' type='primary'>Add</Button>
        </Form>
    </div> 
  )
}

export default page
