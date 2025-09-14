import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','email','firstName','lastName','createdAt','updatedAt']);

export default UserScalarFieldEnumSchema;
