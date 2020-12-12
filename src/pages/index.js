import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';


export default () => {
  const data = usePosts();

  return(
    <Layout>
      <h1>Home</h1>
      <p>Hello Minnesota!</p>
      <Link to="/about/">Learn about me &rarr;</Link>
      <h2>Read my Blog!</h2>
      {data.map((post, index)=>(<PostPreview post={post}/>))}
    </Layout>
  )
}
