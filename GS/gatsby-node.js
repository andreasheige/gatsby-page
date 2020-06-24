const path = require('path');

exports.onCreateNode = ({ node }) => {
    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        console.log(slug)
    }
};