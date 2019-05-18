# Backend API Specification

#### Issues

##### List issues
`GET /issues`

###### Returns
JSON list of issues, sorted by relevance

###### Parameters
- amount: number

  Maximum amount of returned issues

---

#### Parties

##### List parties
`GET /parties`

###### Returns
JSON list of parties

###### Parameters
- amount: number

  Maximum amount of returned parties

- issues: JSON list of issues and stances

  Form: `[{issueId: id1, opinion: opinion1}, ...]`
  
  opinion must be 1 for supporting, -1 for opposing, and 0 for abstaining


##### Get metric for party
`GET /parties/{party-id}/metrics/{metric}`

###### Returns
JSON with metric value, eg. `{"value": 84}`

###### Parameters
- amount: number

  Maximum amount of returned parties

- issues: JSON list of issues and stances

  Form: `[{issueId: id1, opinion: opinion1}, ...]`
  
  opinion must be 1 for supporting, -1 for opposing, and 0 for abstaining

---

#### Politicians

Exactly like parties, but the routes begin with `/politicians`

---

#### Stances

##### List stances
`GET /stances`

###### Returns
JSON list of stances

###### Parameters
- politician: politician id

  Filter for given politician

- issue: issue id

  Filter for issue

---

#### Votes

Exactly like stances, but the routes begin with `/votes'
