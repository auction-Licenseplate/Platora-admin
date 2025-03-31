import { FileStyled } from "./styled";
import { getDataByType } from "@/util/data";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "antd";
interface TypeProps {
  type: string;
}

const FilePage = ({ type }: TypeProps) => {
  let example = getDataByType(type); // 예시 데이터 가져오기
  // useEffect(() => {
  //   axios.get(`http://localhost:5000/admin/${type}`).then((res) => {
  //     if (res.data.data) {
  //       example = res.data.data;
  //     }
  //   });
  // }, []);
  return (
    <FileStyled className="file-wrap">
      <div>
        {example.map((x: any, i: number) => (
          <div key={i} className="file-itemDiv">
            {Object.keys(x).map((key) => (
              <div key={key}>
                <div className="file-mapDiv">
                  {key}: {x[key]}
                </div>
              </div>
            ))}

            {type === "userInfo" ? (
              <Button>탈퇴</Button>
            ) : type === "grade" ? (
              <Button>수정</Button>
            ) : (
              <Button>승인</Button>
            )}

            {type === "userInfo" ? (
              ""
            ) : type === "grade" ? (
              <Button>삭제</Button>
            ) : (
              <Button>거절</Button>
            )}
          </div>
        ))}
      </div>
    </FileStyled>
  );
};

export default FilePage;
