import React from 'react';
import './App.css';
import ToDoFormContainer from "./containers/ToDoFormContainer";
import ToDoListContainer from "./containers/ToDoListContainer";
import {BrowserRouter, Link, Route} from "react-router-dom";
import ToDoDoneListContainer from "./containers/ToDoDoneListContainer";
import {Layout, Menu} from "antd";

const {Header, Footer, Sider, Content} = Layout;


function App() {
    return (
        <Layout>
            <Header style={{textAlign: 'center',color:'white'}}>Todo List</Header>
            <BrowserRouter>
                <Layout  style={{height:'850px'}}>
                    <Sider>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Link to="/">All Todo List Page</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/donePage">Done Todo List Page</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Content style={{margin: '24px 16px 0', overflow: 'initial',background:' #fff'}}>
                        <ToDoFormContainer/>
                        <Route path="/" exact component={ToDoListContainer}/>
                        <Route path="/donePage" component={ToDoDoneListContainer}/>
                    </Content>
                </Layout>
            </BrowserRouter>

            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default App;
