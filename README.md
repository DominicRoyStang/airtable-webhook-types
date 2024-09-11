# Airable Webhook Types

[Typescript](https://www.typescriptlang.org/) and [Zod](https://zod.dev/) types for Airtable webhooks

## About

The goal of this library is to provide all types used by Airtable webhooks, as detailed in the Airtable developer docs.

**Relevant Airtable Docs**

- https://airtable.com/developers/web/api/webhooks-overview (everything listed under the _webhooks_ sidebar section)
- https://airtable.com/developers/web/api/model/webhooks-action (everything webhook-related listed under the _models_ sidebar section)

## Installation

If want to use the Zod schemas and the Typescript types
```
npm install airtable-webhook-types
```

If you only want to use the Typescript types
```
npm install --save-dev airtable-webhook-types
```

## Example Usage

### Using zod schemas
```typescript
import { listWebhookPayloadsResponseSchema } from 'airtable-webhook-types'

const response = await fetch(`https://api.airtable.com/v0/bases/${params.baseId}/webhooks`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
    'Content-Type': 'application/json',
  },
})

// responseData will have type ListWebhookPayloadsResponse
const responseData = listWebhookPayloadsResponseSchema.parse(await response.json())
```

### Using typescript types
```typescript
import { CreateWebhookRequestBody, CreateWebhookPathParams, CreateWebhookResponse } from 'airtable-webhook-types'

const params: CreateWebhookPathParams = {
  baseId: 'abc123'
}

const body: CreateWebhookRequestBody = {
  notificationUrl: 'https://example.com',
  specification: {
    options: {
      filters: {
        dataTypes: ['tableData']
      },
      includes: {
        includeCellValuesInFieldIds: 'all',
        includePreviousCellValues: true,
      }
    }
  }
}

const response = await fetch(`https://api.airtable.com/v0/bases/${params.baseId}/webhooks`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
})

const responseData: CreateWebhookResponse = await response.json()
```

## Contributing

Create feature requests and bug reports by [opening an issue](https://github.com/DominicRoyStang/airtable-webhook-types/issues/new).

Vote on issues by reacting with a thumbs up to the issues that affect you. Reaction counts are used to prioritize tasks.

Pull requests are welcome!
