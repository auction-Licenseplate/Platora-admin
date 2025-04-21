import TitleCompo from "@/components/TitleCompo";
import axios from "axios";
import dayjs from "dayjs";
import { DashStyled } from "./styled";
import { useEffect, useState } from "react";

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
import BarChartDash from "./BarChartDash";
import LineChartDash from "./LineChartDash";

const DashBoard = () => {
  const [bidHistory, setBidHistory] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [auctionData, setAuctionData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://15.164.52.122:5000/boards/getInfo")
      .then((res) => {
        const now = new Date().getTime();

        const bidHistoryList: { time: string; price: number }[] = [];
        const auctionMap: Record<string, any> = {};

        res.data.forEach((item: any) => {
          const endTime = new Date(item.auction_end_time).getTime();
          const isOngoing = endTime > now;

          // 경매 종료
          if (!isOngoing) return;

          const id = item.bid_auctionId;

          if (!auctionMap[id]) {
            auctionMap[id] = {
              auctionNum: item.auction_auction_num,
              productName: item.auction_auction_num,
              finalPrice: item.auction_final_price,
              bidCount: 0,
            };
          }

          auctionMap[id].bidCount += 1;

          const bidDate = dayjs(item.bid_createAt);
          if (bidDate.isValid()) {
            bidHistoryList.push({
              time: bidDate.format("YYYY-MM-DD HH:mm"),
              price: item.bid_price,
            });
          }
        });

        setAuctionData(Object.values(auctionMap));
        setBidHistory(
          bidHistoryList.sort(
            (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
          )
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("경매 데이터 로딩 실패:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <DashStyled>
      <TitleCompo title="대시보드" />
      {/* 입찰 현황 */}
      <BarChartDash auctionData={auctionData} />

      {/* 시간대별 입찰가 추이 */}
      <LineChartDash bidHistory={bidHistory} />
    </DashStyled>
  );
};
export default DashBoard;
