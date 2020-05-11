const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const createPageFromContent = (content, template) => {
    content.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: template,
        context: {
          slug: node.fields.slug
        },
      })
    });
  }

  const getContent = async (type) => {
    console.log(`Creating ${type} pages...`)
    const template = path.resolve(`src/templates/${type}Template.js`)

    const content = await graphql(`
      {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "\/${type}/"} }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `);

    if (content.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }

    console.log(`SUCCESS: ${type}`)
    return [content, template];
  }

  const [newsletters, newslettersTemplate] = await getContent('newsletters');

  createPageFromContent(newsletters, newslettersTemplate);
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

