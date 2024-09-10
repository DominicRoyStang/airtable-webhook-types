import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/model/webhooks-specification
export const webhookSpecificationSchema = z.object({
  filters: z.object({
    recordChangeScope: z.string().optional(),
    dataTypes: z.enum(['tableData', 'tableFields', 'tableMetadata']).array(),
    changeTypes: z.enum(['add', 'remove', 'update']).array().optional(),
    fromSources: z.enum([
      'client',
      'publicApi',
      'formSubmission',
      'formPageSubmission',
      'automation',
      'system',
      'sync',
      'anonymousUser',
      'unknown',
    ]).array().optional(),
    sourceOptions: z.object({
      formPageSubmission: z.object({ pageId: z.string() }).optional(),
      formSubmission: z.object({ viewId: z.string() }).optional(),
    }).optional(),
    watchDataInFieldIds: z.string().array().optional(),
    watchSchemasOfFieldIds: z.string().array().optional(),
  }),
  includes: z.object({
    includeCellValuesInFieldIds: z.union([z.string().array(), z.literal('all')]).optional(),
    includePreviousCellValues: z.boolean().optional(),
    includePreviousFieldDefinitions: z.boolean().optional(),
  }).optional(),
})
export type WebhookSpecification = z.infer<typeof webhookSpecificationSchema>
