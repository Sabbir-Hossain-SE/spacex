import { Input } from "antd";

const { Search } = Input;

const customStyle = { width: "100%" };

const onSearch = (value: string) => console.log(value);
const SearchBar: React.FC = () => {
    return (
        <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={customStyle}
            size="large"
        />
    );
};

export default SearchBar;
