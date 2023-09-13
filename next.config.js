module.exports = {
<<<<<<< Updated upstream
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/WBL-WebApp/' : undefined,
}
=======
    images: {
        loader: 'imgix',
        path: '/',
    },
    output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
    assetPrefix: process.env.NODE_ENV === 'production' ? '/WBL-WebApp/' : undefined,
}
>>>>>>> Stashed changes
