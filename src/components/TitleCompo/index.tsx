import clsx from "clsx";
import { TitleCompoStyled } from "./stlyed";
import { Button } from "antd";
import axios from "axios";

interface TitleProps {
  title: string;
  button?: string;
  setPlusModal?: any;
}

const TitleCompo = ({ title, button, setPlusModal }: TitleProps) => {
  const plusImg = () => {
    setPlusModal("block");
  };
  return (
    <TitleCompoStyled className={clsx("title-compo")}>
      {title} {button ? <Button onClick={plusImg}>{button}</Button> : <></>}
    </TitleCompoStyled>
  );
};

export default TitleCompo;
