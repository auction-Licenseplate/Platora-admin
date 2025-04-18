import TitleCompo from "@/components/TitleCompo";
import Img from "./Img";
import { useState } from "react";
import PlusModal from "./Img/plusimg";
const Guitar = () => {
  const [plusModal, setPlusModal] = useState("none");
  return (
    <>
      <TitleCompo title="배너 관리" button="추가" setPlusModal={setPlusModal} />
      <Img />
      {plusModal === "block" ? (
        <PlusModal plusModal={PlusModal} setPlusModal={setPlusModal} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Guitar;
