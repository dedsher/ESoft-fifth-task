import { SvgIconProps } from "@mui/material";
import styles from "./ToggleIconButton.module.css";

interface ToggleIconButtonProps {
  state: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  OutlinedIcon: React.ComponentType<SvgIconProps>;
  FilledIcon: React.ComponentType<SvgIconProps>;
}

const ToggleIconButton = ({
  state,
  onClick,
  OutlinedIcon,
  FilledIcon,
}: ToggleIconButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {state ? (
        <FilledIcon color="primary" />
      ) : (
        <OutlinedIcon color="primary" />
      )}
    </button>
  );
};

export default ToggleIconButton;
