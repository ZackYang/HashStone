import { gql } from "graphql-tag";
import { useQuery, useMutation } from "@apollo/client";

export const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      id
      email
      name
    }
  }
`;
