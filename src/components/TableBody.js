import React from "react";

const TableBody = props => {
  return (
    <table className="standings">
      <tbody>
        <tr className="table-head">
          <td className="team-position">#</td>
          <td className="team-name">Team</td>
          <td title="Matches played">MatchPlayed</td>
          <td title="Wins">Wins</td>
          <td title="Draws">Draws</td>
          <td title="Losses">Losses</td>
          <td title="Team points">Points</td>
        </tr>
        {props.children}
      </tbody>
    </table>
  );
};

export default TableBody;

/*<tr className="table-head">
<td className="team-position">#</td>
<td className="team-name">Team</td>
<td title="Matches played">MatchPlayed</td>
<td title="Wins">W</td>
<td title="Draws">D</td>
<td title="Losses">L</td>
<td title="Goals for">GF</td>
<td title="Goals against">GA</td>
<td title="Goals difference">GD</td>
<td title="Team points">Pts</td>
</tr> */
