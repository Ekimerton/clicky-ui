/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(wav|mp3)$/,
            use: {
                loader: "file-loader",
                options: {
                    publicPath: "/_next/static/media",
                    outputPath: "static/media",
                    name: "[name].[hash].[ext]",
                    esModule: false,
                },
            },
        });
        return config;
    },
};

export default nextConfig;
