const routes = require(".");
const {parseQueryParam} = require('./utilities');

function listParties(db, req, res) {
    const amount = parseQueryParam(req, res, "amount", "int", Number.POSITIVE_INFINITY);
    const issues = parseQueryParam(req, res, "issues", "json");
    if (amount === undefined || issues === undefined) {
        return;
    }

    res.json([]);
}

function partyMetric(db, req, res) {
    const partyId = req.params.party;
    const metric = req.params.metric;

    res.json({value: -1});
}

routes.parties = {
    listParties,
    partyMetric,
};
