import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, InputNumber, message, Select, Upload  } from 'antd';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useForm } from 'antd/es/form/Form';
import { UploadOutlined } from '@ant-design/icons';


const Page = () => {
    const [form] = useForm();
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const idToken = useSelector(state => state.Auth.idToken);
    const language = useSelector(state => state.LanguageSwitcher.language);

    const navigate = useNavigate();

    const backHandler = () => {
        return navigate(-1);
    }

    const categories = [
        { id: 1, name_en: "Outlets", name_ar: "Outlets" },
        { id: 2, name_en: "AC Switch", name_ar: "AC Switch" },
        { id: 3, name_en: "TELE Point", name_ar: "TELE Point" },
        { id: 4, name_en: "Data Point", name_ar: "Data Point" },
        { id: 5, name_en: "Bath Tub", name_ar: "Bath Tub" },
        { id: 6, name_en: "Water Sink", name_ar: "Water Sink" },
        { id: 7, name_en: "Water Mixer", name_ar: "Water Mixer" },
        { id: 8, name_en: "Toilet Cabinet", name_ar: "Toilet Cabinet" },
        { id: 9, name_en: "Water Heater", name_ar: "Water Heater" },
    ];

    useEffect(() => {
        axios.get(`https://backend.profferdeals.com/api/admin/additions/${params.id}`, {
            headers: { Authorization: `Bearer ${idToken}` }
        }).then((res) => {
            form.setFieldsValue({
                name_en: res.data.data.name_en,
                name_ar: res.data.data.name_ar,
                price: res.data.data.price,
                percentage: res.data.data.percentage,
                category: res.data.data.category,
                material_image: res.data.data.material_image,
            });
            
        }).catch((err) => {
            console.error(err);
        });
    }, [params.id, idToken, form]);

    const handler = (values) => {
        setLoading(true);
        const formData = new FormData();
        formData.append('name_en', values.name_en);
        formData.append('name_ar', values.name_ar);
        formData.append('price', values.price);
        formData.append('percentage', values.percentage);
        formData.append('category', values.category);

        const image = values?.material_image?.[0]?.originFileObj;
        if (image) {
            formData.append('material_image', image);
        }

        axios.put(`https://backend.profferdeals.com/api/admin/materials/${params.id}`, formData, {
            headers: { Authorization: `Bearer ${idToken}` }
        }).then(() => {
            message.success('Successfully updated');
            setLoading(false);
            setTimeout(() => {
                backHandler();
            }, 2000);
        }).catch((err) => {
            setLoading(false);
            message.error('Failed to update');
        });
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };


    return (
        <div>
            <Form onFinish={handler} layout='vertical' form={form}>
                <Form.Item
                    label={'Name_en'} name={"name_en"}
                    rules={[{ required: true, message: 'Please enter name_en' }]}>
                    <Input size='large' placeholder='Please enter name_en' />
                </Form.Item>
                <Form.Item
                    label={'Name_ar'} name={"name_ar"}
                    rules={[{ required: true, message: 'Please enter name_ar' }]}>
                    <Input size='large' placeholder='Please enter name_ar' />
                </Form.Item>
                <Form.Item
                    label={'Price'} name={"price"}
                    rules={[{ required: true, message: 'Please enter price' }]}>
                    <InputNumber size='large' placeholder='Please enter price' />
                </Form.Item>
                <Form.Item
                    label={'Percentage'} name={"percentage"}
                    rules={[{ required: true, message: 'Please enter percentage' }]}>
                    <InputNumber size='large' placeholder='Please enter percentage' />
                </Form.Item>
                <Form.Item
                    label={'Category'} name={"category"}
                    rules={[{ required: true, message: 'Please select a category' }]}>
                    <Select placeholder="Select a category" loading={loading}>
                        {categories.map(category => (
                            <Option key={category.id} value={category.id}>
                                {language === 'ar' ? category.name_ar : category.name_en}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="material_image"
                    label="Image"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}>
                    <Upload
                        maxCount={1}
                        beforeUpload={() => false}
                        listType="picture">
                        
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>
                <Button loading={loading} htmlType='submit' type='primary'>Save</Button>
            </Form>
        </div>
    );
}

export default Page;
