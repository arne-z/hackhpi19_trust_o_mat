const routes = require(".");
const {parseQueryParam} = require('./utilities');

function listStances(db, req, res) {
    const politician = parseQueryParam(req, res, "politician", "string");
    const issue = parseQueryParam(req, res, "issue", "string");
    if (politician === undefined || issue === undefined) {
        return;
    }

    res.json([]);
}

routes.stances = {
    listStances,
};
