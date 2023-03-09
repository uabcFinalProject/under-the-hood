import React from 'react';
import { Avatar, Card, Col, Divider, Alert, Row, Tabs, Typography } from 'antd';
import { CarTwoTone } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { Header } from 'antd/es/layout/layout';

const { Title } = Typography;
const { TabPane } = Tabs;


const Profile = () => {
  const { data } = useQuery(QUERY_ME);
  const user = Auth.getProfile().data
 // const user = data?.me || {};
  if (!Auth.loggedIn()) {
    return (
      <Alert textAlign='center'>User needs to login to render profile</Alert>
    )
  }
  return (
    <div style={{ padding: '24px', background: '#CBDCCE', height: '150vh' }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <Card title="Profile" style={{ background: '#FAE4D1'}}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <Avatar size={128} icon={<CarTwoTone />} />
            </div>
            <p>First Name: </p>{user.firstName}
            <p>Last Name: </p>{user.lastName}
            <p>Email: </p>{user.email}
            {/* <Descriptions>
              <Descriptions.Item label="Name">John Doe</Descriptions.Item>
              <Descriptions.Item label="Email">johndoe@example.com</Descriptions.Item>
              <Descriptions.Item label="Joined">January 2022</Descriptions.Item>
              <Descriptions.Item label="Last Login">2 hours ago</Descriptions.Item>
            </Descriptions> */}
          </Card>
        </Col>
        <Col xs={24} md={16}>
          <Card style={{ background: '#FAE4D1'}}>
            <Title level={1}>Your Vehicle</Title>
            <Divider />
            <ul>
                <li>VIN:</li>
                <li>Odometer:</li>
                <li>Make:</li>
                <li>Model:</li>
                <li>Year:</li>
                <li>Color:</li>
                <li>Notes:</li>
            </ul>
            <Title level={1}>Reminders</Title>
            <Divider />
            <Tabs defaultActiveKey="1">
              <TabPane tab="Upcoming" key="1">
                <ul>
                  <li>Oil Change</li>
                  <li>Tire Rotation</li>
                  <li>Air Filter Replacement</li>
                </ul>
              </TabPane>
              <TabPane tab="Future" key="2">
                <ul>
                  <li>Battery Replacement</li>
                  <li>Brake Pads</li>
                  <li>Vehicle Registration</li>
                </ul>
              </TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;