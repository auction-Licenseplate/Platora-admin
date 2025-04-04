import TitleCompo from "@/components/TitleCompo";
import { UserStyled } from "./styled";
import Userlist from "./Userlist";

const UserInfo = () => {
  return (
    <UserStyled>
      <TitleCompo title="회원 정보" />
      <Userlist />
    </UserStyled>
  );
};

export default UserInfo;
