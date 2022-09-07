import { Input } from "antd";

const { Search } = Input;

const onSearch = (value: string) => console.log(value);
const SearchBar = () => {
    return (
        <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{ width: 200 }}
        />
    );
};

export default SearchBar;
