Buddy AI is a powerful chatbot designed for resolving technical queries, helping users troubleshoot errors and gain insights into your clusters. Buddy AI gives you the ability to configure models of two major LLMs providers, Gemini and OpenAI by providing their respective API keys which lets users interact with them via KubeBuddy’s interface.

In this blog we will go through the steps involved in setting up Gemini using their API key.

### Get your Gemini API key

Go over to <a href="https://www.aistudio.google.com/" target="_blank">Google AI Studio</a> (make sure you are logged in) and click on ‘Get API Key’ this will take you to over to Google AI Studio’s dashboard. Now click on ‘Create API Key’ and select a project from the dropdown and click on ‘Create API key in existing project.’ Copy the key to be used in further step.

![Google AI Studio](/blog/21-04-25-How-to-configure-gemini-api-key-for-buddyai/google-ai-studio.png)

![Google AI Studio](/blog/21-04-25-How-to-configure-gemini-api-key-for-buddyai/google-ai-studio-key.png)

### Set up the Gemini API Key

The API key can be set up using two methods we will look at both here,

- Head over to KubeBuddy and login with your credentials. Head over to settings page by clicking on the ‘Settings’ buttons in lower left corner of the home page. Click on
  ‘AI Configuration’ tba on the sidebar. Select ‘Google Gemini’ from the dropdown and paste your Gemini API Key in the ‘API Key’ field and click on ‘Save AI Settings.’ You will be prompted with ‘AI configuration saved successfully!’

  ![KubeBuddy-settings](/blog/21-04-25-How-to-configure-gemini-api-key-for-buddyai/kubebuddy-settings.png)

- For the second method, you must have a cluster registered in KubeBuddy. Head over to the home page and click on any cluster. You can find Buddy AI in the lower right corner, click on it. Enter ‘1’ in the field to select Gemini and then paste your API key.

  ![KubeBuddy-buddyai](/blog/21-04-25-How-to-configure-gemini-api-key-for-buddyai/kubebuddy-buddyai.png)

### Manage your API Key

By heading over to AI Configuration tab of settings page user can manage their API keys and delete them if needed.

### Give it a try!

With Buddy AI now set up, you can head over to any of your registered clusters and start interacting with it. Simply open the Buddy AI chat window by clicking on the bot icon in the bottom right corner and start asking your technical queries. Whether you need help interpreting logs, troubleshooting errors, or understanding Kubernetes resources, Buddy AI is ready to assist with responses powered by Gemini.

![Buddyai-prompt](/blog/21-04-25-How-to-configure-gemini-api-key-for-buddyai/buddyai-prompt.png)

### Conclusion

Buddy AI is an amazing tool that enhances the KubeBuddy experience by offering real-time, AI-driven support directly within your dashboard. With support for major LLM providers like Gemini and OpenAI, it brings flexibility and intelligence to your Kubernetes management workflow. Setting it up is quick and easy, and once done, you will have a powerful assistant at your fingertips to help you navigate and optimize your Kubernetes operations.
