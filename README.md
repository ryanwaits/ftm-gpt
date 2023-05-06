## GPT Fine-Tuning using Node.js

Easily fine-tune a GPT data model with Node.js.

You’ll also need an OpenAI API Key. You can get one at [https://openai.com](https://openai.com).

### Getting started

First, clone the repo and install the dependencies:

```sh
git clone https://github.com/ryanwaits/ftm-gpt.git

cd ftm-gpt

npm install # or yarn
```

Next, set the environment variable for your OpenAI API Key

```sh
export OPENAI_API_KEY="your-api-key"
```

### Running the app

First, upload the file with the example or custom data set to OpenAI:

```sh
node upload.js
```

Next, use the File ID that is logged out to create a new fine tune based on davinci by updating the `training_file` in `create-model.js`.

Finally, create the fine tune:

```sh
node create-model.js
```

### Listing your models

Once the fine tune is created, it will take some time to process. We can get the status of the fine tune, as well as the model ID, by calling the listFineTunes API method.

```sh
node list-models.js
```

### Testing it out

Now that the fine tune has processed and our. new model is ready, we can try it out.

Open create-completion.js. Here, update the fine_tuned_model value with your model name.

Next, run the script:

```sh
node create-completion.js
```
