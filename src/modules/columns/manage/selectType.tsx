import { ColumnType, Column } from "../types";
import { ColumnCategory } from "@modules/columns/columns.styled";
import { columnTypeProps } from "@modules/columns/manage/constant";

import 'bootstrap/dist/css/bootstrap.min.css'

const SelectType = ({ setModel }) => {
  const onSelect = (key) => {
    setModel((prev: Column) => ({ ...prev, type: key }));
  };

  return (
    <>
      <div className='border-bottom pb-1'>
        <h4>
          Select a Field for your Column Type
        </h4>
      </div>
      <ColumnCategory>
        {Object.keys(ColumnType).map((key) => {
          return <div className='d-flex justify-content-start border rounded p-2 text-secondary' key={key} onClick={() => onSelect(key)}>
            <div className='align-items-center d-flex border rounded me-3'>
              <h2 className='px-2 text-dark'>
                Ab
              </h2>
            </div>
            <div>
              <div>
                <h6 className='m-0'>
                  {
                    columnTypeProps.find(({ type }) => type === key).name
                  }
                </h6>
              </div>
              <div>
                <span>
                  {
                    columnTypeProps.find(({ type }) => type === key).desc
                  }
                </span>
              </div>
            </div>
          </div>
        })}
      </ColumnCategory>
    </>
  );

};

export default SelectType;
