const Slack = require('slack');

const BOT = new Slack({token: process.env.SLACK_TOKEN});

module.exports = {
    post: async (channel_id, message) => {
        try {
            return await BOT.chat.postMessage({
                channel: channel_id,
                text: '',
                attachments: message
            });
        } catch (error) {
            return error;
        }
    }
}