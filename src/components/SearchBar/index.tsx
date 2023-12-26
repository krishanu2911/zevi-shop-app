import { searchIcon } from "../../constants/imageUrl";

interface Props {
  onFocusFunc?: () => void;
  onBlurFunc?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<Props> = ({ onFocusFunc, onBlurFunc }) => {
  return (
    <div className=" w-full h-full flex bg-white rounded-lg py-2 px-4">
      <input
        onFocus={onFocusFunc}
        onBlur={(event) =>onBlurFunc && onBlurFunc(event)}
        className=" flex-1 mr-2 outline-transparent "
      />
      <img src={searchIcon} className=" object-contain w-6 aspect-square" />
    </div>
  );
};

export default SearchBar;
