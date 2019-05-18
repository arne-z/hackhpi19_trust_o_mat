const routes = require(".");
const {parseQueryParam} = require('./utilities');

function listParties(req, res) {
    const amount = parseQueryParam(req, res, "amount", "int", Number.POSITIVE_INFINITY);
    const issues = parseQueryParam(req, res, "issues", "json");
    if (amount === undefined || issues === undefined) {
        return;
    }

    console.log("LIST PARTIES");
    res.json([]);
}

function partyMetric(req, res) {
    const partyId = req.params.party;
    const metric = req.params.metric;

    console.log(`METRIC ${partyId} ${metric}`);
    res.json({value: -1});
}

routes.parties = {
    listParties,
    partyMetric,
};
