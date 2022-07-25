import {Affix, Layout} from 'antd';
import React, { useState } from 'react';
import './header.css'
const {Header} = Layout;
const App = () => {
    const [top] = useState(0);
    return (
        <>
            <Affix offsetTop={top}>
                <Header className="Header">
                    <h1>树洞</h1>
                </Header>
            </Affix>

        </>
    );
};

export default App;