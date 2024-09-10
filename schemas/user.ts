import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/model/webhooks-user
export const webhookUserSchema = z.object({
  id: z.string(),
  email: z.string(),
  permissionLevel: z.enum(['none', 'read', 'comment', 'edit', 'create']),
  name: z.string().optional(),
  profilePicUrl: z.string().url().optional(),
})
export type WebhookUser = z.infer<typeof webhookUserSchema>
