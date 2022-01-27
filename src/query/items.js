import { gql } from "@apollo/client";
import { client } from "../index";

// export const GET_ALL_ITEMS_ALL = gql`
//   query getAllItems2 {
//     categories {
//       name
//       products {
//         id
//         name
//         inStock
//         gallery
//         description
//         category
//         attributes {
//           id
//           name
//           type
//           items {
//             displayValue
//             value
//             id
//           }
//         }
//         prices {
//           currency {
//             label
//             symbol
//           }
//           amount
//         }
//         brand
//       }
//     }
//   }
// `;
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
