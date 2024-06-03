import { Filter, SelectOption, onFilterClick, onSortClick } from "interfaces";

import Select from "@components/Select/Select";
import Tabs from "@components/Tabs/Tabs";
import styles from "./FilmsSorting.module.css";

const FilmsSorting = ({
  onSortClick,
  currentFilter,
  onFilterClick,
}: {
  onSortClick: onSortClick;
  currentFilter: Filter["value"];
  onFilterClick: onFilterClick;
}) => {
  const options: SelectOption[] = [
    { value: "default", label: "Рейтинг по умолчанию" },
    { value: "descending", label: "Рейтинг по убыванию" },
    { value: "ascending", label: "Рейтинг по возрастанию" },
  ];

  const filters: Filter[] = [
    { value: "all", label: "Все" },
    { value: "films", label: "Фильмы" },
    { value: "series", label: "Сериалы" },
    { value: "cartoons", label: "Мультфильмы" },
  ];

  return (
    <div className={styles.container}>
      <Select options={options} onSortClick={onSortClick} />
      <Tabs
        filters={filters}
        currentFilter={currentFilter}
        onFilterClick={onFilterClick}
      />
    </div>
  );
};

export default FilmsSorting;
