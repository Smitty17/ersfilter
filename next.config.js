const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
require('dotenv').config()

module.exports = (phase, { defaultConfig }) => {
  return {
    env: {
      BASE_URL: process.env.BASE_URL,
      ENVIRONMENT: process.env.ENVIRONMENT
    },
    api: {
      bodyParser: {
        sizeLimit: '1mb',
      }
    },
    assetPrefix: ".",
  }
}