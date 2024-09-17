import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#autonumber
export const autoNumberCellSchema = z.number().nullable()
export type AutoNumberCell = z.infer<typeof autoNumberCellSchema>

export const autoNumberFieldSchema = z.object({ type: z.literal('autoNumber') })
export type AutoNumberField = z.infer<typeof autoNumberFieldSchema>
