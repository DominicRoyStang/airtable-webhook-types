import { z } from 'zod'
import { collaboratorCellSchema } from './shared.js'

// As per documentation: https://airtable.com/developers/web/api/field-model#lastmodifiedby
export const lastModifiedByCellSchema = collaboratorCellSchema.nullable()
export type LastModifiedByCell = z.infer<typeof lastModifiedByCellSchema>

export const lastModifiedByFieldSchema = z.object({ type: z.literal('lastModifiedBy') })
export type LastModifiedByField = z.infer<typeof lastModifiedByFieldSchema>
