// react
import { FC, useState } from "react";
// redux
import { useDispatch } from "react-redux";
// entities
import { userActions } from "@/entities/user";
// ui
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
// styles
import styles from "./AddPeopleForPriceSliceForm.module.scss";

interface AddPeopleForPriceSliceFormProps {}

export const AddPeopleForPriceSliceForm: FC<
  AddPeopleForPriceSliceFormProps
> = ({}) => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onAddClick = () => {
    dispatch(userActions.addPeopleForSplitPrice({ name: text }));
    setText("");
  };

  const isButtonDisabled = text.length <= 2;

  return (
    <div className={styles.AddPeopleForPriceSliceForm}>
      <Input
        placeholder="Введіть ім'я"
        borderStyle="all"
        inputWrapperHeight="m"
        onChange={onTextChange}
        value={text}
        type="text"
      />
      <Button
        backgroundColor="rose"
        onClick={onAddClick}
        disabled={isButtonDisabled}
      >
        Додати людину
      </Button>
    </div>
  );
};
