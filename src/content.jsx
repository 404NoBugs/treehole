import React from 'react';
import {Layout} from "antd";
import './content.css'
const { Content } = Layout;

const App = () => {
    return (
        <>
                <Content style={{padding: '0 50px',}}>
                    <div className="site-layout-content">Content</div>
                </Content>
        </>
    );
};
export default App;