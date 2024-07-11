import { useMutation } from '@tanstack/react-query';
import { AutoComplete, Button, Card, Col, Divider, Form, Input, Row, Upload } from 'antd'
import { useForm } from 'antd/es/form/Form';
import React, { useEffect, useState } from 'react'
import axios, { URL } from "utlis/library/helpers/axios";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {
    DeleteOutlined,
    FileDoneOutlined,
    QuestionCircleOutlined,
    UploadOutlined,
  } from "@ant-design/icons";
  import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { PhoneNumberUtil } from 'google-libphonenumber';
import profileActions from "store/profile/actions";

const phoneUtil = PhoneNumberUtil.getInstance();
const { fetchProfileDataSuccess } = profileActions;
const isPhoneValid = (phone: string) => {
    try {
        return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};
const imageUrlToBase64 = async (url) => {
    const data = await fetch(url , {"cache":"no-cache"});
    const blob = await data.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data);
      };
      reader.onerror = reject;
    });
};
// Promise.all(imageSelected.map(imageUrlToBase64)).then((newArray) =>
// setImgUrl(newArray)
// );
function Profile() {
    const profile = useSelector(({ profile }) => profile.data);
    const token = useSelector(({ Auth }: { Auth: IAuth }) => Auth.idToken);
    const dispatch = useDispatch();

  
    useEffect(() => {
        const data = {...profile}
        data.mobileNumber= data.countryCode+"_"+data.mobileNumber
        imageUrlToBase64(URL+"/"+data.photoUrl).then((val)=>{
            data.photo64=val;
            const images= data.offersImagesURLs.map((el)=>`${URL}/${el}`)
            Promise.all(images.map(imageUrlToBase64)).then((newArray) =>newArray.map((base64)=>({
              uid: "-1",
              name: "icon64",
              status: "done",
              url: base64,
            }))

            ).then((fileList)=>{
 data.base64OffersImages =fileList
              form.setFieldsValue(data);
            })
        })
      }, []);
    const [form] = useForm()

    const mutation = useMutation({
      mutationFn: (values)=> axios["put"]("Operations", values ,{
        headers: {
            Authorization: `Bearer ${token}`,
          },
      }),
      onSuccess: (res) => {
        const {  message } = res.data;
        axios["get"](`Operations/info`, {
            headers: {
              "X-Portal": "dashboard",
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              const { data } = response.data;
              data.isVerified=true
              if(data.approvalStatus==="Approved"){
              data.isApproved=true
              }if(data.userActivated){
                data.isActivated=true
              }
              dispatch(fetchProfileDataSuccess(data));
            })
            .catch((error) => {});
            toast.success(message, {
              position: "top-center",
              duration: 5000,
              } );
      },
      onError:(err)=>{
  const {  data:{message}} =(err as any).response;
  
  toast.error(message, {
    position: "top-center",
    duration: 5000,
    } );
   
  
      }
    })


    const onFinish = (values: any) => {

        const mobileNumber=values.mobileNumber
        values.mobileNumber = mobileNumber.split("_")[1]
        values.countryCode = mobileNumber.split("_")[0]
        if(typeof values.photo64 !== "string"){
            values.photo64 =  values.photo64?.[0]?.thumbUrl.split(",")[1]
        }else{
            values.photo64 =  values.photo64?.split(",")[1]
        }
        if (Array.isArray(values.base64OffersImages)) {
          values.base64OffersImages =values.base64OffersImages.map((el)=>el.url?el.url.split(",")[1]: el.thumbUrl.split(",")[1])
        } 
    

        
        mutation.mutate(values)
      }



      const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

      const onWebsiteChange = (value: string) => {
        if (!value) {
          setAutoCompleteResult([]);
        } else {
          setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
      };
      const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
      }));
  return (
    <Form 
    form={form}
    onFinish={onFinish}
    layout="vertical"

    >
         <Divider orientation="left"><FormattedMessage id='edit-profile' /></Divider>
         <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-4 w-full">

  <div className='w-full' >
  <Card>
  <Form.Item
                label={<FormattedMessage id="photo" />}
                name="photo64"
                valuePropName="fileList"
                // rules={[
                //   {
                //     required: !id,
                //     message: <FormattedMessage id="image" />,
                //   },
                // ]}
                getValueProps={function (url) {
                  return {
                    fileList:
                      typeof url === "string"
                        ? url?[
                            {
                              uid: "-1",
                              name: "photoUrl",
                              status: "done",
                              url: url,
                            },
                          ]:[]
                        : url,
                  };
                }}
                getValueFromEvent={(e) => {
                  if (Array.isArray(e)) {
                    return e;
                  }
                  return e && e.fileList;
                }}
              >
                <Upload.Dragger
                  maxCount={1}
                  name="photoUrl"
                  beforeUpload={(file) => {
                    return false;
                  }}
                  listType="picture-card"
                >
                  <Button type="text" icon={<UploadOutlined />}>
                    <FormattedMessage id="upload" />
                  </Button>
                </Upload.Dragger>
              </Form.Item> 
  </Card>
  </div>
  <div className='w-full'> <Card>
  <Form.Item
                 getValueFromEvent={(phone  , {country:{dialCode}}) => {
                  return ""+dialCode+"_"+phone.slice(dialCode.length+1);
                }}
                label={<FormattedMessage id="mobileNumber" />}
                name="mobileNumber"
                rules={[
                  {
                    required: true,
                    message: <FormattedMessage id="mobileNumber" />,
                  },
                  {
                    validator: async (_, phone) => {
                      const phoneWithoutCode = phone.split("_")[1]
                      const value = "+"+phone.split("_").join("")
                      if(phoneWithoutCode){
                        if (!phone || !isPhoneValid(value)) {
                          return Promise.reject(new Error('wrong number'));
                        }
                      }
                    },
                  }
                ]}
              >
                <PhoneInput 
                 defaultCountry="sa"
                 inputStyle={{
                     width:"100%"
                 }}
                 // value={phone}
                //  disableDialCodePrefill={false}
                 // forceDialCode
         // prefix=''
                 charAfterDialCode=""
                />
              </Form.Item>
  <Form.Item
  label={<FormattedMessage id="phoneNumber" />}
  name="phoneNumber"
  rules={[
    
    {
      required: true,
      message: <FormattedMessage id="phoneNumber" />,
    },
  ]}
>
  <Input type="text"  />
</Form.Item>
<Form.Item
  label={<FormattedMessage id="website" />}
        name="website"
        rules={[    {
          required: true,
          message: <FormattedMessage id="website" />,
        },]}
      >
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange}>
          <Input />
        </AutoComplete>
      </Form.Item>
   
  <Form.Item
  label={<FormattedMessage id="contactEmail" />}
  name="contactEmail"
  rules={[
    {
      required: true,
      message: <FormattedMessage id="contactEmail" />,
    },
    {
      type:"email",
      message: <FormattedMessage id="contactEmail" />,
    },
  ]}
