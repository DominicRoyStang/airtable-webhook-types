import { z } from 'zod'
import { singleCollaboratorCellSchema } from './singleCollaborator.js'

// As per documentation: https://airtable.com/developers/web/api/field-model#lastmodifiedby
export const lastModifiedByCellSchema = singleCollaboratorCellSchema
export type LastModifiedByCell = z.infer<typeof lastModifiedByCellSchema>

export const lastModifiedByFieldSchema = z.object({ type: z.literal('lastModifiedBy') })
export type LastModifiedByField = z.infer<typeof lastModifiedByFieldSchema>
