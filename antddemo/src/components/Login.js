import React, {useState, useEffect} from "react";
import {Input, Row, Col, Form, Button, Checkbox} from 'antd';
import {UserOutlined, TwitterOutlined, FacebookOutlined, InstagramOutlined} from '@ant-design/icons';
import {Layout} from 'antd';
import './Login.css'

const {Header, Footer, Content} = Layout;

const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};


const Login = () => {

    const [login] = Form.useForm()
    let verifyLogin = '';
    const onFinish = values => {
        console.log('Success:', values);
        if (values.username === 'username' && values.password === 'password') {
            verifyLogin = true;
        } else {
            verifyLogin = false;
        }
    };


    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Layout style={{ height: '100vh' }}>
                <Header></Header>
                <Content className='loginBackground'>
                    <div className='blackShadow'>
                        <div className='loginTab'>
                            <Form

                                form={login}
                                initialValues={{remember: false}}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Row>

                                    <Form.Item

                                        name="username"
                                        rules={[{required: true, message: 'Please input your username!'}]}

                                    >
                                        <Input placeholder="Username"
                                               prefix={<UserOutlined style={{color: 'grey'}}/>}
                                               className='username'
                                               style={{width:'250px'}}
                                        />
                                    </Form.Item>

                                </Row>
                                <Row>
                                    <Form.Item
                                        name="password"
                                        rules={[{required: true, message: 'Please input your password!'}]}
                                        style={{width:'250px'}}
                                    >
                                        <Input.Password placeholder="Password" className='password'/>
                                    </Form.Item>
                                </Row>

                                <Form.Item>
                                    <Button htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                                <Form.Item>
                                    <Row>
                                        <Col xs={{span: 5, offset: 1}} lg={{span: 6, offset: 2}}><TwitterOutlined
                                            style={{fontSize: '30px', color: 'white'}}/></Col>
                                        <Col xs={{span: 11, offset: 1}} lg={{span: 6, offset: 2}}><FacebookOutlined
                                            style={{fontSize: '30px', color: 'white'}}/></Col>
                                        <Col xs={{span: 5, offset: 1}} lg={{span: 6, offset: 2}}><InstagramOutlined
                                            style={{fontSize: '30px', color: 'white'}}/></Col>
                                    </Row>


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