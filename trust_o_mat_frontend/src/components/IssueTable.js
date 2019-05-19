import React from "react";
import "./IssueTable.scss";

function IssueTable(props) {
  const { issues, stances, politician } = props;
  if (!stances || !issues) return null;
  const timestamps = getAllTimeStamps(issues, stances, politician);
  const tableHeader = timestamps.map((timestamp) => (<th>{timestamp}</th>));
  console.log('Timestamps:: ' + JSON.stringify(timestamps));
  const tableRows = issues.map(function (issue) {
    var tableRow = stances.map(function (stance) {
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
      <table className="table table-hover table-dark table-responsive">
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
  console.log('Its these: ', stances);
  stances.forEach((stance) => {
    console.log('single stance:: ' + JSON.stringify(stance));
    set.add(stance.startDate);
    set.add(stance.endDate);
  })
  console.log('SET:: ' + JSON.stringify(set));
  return Array.from(set).sort();
}

export default IssueTable;
