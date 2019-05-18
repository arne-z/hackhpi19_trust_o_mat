const routes = require(".");
const {parseQueryParam} = require('./utilities');


function listIssues(db, req, res) {
    const amount = parseQueryParam(req, res, "amount", "int", 0);
    if (amount === undefined) {
        return;
    }

    db.issues(amount).then((issues) => {
        res.json(issues);
    });
}

routes.issues = {
    listIssues,
};
