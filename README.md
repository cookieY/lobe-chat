这是一个自用版本，目前已在原版基础上添加了以下功能

- csv 分块支持 [#4123](https://github.com/lobehub/lobe-chat/pull/4123)
- 自定义 embeding model (目前支持智谱，github,openai,bedrock,ollama) [#4218](https://github.com/lobehub/lobe-chat/pull/4208)
- 优化了 sssr 组件，当用户使用时 dalle-3 无法显示图片的问题 [#4299](https://github.com/lobehub/lobe-chat/issues/4299)

新增环境变量 **DEFAULT_FILES_CONFIG**

```
//定义了 embedding model 提供商以及具体的 embedding 模型
DEFAULT_FILES_CONFIG="embedding_model=zhipu/embedding-3"
```

DockerImage

```
yeelabs/lobe-chat-databases:latest
```

<div align="center"><a name="readme-top"></a>

[![][image-banner]][vercel-link]

# Lobe Chat

An open-source, modern-design ChatGPT/LLMs UI/Framework.<br/>
Supports speech-synthesis, multi-modal, and extensible ([function call][docs-functionc-call]) plugin system.<br/>
One-click **FREE** deployment of your private OpenAI ChatGPT/Claude/Gemini/Groq/Ollama chat application.

**English** · [简体中文](./README.zh-CN.md) · [日本語](./README.ja-JP.md) · \[Official Site]\[official-site] · [Changelog](./CHANGELOG.md) · \[Documents]\[docs] · \[Blog]\[blog] · \[Feedback]\[github-issues-link]

<!-- SHIELD GROUP -->

\[!\[]\[github-release-shield]]\[github-release-link]
\[!\[]\[docker-release-shield]]\[docker-release-link]
[!\[\]\[vercel-shield\]][vercel-link]
\[!\[]\[discord-shield]]\[discord-link]<br/>
\[!\[]\[codecov-shield]]\[codecov-link]
\[!\[]\[github-action-test-shield]]\[github-action-test-link]
\[!\[]\[github-action-release-shield]]\[github-action-release-link]
\[!\[]\[github-releasedate-shield]]\[github-releasedate-link]<br/>
\[!\[]\[github-contributors-shield]]\[github-contributors-link]
\[!\[]\[github-forks-shield]]\[github-forks-link]
\[!\[]\[github-stars-shield]]\[github-stars-link]
\[!\[]\[github-issues-shield]]\[github-issues-link]
\[!\[]\[github-license-shield]]\[github-license-link]<br>
\[!\[]\[sponsor-shield]]\[sponsor-link]

**Share LobeChat Repository**

\[!\[]\[share-x-shield]]\[share-x-link]
\[!\[]\[share-telegram-shield]]\[share-telegram-link]
\[!\[]\[share-whatsapp-shield]]\[share-whatsapp-link]
\[!\[]\[share-reddit-shield]]\[share-reddit-link]
\[!\[]\[share-weibo-shield]]\[share-weibo-link]
\[!\[]\[share-mastodon-shield]]\[share-mastodon-link]
\[!\[]\[share-linkedin-shield]]\[share-linkedin-link]

<sup>Pioneering the new age of thinking and creating. Built for you, the Super Individual.</sup>

\[!\[]\[github-trending-shield]]\[github-trending-url]

[!\[\]\[image-overview\]][vercel-link]

</div>

<details>
<summary><kbd>Table of contents</kbd></summary>

#### TOC

- [👋🏻 Getting Started & Join Our Community](#-getting-started--join-our-community)
- [✨ Features](#-features)
  - [`1` \[File Upload/Knowledge Base\]\[docs-feat-knowledgebase\]](#1-file-uploadknowledge-basedocs-feat-knowledgebase)
  - [`2` \[Multi-Model Service Provider Support\]\[docs-feat-provider\]](#2-multi-model-service-provider-supportdocs-feat-provider)
  - [`3` \[Local Large Language Model (LLM) Support\]\[docs-feat-local\]](#3-local-large-language-model-llm-supportdocs-feat-local)
  - [`4` \[Model Visual Recognition\]\[docs-feat-vision\]](#4-model-visual-recognitiondocs-feat-vision)
  - [`5` \[TTS & STT Voice Conversation\]\[docs-feat-tts\]](#5-tts--stt-voice-conversationdocs-feat-tts)
  - [`6` \[Text to Image Generation\]\[docs-feat-t2i\]](#6-text-to-image-generationdocs-feat-t2i)
  - [`7` \[Plugin System (Function Calling)\]\[docs-feat-plugin\]](#7-plugin-system-function-callingdocs-feat-plugin)
  - [`8` \[Agent Market (GPTs)\]\[docs-feat-agent\]](#8-agent-market-gptsdocs-feat-agent)
  - [`9` \[Support Local / Remote Database\]\[docs-feat-database\]](#9-support-local--remote-databasedocs-feat-database)
  - [`10` \[Support Multi-User Management\]\[docs-feat-auth\]](#10-support-multi-user-managementdocs-feat-auth)
  - [`11` \[Progressive Web App (PWA)\]\[docs-feat-pwa\]](#11-progressive-web-app-pwadocs-feat-pwa)
  - [`12` \[Mobile Device Adaptation\]\[docs-feat-mobile\]](#12-mobile-device-adaptationdocs-feat-mobile)
  - [`13` \[Custom Themes\]\[docs-feat-theme\]](#13-custom-themesdocs-feat-theme)
  - [`*` What's more](#-whats-more)
- [⚡️ Performance](#️-performance)
- [🛳 Self Hosting](#-self-hosting)
  - [`A` Deploying with Vercel, Zeabur or Sealos](#a-deploying-with-vercel-zeabur-or-sealos)
  - [`B` Deploying with Docker](#b-deploying-with-docker)
  - [Environment Variable](#environment-variable)
- [📦 Ecosystem](#-ecosystem)
- [🧩 Plugins](#-plugins)
- [⌨️ Local Development](#️-local-development)
- [🤝 Contributing](#-contributing)
- [❤️ Sponsor](#️-sponsor)
- [🔗 More Products](#-more-products)

####

<br/>

</details>

## 👋🏻 Getting Started & Join Our Community

We are a group of e/acc design-engineers, hoping to provide modern design components and tools for AIGC.
By adopting the Bootstrapping approach, we aim to provide developers and users with a more open, transparent, and user-friendly product ecosystem.

Whether for users or professional developers, LobeHub will be your AI Agent playground. Please be aware that LobeChat is currently under active development, and feedback is welcome for any \[issues]\[issues-link] encountered.

| [!\[\]\[vercel-shield-badge\]][vercel-link]   | No installation or registration necessary! Visit our website to experience it firsthand.                           |
| :-------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| \[!\[]\[discord-shield-badge]]\[discord-link] | Join our Discord community! This is where you can connect with developers and other enthusiastic users of LobeHub. |

> \[!IMPORTANT]
>
> **Star Us**, You will receive all release notifications from GitHub without any delay \~ ⭐️

\[!\[]\[image-star]]\[github-stars-link]

<details>
  <summary><kbd>Star History</kbd></summary>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=lobehub%2Flobe-chat&theme=dark&type=Date">
    <img width="100%" src="https://api.star-history.com/svg?repos=lobehub%2Flobe-chat&type=Date">
  </picture>
</details>

## ✨ Features

\[!\[]\[image-feat-knowledgebase]]\[docs-feat-knowledgebase]

### `1` \[File Upload/Knowledge Base]\[docs-feat-knowledgebase]

LobeChat supports file upload and knowledge base functionality. You can upload various types of files including documents, images, audio, and video, as well as create knowledge bases, making it convenient for users to manage and search for files. Additionally, you can utilize files and knowledge base features during conversations, enabling a richer dialogue experience.

<https://github.com/user-attachments/assets/faa8cf67-e743-4590-8bf6-ebf6ccc34175>

> \[!TIP]
>
> Learn more on [📘 LobeChat Knowledge Base Launch — From Now On, Every Step Counts](https://lobehub.com/blog/knowledge-base)

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-privoder]]\[docs-feat-provider]

### `2` \[Multi-Model Service Provider Support]\[docs-feat-provider]

In the continuous development of LobeChat, we deeply understand the importance of diversity in model service providers for meeting the needs of the community when providing AI conversation services. Therefore, we have expanded our support to multiple model service providers, rather than being limited to a single one, in order to offer users a more diverse and rich selection of conversations.

In this way, LobeChat can more flexibly adapt to the needs of different users, while also providing developers with a wider range of choices.

#### Supported Model Service Providers

We have implemented support for the following model service providers:

- **AWS Bedrock**: Integrated with AWS Bedrock service, supporting models such as **Claude / LLama2**, providing powerful natural language processing capabilities. [Learn more](https://aws.amazon.com/cn/bedrock)
- **Anthropic (Claude)**: Accessed Anthropic's **Claude** series models, including Claude 3 and Claude 2, with breakthroughs in multi-modal capabilities and extended context, setting a new industry benchmark. [Learn more](https://www.anthropic.com/claude)
- **Google AI (Gemini Pro, Gemini Vision)**: Access to Google's **Gemini** series models, including Gemini and Gemini Pro, to support advanced language understanding and generation. [Learn more](https://deepmind.google/technologies/gemini/)
- **Groq**: Accessed Groq's AI models, efficiently processing message sequences and generating responses, capable of multi-turn dialogues and single-interaction tasks. [Learn more](https://groq.com/)
- **OpenRouter**: Supports routing of models including **Claude 3**, **Gemma**, **Mistral**, **Llama2** and **Cohere**, with intelligent routing optimization to improve usage efficiency, open and flexible. [Learn more](https://openrouter.ai/)
- **01.AI (Yi Model)**: Integrated the 01.AI models, with series of APIs featuring fast inference speed, which not only shortened the processing time, but also maintained excellent model performance. [Learn more](https://01.ai/)
- **Together.ai**: Over 100 leading open-source Chat, Language, Image, Code, and Embedding models are available through the Together Inference API. For these models you pay just for what you use. [Learn more](https://www.together.ai/)
- **ChatGLM**: Added the **ChatGLM** series models from Zhipuai (GLM-4/GLM-4-vision/GLM-3-turbo), providing users with another efficient conversation model choice. [Learn more](https://www.zhipuai.cn/)
- **Moonshot AI (Dark Side of the Moon)**: Integrated with the Moonshot series models, an innovative AI startup from China, aiming to provide deeper conversation understanding. [Learn more](https://www.moonshot.cn/)
- **Minimax**: Integrated the Minimax models, including the MoE model **abab6**, offers a broader range of choices. [Learn more](https://www.minimaxi.com/)
- **DeepSeek**: Integrated with the DeepSeek series models, an innovative AI startup from China, The product has been designed to provide a model that balances performance with price. [Learn more](https://www.deepseek.com/)
- **Qwen**: Integrated the Qwen series models, including the latest **qwen-turbo**, **qwen-plus** and **qwen-max**. [Learn more](https://help.aliyun.com/zh/dashscope/developer-reference/model-introduction)
- **Novita AI**: Access **Llama**, **Mistral**, and other leading open-source models at cheapest prices. Engage in uncensored role-play, spark creative discussions, and foster unrestricted innovation. **Pay For What You Use.** [Learn more](https://novita.ai/llm-api?utm_source=lobechat&utm_medium=ch&utm_campaign=api)

At the same time, we are also planning to support more model service providers, such as Replicate and Perplexity, to further enrich our service provider library. If you would like LobeChat to support your favorite service provider, feel free to join our [community discussion](https://github.com/lobehub/lobe-chat/discussions/1284).

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-local]]\[docs-feat-local]

### `3` \[Local Large Language Model (LLM) Support]\[docs-feat-local]

To meet the specific needs of users, LobeChat also supports the use of local models based on [Ollama](https://ollama.ai), allowing users to flexibly use their own or third-party models.

> \[!TIP]
>
> Learn more about \[📘 Using Ollama in LobeChat]\[docs-usage-ollama] by checking it out.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-vision]]\[docs-feat-vision]

### `4` \[Model Visual Recognition]\[docs-feat-vision]

LobeChat now supports OpenAI's latest [`gpt-4-vision`](https://platform.openai.com/docs/guides/vision) model with visual recognition capabilities,
a multimodal intelligence that can perceive visuals. Users can easily upload or drag and drop images into the dialogue box,
and the agent will be able to recognize the content of the images and engage in intelligent conversation based on this,
creating smarter and more diversified chat scenarios.

This feature opens up new interactive methods, allowing communication to transcend text and include a wealth of visual elements.
Whether it's sharing images in daily use or interpreting images within specific industries, the agent provides an outstanding conversational experience.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-tts]]\[docs-feat-tts]

### `5` \[TTS & STT Voice Conversation]\[docs-feat-tts]

LobeChat supports Text-to-Speech (TTS) and Speech-to-Text (STT) technologies, enabling our application to convert text messages into clear voice outputs,
allowing users to interact with our conversational agent as if they were talking to a real person. Users can choose from a variety of voices to pair with the agent.

Moreover, TTS offers an excellent solution for those who prefer auditory learning or desire to receive information while busy.
In LobeChat, we have meticulously selected a range of high-quality voice options (OpenAI Audio, Microsoft Edge Speech) to meet the needs of users from different regions and cultural backgrounds.
Users can choose the voice that suits their personal preferences or specific scenarios, resulting in a personalized communication experience.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-t2i]]\[docs-feat-t2i]

### `6` \[Text to Image Generation]\[docs-feat-t2i]

With support for the latest text-to-image generation technology, LobeChat now allows users to invoke image creation tools directly within conversations with the agent. By leveraging the capabilities of AI tools such as [`DALL-E 3`](https://openai.com/dall-e-3), [`MidJourney`](https://www.midjourney.com/), and [`Pollinations`](https://pollinations.ai/), the agents are now equipped to transform your ideas into images.

This enables a more private and immersive creative process, allowing for the seamless integration of visual storytelling into your personal dialogue with the agent.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-plugin]]\[docs-feat-plugin]

### `7` \[Plugin System (Function Calling)]\[docs-feat-plugin]

The plugin ecosystem of LobeChat is an important extension of its core functionality, greatly enhancing the practicality and flexibility of the LobeChat assistant.

<video controls src="https://github.com/lobehub/lobe-chat/assets/28616219/f29475a3-f346-4196-a435-41a6373ab9e2" muted="false"></video>

By utilizing plugins, LobeChat assistants can obtain and process real-time information, such as searching for web information and providing users with instant and relevant news.

In addition, these plugins are not limited to news aggregation, but can also extend to other practical functions, such as quickly searching documents, generating images, obtaining data from various platforms like Bilibili, Steam, and interacting with various third-party services.

> \[!TIP]
>
> Learn more about \[📘 Plugin Usage]\[docs-usage-plugin] by checking it out.

<!-- PLUGIN LIST -->

| Recent Submits                                                                                                                     | Description                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [Tongyi wanxiang Image Generator](https://chat-preview.lobehub.com/settings/agent)<br/><sup>By **YoungTx** on **2024-08-09**</sup> | This plugin uses Alibaba's Tongyi Wanxiang model to generate images based on text prompts.<br/>`image` `tongyi` `wanxiang`                |
| [Shopping tools](https://chat-preview.lobehub.com/settings/agent)<br/><sup>By **shoppingtools** on **2024-07-19**</sup>            | Search for products on eBay & AliExpress, find eBay events & coupons. Get prompt examples.<br/>`shopping` `e-bay` `ali-express` `coupons` |
| [Savvy Trader AI](https://chat-preview.lobehub.com/settings/agent)<br/><sup>By **savvytrader** on **2024-06-27**</sup>             | Realtime stock, crypto and other investment data.<br/>`stock` `analyze`                                                                   |
| [Search1API](https://chat-preview.lobehub.com/settings/agent)<br/><sup>By **fatwang2** on **2024-05-06**</sup>                     | Search aggregation service, specifically designed for LLMs<br/>`web` `search`                                                             |

> 📊 Total plugins: [<kbd>**49**</kbd>](https://github.com/lobehub/lobe-chat-plugins)

 <!-- PLUGIN LIST -->

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-agent]]\[docs-feat-agent]

### `8` \[Agent Market (GPTs)]\[docs-feat-agent]

In LobeChat Agent Marketplace, creators can discover a vibrant and innovative community that brings together a multitude of well-designed agents,
which not only play an important role in work scenarios but also offer great convenience in learning processes.
Our marketplace is not just a showcase platform but also a collaborative space. Here, everyone can contribute their wisdom and share the agents they have developed.

> \[!TIP]
>
> By \[🤖/🏪 Submit Agents]\[submit-agents-link], you can easily submit your agent creations to our platform.
> Importantly, LobeChat has established a sophisticated automated internationalization (i18n) workflow,
> capable of seamlessly translating your agent into multiple language versions.
> This means that no matter what language your users speak, they can experience your agent without barriers.

> \[!IMPORTANT]
>
> We welcome all users to join this growing ecosystem and participate in the iteration and optimization of agents.
> Together, we can create more interesting, practical, and innovative agents, further enriching the diversity and practicality of the agent offerings.

<!-- AGENT LIST -->

| Recent Submits                                                                                                                                                                            | Description                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Boxing Training Master](https://chat-preview.lobehub.com/market?agent=boxing-master)<br/><sup>By **[Luyi-2333](https://github.com/Luyi-2333)** on **2024-10-15**</sup>                   | Expert in boxing training guidance and personalized plan development<br/>`boxing-training` `personalized-plans` `fitness-guidance` `progress-evaluation` `technique-improvement` `health-and-nutrition`               |
| [Coconut](https://chat-preview.lobehub.com/market?agent=deep-thinker-ai)<br/><sup>By **[hia1234](https://github.com/hia1234)** on **2024-10-15**</sup>                                    | A chatbot that undergoes several reviews of its responses, checking whether there is a basis for its statements and actively requesting feedback while engaging in repeated interactions.<br/>`programming` `general` |
| [GitHub Project Documentation Assistant](https://chat-preview.lobehub.com/market?agent=github-doc-asst)<br/><sup>By **[Luyi-2333](https://github.com/Luyi-2333)** on **2024-10-14**</sup> | Focused on writing and optimizing documentation for open source projects<br/>`documentation-optimization` `open-source-projects` `writing-techniques` `git-hub`                                                       |
| [Ophthalmologist](https://chat-preview.lobehub.com/market?agent=ophthalmologist)<br/><sup>By **[yuphone](https://github.com/yuphone)** on **2024-10-14**</sup>                            | Specializes in ophthalmic diagnosis and treatment recommendations<br/>`healthcare` `ophthalmology` `diagnosis` `recommendations` `professional`                                                                       |

> 📊 Total agents: [<kbd>**418**</kbd> ](https://github.com/lobehub/lobe-chat-agents)

 <!-- AGENT LIST -->

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-database]]\[docs-feat-database]

### `9` \[Support Local / Remote Database]\[docs-feat-database]

LobeChat supports the use of both server-side and local databases. Depending on your needs, you can choose the appropriate deployment solution:

- **Local database**: suitable for users who want more control over their data and privacy protection. LobeChat uses CRDT (Conflict-Free Replicated Data Type) technology to achieve multi-device synchronization. This is an experimental feature aimed at providing a seamless data synchronization experience.
- **Server-side database**: suitable for users who want a more convenient user experience. LobeChat supports PostgreSQL as a server-side database. For detailed documentation on how to configure the server-side database, please visit [Configure Server-side Database](https://lobehub.com/docs/self-hosting/advanced/server-database).

Regardless of which database you choose, LobeChat can provide you with an excellent user experience.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-auth]]\[docs-feat-auth]

### `10` \[Support Multi-User Management]\[docs-feat-auth]

LobeChat supports multi-user management and provides two main user authentication and management solutions to meet different needs:

- **next-auth**: LobeChat integrates `next-auth`, a flexible and powerful identity verification library that supports multiple authentication methods, including OAuth, email login, credential login, etc. With `next-auth`, you can easily implement user registration, login, session management, social login, and other functions to ensure the security and privacy of user data.

- [**Clerk**](https://go.clerk.com/exgqLG0): For users who need more advanced user management features, LobeChat also supports `Clerk`, a modern user management platform. `Clerk` provides richer functions, such as multi-factor authentication (MFA), user profile management, login activity monitoring, etc. With `Clerk`, you can get higher security and flexibility, and easily cope with complex user management needs.

Regardless of which user management solution you choose, LobeChat can provide you with an excellent user experience and powerful functional support.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-pwa]]\[docs-feat-pwa]

### `11` \[Progressive Web App (PWA)]\[docs-feat-pwa]

We deeply understand the importance of providing a seamless experience for users in today's multi-device environment.
Therefore, we have adopted Progressive Web Application ([PWA](https://support.google.com/chrome/answer/9658361)) technology,
a modern web technology that elevates web applications to an experience close to that of native apps.

Through PWA, LobeChat can offer a highly optimized user experience on both desktop and mobile devices while maintaining its lightweight and high-performance characteristics.
Visually and in terms of feel, we have also meticulously designed the interface to ensure it is indistinguishable from native apps,
providing smooth animations, responsive layouts, and adapting to different device screen resolutions.

> \[!NOTE]
>
> If you are unfamiliar with the installation process of PWA, you can add LobeChat as your desktop application (also applicable to mobile devices) by following these steps:
>
> - Launch the Chrome or Edge browser on your computer.
> - Visit the LobeChat webpage.
> - In the upper right corner of the address bar, click on the <kbd>Install</kbd> icon.
> - Follow the instructions on the screen to complete the PWA Installation.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-mobile]]\[docs-feat-mobile]

### `12` \[Mobile Device Adaptation]\[docs-feat-mobile]

We have carried out a series of optimization designs for mobile devices to enhance the user's mobile experience. Currently, we are iterating on the mobile user experience to achieve smoother and more intuitive interactions. If you have any suggestions or ideas, we welcome you to provide feedback through GitHub Issues or Pull Requests.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-theme]]\[docs-feat-theme]

### `13` \[Custom Themes]\[docs-feat-theme]

As a design-engineering-oriented application, LobeChat places great emphasis on users' personalized experiences,
hence introducing flexible and diverse theme modes, including a light mode for daytime and a dark mode for nighttime.
Beyond switching theme modes, a range of color customization options allow users to adjust the application's theme colors according to their preferences.
Whether it's a desire for a sober dark blue, a lively peach pink, or a professional gray-white, users can find their style of color choices in LobeChat.

> \[!TIP]
>
> The default configuration can intelligently recognize the user's system color mode and automatically switch themes to ensure a consistent visual experience with the operating system.
> For users who like to manually control details, LobeChat also offers intuitive setting options and a choice between chat bubble mode and document mode for conversation scenarios.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

### `*` What's more

Beside these features, LobeChat also have much better basic technique underground:

- [x] 💨 **Quick Deployment**: Using the Vercel platform or docker image, you can deploy with just one click and complete the process within 1 minute without any complex configuration.
- [x] 🌐 **Custom Domain**: If users have their own domain, they can bind it to the platform for quick access to the dialogue agent from anywhere.
- [x] 🔒 **Privacy Protection**: All data is stored locally in the user's browser, ensuring user privacy.
- [x] 💎 **Exquisite UI Design**: With a carefully designed interface, it offers an elegant appearance and smooth interaction. It supports light and dark themes and is mobile-friendly. PWA support provides a more native-like experience.
- [x] 🗣️ **Smooth Conversation Experience**: Fluid responses ensure a smooth conversation experience. It fully supports Markdown rendering, including code highlighting, LaTex formulas, Mermaid flowcharts, and more.

> ✨ more features will be added when LobeChat evolve.

---

> \[!NOTE]
>
> You can find our upcoming \[Roadmap]\[github-project-link] plans in the Projects section.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

## ⚡️ Performance

> \[!NOTE]
>
> The complete list of reports can be found in the \[📘 Lighthouse Reports]\[docs-lighthouse]

|                    Desktop                    |                    Mobile                    |
| :-------------------------------------------: | :------------------------------------------: |
|              !\[]\[chat-desktop]              |              !\[]\[chat-mobile]              |
| \[📑 Lighthouse Report]\[chat-desktop-report] | \[📑 Lighthouse Report]\[chat-mobile-report] |

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

## 🛳 Self Hosting

LobeChat provides Self-Hosted Version with Vercel and \[Docker Image]\[docker-release-link]. This allows you to deploy your own chatbot within a few minutes without any prior knowledge.

> \[!TIP]
>
> Learn more about \[📘 Build your own LobeChat]\[docs-self-hosting] by checking it out.

### `A` Deploying with Vercel, Zeabur or Sealos

If you want to deploy this service yourself on either Vercel or Zeabur, you can follow these steps:

- Prepare your [OpenAI API Key](https://platform.openai.com/account/api-keys).
- Click the button below to start deployment: Log in directly with your GitHub account, and remember to fill in the `OPENAI_API_KEY`(required) and `ACCESS_CODE` (recommended) on the environment variable section.
- After deployment, you can start using it.
- Bind a custom domain (optional): The DNS of the domain assigned by Vercel is polluted in some areas; binding a custom domain can connect directly.

<div align="center">

|             Deploy with Vercel              |                       Deploy with Zeabur                        |                       Deploy with Sealos                        |                         Deploy with RepoCloud                         |
| :-----------------------------------------: | :-------------------------------------------------------------: | :-------------------------------------------------------------: | :-------------------------------------------------------------------: |
| \[!\[]\[deploy-button-image]]\[deploy-link] | \[!\[]\[deploy-on-zeabur-button-image]]\[deploy-on-zeabur-link] | \[!\[]\[deploy-on-sealos-button-image]]\[deploy-on-sealos-link] | \[!\[]\[deploy-on-repocloud-button-image]]\[deploy-on-repocloud-link] |

</div>

#### After Fork

After fork, only retain the upstream sync action and disable other actions in your repository on GitHub.

#### Keep Updated

If you have deployed your own project following the one-click deployment steps in the README, you might encounter constant prompts indicating "updates available." This is because Vercel defaults to creating a new project instead of forking this one, resulting in an inability to detect updates accurately.

> \[!TIP]
>
> We suggest you redeploy using the following steps, \[📘 Auto Sync With Latest]\[docs-upstream-sync]

<br/>

### `B` Deploying with Docker

\[!\[]\[docker-release-shield]]\[docker-release-link]
\[!\[]\[docker-size-shield]]\[docker-size-link]
\[!\[]\[docker-pulls-shield]]\[docker-pulls-link]

We provide a Docker image for deploying the LobeChat service on your own private device. Use the following command to start the LobeChat service:

```fish
$ docker run -d -p 3210:3210 \
  -e OPENAI_API_KEY=sk-xxxx \
  -e ACCESS_CODE=lobe66 \
  --name lobe-chat \
  lobehub/lobe-chat
```

> \[!TIP]
>
> If you need to use the OpenAI service through a proxy, you can configure the proxy address using the `OPENAI_PROXY_URL` environment variable:

```fish
$ docker run -d -p 3210:3210 \
  -e OPENAI_API_KEY=sk-xxxx \
  -e OPENAI_PROXY_URL=https://api-proxy.com/v1 \
  -e ACCESS_CODE=lobe66 \
  --name lobe-chat \
  lobehub/lobe-chat
```

> \[!NOTE]
>
> For detailed instructions on deploying with Docker, please refer to the \[📘 Docker Deployment Guide]\[docs-docker]

<br/>

### Environment Variable

This project provides some additional configuration items set with environment variables:

| Environment Variable | Required | Description                                                                                                                                                               | Example                                                                                                              |
| -------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `OPENAI_API_KEY`     | Yes      | This is the API key you apply on the OpenAI account page                                                                                                                  | `sk-xxxxxx...xxxxxx`                                                                                                 |
| `OPENAI_PROXY_URL`   | No       | If you manually configure the OpenAI interface proxy, you can use this configuration item to override the default OpenAI API request base URL                             | `https://api.chatanywhere.cn` or `https://aihubmix.com/v1` <br/>The default value is<br/>`https://api.openai.com/v1` |
| `ACCESS_CODE`        | No       | Add a password to access this service; you can set a long password to avoid leaking. If this value contains a comma, it is a password array.                              | `awCTe)re_r74` or `rtrt_ewee3@09!` or `code1,code2,code3`                                                            |
| `OPENAI_MODEL_LIST`  | No       | Used to control the model list. Use `+` to add a model, `-` to hide a model, and `model_name=display_name` to customize the display name of a model, separated by commas. | `qwen-7b-chat,+glm-6b,-gpt-3.5-turbo`                                                                                |

> \[!NOTE]
>
> The complete list of environment variables can be found in the \[📘 Environment Variables]\[docs-env-var]

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

## 📦 Ecosystem

| NPM                                 | Repository                                | Description                                                                                           | Version                                       |
| ----------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| \[@lobehub/ui]\[lobe-ui-link]       | \[lobehub/lobe-ui]\[lobe-ui-github]       | Open-source UI component library dedicated to building AIGC web applications.                         | \[!\[]\[lobe-ui-shield]]\[lobe-ui-link]       |
| \[@lobehub/icons]\[lobe-icons-link] | \[lobehub/lobe-icons]\[lobe-icons-github] | Popular AI / LLM Model Brand SVG Logo and Icon Collection.                                            | \[!\[]\[lobe-icons-shield]]\[lobe-icons-link] |
| \[@lobehub/tts]\[lobe-tts-link]     | \[lobehub/lobe-tts]\[lobe-tts-github]     | High-quality & reliable TTS/STT React Hooks library                                                   | \[!\[]\[lobe-tts-shield]]\[lobe-tts-link]     |
| \[@lobehub/lint]\[lobe-lint-link]   | \[lobehub/lobe-lint]\[lobe-lint-github]   | Configurations for ESlint, Stylelint, Commitlint, Prettier, Remark, and Semantic Release for LobeHub. | \[!\[]\[lobe-lint-shield]]\[lobe-lint-link]   |

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

## 🧩 Plugins

Plugins provide a means to extend the [Function Calling][docs-functionc-call] capabilities of LobeChat. They can be used to introduce new function calls and even new ways to render message results. If you are interested in plugin development, please refer to our \[📘 Plugin Development Guide]\[docs-plugin-dev] in the Wiki.

- \[lobe-chat-plugins]\[lobe-chat-plugins]: This is the plugin index for LobeChat. It accesses index.json from this repository to display a list of available plugins for LobeChat to the user.
- \[chat-plugin-template]\[chat-plugin-template]: This is the plugin template for LobeChat plugin development.
- \[@lobehub/chat-plugin-sdk]\[chat-plugin-sdk]: The LobeChat Plugin SDK assists you in creating exceptional chat plugins for Lobe Chat.
- \[@lobehub/chat-plugins-gateway]\[chat-plugins-gateway]: The LobeChat Plugins Gateway is a backend service that provides a gateway for LobeChat plugins. We deploy this service using Vercel. The primary API POST /api/v1/runner is deployed as an Edge Function.

> \[!NOTE]
>
> The plugin system is currently undergoing major development. You can learn more in the following issues:
>
> - [x] [**Plugin Phase 1**](https://github.com/lobehub/lobe-chat/issues/73): Implement separation of the plugin from the main body, split the plugin into an independent repository for maintenance, and realize dynamic loading of the plugin.
> - [x] [**Plugin Phase 2**](https://github.com/lobehub/lobe-chat/issues/97): The security and stability of the plugin's use, more accurately presenting abnormal states, the maintainability of the plugin architecture, and developer-friendly.
> - [x] [**Plugin Phase 3**](https://github.com/lobehub/lobe-chat/issues/149): Higher-level and more comprehensive customization capabilities, support for plugin authentication, and examples.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

## ⌨️ Local Development

You can use GitHub Codespaces for online development:

\[!\[]\[codespaces-shield]]\[codespaces-link]

Or clone it for local development:

```fish
$ git clone https://github.com/lobehub/lobe-chat.git
$ cd lobe-chat
$ pnpm install
$ pnpm dev
```

If you would like to learn more details, please feel free to look at our \[📘 Development Guide]\[docs-dev-guide].

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

## 🤝 Contributing

Contributions of all types are more than welcome; if you are interested in contributing code, feel free to check out our GitHub \[Issues]\[github-issues-link] and \[Projects]\[github-project-link] to get stuck in to show us what you’re made of.

> \[!TIP]
>
> We are creating a technology-driven forum, fostering knowledge interaction and the exchange of ideas that may culminate in mutual inspiration and collaborative innovation.
>
> Help us make LobeChat better. Welcome to provide product design feedback, user experience discussions directly to us.
>
> **Principal Maintainers:** [@arvinxx](https://github.com/arvinxx) [@canisminor1990](https://github.com/canisminor1990)

\[!\[]\[pr-welcome-shield]]\[pr-welcome-link]
\[!\[]\[submit-agents-shield]]\[submit-agents-link]
\[!\[]\[submit-plugin-shield]]\[submit-plugin-link]

<a href="https://github.com/lobehub/lobe-chat/graphs/contributors" target="_blank">
  <table>
    <tr>
      <th colspan="2">
        <br><img src="https://contrib.rocks/image?repo=lobehub/lobe-chat"><br><br>
      </th>
    </tr>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://next.ossinsight.io/widgets/official/compose-org-active-contributors/thumbnail.png?activity=active&period=past_28_days&owner_id=131470832&repo_ids=643445235&image_size=2x3&color_scheme=dark">
          <img src="https://next.ossinsight.io/widgets/official/compose-org-active-contributors/thumbnail.png?activity=active&period=past_28_days&owner_id=131470832&repo_ids=643445235&image_size=2x3&color_scheme=light">
        </picture>
      </td>
      <td rowspan="2">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://next.ossinsight.io/widgets/official/compose-org-participants-growth/thumbnail.png?activity=active&period=past_28_days&owner_id=131470832&repo_ids=643445235&image_size=4x7&color_scheme=dark">
          <img src="https://next.ossinsight.io/widgets/official/compose-org-participants-growth/thumbnail.png?activity=active&period=past_28_days&owner_id=131470832&repo_ids=643445235&image_size=4x7&color_scheme=light">
        </picture>
      </td>
    </tr>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://next.ossinsight.io/widgets/official/compose-org-active-contributors/thumbnail.png?activity=new&period=past_28_days&owner_id=131470832&repo_ids=643445235&image_size=2x3&color_scheme=dark">
          <img src="https://next.ossinsight.io/widgets/official/compose-org-active-contributors/thumbnail.png?activity=new&period=past_28_days&owner_id=131470832&repo_ids=643445235&image_size=2x3&color_scheme=light">
        </picture>
      </td>
    </tr>
  </table>
</a>

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

## ❤️ Sponsor

Every bit counts and your one-time donation sparkles in our galaxy of support! You're a shooting star, making a swift and bright impact on our journey. Thank you for believing in us – your generosity guides us toward our mission, one brilliant flash at a time.

<a href="https://opencollective.com/lobehub" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/lobehub/.github/blob/main/static/sponsor-dark.png?raw=true">
    <img  src="https://github.com/lobehub/.github/blob/main/static/sponsor-light.png?raw=true">
  </picture>
</a>

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

## 🔗 More Products

- **\[🅰️ Lobe SD Theme]\[lobe-theme]:** Modern theme for Stable Diffusion WebUI, exquisite interface design, highly customizable UI, and efficiency-boosting features.
- **\[⛵️ Lobe Midjourney WebUI]\[lobe-midjourney-webui]:** WebUI for Midjourney, leverages AI to quickly generate a wide array of rich and diverse images from text prompts, sparking creativity and enhancing conversations.
- **\[🌏 Lobe i18n]\[lobe-i18n] :** Lobe i18n is an automation tool for the i18n (internationalization) translation process, powered by ChatGPT. It supports features such as automatic splitting of large files, incremental updates, and customization options for the OpenAI model, API proxy, and temperature.
- **\[💌 Lobe Commit]\[lobe-commit]:** Lobe Commit is a CLI tool that leverages Langchain/ChatGPT to generate Gitmoji-based commit messages.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

---

Copyright © 2024 [LobeHub][profile-link]. <br />
This project is [Apache 2.0](./LICENSE) licensed.

<!-- LINK GROUP -->

[docs-functionc-call]: https://lobehub.com/blog/openai-function-call
[image-banner]: https://github.com/lobehub/lobe-chat/assets/28616219/9f155dff-4737-429f-9cad-a70a1a860c5f
[profile-link]: https://github.com/lobehub
[vercel-link]: https://chat-preview.lobehub.com
