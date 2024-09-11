import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/delete-a-webhook
export const deleteWebhookPathParamsSchema = z.object({
  baseId: z.string(),
  webhookId: z.string(),
})
export type DeleteWebhookPathParams = z.infer<typeof deleteWebhookPathParamsSchema>
