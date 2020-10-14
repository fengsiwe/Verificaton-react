import React,{useState,useEffect} from "react";
import { Input, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const Login= () =>{

    return(
        <div>

            <Layout>
                <Header>Header</Header>
                <Content>
                    <Input placeholder="Username" prefix={<UserOutlined />}/>
                    <Input.Password placeholder="Password"/>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    );
}

export default Login;