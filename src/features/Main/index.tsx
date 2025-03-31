import { MainStyled } from "./styled";
import Sidebar from "./SideBar";
import FilePage from "./FilePage";
import { useState } from "react";
import clsx from "clsx";
const Main = () => {
  const [page, setPage] = useState<string>("file");
  return (
    <MainStyled className={clsx("Main-wrap")}>
      <Sidebar setPage={setPage} />
      <FilePage type={page} />
    </MainStyled>
  );
};

export default Main;
