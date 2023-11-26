import './App.css';
import React from 'react';
import MapBox from './components/map';
import MapBoxLegacy from './components/map2';
import { Layout, Row, Col, theme } from 'antd';

const { Header, Footer, Content } = Layout;

const headerStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
}

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={headerStyle}>
        <div className="demo-logo">
          <h1 style={{color: '#e4e6eb'}}>GPX Animate</h1>
        </div>
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      >
        <div
          style={{
            margin: '44px 0',
            padding: 40,
            minHeight: 480,
            background: colorBgContainer,
          }}
        >
          <Row>
            <Col span={16}>
              <div style={{ paddingTop: '20px' }}>
                <MapBoxLegacy />
              </div>
            </Col>
            <Col span={8}>
              <h1>Control</h1>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>
        Created by Art Thanan
      </Footer>
    </Layout>
  );
}

export default App;
