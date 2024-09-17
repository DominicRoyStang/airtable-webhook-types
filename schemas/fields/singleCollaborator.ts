import { z } from 'zod'
import { collaboratorCellSchema } from './shared.js'

// As per documentation: https://airtable.com/developers/web/api/field-model#collaborator
export const singleCollaboratorCellSchema = collaboratorCellSchema.nullable()
export type CollaboratorCell = z.infer<typeof singleCollaboratorCellSchema>

export const singleCollaboratorFieldSchema = z.object({
  type: z.literal('singleCollaborator'),
  options: z.object({}).optional(),
})
export type singleCollaboratorField = z.infer<typeof singleCollaboratorFieldSchema>
