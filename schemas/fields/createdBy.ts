import { z } from 'zod'
import { collaboratorCellSchema } from './shared.js'

// As per documentation: https://airtable.com/developers/web/api/field-model#createdby
export const createdByCellSchema = collaboratorCellSchema.nullable()
export type CreatedByCell = z.infer<typeof createdByCellSchema>

export const createdByFieldSchema = z.object({ type: z.literal('createdBy') })
export type CreatedByField = z.infer<typeof createdByFieldSchema>
