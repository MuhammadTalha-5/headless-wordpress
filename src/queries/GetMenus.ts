import {gql} from 'graphql-tag';

export const GET_MENUS = gql `
    query GetMenus {
        menu(id: "main menu", idType: NAME) {
            id
            databaseId
            name
            slug
            menuItems {
                nodes {
                    id
                    databaseId
                    title
                    url 
                    description
                    label
                    target
                    parentId
                }
            }
        }
    }
`;