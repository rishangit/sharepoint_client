import { FC, memo, useEffect, useState } from "react";
import SelectType from "./selectType";
import ColumnDetails from './columDetails';
import { Column } from '../types';
import { getColumnFromState } from "@modules/columns/columns.selector";

const ManageColumns: any = ({ onClose, manageID, show } : any) => {
  const [step, setStep] = useState(0);
  const [model, setModel] = useState<Column>();
  console.log('manageID', manageID)
  useEffect(() => {
    console.log('model', model)
    if (model?.type) {
      setStep(1);
    }
  }, [JSON.stringify(model)])


  return (
    <div>
      {
        {
          0: <SelectType setModel={setModel} />,
          1: <ColumnDetails model={model} onClose={onClose} />,
        }[step]
      }
    </div>
  );
};

export default memo(ManageColumns);
