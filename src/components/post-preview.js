import React from 'react';
import {css} from '@emotion/core'
import {Link} from 'gatsby'
import ReadLink from './read-link';

const PostPreview = ({post}) =>{
  return(
    <article>
      <h3>
        {post.title}
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>Read this post!</ReadLink>
    </article>
  )
}


export default PostPreview;