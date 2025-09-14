import { EnvSchema } from "./schemas/env.schema";

export function envValidate(schema: unknown) {
  const validData = EnvSchema.safeParse(schema);

  if (!validData.success) {
    const formatedErrors = validData.error.issues.map((err) => ({
      field: err.path.join("."),
      message: err.message,
    }));

    const message = formatedErrors
      .map((d) => `${d.field}: ${d.message}`)
      .join("\n");
    throw new Error(`Invalid environment variables:\n${message}`);
  }

  return validData.data;
}
