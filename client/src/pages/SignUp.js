import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { Button, Form, Input, Card } from 'antd';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations'

import Auth from '../utils/auth';

const SignUp = (props) => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
    });

    const [addUser, { error }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(event.target);
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log("form", formState);
        try {
            const { data } = await addUser({
                variables: { ...formState },
            });
            // console.log("data", data)
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        // <main className="flex-row justify-center mb-4">
        //     <div className="col-12 col-lg-10">
        //         <div className="card">
        //             <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
        //             <div className="card-body">
        <>
            {/* {data ? (
                            <p>
                                Success! You may now head{' '}
                                <Link to="/profile">back to the homepage.</Link>
                            </p>
                        ) : ( */}
            <Card style={{ background: '#CBDCCE', height: '100vh'}}>
            <Form
                name='signUp'>
                <Form.Item
                    label='First Name'
                    rules={[
                        { required: true, message: 'Please input your First Name!' }
                    ]}
                >
                    <Input 
                        name={'firstName'}
                        type='text'
                        value={formState.firstName}
                        onChange={handleChange} />
                </Form.Item>

                <Form.Item
                    label='Last Name'
                    rules={[
                        { required: true, message: 'Please input your Last Name!' }
                    ]}
                >
                    <Input 
                        name={'lastName'}
                        type='text'
                        value={formState.lastName}
                        onChange={handleChange} />
                </Form.Item>

                <Form.Item
                    label='Phone Number'
                    rules={[
                        { required: true, message: 'Please input your Phone Number!' }
                    ]}
                >
                    <Input 
                        name={'phoneNumber'}
                        type='text'
                        value={formState.phoneNumber}
                        onChange={handleChange} />
                </Form.Item>

                <Form.Item
                    label='Email'
                    rules={[
                        { required: true, message: 'Please input your email!' }
                    ]}
                >
                    <Input 
                        name={'email'}
                        type='email'
                        value={formState.email}
                        onChange={handleChange} />
                </Form.Item>

                <Form.Item
                    label='Password'
                    onChange={handleChange}
                    rules={[
                        { required: true, message: 'Please input a password!' }
                    ]}
                >
                    <Input.Password 
                        name={'password'}
                        type='password'
                        value={formState.password}
                        onChange={handleChange} />
                </Form.Item>

                <Form.Item>
                    <Button
                        onClick={handleFormSubmit} style={{ cursor: 'pointer' }} htmlType='submit'>Submit
                    </Button>
                </Form.Item>
                {error && <div>{error.message}</div>}
            </Form>
            </Card>
        </>
    );
};
export default SignUp;