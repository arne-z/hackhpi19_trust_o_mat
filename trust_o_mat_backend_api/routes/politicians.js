const routes = require(".");
const {parseQueryParam} = require('./utilities');

function listPoliticians(db, req, res) {
    const amount = parseQueryParam(req, res, "amount", "int", Number.POSITIVE_INFINITY);
    const issues = parseQueryParam(req, res, "issues", "json");
    if (amount === undefined || issues === undefined) {
        return;
    }

    res.json([]);
}

function politicianMetric(db, req, res) {
    const politicianId = req.params.politician;
    const metric = req.params.metric;

    res.json({value: -1});
}

routes.politicians = {
    listPoliticians,
    politicianMetric,
};
