import styles from "./Tabs.module.css";
import { Filter, onFilterClick } from "interfaces";

const Tabs = ({ filters, currentFilter, onFilterClick }: { filters: Filter[], currentFilter: Filter['value'], onFilterClick: onFilterClick}) => {
  return (
    <div>
      <ul className={styles.tabs}>
        {filters.map((item: Filter, index) => (
          <li
            key={index}
            onClick={() => onFilterClick(item.value)}
            className={`${styles.tab} ${item.value === currentFilter ? styles.tab_active : ""}`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
