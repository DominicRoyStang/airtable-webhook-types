import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#barcode
export const barcodeCellSchema = z.object({
  type: z.string().nullable().optional(),
  text: z.string(),
})
export type BarcodeCell = z.infer<typeof barcodeCellSchema>

export const barcodeFieldSchema = z.object({ type: z.literal('barcode') })
export type BarcodeField = z.infer<typeof barcodeFieldSchema>
