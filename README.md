# Requirements 🔧
[Node.js](https://nodejs.org)

Slack channel and a bot with permission scopes (``chat:write:bot``)

# Pre-Usage 🔑
* Configure a [serverless-config.json](https://serverless.com/framework/docs/providers/google/guide/credentials/)
* Set the environment variables according to your slack and bitbucket
* Add some channels & messages(bot/channels.js)
* Add some users (users.js)

```
$ npm i -g serverless
$ npm i
```

# Test ☕
```
$ serverless invoke local -f slack -d '{"name": "Bernie"}'
```

# Deploy 🚀
```
$ serverless deploy
```