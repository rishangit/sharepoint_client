import React, { useState, useEffect } from 'react'
import GetTableInfo from './getTableInfo';
import GetTableData from './getTableData';

const ManageTableComponent = ({ onClose, setHeight }) => {
    const [step, setStep] = useState(0);
    const [model, setModel] = useState();

    useEffect(() => {
        if (model) {
            setStep(1);
        }
    }, [JSON.stringify(model)])
    return (
        <>
            {
                {
                    0: <GetTableData setModel={setModel} />,
                    1: <GetTableInfo model={model} onClose={onClose} setHeight={setHeight}/>,
                }[step]
            }
        </>
    )
}

export default ManageTableComponent
