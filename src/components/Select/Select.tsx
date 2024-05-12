import { useState } from "react";
import styles from "./Select.module.css";
import { SelectOption, onSortClick } from "interfaces";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Select = ({ options, onSortClick }: {options: SelectOption[], onSortClick: onSortClick }) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (listItem: SelectOption) => {
    setIsOpen(false);
    setSelected(listItem);
    onSortClick(listItem.value);
  };

  return (
    <div>
      <div className={styles.select}>
        <div
          className={styles.select__header}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>{selected.label}</div>
          <div className={styles.select_header_icon}>
            {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowLeftIcon />}
          </div>
        </div>
        {isOpen && (
          <ul className={styles.select__body}>
            {options.map((item, index) => {
              if (item.value !== selected.value) {
                return (
                  <li
                    key={index}
                    className={styles.select__item}
                    onClick={() => handleItemClick(item)}
                  >
                    {item.label}
                  </li>
                );
              }

              return null;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Select;
