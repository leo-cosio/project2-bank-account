import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

const API = "https://api.bank.com";

const users = [
  {
    uid: self.crypto.randomUUID(),
    credentials: {
      email: "jane.doe@user.com",
      password: "12345678",
    },
    name: "Jane",
    surname: "Doe",
    balance: 10000,
    transactions: [
      {
        id: 1,
        type: "transfer", // transfer, deposit, withdrawal
        amount: -50,
        description: "Cena con amigos",
        date: "2026-06-09T18:30",
      },
      {
        id: 2,
        type: "deposit", // transfer, deposit, withdrawal
        amount: +1500,
        description: "Salario",
        date: "2026-06-09T18:30",
      },
      {
        id: 3,
        type: "withdrawal", // transfer, deposit, withdrawal
        amount: -500,
        description: "Efectivo",
        date: "2026-06-09T18:30",
      },
    ],
  },
  {
    uid: self.crypto.randomUUID(),
    credentials: {
      email: "jon.doe@user.com",
      password: "12345678",
    },
    name: "Jon",
    surname: "Doe",
    balance: 10000,
    transactions: [
      {
        id: 1,
        type: "transfer", // transfer, deposit, withdrawal
        amount: -50,
        description: "Cena con amigos",
        date: "2026-06-09T18:30",
      },
      {
        id: 2,
        type: "deposit", // transfer, deposit, withdrawal
        amount: +1500,
        description: "Salario",
        date: "2026-06-09T18:30",
      },
      {
        id: 3,
        type: "withdrawal", // transfer, deposit, withdrawal
        amount: -500,
        description: "Efectivo",
        date: "2026-06-09T18:30",
      },
    ],
  },
];

const handleLogin = http.post(`${API}/login`, async ({ request }) => {
  const login = await request.json();

  const user = users.find((user) => user.credentials === login);

  return HttpResponse.json(user);
});

// TODO HandleTransaction (POST)

const worker = setupWorker(handleLogin);
export default worker;
