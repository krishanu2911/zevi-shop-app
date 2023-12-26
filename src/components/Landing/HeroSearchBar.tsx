import { useState } from "react";
import SearchBar from "../SearchBar";
import { useNavigate } from "react-router-dom";

interface Props {
  setSearchBarFocused: (data: boolean) => void;
  containerRef: React.RefObject<HTMLDivElement>;
}

const HeroSearchBar: React.FC<Props> = ({ setSearchBarFocused , containerRef}) => {
  const [text, setText] = useState<string | undefined>(undefined);
  const navigate = useNavigate();
  const onFocusHandler = () => {
    setSearchBarFocused(true);
  };

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.relatedTarget)
    ) {
      setSearchBarFocused(false);
    }
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onEnterHandler = () => {
    setText(undefined);
    navigate("/products");
  };
  return (
    <SearchBar
      value={text}
      onChange={onChangeHandler}
      onFocusFunc={onFocusHandler}
      onBlurFunc={onBlurHandler}
      onEnter={onEnterHandler}
    />
  );
};

export default HeroSearchBar;
