import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useAuth } from "../../contexts/auth-context";

function getLast7DaysIncomeExpenses(transactions) {
  const today = new Date();
  const days = [];

  // Creamos array de días: del más antiguo al más reciente
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);

    const key = d.toISOString().slice(0, 10); // "YYYY-MM-DD"
    days.push({
      dateKey: key,
      label: d.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
      }),
      income: 0,
      expense: 0,
    });
  }

  const byDate = Object.fromEntries(days.map((d) => [d.dateKey, d]));

  transactions.forEach((tx) => {
    const txDate = new Date(tx.date);
    const key = txDate.toISOString().slice(0, 10);

    if (!byDate[key]) return;

    if (tx.amount > 0) {
      byDate[key].income += tx.amount;
    } else if (tx.amount < 0) {
      byDate[key].expense += Math.abs(tx.amount);
    }
  });

  return days;
}

function Chart() {
  const { user } = useAuth();
  const data = getLast7DaysIncomeExpenses(user.transactions);

  return (
    <ResponsiveContainer width="100%" height="500">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="income" name="Ingresos" fill="#C89A76" />
        <Bar dataKey="expense" name="Gastos" fill="#ffffff" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;
