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
})*/
    return (
      <div className="IssueTable">
        <table class="table table-hover table-dark table-responsive">
          <thead>
            <tr>
              <th scope="col">Issues</th>
              <th>2015-10-31</th>
              <th>2017-09-29</th>
              <th>2018-04-04</th>
              <th>2018-04-12</th>
            </tr>
          </thead>
          <tbody>
          <tr>
      <th scope="row">EU-weite Bürgerentscheide</th>
      <td className = "no"></td>
      <td className = "yes"></td>
      <td className = "yes"></td>
      <td className = "yes"></td>
    </tr>
    <tr>
      <th scope="row">CO2-Ausstoß</th>
      <td className = "no"></td>
      <td className = "no"></td>
      <td className = "yes"></td>
      <td className = "no"></td>
    </tr>
    <tr>
      <th scope="row">Europäische Armee</th>
      <td className = "yes"></td>
      <td className = "yes"></td>
      <td className = "yes"></td>
      <td className = "no"></td>
    </tr>
    <tr>
      <th scope="row">Landwirtschaftsförderung</th>
      <td className = "no"></td>
      <td className = "yes"></td>
      <td className = "no"></td>
      <td className = "yes"></td>
    </tr>
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
