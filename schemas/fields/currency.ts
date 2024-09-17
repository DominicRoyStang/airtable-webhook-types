import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#currencynumber
export const currencyCellSchema = z.number().nullable()
export type CurrencyCell = z.infer<typeof currencyCellSchema>

export const currencyFieldSchema = z.object({
  type: z.literal('currency'),
  options: z.object({
    precision: z.number(),
    symbol: z.string(),
  }),
})
export type CurrencyField = z.infer<typeof currencyFieldSchema>
