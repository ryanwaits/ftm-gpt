import { openai } from './api.js'

async function listFineTunes() {
  try {
    const response = await openai.listFineTunes()
    console.log({ response })
  } catch (err) {
    console.error({ err })
  }
}

listFineTunes()