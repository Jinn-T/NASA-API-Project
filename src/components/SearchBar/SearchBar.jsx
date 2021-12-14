import styles from "./SearchBar.module.scss";

const SearchBar = () => {
    return (
        <div className={styles.searchContainer}>
            <input type="text" />
            <button>Search!</button>
        </div>
    );
};

export default SearchBar;
