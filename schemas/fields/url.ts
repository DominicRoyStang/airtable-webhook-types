import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#urltext
export const urlCellSchema = z.string().url()
export type UrlCell = z.infer<typeof urlCellSchema>

export const urlFieldSchema = z.object({ type: z.literal('url') })
export type UrlField = z.infer<typeof urlFieldSchema>
