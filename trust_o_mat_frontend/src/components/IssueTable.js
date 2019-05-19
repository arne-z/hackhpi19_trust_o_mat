import React from "react";
import "./IssueTable.scss";

function IssueTable(props) {
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
            <td className="no"></td>
            <td className="yes"></td>
            <td className="yes"></td>
            <td className="yes"></td>
          </tr>
          <tr>
            <th scope="row">CO2-Ausstoß</th>
            <td className="no"></td>
            <td className="no"></td>
            <td className="yes"></td>
            <td className="no"></td>
          </tr>
          <tr>
            <th scope="row">Europäische Armee</th>
            <td className="yes"></td>
            <td className="yes"></td>
            <td className="yes"></td>
            <td className="no"></td>
          </tr>
          <tr>
            <th scope="row">Landwirtschaftsförderung</th>
            <td className="no"></td>
            <td className="yes"></td>
            <td className="no"></td>
            <td className="yes"></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default IssueTable;
