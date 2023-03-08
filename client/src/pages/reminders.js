import { useState } from 'react';
import { Select, Button, List, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Text } = Typography;

const Reminder = () => {
  const [reminders, setReminders] = useState([
    { id: 1, text: 'Test' },
    { id: 2, text: 'Test' },
    { id: 3, text: 'Test' },
  ]);
  const [selectedReminder, setSelectedReminder] = useState('');

  const handleSelect = (value) => {
    setSelectedReminder(value);
  };

  const handleAddReminder = () => {
    const newId = reminders.length + 1;
    setReminders([...reminders, { id: newId, text: selectedReminder }]);
    setSelectedReminder('');
  };

  const handleDeleteReminder = (id) => {
    const updatedReminders = reminders.filter((reminder) => reminder.id !== id);
    setReminders(updatedReminders);
  };

  return (
    <>
      <Select
        placeholder="Select a reminder"
        style={{ width: 200, marginBottom: 16, marginTop: '30px', marginLeft: '50px' }}
        value={selectedReminder}
        onChange={handleSelect}
      >
        <Option value="Oil/oil filter changed">Oil/oil filter changed</Option>
        <Option value="Wiper blades replacement">Wiper blades replacement</Option>
        <Option value="Replace air filter">Scheduled maintenance</Option>
      </Select>
      <Button type="primary" onClick={handleAddReminder}>
        Add Reminder
      </Button>
      <List
        dataSource={reminders}
        renderItem={(reminder) => (
          <List.Item
            actions={[
              <Button
                type="text"
                icon={<DeleteOutlined />}
                onClick={() => handleDeleteReminder(reminder.id)}
              />,
            ]}
          >
            <Text>{reminder.text}</Text>
          </List.Item>
        )}
      />
    </>
  );
};

export default Reminder;