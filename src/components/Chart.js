import React from "react";
import * as Recharts from "recharts";

export default function Chart() {
  const {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } = Recharts;
  const data = [
    { name: "Rent", 2017: 4000, 2018: 2400, amt: 2400 },
    { name: "Food", 2017: 3000, 2018: 1398, amt: 2210 },
    { name: "Transport", 2017: 2000, 2018: 9800, amt: 2290 },
    { name: "Insurance", 2017: 2780, 2018: 3908, amt: 2000 },
    { name: "Goods", 2017: 1890, 2018: 4800, amt: 2181 },
    { name: "Vacation", 2017: 2390, 2018: 3800, amt: 2500 }
  ];

  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="2017" fill="#8884d8" />
      <Bar dataKey="2018" fill="#82ca9d" />
    </BarChart>
  );
}
