const path = require('path');
const loggingErrorHandler = require('./common/logging-error-handler');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  
  // Build output
  output: 'standalone',
  
  // Image optimization
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  
  // ESLint and TypeScript
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Simplified logging configuration
  logging: {
    fetches: {
      fullUrl: true,
    },
    level: process.env.NODE_ENV === 'production' ? 'error' : 'info',
  },
  
  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Add path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
      './common/logging-error-handler': path.resolve(__dirname, './common/logging-error-handler'),
    }
    
    // Production optimizations
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      }
    }
    
    // Enable filesystem caching
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
      cacheDirectory: path.resolve(__dirname, '.next/cache/webpack'),
    }
    
    // Simplified infrastructure logging
    config.infrastructureLogging = {
      level: process.env.NODE_ENV === 'production' ? 'error' : 'info',
      colors: true,
    }
    
    return config
  },
  
  // Experimental features (only stable ones)
  experimental: {
    // Enable modern optimizations
    optimizeCss: true,
    scrollRestoration: true,
  },
  
  // Configure build cache
  onDemandEntries: {
    maxInactiveAge: 60 * 1000, // 1 minute
    pagesBufferLength: 5,
  },
}

// Handle user config if exists
try {
  const userConfig = require('./user-next.config')
  if (userConfig) {
    Object.assign(nextConfig, userConfig)
  }
} catch (e) {
  // Ignore if user config doesn't exist
}

module.exports = nextConfig 