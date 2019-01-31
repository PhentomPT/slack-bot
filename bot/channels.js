module.exports = {
    "#pull-requests": {
        "id": "#pull-requests",
        "messages": {
            "PR_REVIEW": (reviewers, author, project, title, description, link) => {
                return [
                    {
                        "fallback": `Please ${reviewers} code review this PR: (${project}) ${title} <${link}|Link>`,
                        "color": "#36a64f",
                        "pretext": `Please ${reviewers} code review this PR for ${project}`,
                        "author_name": author,
                        "title": title,
                        "title_link": link,
                        "text": description
                    }
                ];
            }
        }
    }
}