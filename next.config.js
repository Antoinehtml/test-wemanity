/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    MONGO_URI: "mongodb+srv://antoine:VrutRxioV1JsltD5@cluster0.ikis7.mongodb.net/?retryWrites=true&w=majority"
  }
}

