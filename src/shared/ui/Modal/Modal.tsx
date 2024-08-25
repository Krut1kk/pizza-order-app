// react
import { FC, ReactNode } from "react";
// ui
import { Portal } from "../Portal";
// styles
import styles from "./Modal.module.scss";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  return isOpen ? (
    <Portal>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modalContent}>{children}</div>
        </div>
      </div>
    </Portal>
  ) : null;
};
