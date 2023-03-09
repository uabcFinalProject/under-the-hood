import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $phoneNumber: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
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
export const ADD_REMINDER = gql`
mutation addReminder($vehicleId: ID!, $user: ID!, $serviceType: ID!, $notifyStartDate: String!, $notifyFrequency: Int!, $notifyType: String!, $notes: String) {
  addReminder(vehicle: $vehicleId, user: $user, serviceType: $serviceType, notifyStartDate: $notifyStartDate, notifyFrequency: $notifyFrequency, notifyType: $notifyType, notes: $notes) {
    vehicle {
      _id
      reminder {
        _id
        user
        serviceType
        notifyStartDate
        notifyFrequency
        notifyType
        notes
      }
    }
  }
}`;


