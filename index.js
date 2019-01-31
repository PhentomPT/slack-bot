const BOT = require('./bot');
const HELPERS = require('./helpers');

module.exports = {
    slack: async (request, response) => {
        const pull_request = request.body.pullRequest;
        
        if (!pull_request) {
            const message = 'I\'m working, thank you for asking 🤖';
            
            // console.info(message);
            return response.status(200).json({message});
        }

        // console.info(JSON.stringify(pull_request));

        if (pull_request && pull_request.state !== 'OPEN' || pull_request.version > 0 || 
            pull_request.reviewers.filter(reviewer => reviewer.lastReviewedCommit).length > 0) 
        {
            const message = `PR '${pull_request.title}' has status '${pull_request.state}' and version '${pull_request.version}'`;
            
            console.error(message);
            return response.status(401).json({message});
        }

        try {
            await BOT.ACTIONS.post(
                BOT.CHANNELS["#pull-requests"].id, 
                BOT.CHANNELS["#pull-requests"].messages.PR_REVIEW(
                    HELPERS.getReviewersAsString(pull_request.reviewers),
                    pull_request.author.user.displayName,
                    pull_request.fromRef.repository.name,
                    pull_request.title,
                    pull_request.description,
                    `https://${process.env.BITBUCKET_HOST}/projects/${pull_request.fromRef.repository.project.key}/repos/${pull_request.fromRef.repository.name}/pull-requests/${pull_request.id}/overview`
                )
            );

            const message = `Message posted! 🎉🎉`;
            
            // console.info(message);
            return response.status(200).json({message});
        } catch (error) {
            const message = `Problem posting in slack... 💥. PR '${pull_request.title}' has status '${pull_request.state}'`;
            
            console.error(error);
            console.error(message);
            return response.status(500).json({message});
        }
    }
}