import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setSearchKey } from "../stateManagement/features/launch/filterSlice";
import debounce from "../utils/debounce";
import capitalizeFirstLetter from "../utils/helperText";

const { Search } = Input;

const customStyle = { width: "100%" };

const SearchBar: React.FC = () => {
    const dispatch = useDispatch();
    const onSearch = (value: string) => {
        dispatch(setSearchKey(capitalizeFirstLetter(value)));
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        debounce(onSearch, 700)(value);
    };
    return (
        <Search
            placeholder="input search text"
            allowClear
            style={customStyle}
            size="large"
            onChange={handleChange}
        />
    );
};

export default SearchBar;
