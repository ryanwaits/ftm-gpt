import { openai } from './api.js'

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: 'davinci',
      prompt: '{Ask your domain specific question here}',
      max_tokens: 200
    })
    if (response.data) {
      console.log({ response })
    }
  } catch (err) {
    console.error({ err })
  }
}

createCompletion()
