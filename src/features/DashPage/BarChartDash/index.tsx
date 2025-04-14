import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface AuctionDataItem {
  productName: string;
  bidCount: number;
  finalPrice: number;
}

interface DataProps {
  auctionData: AuctionDataItem[];
}

const BarChartDash = ({ auctionData }: DataProps) => {
  return (
    <div className="barChart">
      <h4>입찰 현황</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={auctionData}
          margin={{ top: 20, right: 30, left: 0, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="productName" tick={{ fontSize: 12 }} />
          <YAxis yAxisId="left" orientation="left" tick={{ fontSize: 12 }} />
          <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              fontSize: 12,
              padding: "6px 10px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
            formatter={(value: number, name: string, props: any) => {
              if (props.dataKey === "finalPrice") {
                return [`${Number(value).toLocaleString()}원`, "최고가"];
              } else if (props.dataKey === "bidCount") {
                return [`${value}회`, "입찰 수"];
              }
              return value;
            }}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar
            yAxisId="left"
            dataKey="bidCount"
            name="입찰 수"
            fill="#87aa89"
          />
          <Bar
            yAxisId="right"
            dataKey="finalPrice"
            name="최고가"
            fill="#d67f7f"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartDash;
