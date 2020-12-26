import {graphql, useStaticQuery} from "gatsby";

const useInstagram = () => {
  const data = useStaticQuery(graphql`
      query {
          allInstaNode(limit: 12) {
              nodes {
                  id
                  caption
                  username
                  localFile {
                      childImageSharp {
                          fluid(maxWidth: 120, maxHeight: 120) {
                              ...GatsbyImageSharpFluid_withWebp
                          }
                      }
                  }
              }
          }
      }
  `)
  return data.allInstaNode.nodes.map((item)=>({
    id: item.id,
    username: item.username,
    caption: item.caption,
    ...item.localFile.childImageSharp
  })
  )
}

export default useInstagram;