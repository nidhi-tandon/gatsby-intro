import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const query = graphql`
  query($slug: String!) {
     mdx(frontmatter: {slug: {eq: $slug}}){
      frontmatter{
        title
        author
      }
      body
  }
}
`;
const PostTemplate = ({data: {mdx: post}}) => {
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <pre>Posted by {post.frontmatter.author}</pre>
      <MDXRenderer>{post.body}</MDXRenderer>
      <ReadLink to="/"> &larr; back to all posts </ReadLink>
    </Layout>
  );
};


export default PostTemplate;

