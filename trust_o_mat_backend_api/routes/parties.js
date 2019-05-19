const routes = require(".");
const {parseQueryParam} = require('./utilities');

function listParties(db, req, res) {
    const amount = parseQueryParam(req, res, "amount", "int", 0);
    const issues = parseQueryParam(req, res, "issues", "json");
    if (amount === undefined || issues === undefined) {
        return;
    }

    if (issues === null) {
        db.parties(amount).then((parties) => {
            res.json(parties);
        });
    } else {
        partiesByIssues(issues, amount)((parties) => {
            res.json(parties);
        });
    }

}

async function partiesByIssues(issues, amount) {
    const parties = await db.parties();
    const partyFitnessRatings = new Map();
    for (const party of parties) {
        let partyFitness = 0;
        for (const {issueId, opinion: userOpinion} of issues) {
            const stances = await db.getStances(party._id, issueId);
            for (const {opinion: partyOpinion} of stances) {
                partyFitness += Math.abs(partyOpinion - userOpinion);
            }
        }
        partyFitnessRatings.set(party, partyFitness);
    }

    const resultParties = Array.from(partyFitnessRatings)
        .sort(([, fitnessA], [, fitnessB]) => fitnessA - fitnessB);
    if (amount > 0) {
        resultParties.slice(0, amount)
    }
    return resultParties.map(([party,]) => party);
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
