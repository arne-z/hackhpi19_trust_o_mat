import axios from 'axios';

const baseUrl = 'http://localhost:3001/';

const api = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
});

class RequestController {
    static async getIssues(amount = 5) {
        const issues = await api.get('/issues', { amount: amount });
        console.log('in the api: ', issues);
        return issues.data;
    }

    static async getStances(politician, issue) {
        const stances = await api.get('/stances', { politician: politician, issue: issue });
        return stances.data;
    }

    static async getVotes(politician, issue) {
        return await api.get('/votes', { politician: politician, issue: issue })
    }

    static async getPoliticians(amount = 5, issues) {
        return await api.get('/politicians', { amount: amount, issues: issues })
    }

    static async getParties(oppinion) {
        const issues = []
        for (const key in oppinion) {
            issues.push({ issueId: key, opinion: oppinion[key] ? 1 : -1 })
        }
        return await api.get('/parties', { issues: issues })
    }

    static async getPartyMetric(party, metric) {
        return await api.get('/party/' + party + '/metrics/' + metric, { party: party, metric: metric })
    }
}
export default RequestController;
