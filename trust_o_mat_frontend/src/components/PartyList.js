import React from 'react';
import './PartyList.scss';

function No() {

    return (
        <td className="No">
            No
        </td>
    )
}

function Yes() {

    return (
        <td className="Yes">
            Yes
        </td>
    )
}

function PartyList() {
    return (
        <div className="PartyList">

            <h3>These Parties have Voted along the Stances you selected:</h3>

            <table className="PartyList__table">
                <tr>
                    <th>
                        Issues:
                    </th>
                    <td>
                        Bürgerentscheide
                    </td>
                    <td>
                        CO2 Ziele
                    </td>
                    <td>
                        Gemeinsame Armee
                    </td>
                    <td>
                        Bio Landwirtschaft

                 </td>
                </tr>
                <tr>
                    <th>
                        Your Stance:
                    </th>
                    <No />
                    <Yes />
                    <Yes />
                    <No />
                </tr>
                <tr>
                    <th>
                        MFP
                    </th>
                    <No />
                    <Yes />
                    <Yes />
                    <No />
                </tr>
                <tr>
                    <th>
                        Die Grünen
                    </th>
                    <No />
                    <Yes />
                    <Yes />
                    <Yes />
                </tr>
                <tr>
                    <th>
                        CDU
                    </th>
                    <No />
                    <No />
                    <No />
                    <No />
                </tr>
                <tr>
                    <th>
                        SPD
                    </th>
                    <Yes />
                    <Yes />
                    <Yes />
                    <Yes />
                </tr>
            </table>

        </div >
    )
}

export default PartyList;