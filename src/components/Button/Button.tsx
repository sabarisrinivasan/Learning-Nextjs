import React from "react";
import { Button as AntdButton } from "antd";

interface Props {
  children?: React.ReactNode;
  disable?: boolean;
  onclick?: () => void;
  loading?: boolean;
  type?: "primary"|  "dashed" | "link" | "text" ;
  block?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  htmlType?:"submit"|"reset"|"button"
  shape?:"default"|"circle"|"round"
  href?:string
  ghost?:boolean
}
const ButtonComponent = ({
  children,
  disable,
  onclick,
  loading,
  type="primary",
  block=false,
  icon,
  iconPosition,
  htmlType="button",
  shape="default",
  href,
  ghost,
}: Props) => {
  // const screens = useBreakpoint();
  return (
    <AntdButton
      onClick={onclick}
      disabled={disable}
      loading={loading}
      type={type}
      block={block}
      icon={icon}
      iconPosition={iconPosition}
      htmlType={htmlType}
      shape={shape}
      href={href}
      ghost={ghost}
    >
      {loading ? "" : children}
    </AntdButton>
  );
};

export default ButtonComponent;



