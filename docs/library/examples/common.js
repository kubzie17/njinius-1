/**
 * Common snippets shared across all examples
 */

export const importJs = `
import { createClient } from '@njinius/njinius-js'

const njinius = createClient('https://world.njinius.co', 'public-key-bOYapLADERfE')
`

export const errorJs = `
  } catch (error) {
      console.log('Error: ', error)
  }
}
`.trim()

