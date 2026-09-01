/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    // limit of 25 deviceSizes values
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // limit of 25 imageSizes values
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // limit of 50 domains values
    domains: [
      "assets.pulseplaydigital.com", "globe-trotte.fra1.digitaloceanspaces.com", "oaidalleapiprodscus.blob.core.windows.net", "localhost", "res.cloudinary.com", "104.248.201.175:4000", "pulseplaydigital.sgp1.digitaloceanspaces.com" , "pulseplaydigital.sgp1.cdn.digitaloceanspaces.com"
    ],
    // path prefix for Image Optimization API, useful with `loader`

    // loader can be 'default', 'imgix', 'cloudinary', 'akamai', or 'custom'
    loader: 'default',
    // disable static imports for image files
    disableStaticImages: false,
    // minimumCacheTTL is in seconds, must be integer 0 or more
    minimumCacheTTL: 60,
    // ordered list of acceptable optimized image formats (mime types)
    // enable dangerous use of SVG images
    dangerouslyAllowSVG: false,
    // set the Content-Security-Policy header
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

}