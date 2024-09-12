import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#collaborator
export const singleCollaboratorCellSchema = z.object({
  id: z.string(),
  email: z.string().email().optional(),
  name: z.string().optional(),
  permissionLevel: z.enum(['none', 'read', 'comment', 'edit', 'create']).optional(),
  profilePicUrl: z.string().url().optional(),
})
export type CollaboratorCell = z.infer<typeof singleCollaboratorCellSchema>

export const singleCollaboratorFieldSchema = z.object({
  type: z.literal('singleCollaborator'),
  options: z.object({}).optional(),
})
export type singleCollaboratorField = z.infer<typeof singleCollaboratorFieldSchema>
