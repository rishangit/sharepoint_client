import { ColumnType, Column } from "../types";
import * as SC from "@modules/columns/columns.styled";
import { columnTypeProps } from "@modules/columns/manage/constant";
import { ColumnIcon } from "@modules/columns/common/column.icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectType = ({ setModel }) => {
  const onSelect = (key) => {
    setModel((prev: Column) => ({ ...prev, type: key }));
  };
  return (
    <>
      <SC.ColumnTitle>
        <h4>
          Select a Field for your Column Type
        </h4>
      </SC.ColumnTitle>
      <SC.ColumnCategory>
        {
          columnTypeProps.map(({ type, name, desc }) =>
            <SC.ColumnItem key={type} onClick={() => onSelect(type)}>
              <SC.ColumnData flexDirection='row'>
                <ColumnIcon type={type} />
              </SC.ColumnData>
              <FontAwesomeIcon icon="text" />
              <SC.ColumnData flexDirection='column'>
                <div style={{ fontWeight: 600 }}>{name}</div>
                <div>{desc}</div>
              </SC.ColumnData>
            </SC.ColumnItem>
          )
        }
      </SC.ColumnCategory>
    </>
  );

};

export default SelectType;
