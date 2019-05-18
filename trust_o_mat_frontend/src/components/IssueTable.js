import React from "react";
import "./IssueTable.scss";
import {getStances} from '../RequestController';

function IssueTable(props) {
  const {issues, politician} = props;
  const timestamps = getAllTimeStamps(issues, politician);
  const tableHeader = timestamps.map(function(timestamp){
                        return <th>{timestamp}</th>;
                      });
const tableRows = issues.map(function(issue) {
  const allStancesToIssue = getStances(politician, issue);
  var tableRow = allStancesToIssue.map(function(stance) {
    if (timestamps.contains(stance[endDate])) {
      return <td>x</td>
    } else {
      return <td></td>
    }
  })
    return (
      <tr>
      <th scope="row">issue</th>
      {tableRow}
      </tr>
    )
})

    return (
        <div className="IssueTable">
        <table class="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Issues</th>
              {tableHeader}
            </tr>
          </thead>
          <tbody>
          {tableRows}
          </tbody>
        </table>
        </div>
    )
}

function getAllTimeStamps(issues, politician) {
  var set = new Set();
  for (issue in issue) {
    var stances = getStances(politician, issue);
    for (stance in stances) {
      set.add(stance[startDate]);
      set.add(stance[endtDate]);
    }
  }
  console.Log(Array.from(set).sort());
  return Array.from(set).sort();
}

export default IssueTable;
