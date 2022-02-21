import { ColumnType, Column } from "../types";

const SelectType = ({ setModel }) => {
  const onSelect = (key) => {
    setModel((prev: Column) => ({ ...prev, type: key }));
  };

  return (
    <div>
      {Object.keys(ColumnType).map((key) => {
        return <div key={key} onClick={() => onSelect(key)}>{key}</div>;
      })}
    </div>
  );
};

export default SelectType;
