import { gql } from "graphql-tag";

export const GET_POSTS_QUERY = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        content
        slug
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;
