const USERS = require('./users');

module.exports = {
    getReviewersAsString: (reviewers) => {
        let reviewers_string = '<@here>';
        
        if (reviewers.length > 0) {
            reviewers_string = '';
            reviewers.forEach(reviewer => {
                const name = USERS[reviewer.user.name.toUpperCase()] || reviewer.user.displayName
                reviewers_string += name +', ';
            });
            reviewers_string = reviewers_string.slice(0, -2);
        }
    
        return reviewers_string;
    }
}