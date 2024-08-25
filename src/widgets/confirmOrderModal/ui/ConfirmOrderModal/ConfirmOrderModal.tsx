// react
import { FC } from "react";
// styles
import styles from "./ConfirmOrderModal.module.scss";
import { Button } from "@/shared/ui/Button";
import { Modal } from "@/shared/ui/Modal";

interface ConfirmOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmOrderModal: FC<ConfirmOrderModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.ConfirmOrderModalContent}>
        <div className={styles.title}>Товар Успішно доданий</div>

        <div className={styles.buttons}>
          <Button onClick={onConfirm} maxWidth={"250px"}>
            Оформити замовлення
          </Button>
          <Button onClick={onClose} maxWidth={"250px"}>
            Продовжити покупки
          </Button>
        </div>
      </div>
    </Modal>
  );
};
