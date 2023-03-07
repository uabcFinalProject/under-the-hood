import React from 'react';
import { Card, Space } from 'antd';

function Profile () {
    return (
        <Space direction="vertical" size={16}>
            <Card 
            title="Default size card"
            style={{
                width: 300,
            }}
            >
                <p>Your Car:</p>
            </Card>
        </Space>
    );
}

export default Profile