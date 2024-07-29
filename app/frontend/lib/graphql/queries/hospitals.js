import { gql } from "graphql-tag";
import { useQuery, useMutation } from "@apollo/client";

export const HOSPITALS = gql`
  query hospitals {
    name
    phatmacies {
      name
    }
  }
`;
