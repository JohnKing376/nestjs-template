import "dotenv/config";
import path from "node:path";
import { PrismaConfig } from "prisma/config";

export default {
  schema: path.join("prisma", "schemas"),
  migrations: {
    path: path.join("prisma", "migrations"),
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
} satisfies PrismaConfig;
