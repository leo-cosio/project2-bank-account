import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

const API = "https://api.bank.com";

const users = [
  {
    uid: self.crypto.randomUUID(),
    credentials: {
      email: "jane.doe@user.com",
      password: "123123",
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
        date: "2026-06-08T18:30",
      },
      {
        id: 2,
        type: "deposit",
        amount: +1500,
        description: "Salario",
        date: "2026-06-09T18:30",
      },
      {
        id: 3,
        type: "withdrawal",
        amount: -500,
        description: "Efectivo",
        date: "2026-06-10T18:30",
      },
    ],
  },
  {
    uid: self.crypto.randomUUID(),
    credentials: {
      email: "jon.doe@user.com",
      password: "123123",
    },
    name: "Jon",
    surname: "Doe",
    balance: 999,
    transactions: [
      {
        id: 1,
        type: "transfer",
        amount: -120,
        description: "Compra supermercado",
        date: "2026-06-08T12:15",
      },
      {
        id: 2,
        type: "deposit",
        amount: +2000,
        description: "Nómina",
        date: "2026-06-01T09:00",
      },
      {
        id: 3,
        type: "withdrawal",
        amount: -200,
        description: "Cajero automático",
        date: "2026-06-05T18:00",
      },
    ],
  },
  {
    uid: self.crypto.randomUUID(),
    credentials: {
      email: "maria.garcia@user.com",
      password: "123123",
    },
    name: "María",
    surname: "García",
    balance: 5600,
    transactions: [
      {
        id: 1,
        type: "deposit",
        amount: +1800,
        description: "Salario",
        date: "2026-06-02T10:00",
      },
      {
        id: 2,
        type: "transfer",
        amount: -75,
        description: "Regalo cumpleaños",
        date: "2026-06-04T20:30",
      },
      {
        id: 3,
        type: "withdrawal",
        amount: -100,
        description: "Efectivo",
        date: "2026-06-06T11:45",
      },
    ],
  },
  {
    uid: self.crypto.randomUUID(),
    credentials: {
      email: "carlos.ruiz@user.com",
      password: "123123",
    },
    name: "Carlos",
    surname: "Ruiz",
    balance: 2300,
    transactions: [
      {
        id: 1,
        type: "deposit",
        amount: +1200,
        description: "Freelance",
        date: "2026-06-03T16:20",
      },
      {
        id: 2,
        type: "transfer",
        amount: -30,
        description: "Netflix",
        date: "2026-06-07T08:00",
      },
      {
        id: 3,
        type: "transfer",
        amount: -45,
        description: "Gasolina",
        date: "2026-06-09T19:10",
      },
    ],
  },
  {
    uid: self.crypto.randomUUID(),
    credentials: {
      email: "laura.martin@user.com",
      password: "123123",
    },
    name: "Laura",
    surname: "Martín",
    balance: 15400,
    transactions: [
      {
        id: 1,
        type: "deposit",
        amount: +3000,
        description: "Bonus",
        date: "2026-06-01T14:00",
      },
      {
        id: 2,
        type: "transfer",
        amount: -200,
        description: "Alquiler",
        date: "2026-06-05T09:30",
      },
      {
        id: 3,
        type: "withdrawal",
        amount: -150,
        description: "Efectivo",
        date: "2026-06-08T17:00",
      },
    ],
  },
];

const handleLogin = http.post(`${API}/login`, async ({ request }) => {
  const login = await request.json();

  const user = users.find(
    (user) =>
      user.credentials.email === login.email &&
      user.credentials.password === login.password,
  );

  if (!user) {
    return HttpResponse.json(
      { message: "Invalid username or password" },
      { status: 401 },
    );
  }

  return HttpResponse.json(user);
});

// TODO HandleTransaction (POST)

const worker = setupWorker(handleLogin);
export default worker;
