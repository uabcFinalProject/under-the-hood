import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { Button, Form, Input, Card } from 'antd';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations'

import Auth from '../utils/auth';

export default function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleLogin = (event) => {
    const { name, value } = event.target;
    console.log('handleLogin', event.target)
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log('data', data)
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    // <main className="flex-row justify-center mb-4">
    //   <div className="col-12 col-lg-10">
    //     <div className="card">
    //       <h4 className="card-header bg-dark text-light p-2">Login</h4>
    //       <div className="card-body">
    <>
      {/* {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : ( */}
      <Card style={{ background: '#CBDCCE', height: '100vh'}}>
      <Form
        name='login'>
        <Form.Item
          label='Email'
          rules={[
            { required: true, message: 'Please input an Email!' }
          ]}
        >
          <Input
            name={'email'}
            type='email'
            placeholder='User Email'
            value={formState.email}
            onChange={handleLogin} />
        </Form.Item>

        <Form.Item
          label='Password'
          rules={[
            { required: true, message: 'Please input an Email!' }
          ]}
        >
          <Input.Password
            name='password'
            type='password'
            placeholder='********'
            value={formState.password}
            onChange={handleLogin} />
        </Form.Item>

        <Form.Item>
          <Button
            onClick={handleFormSubmit}
            style={{ cursor: 'pointer' }}
            htmlType='submit'
          >Submit
          </Button>
        </Form.Item>
        {error && <div>{error.message}</div>}
      </Form>
      </Card>
    </>
  );
};