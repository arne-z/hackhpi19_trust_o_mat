const routes = require(".");

function listParties(req, res) {
    let amount = Number.POSITIVE_INFINITY;
    const queryAmount = req.query.amount;
    if (queryAmount != null) {
        const amount = parseInt(queryAmount);
    }

    let issues = null;
    const queryIssues = req.query.issues;
    if (queryIssues != null) {
        issues = JSON.parse(req.query.issues);
    }

    console.log("LIST PARTIES");
    res.json({});
}

routes.parties = {
    listParties,
};
