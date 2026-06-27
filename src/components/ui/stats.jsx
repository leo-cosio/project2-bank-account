import { Chart } from "../charts";

function Stats() {
  return (
    <>
      <div
        className="h-75 p-3 d-flex flex-column justify-content-between"
        style={{ backgroundColor: "#FFF1E7" }}
      >
        <h3>Last 7 Days</h3>
        <Chart />
      </div>
    </>
  );
}

export default Stats;
