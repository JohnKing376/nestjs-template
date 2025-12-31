import { registerAs } from "@nestjs/config";

export default registerAs("bullmq", () => ({
  REDIS_URL: process.env.REDIS_URL,
}));
