import React from 'react';
import { Avatar, Card, Col, Descriptions, Divider, Row, Tabs, Typography } from 'antd';
import { CarTwoTone } from '@ant-design/icons';

const { Title } = Typography;
const { TabPane } = Tabs;

const Profile = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <Card>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <Avatar size={128} icon={<CarTwoTone />} />
            </div>
            <Descriptions>
              <Descriptions.Item label="Name">John Doe</Descriptions.Item>
              <Descriptions.Item label="Email">johndoe@example.com</Descriptions.Item>
              <Descriptions.Item label="Joined">January 2022</Descriptions.Item>
              <Descriptions.Item label="Last Login">2 hours ago</Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
        <Col xs={24} md={16}>
          <Card>
            <Title level={4}>Your Vehicle</Title>
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
            <Title level={4}>Reminders</Title>
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