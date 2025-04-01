import { ReturnStlyed } from "./styled";
import { Input, Button } from "antd";
import { useState } from "react";
import axios from "axios";

interface ModalProps {
  modal: string;
  setModal: any;
}

const ReturnModal = ({ modal, setModal }: ModalProps) => {
  const [reason, setReason] = useState<string>("");

  const reasonSave = () => {
    console.log(modal);
    console.log(reason);
    const data: any = { userId: modal, reason: reason };
    axios.post("http://localhost:5000/upload/img", data).then((res) => {
      console.log(res);
    });
  };

  return (
    <ReturnStlyed style={{ display: modal === "" ? "none" : "block" }}>
      <div className="modal-content">
        <div>
          거절 사유{" "}
          <Input
            type="text"
            onChange={(e: any) => {
              setReason(e.target.value);
            }}
          />
        </div>
        <div className="return-btn">
          <Button onClick={reasonSave}>거절 사유 전송</Button>
          <Button
            onClick={() => {
              setModal("");
            }}
          >
            취소
          </Button>
        </div>
      </div>
    </ReturnStlyed>
  );
};

export default ReturnModal;
