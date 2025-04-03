import axios from "axios";
import { UserlistStyled } from "./styled";
import { useEffect, useState } from "react";
import { Button, Table } from "antd";
const Userlist = () => {
  const [user, setUser] = useState<any[]>([]); // user 초기값을 빈 배열로 설정
  useEffect(() => {
    axios.get("http://localhost:5000/admins/userinfo").then((res) => {
      console.log(res.data);
      setUser(res.data.userInfo);
      console.log(user);
    });
  }, []);
  const dataSource = user
    ? user.map((x: any, i: number) => ({
        key: String(i + 1), // key는 문자열로 변환
        name: x.name,
        email: x.email,
        phone: x.phone,
        admin: <Button>탈퇴</Button>,
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
      title: "phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "admin",
      dataIndex: "admin",
      key: "admin",
    },
  ];
  return (
    <UserlistStyled>
      <Table dataSource={dataSource} columns={columns} />;
      <div className="userinfo-wrap"></div>
    </UserlistStyled>
  );
};

export default Userlist;
