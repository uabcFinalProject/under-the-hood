import React from 'react';
import { Table, Card, } from 'antd';

const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Details',
      dataIndex: 'details',
      key: 'details',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
  ];

  const data = [
    {
      key: '1',
      date: '01-01-2023',
      details: 'Vehicle Registration - 1 Year',
      amount: '$485.00',
    },
    {
      key: '2',
      date: '02-05-2023',
      details: 'New Tires',
      amount: '$425.00',
    },
  ];

  const History = () => {
    return (
      <div>
        <Card title="History">
          <Table columns={columns} dataSource={data} />
        </Card>
      </div>
    );
  };

  export default History;