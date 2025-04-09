import { UploadOutlined } from "@ant-design/icons";
import { PlusImgStyled } from "./styled";
import { Button, Input, Upload } from "antd";
import axios from "axios";
import clsx from "clsx";
import { use, useState } from "react";
interface failProps {
  plusModal: any;
  setPlusModal: any;
}
const PlusModal = ({ plusModal, setPlusModal }: failProps) => {
  const [text, setText] = useState("");
  const [file, setFile] = useState<any>("");
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setText(value);
  };
  const imgvalue = () => {
    const formData = new FormData();
    formData.append('text', text);
    formData.append('file', file)
    axios
      .post("http://localhost:5000/admins/imgvalue", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        setPlusModal("none");
      });
  };
  const del = () => {
    setPlusModal("none");
  };
  const handleFileUpload = (file: File, onSuccess: any) => {
    setFile(file);
    onSuccess("파일이 선택되었습니다.");
  };

  return (
    <PlusImgStyled className={clsx("FailedModal-wrap")}>
      <div className="FailedModal-container">
        <Input
          type="text"
          placeholder="title"
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
        <Upload
          className="upLoad"
          customRequest={({ file, onSuccess }) =>
            handleFileUpload(file as File, onSuccess)
          }
        >
          <Button icon={<UploadOutlined />}>파일 선택</Button>
        </Upload>
        <Button onClick={imgvalue}>등록</Button>
        <Button onClick={del}>취소</Button>
      </div>
    </PlusImgStyled>
  );
};

export default PlusModal;