>
  <Input type="text"  />
</Form.Item>
    </Card></div>
            </div>
  <div className="w-full h-[initial]"> <Card className='!pt-4 h-full'>
    
  {/* <Form.Item
                  label={<FormattedMessage id="userName" />}
                  name="userName"
                  rules={[
                    {
                      required: true,
                      message: <FormattedMessage id="userName" />,
                    },
                  ]}
                >
                  <Input  />
                </Form.Item> */}
  <Form.Item
                  label={<FormattedMessage id="name" />}
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: <FormattedMessage id="name" />,
                    },
                  ]}
                >
                  <Input  />
                </Form.Item>
                <Form.Item
                  label={<FormattedMessage id="email" />}
                  name="email"
                  rules={[
                    {
type:"email",
                      message: <FormattedMessage id="email" />,
                    },
                  ]}
                >
                  <Input  />
                </Form.Item>
                {/* <Form.Item
                  label={<FormattedMessage id="password" />}
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: <FormattedMessage id="password" />,
                    },
                  ]}
                >
                  <Input.Password  />
                </Form.Item> */}
                <Form.Item
                label={<FormattedMessage id="address" />}
                name="address"
                rules={[
                  {
                    required: true,
                    message: <FormattedMessage id="address" />,
                  },
                ]}
              >
                <Input type="text"  />
              </Form.Item>
              <Form.Item
                label={<FormattedMessage id="latitude" />}
                name="latitude"
                rules={[
                  {
                    required: true,
                    message: <FormattedMessage id="latitude" />,
                  },
                ]}
              >
                <Input type="text"  />
              </Form.Item>
              <Form.Item
                label={<FormattedMessage id="longitude" />}
                name="longitude"
                rules={[
                  {
                    required: true,
                    message: <FormattedMessage id="longitude" />,
                  },
                ]}
              >
                <Input type="text"  />
              </Form.Item>
              <Form.Item
                label={<FormattedMessage id="base64offersimages" />}
                name="base64OffersImages"
                valuePropName="fileList"
                rules={[
                  {
                    required: true,
                    message: <FormattedMessage id="base64offersimages" />,
                  },
                ]}
                getValueProps={function (list) {
                  return {
                    fileList: list
                        ,
                  };
                }}
                getValueFromEvent={(e) => {
                  if (Array.isArray(e)) {
                    return e;
                  }
                  return e && e.fileList;
                }}
              >
                <Upload
                  maxCount={6}
                  name="image"
                  beforeUpload={(file) => {
                    return false;
                  }}
                  listType="picture-card"
                >
                  <Button type="text" icon={<UploadOutlined />}>
                    <FormattedMessage id="upload" />
                  </Button>
                </Upload>
              </Form.Item>
    </Card></div>

</div>
<div className='text-end'>

                  <Form.Item>
                  <Button
                    type="primary"
                    
                    className="mt-4"
                    htmlType="submit"
                    loading={mutation.isPending}
                  >
                    <FormattedMessage id="global.save" />
                  </Button>
                </Form.Item>
</div>
    </Form>
  )
}

export default Profile