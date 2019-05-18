import axios from 'axios';

const baseUrl = 'http://localhost:3001/';

const api = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
});


function getIssues(amount = 5) {
    return api.get('/issues', { amount: amount })
}

function getStances(politician, issue) {
    return api.get('/stances', { politician: politician, issue: issue })
}

function getVotes(politician, issue) {
    return api.get('/votes', { politician: politician, issue: issue })
}

function getPoliticians(amount = 5, issues) {
    return api.get('/politicians', { amount: amount, issues: issues })
}

function getParties(oppinion) {
    const issues = []
    for (const key in oppinion) {
        issues.push({ issueId: key, opinion: oppinion[key] ? 1 : -1 })
    }
    return api.get('/parties', { issues: issues })
}

function getPartyMetric(party, metric) {
  return api.get('/party/'+party+'/metrics/'+metric, { party: party, metric:metric })
}

export { getIssues, getParties, getStances, getVotes, getPoliticians,getPartyMetric };
