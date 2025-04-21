import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button } from "antd";
import Image from "next/image";

const Img = () => {
  const [img, setImg] = useState([]);
  useEffect(() => {
    axios.get("http://15.164.52.122/admins/guitar/img").then((res) => {
      console.log(res.data);
      setImg(res.data);
    });
  }, []); // 배너 이미지 요청 (title , img 필요)

  const imgdel = (title: string) => {
    axios
      .post("http://15.164.52.122/admins/guitar/imgdel", { title })
      .then((res) => {
        console.log(res.data);
      });
  };

  const dataSource = img
    ? img.map((x: any, i: number) => ({
        key: String(i + 1), // key는 문자열로 변환
        title: x.banner_title,
        img: (
          <Image
            src={`http://15.164.52.122/uploads//${x.banner_img}`}
            width={100}
            height={100}
            alt=""
          />
        ),
        refuse: (
          <Button
            onClick={() => {
              imgdel(x.banner_title);
            }}
          >
            삭제
          </Button>
        ),
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
