import React,{useState,useEffect} from "react";
import { Input,Row, Col,Form, Button, Checkbox  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import './Login.css'

const { Header, Footer, Content } = Layout;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


const Login= () =>{

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return(
        <div>

            <Layout>
                <Header>Header</Header>
                <Content>
                   <div className='loginBackground'>
                       <div className='loginTab'>
                           <Form
                               {...layout}
                               name="basic"
                               initialValues={{ remember: true }}
                               onFinish={onFinish}
                               onFinishFailed={onFinishFailed}
                           >
                           <Row gutter={[16, 16]}>

                               <Form.Item
                                   label="Username"
                                   name="username"
                                   rules={[{ required: true, message: 'Please input your username!' }]}
                               >
                                   <Col> <Input placeholder="Username" prefix={<UserOutlined />} className='username'/></Col>
                               </Form.Item>

                           </Row>
                           <Row gutter={[16, 16]}>
                               <Form.Item
                                   label="Password"
                                   name="password"
                                   rules={[{ required: true, message: 'Please input your password!' }]}
                               >
                                   <Col><Input.Password placeholder="Password"/></Col>
                               </Form.Item>
                           </Row>

                               <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                   <Checkbox>Remember me</Checkbox>
                               </Form.Item>

                               <Form.Item {...tailLayout}>
                                   <Button type="primary" htmlType="submit">
                                       Submit
                                   </Button>
                               </Form.Item>
                           </Form>
                       </div>
                   </div>
                </Content>
                <Footer>Footer</Footer>
            </Layout>




        </div>


    );
}

export default Login;