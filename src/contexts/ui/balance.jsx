import { useAuth } from "../auth-context";

function Balance({ balance }) {
  return (
    <>
      <p>{balance}</p>
    </>
  );
}

export default Balance;
