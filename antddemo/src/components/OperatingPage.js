import React, {Component} from "react";
import {Layout, Menu, Breadcrumb, Form, Input} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import {FormInstance} from 'antd/lib/form';


const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;
const containerStyle = {
    width: '100%',
    height: '100%'
};
const center = {
    lat: -41.286461,
    lng: 174.776230
};

const christLocation = {
    lat: -43.525650,
    lng: 172.639847

}


const OperatingPage = () => {

    const [formControl] = Form.useForm()

    const getValue = () => {
        let inputValues = formControl.getFieldsValue()
        console.log(inputValues)
    }

    return (
        <div>
            <Layout style={{height: '100vh'}}>
                <Header className="header">
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={300} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <SubMenu key="sub1" icon={<UserOutlined/>} title="subnav 1">
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option2</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<LaptopOutlined/>} title="subnav 2">
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<NotificationOutlined/>} title="subnav 3">
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <LoadScript
                                googleMapsApiKey="AIzaSyAG4D6tBXQndD5lwpWB3zYNm-tB57AkJQY"
                            >
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={christLocation}
                                    zoom={10}
                                >
                                    <Marker
                                        position={center}
                                        clickable={true}
                                    >Wellington</Marker>
                                    <Marker
                                        position={christLocation}
                                        clickable={true}
                                    >Wellington</Marker>
                                </GoogleMap>
                            </LoadScript>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
            <div>
                <Form className='p-5'
                      form={formControl}
                >
                    <div className='commentBox'>

                        <Form.Item>
                            <label>Comment here:</label>
                        </Form.Item>
                        <Form.Item name='control'>
                            <Input
                                className="control"
                                placeholder='typing here'
                            />
                        </Form.Item>
                        <button type="submit"
                            className="btn ant-btn-primary"
                            onClick={getValue}

                        >
                            submit
                        </button>
                    </div>
                </Form>

            </div>

        </div>
    )


}

export default OperatingPage;