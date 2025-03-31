import { SideBarStyled } from "./styled";
import clsx from "clsx";
interface setPageProps {
  setPage: (page: string) => void;
}
const Sidebar = ({ setPage }: setPageProps) => {
  return (
    <SideBarStyled className={clsx("Sidebar-wrap")}>
      <div className="sidebar-container">
        <div className="sidebar-title">관리자 메뉴</div>
        <div className="sidebar-menu">
          <div
            onClick={() => {
              setPage("file");
            }}
          >
            공인인증서 승인
          </div>
          <div
            onClick={() => {
              setPage("item");
            }}
          >
            경매 물품 승인
          </div>
          <div
            onClick={() => {
              setPage("point");
            }}
          >
            포인트 반환 승인
          </div>
          <div
            onClick={() => {
              setPage("userInfo");
            }}
          >
            사용자 정보
          </div>
          <div
            onClick={() => {
              setPage("grade");
            }}
          >
            등급 관리
          </div>
        </div>
      </div>
    </SideBarStyled>
  );
};

export default Sidebar;
