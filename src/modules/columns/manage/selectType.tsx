import { ColumnType, Column } from "../types";
import {
  ColumnCategory,
  ColumnItem,
  ColumnData,
  ColumnTitle,
} from "@modules/columns/columns.styled";
import { columnTypeProps } from "@modules/columns/manage/constant";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconText } from "@modules/columns/common/column.icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectType = ({ setModel }) => {
  const onSelect = (key) => {
    setModel((prev: Column) => ({ ...prev, type: key }));
  };
  return (
    <>
      <ColumnTitle>
        <h4>Select a Field for your Column Type</h4>
      </ColumnTitle>
      <ColumnCategory>
        {Object.keys(ColumnType).map((key) => {
          return (
            <ColumnItem key={key} onClick={() => onSelect(key)}>
              <ColumnData flexDirection="row">
                <IconText keyIcon={key} />
              </ColumnData>
              {/* <FontAwesomeIcon icon="text" /> */}
              <ColumnData flexDirection="column">
                <div style={{ fontWeight: 600 }}>
                  {columnTypeProps.find(({ type }) => type === key).name}
                </div>
                <div>
                  {columnTypeProps.find(({ type }) => type === key).desc}
                </div>
              </ColumnData>
            </ColumnItem>
          );
        })}
      </ColumnCategory>
    </>
  );
};

export default SelectType;
