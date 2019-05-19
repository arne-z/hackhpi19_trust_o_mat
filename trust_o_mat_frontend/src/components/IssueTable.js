import React from "react";
import "./IssueTable.scss";
import {getStances} from '../RequestController';

function IssueTable(props) {
  const {issues, stances, politician} = props;
  console.log("issues", issues);
  console.log("stances", stances);
  console.log("politician", politician);
  const timestamps = getAllTimeStamps(issues, stances, politician);
  const tableHeader = timestamps.map(function(timestamp){
                        return <th>{timestamp}</th>;
                      });
console.log(issues);
const tableRows = issues.map(function(issue) {
  var tableRow = stances.map(function(stance) {
    console.log(timestamps);
    if (timestamps.contains(stance.endDate)) {
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
        <table class="table table-hover table-dark table-responsive">
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

function getAllTimeStamps(issues, stances, politician) {
  var set = new Set();
  for (var stance in stances) {
    set.add(stance.startDate);
    set.add(stance.endtDate);
  }
  console.log(set);
  return Array.from(set).sort();
}

export default IssueTable;
