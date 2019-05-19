async function flipFlopiness(partyOrPoliticianIddb, ) {
    return -1;
}

async function uniformity(partyId, db) {
    const politicians = await db.politiciansOfParty(partyId);
    const issues = await db.issues();
    const partyStances = await Promise.all(issues.map(async ({_id: issueId}) => await db.getStances(partyId, issueId)));
    const latestPartyStances = partyStances.map(stances =>
        stances.sort(
            ({startDate: startDateA}, {startDate: startDateB}) => startDateB.getTime() - startDateA.getTime())[0]);
    const issuesToPoliticianOpinions = new Map();
    for (const issue of issues) {
        issuesToPoliticianOpinions.set(issue._id, []);
    }
    for (const politician of politicians) {
        const politicianStances = await Promise.all(issues.map(async ({_id: issueId}) => await db.getStances(politician._id, issueId)));
        const latestPoliticianStances = politicianStances.map(stances =>
            stances.sort(
                ({startDate: startDateA}, {startDate: startDateB}) => startDateB.getTime() - startDateA.getTime())[0]);
        for (const issue of issues) {
            const relevantStance = latestPoliticianStances.find(stance => stance.issue.toString() === issue._id.toString());
            issuesToPoliticianOpinions.get(issue._id).push(relevantStance.opinion);
        }
    }

    const samenessValues = [];
    for (const issue of issues) {
        const partyStance = latestPartyStances.find(stance => stance.issue.toString() === issue._id.toString());
        const partyOpinion = partyStance.opinion;
        const politicianOpinions = issuesToPoliticianOpinions.get(issue._id);
        const sameOpinions = politicianOpinions.filter(polOp => polOp === partyOpinion).length;
        samenessValues.push(sameOpinions / politicianOpinions.length);
    }
    return samenessValues.reduce((acc, cur) => acc + cur) / samenessValues.length;
}

async function partyAdherence(politicianId, db) {
    return -1;
}

module.exports = {
    flipFlopiness,
    uniformity,
    partyAdherence,
};
