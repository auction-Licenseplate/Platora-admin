import { AgreeStyled } from "./styled";
import TitleCompo from "../TitleCompo";
import Agree from "./Agree";
import PointAgree from "./PointAgree";
import ItemAgree from "./ItemAgree";
import FailedModal from "./Agree/FailedModal";
import { useState } from "react";
interface AgreeProps {
  type?: string;
}
const AgreeCompo = ({ type }: AgreeProps) => {
  const [fail, setFail] = useState("none");
  return (
    <AgreeStyled>
      <TitleCompo
        title={
          type === "file"
            ? "공인 인증서 승인"
            : type === "point"
            ? "환전 승인"
            : "물품 등록 승인"
        }
      />
      {type === "file" ? (
        <Agree />
      ) : type === "point" ? (
        <PointAgree />
      ) : (
        <ItemAgree fail={fail} setFail={setFail} />
      )}
      {fail === "none" ? <></> : <FailedModal fail={fail} setFail={setFail} />}
    </AgreeStyled>
  );
};

export default AgreeCompo;
