import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CryptoLineChart = ({ data }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="priceUsd" stroke="#00ff00" />
          <Line type="monotone" dataKey="name" stroke="#ff6600" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 20000]} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default CryptoLineChart;
