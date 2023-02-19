import React, { useState } from "react";
import debounce from "lodash.debounce";
import { SearchContext } from "../../App";
import styles from "./Search.module.scss";
import { useCallback } from "react";

const Search = () => {
  const { setSearchValue } = React.useContext(SearchContext);
  const [value, setValue] = useState('');

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <input
      value={value}
      onChange={onChangeInput}
      className={styles.root}
      placeholder="Поиск пиццы..."
    />
  );
};

export default Search;
