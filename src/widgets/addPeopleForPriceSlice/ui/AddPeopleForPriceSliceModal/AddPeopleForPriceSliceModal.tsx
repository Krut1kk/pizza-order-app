// react
import { FC } from "react";
// ui
import { Modal } from "@/shared/ui/Modal";
import { AddPeopleForPriceSliceForm } from "../AddPeopleForPriceSliceForm/AddPeopleForPriceSliceForm";
import { AddPeopleForPriceSliceItemList } from "../AddPeopleForPriceSliceItemList/AddPeopleForPriceSliceItemList";
import { IPeopleForSplitPrice } from "@/entities/user";
import { Button } from "@/shared/ui/Button";
// styles
import styles from "./AddPeopleForPriceSliceModal.module.scss";

interface AddPeopleForPriceSliceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPeopleItemClick: (person: IPeopleForSplitPrice) => void;
}

export const AddPeopleForPriceSliceModal: FC<
  AddPeopleForPriceSliceModalProps
> = ({ isOpen, onClose, onPeopleItemClick }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.modalContent}>
        <AddPeopleForPriceSliceForm />
        <AddPeopleForPriceSliceItemList onPeopleItemClick={onPeopleItemClick} />
        <Button backgroundColor="black" onClick={onClose}>
          Закрити вікно
        </Button>
      </div>
    </Modal>
  );
};
