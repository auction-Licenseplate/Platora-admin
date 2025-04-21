import axios from "axios";
import { UserlistStyled } from "./styled";
import { useEffect, useState } from "react";
import { Button, Table } from "antd";
import Cookies from "js-cookie";

const Userlist = () => {
  const [user, setUser] = useState<any[]>([]);
  const [num, setNum] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 유저 목록 불러오기
        const userRes = await axios.get("http://15.164.52.122/admins/userinfo");
        setUser(userRes.data.userInfo);
      } catch (error) {
        console.error("데이터 불러오기 실패:", error);
      }
    };

    fetchData();
  }, [num]);

  const delUser = (email: string) => {
    axios
      .delete("http://15.164.52.122/admins/delete", {
        data: { email },
      })
      .then((res) => {
        console.log(res);
        setNum(num + 1); // 다시 데이터 로드
      });
  };

  const dataSource = user.map((x: any, i: number) => ({
    key: String(i + 1),
    name: x.name,
    email: x.email,
    phone: x.phone,
    admin:
      x.email === "adminPlatora01@admin.com" ? (
        <p>👑관리자</p>
      ) : (
        <Button
          onClick={() => {
            delUser(x.email);
          }}
        >
          탈퇴
        </Button>
      ),
  }));

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
      <Table dataSource={dataSource} columns={columns} />
    </UserlistStyled>
  );
};

export default Userlist;
