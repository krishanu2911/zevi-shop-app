import { searchIcon } from "../../constants/imageUrl";

interface Props {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocusFunc?: () => void;
  onBlurFunc?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onEnter?: () => void;
  border?: boolean;
}

const SearchBar: React.FC<Props> = ({
  value,
  onChange,
  onFocusFunc,
  onBlurFunc,
  onEnter,
  border
}) => {
  return (
    <div className={`${border ? "border border-black/50 " : ""} w-full h-full flex bg-white rounded-lg py-2 px-4`}>
      <input
        value={value}
        onChange={(event) => onChange && onChange(event)}
        onFocus={onFocusFunc}
        onBlur={(event) => onBlurFunc && onBlurFunc(event)}
        className={`flex-1 mr-2 outline-transparent `}
      />
      <div onClick={onEnter}>
        <img src={searchIcon} className="object-contain w-6 aspect-square" />
      </div>
    </div>
  );
};

export default SearchBar;
