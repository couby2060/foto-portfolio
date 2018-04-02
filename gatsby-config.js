module.exports = {
    siteMetadata: {
        title: 'Fotografien – Johannes Wilhelm',
        subtitle: `Lorem-ipsum`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: "gatsby-source-wordpress",
            options: {
                baseUrl: "fotos.couby.de",
                protocol: "http",
                hostingWPCOM: false,
                useACF: false,
                verboseOutput: true
            }
        }
    ],
};