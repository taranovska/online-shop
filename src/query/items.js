import { gql } from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
  query getAllCategories {
    categories {
      name
    }
  }
`;

export const GET_ALL_ITEMS = gql`
  query getAllItems {
    categories {
      name
      products {
        id
        name

        gallery
        description
        category
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        inStock
        attributes {
          type
          name
          id
          items {
            displayValue
            value
            id
          }
        }
      }
    }
  }
`;

export const GET_ALL_CURRENCIES = gql`
  query getAllCurrencies {
    currencies {
      label
      symbol
    }
  }
`;
