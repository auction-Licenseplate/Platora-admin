import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface BidHistoryItem {
  time: string;
  price: number;
}

interface DataProps {
  bidHistory: BidHistoryItem[];
}

const LineChartDash = ({ bidHistory }: DataProps) => {
  return (
    <div className="lineChart">
      <h4>시간대별 입찰가 추이</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={bidHistory}
          margin={{ top: 20, right: 30, left: 0, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            tick={{ fontSize: 12 }}
            interval="preserveStartEnd"
            minTickGap={30}
          />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              fontSize: 12,
              padding: "6px 10px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
            formatter={(value: number) => value.toLocaleString() + "원"}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#ff7300"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartDash;
