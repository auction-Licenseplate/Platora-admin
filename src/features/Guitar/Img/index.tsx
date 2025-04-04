import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button } from "antd";

const Img = () => {
  const [img, setImg] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/admins/guitar/img").then((res) => {
      console.log(res.data);
      setImg(res.data);
    });
  }, []); // 배너 이미지 요청 (title , img 필요)
  const dataSource = img
    ? img.map((x: any, i: number) => ({
        key: String(i + 1), // key는 문자열로 변환
        title: x.title,
        img: x.img,
        refuse: <Button>삭제</Button>,
      }))
    : [];
  const columns = [
    {
      title: "title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "img",
      dataIndex: "img",
      key: "img",
    },

    {
      title: "거절",
      dataIndex: "refuse",
      key: "refuse",
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
};

export default Img;
