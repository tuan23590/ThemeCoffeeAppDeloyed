import { useState } from "react";
import { createPortal } from "react-dom";
import { ActionSheet } from "../../components/fullscreen-sheet";
import ListItem from "../../components/list-item";
import { displayDistance } from "../../utils/location";
import { useStores } from "../../store/listStore";
import React from "react";

const StorePicker = () => {
  const [visible, setVisible] = useState(false);
  const [stores] = useStores.stores();
  const [selectedStore, setSelectedStore] = useStores.selectStore();

  const noStore = () => {
    setSelectedStore(stores[0]);
  }

  if (selectedStore.length === 0) {
    return (
      <ListItem
        onClick={() => noStore()}
        title="Chọn cửa hàng"
        subtitle="Yêu cầu truy cập vị trí"
      />
    );
  }

  return (
    <>
      <ListItem
        onClick={() => setVisible(true)}
        title={selectedStore.name}
        subtitle={selectedStore.address}
      />

      {visible &&
        createPortal(
          <ActionSheet
            title="Các cửa hàng ở gần bạn"
            visible={visible}
            onClose={() => setVisible(false)}
            actions={[
              ...stores.map((store) => ({
                text: store.distance
                  ? `${store.name} - ${displayDistance(store.distance)}`
                  : store.name,
                highLight: store.id === selectedStore.id,
                onClick: () => {
                  setSelectedStore(store);
                  setVisible(false);
                },
              })),
              [{ text: "Đóng", close: true, danger: true }],
            ]}
          />,
          document.body
        )}
    </>
  );
};

export default StorePicker;
