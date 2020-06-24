exports.onCreateNode = ({ node }) => {
    if (node.internal.type === 'MarkdownRemark') {
        console.log(JSON.stringify(node, null, 4))
    }
};