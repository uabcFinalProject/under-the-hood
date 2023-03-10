import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      email
      firstName
      lastName
      phoneNumber
      vehicles {
        _id
        year
        make
        model
        color
        vin
        odometer
        notes
        reminders {
            vehicle
            user
            serviceType
            notifyStartDate
            notifyFrequency
            notifyType
            notes
        }
        serviceHistory {
            serviceItem
            serviceDate
            serviceProvider
        }
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      email
      firstName
      lastName
    }
  }
`;
//may need vehicles, reminders tied to only that user

//Are we querying the user correctly? Should service history be tied to the user or the vehicle? What does QUERY_ME need?