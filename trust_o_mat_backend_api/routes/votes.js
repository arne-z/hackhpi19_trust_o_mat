const routes = require(".");
const {parseQueryParam} = require('./utilities');

function listVotes(req, res) {
    const politician = parseQueryParam(req, res, "politician", "string");
    const issue = parseQueryParam(req, res, "issue", "string");
    if (politician === undefined || issue === undefined) {
        return;
    }

    console.log("LIST VOTES");
    res.json([]);
}

routes.votes = {
    listVotes,
};
