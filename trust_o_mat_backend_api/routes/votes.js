const routes = require(".");
const {parseQueryParam} = require('./utilities');

function listVotes(db, req, res) {
    const politician = parseQueryParam(req, res, "politician", "string");
    const issue = parseQueryParam(req, res, "issue", "string");
    if (politician === undefined || issue === undefined) {
        return;
    }

    db.getVotes(politician, issue)
        .then(result => res.json(result));
}

routes.votes = {
    listVotes,
};
