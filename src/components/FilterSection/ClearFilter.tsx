import { useProductStore } from "../../store/productStore";

const ClearFilter = () => {
  const { clearFilterHandler } = useProductStore((state) => ({
    clearFilterHandler: state.clearFilterHandler,
  }));
  return <button className=" text-base font-medium my-4 mr-auto" onClick={clearFilterHandler}>Clear</button>;
};

export default ClearFilter;
