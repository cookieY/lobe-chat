<div align="center"><a name="readme-top"></a>

[![][image-banner]][vercel-link]

# Lobe Chat

An open-source, modern-design ChatGPT/LLMs UI/Framework.<br/>
Supports speech-synthesis, multi-modal, and extensible ([function call][docs-functionc-call]) plugin system.<br/>
One-click **FREE** deployment of your private OpenAI ChatGPT/Claude/Gemini/Groq/Ollama chat application.

</div>

---

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

Copyright © 2024 [LobeHub][profile-link]. <br />
This project is [Apache 2.0](./LICENSE) licensed.

<!-- LINK GROUP -->

[docs-functionc-call]: https://lobehub.com/blog/openai-function-call
[image-banner]: https://github.com/lobehub/lobe-chat/assets/28616219/9f155dff-4737-429f-9cad-a70a1a860c5f
[profile-link]: https://github.com/lobehub
[vercel-link]: https://chat-preview.lobehub.com
