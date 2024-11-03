import { gql } from 'apollo-server';

export const ApiFiltersTypedefs = gql`
  input ApiFilterInput {
    _order: String
    _sort: String
    _start: Int
    _limit: Int
  }
`;
