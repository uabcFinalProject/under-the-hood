import React, { useState }from 'react';
import { Avatar, Card, Col, Divider, Alert, Row, Tabs, Typography, Form, Input, Button } from 'antd';
import { CarTwoTone } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { useMutation} from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { ADD_VEHICLE } from '../utils/mutations';
// import { ADD_REMINDER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Header } from 'antd/es/layout/layout';
const { Title } = Typography;
const { TabPane } = Tabs;

const Profile = () => {
  const [formState, setFormState] = useState({ vin: '', odometer: '',  make: '', model: '', year: '', color: '', notes: '',});
  const [addVehicle, { error }] = useMutation(ADD_VEHICLE);
  const { data } = useQuery(QUERY_ME);
  // const { data: meData} = useQuery(QUERY_ME);
  // const [ addVehicle, {vehicleError }] = useMutation(ADD_VEHICLE);
  // const [ addReminder, { reminderError }] = useMutation(ADD_REMINDER);
  
  const user = Auth.getProfile().data;
  // console.log(user);
 // const user = data?.me || {};
  if (!Auth.loggedIn()) {
    return (
      <Alert textAlign='center'>User needs to login to render profile</Alert>
    )
  }

  const handleAddVehicle = (event) => {
    const { name, value } = event.target;
    console.log('handleLogin', event.target)
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("formState", formState);
    try {
      const { data } = await addVehicle({
        variables: { ...formState },
      });
      // Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    
    setFormState({
      vin: '', odometer: '',  make: '', model: '', year: '', color: '', notes: '',
    });
  };
  
  return (
    <div style={{ padding: '24px', background: '#CBDCCE', height: '150vh' }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <Card title="Profile" style={{ background: '#FAE4D1'}}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <Avatar size={128} icon={<CarTwoTone />} />
            </div>
            <p><b>First Name:</b> {user.firstName}</p>
            <p><b>Last Name:</b> {user.lastName}</p>
            <p><b>Email:</b> {user.email}</p>
            {/* <Descriptions>
              <Descriptions.Item label="Name">John Doe</Descriptions.Item>
              <Descriptions.Item label="Email">johndoe@example.com</Descriptions.Item>
              <Descriptions.Item label="Joined">January 2022</Descriptions.Item>
              <Descriptions.Item label="Last Login">2 hours ago</Descriptions.Item>
            </Descriptions> */}
            <Form>
              <Title level={4}>Add A Vehicle:</Title>
               <Form.Item name="field1" label="VIN #:" >
                <Input
                  name={'vin'}
                  type='text'
                  placeholder='VIN'
                  value={formState.vin}
                  onChange={handleAddVehicle} />
               </Form.Item>
               <Form.Item name="field2" label="Odometer:">
                 <Input
                  name={'odometer'}
                  type='text'
                  placeholder='Odometer'
                  value={formState.odometer}
                  onChange={handleAddVehicle} />
               </Form.Item>
               <Form.Item name="field3" label="Make:">
                 <Input
                  name={'make'}
                  type='text'
                  placeholder='Make'
                  value={formState.make}
                  onChange={handleAddVehicle} />
              </Form.Item>
               <Form.Item name="field4" label="Model:">
                 <Input
                  name={'model'}
                  type='text'
                  placeholder='Model'
                  value={formState.model}
                  onChange={handleAddVehicle} />
               </Form.Item>
               <Form.Item name="field5" label="Year:">
                 <Input
                  name={'year'}
                  type='text'
                  placeholder='Year'
                  value={formState.year}
                  onChange={handleAddVehicle} />
               </Form.Item>
               <Form.Item name="field6" label="Color:">
                 <Input
                  name={'color'}
                  type='text'
                  placeholder='Color'
                  value={formState.color}
                  onChange={handleAddVehicle} />
               </Form.Item>
               <Form.Item name="field7" label="Notes:">
                 <Input.TextArea 
                  name={'notes'}
                  type='text'
                  placeholder='Notes'
                  value={formState.notes}
                  onChange={handleAddVehicle}
                 />
              </Form.Item>
               <Form.Item>
                 <Button onClick = {handleFormSubmit} size="large" style={{ background: '#615D7A' }} htmlType="submit">
                   Submit
               </Button>
              </Form.Item>
             </Form>
          </Card>
        </Col>
        <Col xs={24} md={16}>
          <Card style={{ background: '#FAE4D1'}}>
            <Title level={1}>Your Vehicle</Title>
            <Divider />
            
              <Tabs 
                defaultActiveKey='0'
                type="card" 
                size="small" 
                items= {user.vehicles.map((vehicle, i) => {
                  return {
                    label: `${vehicle.make} ${vehicle.model}`,
                    key: i,
                    children: 
                    <Form>
                      <ul>
                        <li>VIN: {vehicle.vin}</li>
                          <li>Odometer: {vehicle.odometer}</li>
                          <li>Make: {vehicle.make}</li>
                          <li>Model: {vehicle.model}</li>
                          <li>Year: {vehicle.year}</li>
                          <li>Color: {vehicle.color}</li>
                          <li>Notes: {vehicle.notes}</li>
                      </ul>
                  </Form>
                  }
                })}
              />
            <Title level={1}>Reminders</Title>
            <Divider />
            <Tabs defaultActiveKey="1">
              <TabPane tab="Upcoming" key="1">
                <ul>
                  <li>Next Reminder: </li>
                  {/* {user.vehicle.reminders.serviceType} */}
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