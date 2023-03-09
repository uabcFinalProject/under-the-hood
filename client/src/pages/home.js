import React from 'react';
import { Button, Layout } from 'antd';

const { Content } = Layout;

function Home() {
  return (
    <Layout>
      {/* <Header style={{ background: '#CBDCCE' }}>
        <h1 style={{ textAlign: 'center', fontSize: '25px'}}>Under The Hood</h1>
      </Header> */}
      <Content style={{ background: '#CBDCCE', height: '150vh'}}>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <img className="img-responsive" src={require('./assets/logo.png')} alt="Logo" height="500" />
          <h2 style={{ fontSize: '35px', marginTop: '-50px' }}>Welcome to Under The Hood</h2>
          <p style={{ fontSize: '20px', marginTop: '-20px' }}>Helping you remember all your car's service needs!</p>
          <p style={{ fontSize: '20px', marginTop: '-15px' }}>Please sign in or create an account to get started</p>
          <a href='/login'><Button size="large" style={{ background: '#615D7A', marginRight: '10px' }}> Sign In </Button></a>
          <a href='signup'><Button size="large" style={{ background: '#615D7A'}}>Create Account</Button></a>
        </div>
      </Content>
    </Layout>
  );
};


export default Home;