const routes = require(".");
const {parseQueryParam} = require('./utilities');
const metrics = require('./metrics');

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

    let metricFunction;
    switch (metric) {
        case "flip-floppiness":
            metricFunction = metrics.flipFlopiness;
            break;
        case "party-adherence":
            metricFunction = metrics.partyAdherence;
            break;
        default:
            res.status(404).json({message: `No metric '${metric}' for parties`});
            return;
    }

    metricFunction(politicianId, db).then(value => res.json({value}));
}

routes.politicians = {
    listPoliticians,
    politicianMetric,
};
