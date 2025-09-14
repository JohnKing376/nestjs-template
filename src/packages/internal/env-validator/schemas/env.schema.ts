import { z } from "zod";

export const EnvSchema = z.object({
  NODE_ENV: z.enum(["dev", "test", "production"]).default("production"),
  PORT: z.coerce.number().int().positive().default(3000),
  DATABASE_URL: z.string().min(1, "DATABASE_URL IS required"),
});


export type Env = z.infer<typeof EnvSchema>