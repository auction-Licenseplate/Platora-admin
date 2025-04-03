import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button } from "antd";
const ItemAgree = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/admins/iteminfo").then((res) => {
      console.log(res.data);
      setItem(res.data);
    });
  }, []);
  const dataSource = item
    ? item.map((x: any, i: number) => ({
        key: String(i + 1), // key는 문자열로 변환
        name: x.u_name,
        email: x.u_email,
        agree: <Button>승인</Button>,
        refuse: <Button>거절</Button>,
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
