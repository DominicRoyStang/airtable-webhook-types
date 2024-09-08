import { z } from 'zod'

export const airtableWebhookNotificationSchema = z.object({
  base: z.object({ id: z.string() }),
  webhook: z.object({ id: z.string() }),
  timestamp: z.string().datetime(),
})
export type AirtableWebhookNotification = z.infer<typeof airtableWebhookNotificationSchema>
