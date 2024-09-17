import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#phone
export const phoneNumberCellSchema = z.string().nullable()
export type PhoneNumberCell = z.infer<typeof phoneNumberCellSchema>

export const phoneNumberFieldSchema = z.object({ type: z.literal('phoneNumber') })
export type PhoneNumberField = z.infer<typeof phoneNumberFieldSchema>
