import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations'

import Auth from '../utils/auth';

const SignUp = () => {
    const [signUp, setSignUp] = useState({ firstName: '', lastName: '', phoneNumber: '', email: '', password: '' });
    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { id, value } = event.target;
        console.log(id);
        setSignUp({
            ...signUp,
            [id]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(signUp);
        try {
            const { data } = await addUser({
                variables: { ...signUp },
            });
            console.log("data", data)
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-lg-10">
                <div className="card">
                    <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
                    <div className="card-body">
                        {data ? (
                            <p>
                                Success! You may now head{" "}
                                <Link to="/profile">back to the homepage.</Link>
                            </p>
                        ) : (
                            <Form>
                                <Form.Item
                                    className="form-input"
                                    placeholder="Your First Name"
                                    name="firstName"
                                    label="First Name"
                                    value={signUp.firstName}
                                    onChange={(event) => handleChange(event)}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    className="form-input"
                                    placeholder="Your Last Name"
                                    name="lastName"
                                    label="Last Name"
                                    value={signUp.lastName}
                                    onChange={handleChange}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    className="form-input"
                                    placeholder="Your Phone Number"
                                    name="phoneNumber"
                                    label="Phone Number"
                                    value={signUp.phoneNumber}
                                    onChange={handleChange}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    className="form-input"
                                    placeholder="Your Email Adress"
                                    name="email"
                                    label="Email"
                                    value={signUp.email}
                                    onChange={handleChange}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    className="form-input"
                                    placeholder="******"
                                    name="password"
                                    label="Password"
                                    value={signUp.password}
                                    onChange={handleChange}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        onClick={handleFormSubmit} style={{ cursor: 'pointer' }} type="submit">Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        )}

                        {error && (
                            <div className="my-3 p-3 bg-danger text-white">
                                {error.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};
export default SignUp;