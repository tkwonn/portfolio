/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['img.shields.io'],
    },
  }
  
  module.exports = (phase, { defaultConfig }) => {
    const isLintDisabled = process.argv.includes('--no-lint');
  
    if (isLintDisabled) {
      console.log("Linting is disabled for this build");
    } else {
      console.log("Linting is enabled for this build");
    }
  
    return {
      ...nextConfig,
      eslint: {
        ignoreDuringBuilds: isLintDisabled,
      },
    }
  }