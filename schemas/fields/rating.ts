import { z } from 'zod'
import { brightColorSchema } from './colors.js'

// As per documentation: https://airtable.com/developers/web/api/field-model#rating
export const ratingCellSchema = z.number()
export type RatingCell = z.infer<typeof ratingCellSchema>

export const ratingFieldSchema = z.object({
  type: z.literal('rating'),
  options: z.object({
    color: brightColorSchema,
    icon: z.enum(['star', 'heart', 'thumbsUp', 'flag', 'dot']),
    max: z.number(),
  }),
})
export type RatingField = z.infer<typeof ratingFieldSchema>
