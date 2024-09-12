import { z } from 'zod'
import { singleCollaboratorCellSchema } from './singleCollaborator.js'

// As per documentation: https://airtable.com/developers/web/api/field-model#multicollaborator
export const multipleCollaboratorsCellSchema = singleCollaboratorCellSchema.array()
export type MultipleCollaboratorsCell = z.infer<typeof multipleCollaboratorsCellSchema>

export const multipleCollaboratorsFieldSchema = z.object({
  type: z.literal('multipleCollaborators'),
  options: z.object({}),
})
export type MultipleCollaboratorsField = z.infer<typeof multipleCollaboratorsFieldSchema>
