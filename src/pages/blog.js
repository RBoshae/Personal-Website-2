import React from "react";
import { rhythm } from "../utils/typography";
import Link from "gatsby-link";

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>
        Blog
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
            <h3 style={{marginBottom: '0'}}>
              {node.frontmatter.title}{" "}
              <span>— {node.frontmatter.date}</span>
            </h3>
          </Link>
            <p>
              {node.excerpt}
            </p>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
