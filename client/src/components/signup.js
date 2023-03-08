// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

// const Signup = () => {
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [addUser, { error, data }] = useMutation(ADD_USER);

//   // update state based on form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   // submit form
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(formState);

//     try {
//       const { data } = await addUser({
//         variables: { ...formState },
//       });

//       Auth.login(data.addUser.token);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <main className="flex-row justify-center mb-4">
//       <div className="col-12 col-lg-10">
//         <div className="card">
//           <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
//           <div className="card-body">
//             {data ? (
//               <p>
//                 Success! You may now head{' '}
//                 <Link to="/">back to the homepage.</Link>
//               </p>
//             ) : (
//               <form onSubmit={handleFormSubmit}>
//                 <input
//                   className="form-input"
//                   placeholder="Your username"
//                   name="name"
//                   type="text"
//                   value={formState.name}
//                   onChange={handleChange}
//                 />
//                 <input
//                   className="form-input"
//                   placeholder="Your email"
//                   name="email"
//                   type="email"
//                   value={formState.email}
//                   onChange={handleChange}
//                 />
//                 <input
//                   className="form-input"
//                   placeholder="******"
//                   name="password"
//                   type="password"
//                   value={formState.password}
//                   onChange={handleChange}
//                 />
//                 <button
//                   className="btn btn-block btn-info"
//                   style={{ cursor: 'pointer' }}
//                   type="submit"
//                 >
//                   Submit
//                 </button>
//               </form>
//             )}

//             {error && (
//               <div className="my-3 p-3 bg-danger text-white">
//                 {error.message}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Signup;
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations'

import Auth from '../utils/auth';

const SignUp = () => {
   const [signUp, setSignUp] = useState({ firstName: '', lastName: '', phoneNumber:'', email: '', password: ''});
   const[addUser, { error, data }] = useMutation(ADD_USER);

     const handleChange = (event) => {
       const { name, value } = event.target;

       setSignUp({
        ...signUp,
        [name]: value,
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
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <Form>
                <Form.Item
                    className="form-input"
                    placeholder="Your First Name"
                    name="firstName"
                    label="FirstName"
                    value={signUp.firstName}
                    onChange={handleChange}
                  >
                    <Input/>
                  </Form.Item>
                  <Form.Item
                    className="form-input"
                    placeholder="Your Last Name"
                    name="lastName"
                    label="LastName"
                    value={signUp.lastName}
                    onChange={handleChange}
                  >
                    <Input/>
                  </Form.Item>
                  <Form.Item
                    className="form-input"
                    placeholder="Your Phone Number"
                    name="phoneNumber"
                    label="PhoneNumber"
                    value={signUp.phoneNumber}
                    onChange={handleChange}
                  >
                    <Input/>
                  </Form.Item>
                  <Form.Item
                    className="form-input"
                    placeholder="Your Email Adress"
                    name="email"
                    label="Email"
                    value={signUp.email}
                    onChange={handleChange}
                  >
                    <Input/>
                  </Form.Item>
                  <Form.Item
                    className="form-input"
                    placeholder="******"
                    name="password"
                    label="Password"
                    value={signUp.password}
                    onChange={handleChange}
                  >
                    <Input.Password/>
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