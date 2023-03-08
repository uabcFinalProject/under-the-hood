import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $phoneNumber: Int, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber, email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;
