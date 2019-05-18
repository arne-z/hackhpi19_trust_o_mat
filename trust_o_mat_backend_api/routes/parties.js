const routes = require(".");
const {parseQueryParam} = require('./utilities');

function listParties(req, res) {
    const amount = parseQueryParam(req, res, "amount", "int", Number.POSITIVE_INFINITY);
    const issues = parseQueryParam(req, res, "issues", "json");
    if (amount === undefined || issues === undefined) {
        return;
    }

    console.log("LIST PARTIES");
    res.json({});
}

routes.parties = {
    listParties,
};
