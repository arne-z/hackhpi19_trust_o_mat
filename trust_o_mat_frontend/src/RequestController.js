import axios from 'axios';

const baseUrl = 'http://api.example.com';

const api = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
});

function getIssues(amount = 5) {
    return api.get('/issues', { amount: amount })
}

function getParties(oppinion) {
    const issues = []
    for (const key in oppinion) {
        issues.push({ issueId: key, opinion: oppinion[key] ? 1 : -1 })
    }
    console.log(issues);
    return api.get('/parties', { issues: issues })
}

export { getIssues, getParties };