import { FileStyled } from "./styled";
import { getDataByType } from "@/util/data";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Input, Upload } from "antd";
import ReturnModal from "../Return";

interface TypeProps {
  type: string;
}

const FilePage = ({ type }: TypeProps) => {
  const [modal, setModal] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImg] = useState<File | null>(null);
  const [grade, setGrade] = useState("");
  const [startPrice, setStartPrice] = useState("");

  const handleUpload = (options: any) => {
    const { file } = options;
    setImg(file as File);
  };
  // 삭제 요청 userinfo , grade, title
  const delData = (type: string, data: string) => {
    console.log(type);
    console.log(data);
    // axios
    //   .delete(http://localhost:5000/delete/${type}, { data: data })
    //   .then((res) => {
    //     console.log(res);
    //   });
  };

  let example = getDataByType(type);
  // useEffect(() => {
  //   axios.get(http://localhost:5000/admin/${type}).then((res) => {
  //     if (res.data.data) {
  //       example = res.data.data;
  //     }
  //   });
  // }, [type]);

  // 승인 완료 요청 file item point
  const approvedAdd = (type: string, x: string) => {
    console.log(type, x);

    // axios.post(http://localhost:5000/approved/${type}, x).then((res) => {
    //   console.log(res);
    // });
    // };
  };
  // 등급 추가 요청 grade
  const gradeAdd = () => {
    console.log("Grade:", grade);
    console.log("Start Price:", startPrice);
    // try {
    //   axios
    //     .post("http://localhost:5000/upload/grade", { grade, startPrice })
    //     .then((res) => {
    //       console.log(res);
    //     });
    // } catch (e) {
    //   console.log(e);
    // }
  };
  // 배너 이미지 추가 요청 img
  const handleSubmit = async () => {
    if (!img || !title) {
      alert("파일과 제목을 입력하세요!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", img);
    // 배너 이미지 추가 요청
    // try {
    //   const response = await axios.post(
    //     "http://localhost:5000/upload/img",
    //     formData,
    //     {
    //       headers: { "Content-Type": "multipart/form-data" }, // 배너 이미지 추가
    //     }
    //   );
    //   console.log("업로드 성공:", response.data);
    // } catch (error) {
    //   console.error("업로드 실패:", error);
    // }
  };

  return (
    <FileStyled className="file-wrap">
      {/* 배경 오버레이 추가 */}
      {modal && <div className="overlay"></div>}

      <div>
        {type === "img" ? (
          <div className="file-imgDiv">
            <Input
              type="text"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Upload className="upLoad" customRequest={handleUpload}>
              <Button>파일 선택</Button>
            </Upload>
            <Button onClick={handleSubmit}>추가</Button>
          </div>
        ) : type === "grade" ? (
          <div className="file-imgDiv">
            <Input
              type="text"
              placeholder="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
            <Input
              type="text"
              placeholder="startPrice"
              value={startPrice}
              onChange={(e) => setStartPrice(e.target.value)}
            />
            <Button onClick={gradeAdd}>추가</Button>
          </div>
        ) : (
          ""
        )}
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
              <Button
                onClick={() => {
                  delData(type, x.userId);
                }}
              >
                탈퇴
              </Button>
            ) : type === "grade" || type === "img" ? (
              ""
            ) : (
              <Button
                onClick={() => {
                  approvedAdd(type, x.userId);
                }}
              >
                승인
              </Button>
            )}

            {type === "userInfo" ? (
              ""
            ) : type === "grade" || type === "img" ? (
              <Button
                onClick={() => {
                  delData(type, type === "grade" ? x.grade : x.title);
                }}
              >
                삭제
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setModal(x.userId);
                }}
              >
                거절
              </Button>
            )}
          </div>
        ))}
      </div>
      {/* 거절 사유 입력 모달 컴포넌트 안에 요청 1개  */}
      <ReturnModal modal={modal} setModal={setModal} />
    </FileStyled>
  );
};

export default FilePage;
