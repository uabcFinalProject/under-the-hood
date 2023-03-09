import React, { useState } from 'react';
import { Select, DatePicker, TimePicker, Button, List, Form, Popconfirm } from 'antd';
import { ADD_REMINDER } from '../utils/mutations';


const reminders = [
  'Oil Change',
  'Air Filter Replacement',
  'Check Engine Light Service',
  'Brake Replacement',
  'Spark Plug Replacement',
  'Wheel Alignment',
  'Battery Replacement',
  'Tire Repairs or Replacement',
  'Windshield Wipers Replacement',
  'Loose Fuel Cap Repair or Replacement',
];

const Reminder = () => {
  const [selectedReminder, setSelectedReminder] = useState('');
  const [remindersList, setRemindersList] = useState([]);
  
  // const [addReminder, { error }] = useMutation(ADD_REMINDER);
  const handleFormSubmit = (values) => {
    const newReminder = {
      id: '',
      reminder: selectedReminder,
      date: values.date.format('YYYY-MM-DD'),
      time: values.time.format('HH:mm'),
      completed: false,
    };
    setRemindersList([...remindersList, newReminder]);
    setSelectedReminder('');
  };

  const handleReminderDeletion = (id) => {
    setRemindersList(remindersList.filter((reminder) => reminder.id !== id));
  };

  const handleReminderCompletion = (id) => {
    const updatedList = remindersList.map((reminder) => {
      if (reminder.id === id) {
        return { ...reminder, completed: !reminder.completed };
      }
      return reminder;
    });
    setRemindersList(updatedList);
  };



  return (
    <div style={{ background: '#CBDCCE', height: '150vh' }}>
      <Form onFinish={handleFormSubmit}>
        <Form.Item label="Select a reminder" >
          <Select value={selectedReminder} onChange={setSelectedReminder}>
            {reminders.map((reminder) => (
              <Select.Option key={reminder} value={reminder}>
                {reminder}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Select a date" name="date" rules={[{ required: true, message: 'Please select a date' }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item label="Select a time" name="time" rules={[{ required: true, message: 'Please select a time' }]}>
          <TimePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Service Reminder
          </Button>
        </Form.Item>
      </Form>
      <List
        header={<div>Your Reminders</div>}
        bordered
        dataSource={remindersList}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Popconfirm title="Are you sure you want to delete this reminder?" onConfirm={() => handleReminderDeletion(item.id)}>
                <Button danger>Delete</Button>
              </Popconfirm>,
              <Button onClick={() => handleReminderCompletion(item.id)}>{item.completed ? 'Undo' : 'Complete'}</Button>,
            ]}
          >
            <div>
              <strong>{item.reminder}</strong> - {item.date} {item.time}
            </div>
            {item.completed && <div>Completed</div>}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Reminder;