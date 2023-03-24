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
mutation addReminder($vehicleId: ID!, $user: ID!, $serviceType: String!, $notifyStartDate: String!, $notifyFrequency: Int!, $notifyType: String!, $notes: String) {
  addReminder(vehicleId: $vehicleId, user: $user, serviceType: $serviceType, notifyStartDate: $notifyStartDate, notifyFrequency: $notifyFrequency, notifyType: $notifyType, notes: $notes) {
    vehicle {
      _id
      reminders {
        _id
        user { _id }
        serviceType
        notifyStartDate
        notifyFrequency
        notifyType
        notes
      }
    }
  }
}`;

export const ADD_VEHICLE = gql`
mutation addVehicle($vin: String!, $year: Int!, $make: String!, $model: String!, $color: String, $odometer: Int, $notes: String) {
  addVehicle(vin: $vin, year: $year, make: $make, model: $model, color: $color, odometer: $odometer, notes: $notes) {
    _id
    vehicles {
      _id
      vin
      year
      make
      model
      color
      odometer
      notes
    }
  }
}
`


