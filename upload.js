import { openai } from './api.js'
import fs from 'fs'

async function upload() {
  try {
    const response = await openai.createFile(
      fs.createReadStream('./data.jsonl'),
      'fine-tune'
    );
    console.log({ response })
    fs.writeFileSync('./file-id.js', `export const fileId = "${response.data.id}"`)
  } catch (err) {
    console.error({ err })
  }
}

upload()
