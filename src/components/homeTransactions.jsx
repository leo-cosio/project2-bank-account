import { useState } from "react";
import { useAuth } from "../contexts/auth-context";
import { FilterButtons } from "./ui";

function HomeTransactions() {
  const { user } = useAuth();
  const { transactions } = user;
  const [filter, setFilter] = useState("all");

  const LAST_N = 5;
  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === "income") {
      return transaction.amount > 0;
    }
    if (filter === "expenses") {
      return transaction.amount < 0;
    }

    return true;
  });

  const lastTransactions = filteredTransactions.slice(-LAST_N).reverse();

  return (
    <>
      <FilterButtons filter={filter} setFilter={setFilter} />

      {lastTransactions.map((transaction) => {
        const isIncome = transaction.amount > 0;
        let icon;

        const incomeIcon = (
          <svg
            width={50}
            height={50}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            style={{
              backgroundColor: "#B5DCF2",
              borderRadius: "250px",
              padding: "8px",
              margin: "auto",
            }}
          >
            <path d="M296 88C296 74.7 306.7 64 320 64C333.3 64 344 74.7 344 88L344 128L400 128C417.7 128 432 142.3 432 160C432 177.7 417.7 192 400 192L285.1 192C260.2 192 240 212.2 240 237.1C240 259.6 256.5 278.6 278.7 281.8L370.3 294.9C424.1 302.6 464 348.6 464 402.9C464 463.2 415.1 512 354.9 512L344 512L344 552C344 565.3 333.3 576 320 576C306.7 576 296 565.3 296 552L296 512L224 512C206.3 512 192 497.7 192 480C192 462.3 206.3 448 224 448L354.9 448C379.8 448 400 427.8 400 402.9C400 380.4 383.5 361.4 361.3 358.2L269.7 345.1C215.9 337.5 176 291.4 176 237.1C176 176.9 224.9 128 285.1 128L296 128L296 88z" />
          </svg>
        );
        const expenseIcon = (
          <svg
            width={50}
            height={50}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            style={{
              backgroundColor: "#EDB7ED",
              borderRadius: "250px",
              padding: "8px",
              margin: "auto",
            }}
          >
            <path d="M31 169C21.6 159.6 21.6 144.4 31 135.1L103 63C112.4 53.6 127.6 53.6 136.9 63C146.2 72.4 146.3 87.6 136.9 96.9L105.9 127.9L173.6 127.9L173.6 127.9L511.9 127.9C547.2 127.9 575.9 156.6 575.9 191.9L575.9 370.1L570.8 365C542.7 336.9 497.1 336.9 469 365C441.8 392.2 440.9 435.6 466.2 463.9L533.9 463.9L502.9 432.9C493.5 423.5 493.5 408.3 502.9 399C512.3 389.7 527.5 389.6 536.8 399L608.8 471C618.2 480.4 618.2 495.6 608.8 504.9L536.8 576.9C527.4 586.3 512.2 586.3 502.9 576.9C493.6 567.5 493.5 552.3 502.9 543L533.9 512L127.8 512C92.5 512 63.8 483.3 63.8 448L63.8 269.8L68.9 274.9C97 303 142.6 303 170.7 274.9C197.9 247.7 198.8 204.3 173.5 176L105.8 176L136.8 207C146.2 216.4 146.2 231.6 136.8 240.9C127.4 250.2 112.2 250.3 102.9 240.9L31 169zM416 320C416 267 373 224 320 224C267 224 224 267 224 320C224 373 267 416 320 416C373 416 416 373 416 320zM504 255.5C508.4 256 512 252.4 512 248L512 200C512 195.6 508.4 192 504 192L456 192C451.6 192 447.9 195.6 448.5 200C452.1 229 475.1 251.9 504 255.5zM136 384.5C131.6 384 128 387.6 128 392L128 440C128 444.4 131.6 448 136 448L184 448C188.4 448 192.1 444.4 191.5 440C187.9 411 164.9 388.1 136 384.5z" />
          </svg>
        );
        const withdrawalIcon = (
          <svg
            width={50}
            height={50}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            style={{
              backgroundColor: "#FFCF9D",
              borderRadius: "250px",
              padding: "8px",
              margin: "auto",
            }}
          >
            <path d="M566.6 214.6L470.6 310.6C458.1 323.1 437.8 323.1 425.3 310.6C412.8 298.1 412.8 277.8 425.3 265.3L466.7 224L96 224C78.3 224 64 209.7 64 192C64 174.3 78.3 160 96 160L466.7 160L425.3 118.6C412.8 106.1 412.8 85.8 425.3 73.3C437.8 60.8 458.1 60.8 470.6 73.3L566.6 169.3C579.1 181.8 579.1 202.1 566.6 214.6zM169.3 566.6L73.3 470.6C60.8 458.1 60.8 437.8 73.3 425.3L169.3 329.3C181.8 316.8 202.1 316.8 214.6 329.3C227.1 341.8 227.1 362.1 214.6 374.6L173.3 416L544 416C561.7 416 576 430.3 576 448C576 465.7 561.7 480 544 480L173.3 480L214.7 521.4C227.2 533.9 227.2 554.2 214.7 566.7C202.2 579.2 181.9 579.2 169.4 566.7z" />
          </svg>
        );

        switch (transaction.type) {
          case "withdrawal":
            icon = withdrawalIcon;
            break;
          case "deposit":
            icon = incomeIcon;
            break;
          case "transfer":
            icon = expenseIcon;
            break;
        }

        return (
          <div
            key={transaction.id}
            className="border-bottom mx-3 mt-3 px-1 pb-3 d-flex justify-content-between"
          >
            <div className="d-flex">
              {icon}
              <div className="ms-3">
                <h5 className="text-capitalize">{transaction.type}</h5>
                <p className="text-capitalize">{transaction.description}</p>
                <small>{transaction.date}</small>
              </div>
            </div>
            <h5
              className={
                "fw-semibold " + (isIncome ? "text-success" : "text-danger")
              }
            >
              {isIncome ? `+${transaction.amount}` : `${transaction.amount}`}
            </h5>
          </div>
        );
      })}
    </>
  );
}

export default HomeTransactions;
