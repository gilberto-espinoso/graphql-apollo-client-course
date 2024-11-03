import { gql } from 'apollo-server';

export const ApiFiltersTypedefs = gql`
  input ApiFilterInput {
    _sort: String
    _order: OrderFilter
    _start: Int
    _limit: Int
  }

  enum OrderFilter {
    ASC
    DESC
  }
`;
