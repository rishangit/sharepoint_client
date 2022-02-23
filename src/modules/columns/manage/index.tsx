import { FC, memo, useEffect, useState } from "react";
import SelectType from "./selectType";
import ColumnDetails from './columDetails';
import { Column } from '../types';

const ManageColumns: FC = () => {
  const [step, setStep] = useState(0);
  const [model, setModel] = useState<Column>();

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
          1: <ColumnDetails model={model} />,
        }[step]
      }
    </div>
  );
};

export default memo(ManageColumns);
