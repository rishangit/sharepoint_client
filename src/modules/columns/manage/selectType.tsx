import { ColumnType, Column } from "../types";
import * as SC from "../columns.styled";
import { columnTypeProps } from "@modules/columns/manage/constant";
import { ColumnIcon } from 'app-iconwithname';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectType = ({ setModel }) => {
  const onSelect = (type, name) => {
    setModel((prev: Column) => ({ ...prev, type: type, name: name }));
  };
  return (
    <>
      <SC.ColumnTitle>
        <h4>
        Select a field type for your Column
        </h4>
      </SC.ColumnTitle>
      <SC.ColumnCategory>
        {
          columnTypeProps.map(({ type, name, desc }) =>
            <SC.ColumnItem key={type} onClick={() => onSelect(type, name)}>
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
