const routes = require(".");
const { parseQueryParam } = require('./utilities');

function listStances(db, req, res) {
    const politician = parseQueryParam(req, res, "politician", "string");
    const issue = parseQueryParam(req, res, "issue", "string");
    if (politician === undefined || issue === undefined) {
        return;
    }

    res.json([{ issue: 'sifdgiosdfbpi', source: 'oisidnugpa', sourceIsParty: false, opinion: 1, startDate: '0101290488203', endDate: '0101290488203' }, { issue: 'sifdgiosdfbpi', source: 'oisidnugpa', sourceIsParty: false, opinion: 1, startDate: '0101290488203', endDate: '0101290488203' }, { issue: 'sifdgiosdfbpi', source: 'oisidnugpa', sourceIsParty: false, opinion: 1, startDate: '0101290488203', endDate: '0101290488203' }]);
}

routes.stances = {
    listStances,
};
