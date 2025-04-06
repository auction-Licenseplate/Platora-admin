import axios from "axios";
import { AgreeStyled } from "./styled";
import { useEffect, useState } from "react";
import { Table, Button } from "antd";
interface failporps {
  fail: any;
  setFail: any;
}
const Agree = ({ fail, setFail }: failporps) => {
  const [num, setNum] = useState(0);

  //승인 상태 승인으로 변경 함수
  const pendding = (userId: number) => {
    axios
      .post("http://localhost:5000/admins/pendding", { userId })
      .then((res) => {
        console.log(res.data);
        setNum(num + 1);
      });
  };

  const [file, setFile] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/admins/fileinfo").then((res) => {
      console.log(res.data);
      setFile(res.data);
    });
  }, [num]);
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
        agree: (
          <Button
            onClick={() => {
              pendding(x.u_id);
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
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default Agree;
