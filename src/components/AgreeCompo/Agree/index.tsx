import axios from "axios";
import { AgreeStyled } from "./styled";
import { useEffect, useState } from "react";
import { Table, Button } from "antd";

const Agree = () => {
  const [file, setFile] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/admins/fileinfo").then((res) => {
      setFile(res.data);
    });
  }, []);
  const dataSource = file
    ? file.map((x: any, i: number) => ({
        key: String(i + 1), // key는 문자열로 변환
        name: x.u_name,
        email: x.u_email,
        plateNum: x.v_plate_num,
        file: (
          <a href={x.u_certification} target="_blank" rel="noopener noreferrer">
            <Button>파일 보기</Button>
          </a>
        ),
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

export default Agree;
