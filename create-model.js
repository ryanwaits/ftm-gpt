import { openai } from './api.js'
import { fileId } from './file-id.js'

async function createFineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: fileId,
      model: 'davinci'
    })
    console.log({ response })
  } catch (err) {
    console.error({ err })
  }
}

createFineTune()
