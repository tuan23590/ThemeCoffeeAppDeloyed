import ListItem from "../../components/list-item";
import { useUserInfo } from "../../store/infoStore";
import React from "react";

const PersonPicker = () => {
  const [user, setUser] = useUserInfo.user();
  const [phone, setPhone] = useUserInfo.phone();

  const noUserPhone = () => {
    setUser("User Name");
    setPhone("0337076898")
  }

  if (user === "" && phone === "") {
    return (
      <ListItem
        onClick={() => noUserPhone()}
        title="Chọn người nhận"
        subtitle="Yêu cầu truy cập số điện thoại"
      />
    );
  }

  return (
    <ListItem
      title={`${user} - ${phone}`}
      subtitle="Người nhận"
    />
  );
};

export default PersonPicker;
