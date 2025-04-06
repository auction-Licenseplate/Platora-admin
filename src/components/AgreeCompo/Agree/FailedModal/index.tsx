import { FailedModatStyled } from "./styled";
import { Button, Select } from "antd";
import axios from "axios";
import clsx from "clsx";
import { useState } from "react";
interface failProps {
  fail: any;
  setFail: any;
}
const FailedModal = ({ fail, setFail }: failProps) => {
  const [type, setType] = useState("");
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setType(value);
  };
  const failvalue = () => {
    axios
      .post("http://localhost:5000/admins/failvalue", { type })
      .then((res) => {
        console.log(res.data);
        setFail("none");
      }); // 공동인증서 거절 시 거절 사유 타입으로 요청
  };
  return (
    <FailedModatStyled className={clsx("FailedModal-wrap")}>
      <div className="FailedModal-container">
        <div className="FailedModal-title">거절 사유 전송 타입 선택</div>
        <Select
          defaultValue="type1"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "1", label: "type1" },
            { value: "2", label: "type2" },
            { value: "3", label: "type3" },
          ]}
        />
        <Button onClick={failvalue}>전송</Button>
        <Button
          onClick={() => {
            setFail("none");
          }}
        >
          취소
        </Button>
      </div>
    </FailedModatStyled>
  );
};

export default FailedModal;
