const routes = require(".");
const {parseQueryParam} = require('./utilities');

function listPoliticians(req, res) {
    const amount = parseQueryParam(req, res, "amount", "int", Number.POSITIVE_INFINITY);
    const issues = parseQueryParam(req, res, "issues", "json");
    if (amount === undefined || issues === undefined) {
        return;
    }

    console.log("LIST POLITICIANS");
    res.json([]);
}

function politicianMetric(req, res) {
    const politicianId = req.params.politician;
    const metric = req.params.metric;

    console.log(`POL METRIC ${politicianId} ${metric}`);
    res.json({value: -1});
}

routes.politicians = {
    listPoliticians,
    politicianMetric,
};
