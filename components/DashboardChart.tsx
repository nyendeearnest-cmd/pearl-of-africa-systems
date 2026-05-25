"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {

  analytics: {
    name: string;
    total: number;
  }[];
}

export default function DashboardChart({
  analytics,
}: Props) {

  return (

    <ResponsiveContainer
      width="100%"
      height="100%"
    >

      <BarChart data={analytics}>

        <XAxis dataKey="name" />

        <YAxis />

        <Tooltip />

        <Bar
          dataKey="total"
          fill="#22c55e"
          radius={[10, 10, 0, 0]}
        />

      </BarChart>

    </ResponsiveContainer>

  );
}