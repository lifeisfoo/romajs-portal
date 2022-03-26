/* eslint-disable @typescript-eslint/no-unused-vars */
const { env } = require("process");
const pino = require("pino");

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
});

module.exports = async (phase, { defaultConfig }) => {
  if (env.CACHE_ENABLED === "0") {
    logger.warn("CACHE DISABLED");
  } else {
    logger.info("CACHE ENABLED");
  }
  const nextConfig = {
    /* config options here */
    /** see on https://github.com/vercel/next.js/blob/canary/packages/next/server/config-shared.ts#L68 */
  };
  return nextConfig;
};
