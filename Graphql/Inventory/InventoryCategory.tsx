import { gql } from "@apollo/client";

export const CREATE_CATEGORY = gql/* GraphQL */`
mutation CREATECATEGORY($myuserId:String!,$mycategory:String!,$mydescription:String!){
    createCategory(userId:$myuserId,category:$mycategory,description:$mydescription){
        id
        userId
        category
        description
  }
}`

export const GET_CATEGORIES = gql/* GraphQL */`
query GETCATEGORIES($myuserId:String!){
    categories(userId:$myuserId){
        id
        userId
        category
        description
    }
}

`