import { FC, memo, useEffect, useState } from "react";
import AddContentTypes from "./AddContentTypes";
import ContentTypeList from './ContentTypeList';

const ManageContentTypes: any = ( {onClose}: any) => {
  const [step, setStep] = useState(0);
  const [model, setModel] = useState();

  useEffect(() => {
    if (model) {
      setStep(1);
    }
  }, [JSON.stringify(model)])

  return (
    <div>
      {
        {
          0: <AddContentTypes setModel={setModel}/>,
          1: <ContentTypeList onClose={onClose} model={model}/>,
        }[step]
      }
    </div>
  );
};

export default memo(ManageContentTypes);