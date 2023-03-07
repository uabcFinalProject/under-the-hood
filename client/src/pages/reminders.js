import React, { useState } from 'react';
import { Button, Input, List } from 'antd';

const Reminder = () => {
  const [reminders, setReminders] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddReminder = () => {
    if (inputValue.trim() !== '') {
      setReminders([...reminders, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleCompleteReminder = (index) => {
    const newReminders = [...reminders];
    newReminders[index].completed = true;
    setReminders(newReminders);
  };

  return (
    <div>
      <Input
        placeholder="Enter a reminder"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onPressEnter={handleAddReminder}
      />
      <Button type="primary" onClick={handleAddReminder}>
        Add
      </Button>
      <List
        style={{ marginTop: 16 }}
        bordered
        dataSource={reminders}
        renderItem={(item, index) => (
          <List.Item>
            <span
              style={{
                textDecoration: item.completed ? 'line-through' : 'none',
              }}
            >
              {item.text}
            </span>
            {!item.completed && (
              <Button
                type="primary"
                style={{ marginLeft: 8 }}
                onClick={() => handleCompleteReminder(index)}
              >
                Complete
              </Button>
            )}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Reminder;