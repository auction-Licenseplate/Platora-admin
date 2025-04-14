import clsx from "clsx";
import { TitleCompoStyled } from "./stlyed";
import { Button } from "antd";
import axios from "axios";
import {
  Tooltip,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Line,
  LineChart,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

interface TitleProps {
  title: string;
  button?: string;
  setPlusModal?: any;
}

const TitleCompo = ({ title, button, setPlusModal }: TitleProps) => {
  const [auctionData, setAuctionData] = useState<any[]>([]); // 경매 데이터를 저장할 상태
  const [bidHistory, setBidHistory] = useState<any[]>([]); // 시간대별 입찰가 데이터를 저장할 상태
  const [isLoading, setIsLoading] = useState(true);

  const plusImg = () => {
    setPlusModal("block");
  };

  // auctions 테이블에서 acution_num, final_price, bids 테이블에서 auctionId, create_at
  useEffect(() => {
    axios
      .get("http://localhost:5000/boards/getInfo")
      .then((res) => {
        console.log(res.data);
        // setAuctionData(res.data);
        // setBidHistory(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("경매 데이터 로딩 실패:", error);
        setIsLoading(false);
      });
  }, []);

  const auctionCountByProduct = auctionData.reduce((acc: any, item) => {
    const { auctionId, productName } = item;
    if (!acc[productName]) {
      acc[productName] = { productName, bidCount: 0, highestBid: 0 };
    }
    acc[productName].bidCount += 1;
    acc[productName].highestBid = Math.max(
      acc[productName].highestBid,
      item.final_price
    );
    return acc;
  }, {});

  const data = Object.values(auctionCountByProduct);

  return (
    <TitleCompoStyled className={clsx("title-compo")}>
      {title} {button ? <Button onClick={plusImg}>{button}</Button> : <></>}
      <div className="p-4 bg-white rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">입찰 현황</h2>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="productName" />
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip
            formatter={(value: number, name: string, props: any) => {
              if (props.dataKey === "highestBid") {
                return [`${Number(value).toLocaleString()}원`, "최고가"];
              } else if (props.dataKey === "bidCount") {
                return [`${value}회`, "입찰 수"];
              }
              return value;
            }}
          />

          <Legend />
          <Bar
            yAxisId="left"
            dataKey="bidCount"
            name="입찰 수"
            fill="#8884d8"
          />
          <Bar
            yAxisId="right"
            dataKey="highestBid"
            name="최고가"
            fill="#82ca9d"
          />
        </BarChart>
      </div>
      <div className="p-4 bg-white rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">시간대별 입찰가 추이</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={bidHistory}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip
              formatter={(value: number) => value.toLocaleString() + "원"}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#ff7300"
              strokeWidth={2}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </TitleCompoStyled>
  );
};

export default TitleCompo;
