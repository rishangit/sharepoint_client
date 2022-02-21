import { ColumnType, Column } from "../types";

const ColumnDetails = ({ setModel }) => {
  const onSelect = (key) => {
    setModel((prev: Column) => ({ ...prev, type: key }));
  };

  return (
    <div>

    </div>
  );
};

export default ColumnDetails;
