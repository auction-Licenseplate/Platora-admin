import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button } from "antd";

interface itemProps {
  fail: string;
  setFail: (value: string) => void;
}
const ItemAgree = ({ fail, setFail }: itemProps) => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/admins/iteminfo").then((res) => {
      console.log(res.data);
      setItem(res.data);
    });
  }, []); // 경매 물품 요청 누나 원하는 데이터 양식으로 보내줘 필수값(유저 아이디 , 타이틀 ,이미지)

  // 경매 승인 버튼 온클릭시 요청
  const success = (userid: string, platenum: string) => {
    axios
      .post("http://localhost:5000/admins/iteminfo/sucess", {
        userid,
        platenum,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  const failvalue = () => {
    setFail("block");
  };
  const dataSource = item
    ? item.map((x: any, i: number) => ({
        key: String(i + 1), // key는 문자열로 변환
        name: x.u_name,
        email: x.u_email,
        title: x.v_title,
        plateNum: x.v_plate_num,
        file: x.v_car_img,
        agree: (
          <Button
            onClick={() => {
              success(x.u_id, x.v_plate_num);
            }}
          >
            승인
          </Button>
        ),
        refuse: (
          <Button
            onClick={() => {
              setFail("block");
            }}
          >
            거절
          </Button>
        ),
      }))
    : [];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "plateNum",
      dataIndex: "plateNum",
      key: "plateNum",
    },
    {
      title: "file",
      dataIndex: "file",
      key: "file",
    },
    {
      title: "승인",
      dataIndex: "agree",
      key: "agree",
    },
    {
      title: "거절",
      dataIndex: "refuse",
      key: "refuse",
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
};

export default ItemAgree;
