import { gql } from "graphql-tag";

// Get posts by slug
export const GET_POST_BY_SLUG = gql `
    query GetPostBySlug($slug: ID!){
        post(id: $slug, idType: SLUG){
            title
            content(format: RENDERED)
            slug
            featuredImage {
                node {
                    sourceUrl
                    altText
                    mediaDetails{
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
            
            date

            
        }
    }
`

// get latest posts
export const GET_LATEST_POSTS = gql `
    query GetLatestPosts {
        posts (first: 5, where: {orderby: {field: DATE, order: DESC}}){
            nodes {
                title
                slug
                date
                author {
                    node {
                        name
                        avatar {
                            url
                        }
                    }
                }
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
            }
        }
    }
`