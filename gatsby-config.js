module.exports = {
    siteMetadata: {
        title: 'Wordpress Gatsby',
        subtitle: `Fetch Data From WP Install`,
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