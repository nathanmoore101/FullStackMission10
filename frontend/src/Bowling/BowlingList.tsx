import { useEffect, useState } from 'react';
import { BowlingData } from '../types/BowlingData';

function BowlingList() {
  const [bowlingData, setBowlingData] = useState<BowlingData[]>([]);

  useEffect(() => {
    const fetchBowlingData = async () => {
      const rsp = await fetch('http://localhost:5013/bowling');
      const f = await rsp.json();
      setBowlingData(f);
    };
    fetchBowlingData();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">Bowling</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlingData.map((f) => (
            <tr key={f.bowlerId}>
              <td>
                {f.bowlerFirstName} {f.bowlerMiddleInit} {f.bowlerLastName}
              </td>
              <td>{f.teamName}</td>
              <td>{f.bowlerAddress}</td>
              <td>{f.bowlerCity}</td>
              <td>{f.bowlerState}</td>
              <td>{f.bowlerZip}</td>
              <td>{f.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlingList;

// test test
