import { openai } from './api.js'

async function deleteFineTune() {
  try {
    const response = await openai.deleteModel('{name-of-model}')
    console.log({ response })
  } catch (err) {
    console.log('err: ', err)
  }
}

deleteFineTune()