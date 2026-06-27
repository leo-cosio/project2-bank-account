import { Chart } from "../charts";

function Stats() {
  return (
    <>
      <div className="h-75 w-100">
        <h3>Last 7 Days</h3>
        <Chart />
      </div>
    </>
  );
}

export default Stats;
