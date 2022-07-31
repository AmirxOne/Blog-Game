import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      id
      slug
      title
      coverPhoto {
        url
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query getauthorinfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      id
      description {
        html
      }
      post {
        ... on Post {
          title
          slug
          coverPhoto {
            url
          }
        }
      }
    }
  }
`;

const GET_POST_INFO = gql`
  query getpostinfo($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        name
        field
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        url
      }
      title
      slug
      id
    }
  }
`;

const GET_POST_COMMENT = gql`
  query getpostcomment($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;

export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO, GET_POST_INFO, GET_POST_COMMENT };
