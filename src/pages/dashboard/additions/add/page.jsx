import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Button , Form , Input , InputNumber, message , Select} from 'antd';
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
            <InputNumber className='w-full' size='large' placeholder='please Enter price' />
            </Form.Item>
            <Form.Item
            label={'percentage'} name={"percentage"}
            rules={[
                {
                    required : true,
                    message:'please Enter percentage'
                }
                ]}>
            <InputNumber className='w-full' size='large' placeholder='please Enter percentage	' />
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
                    {categories.name}
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
