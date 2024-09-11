import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/enable-disable-webhook-notifications
export const toggleWebhookNotificationsPathParamsSchema = z.object({
  baseId: z.string(),
  webhookId: z.string(),
})
export type ToggleWebhookNotificationsPathParams = z.infer<typeof toggleWebhookNotificationsPathParamsSchema>

export const toggleWebhookNotificationsRequestBodySchema = z.object({ enable: z.boolean() })
export type ToggleWebhookNotificationsRequestBody = z.infer<typeof toggleWebhookNotificationsRequestBodySchema>
