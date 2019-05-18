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
        var temp = undefined;
        if (oppinion[key] === undefined) {
            temp = 0;
        } else if (oppinion[key] === true) {
            temp = 1;
        } else {
            temp = 1;
        }
        issues.push({ issueId: key, opinion: temp })
    }
    console.log(issues);
    return api.get('/parties', { issues: issues })
}

export { getIssues, getParties };