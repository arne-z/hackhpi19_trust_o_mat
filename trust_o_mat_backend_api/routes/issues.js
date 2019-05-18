const routes = require(".");
const {parseQueryParam} = require('./utilities');

function listIssues(req, res) {
    const amount = parseQueryParam(req, res, "amount", "int", Number.POSITIVE_INFINITY);
    if (amount === undefined) {
        return;
    }

    console.log("LIST ISSUES");
    res.json([]);
}

routes.issues = {
    listIssues,
};
