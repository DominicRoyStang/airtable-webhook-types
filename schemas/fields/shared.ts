import { z } from 'zod'

export const collaboratorCellSchema = z.object({
  id: z.string(),
  email: z.string().email().optional(),
  name: z.string().optional(),
  permissionLevel: z.enum(['none', 'read', 'comment', 'edit', 'create']).optional(),
  profilePicUrl: z.string().url().optional(),
})

export const lightColorSchema = z.enum([
  'blueLight2',
  'cyanLight2',
  'tealLight2',
  'greenLight2',
  'yellowLight2',
  'orangeLight2',
  'redLight2',
  'pinkLight2',
  'purpleLight2',
  'grayLight2',
  'blueLight1',
  'cyanLight1',
  'tealLight1',
  'greenLight1',
  'yellowLight1',
  'orangeLight1',
  'redLight1',
  'pinkLight1',
  'purpleLight1',
  'grayLight1',
])

export const brightColorSchema = z.enum([
  'blueBright',
  'cyanBright',
  'tealBright',
  'greenBright',
  'yellowBright',
  'orangeBright',
  'redBright',
  'pinkBright',
  'purpleBright',
  'grayBright',
])

export const darkColorSchema = z.enum([
  'blueDark1',
  'cyanDark1',
  'tealDark1',
  'greenDark1',
  'yellowDark1',
  'orangeDark1',
  'redDark1',
  'pinkDark1',
  'purpleDark1',
  'grayDark1',
])

export const colorSchema = z.enum([
  ...lightColorSchema.options,
  ...brightColorSchema.options,
  ...darkColorSchema.options,
])
