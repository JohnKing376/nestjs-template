import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const CreateUserInputSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateUserInputSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
}).partial();

export const DeleteUserOutputSchema = z.object({
  deleted: z.boolean(),
});

export type User = z.infer<typeof UserSchema>;
