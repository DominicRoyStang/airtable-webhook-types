import { z } from 'zod'
import { webhookPayloadSchema } from './payload.js'

// As per documentation: https://airtable.com/developers/web/api/list-webhook-payloads
export const listWebhookPayloadsPathParamsSchema = z.object({
  baseId: z.string(),
  webhookId: z.string(),
})
export type ListWebhookPayloadsPathParams = z.infer<typeof listWebhookPayloadsPathParamsSchema>

export const listWebhookPayloadsQueryParamsSchema = z.object({
  cursor: z.number().optional(),
  limit: z.number().optional(),
})
export type ListWebhookPayloadsQueryParams = z.infer<typeof listWebhookPayloadsQueryParamsSchema>

export const listWebhookPayloadsResponseSchema = z.object({
  payloads: webhookPayloadSchema.array(),
  cursor: z.number(),
  mightHaveMore: z.boolean(),
})
export type ListWebhookPayloadsResponse = z.infer<typeof listWebhookPayloadsResponseSchema>
