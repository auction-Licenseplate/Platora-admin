import TitleCompo from "@/components/TitleCompo";
import Img from "./Img";
import { useEffect, useState } from "react";
import PlusModal from "./Img/plusimg";
import { useRouter } from "next/router";

const Guitar = () => {
  const [plusModal, setPlusModal] = useState("none");
  const router = useRouter();

  useEffect(() => {
    if (plusModal === "none") {
      router.push("http://52.62.79.236/guitar/img/");
    }
  }, [plusModal]);

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
