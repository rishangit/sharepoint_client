import React, { FC, memo, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import HeaderComponent, { HeaderType } from "@modules/header";
import { NewButton, PopupWindow } from "@app/common";

import * as SC from '../contentTypes.styled';
import ManageContentTypes from '../manageContentTypes'
import { getContentTypeList } from '@modules/contentTypes/contentTypes.selector';
import { IconDelete, IconEdit } from '@app/icons';
import { deleteContentTypeData } from '@modules/contentTypes/contentTypes.action';

const ContentTpyesListComponent: FC = () => {
    const [showManage, setShowManage] = useState(false);
    const dispatch = useDispatch()
    const { contentTypesList } = useSelector(getContentTypeList)

    const onclick = () => {
        setShowManage(true);
    };
    const onDeleteContentType = (model) => {
        const removeData = contentTypesList.filter((contentType :any)=> contentType.model != model )
        dispatch(deleteContentTypeData(removeData))
        console.log('removeData', removeData)
    };

    const header: HeaderType = {
        title: "Content Types",
        subTitle: "this is Content Types sub title",
        actions: <NewButton onClick={() => onclick()} />,
    };

    return (
        <SC.ContentTypesWrapper>
            <HeaderComponent {...header} />
            <PopupWindow
                show={showManage}
                onClose={() => setShowManage(false)}
                title={'Add Content Types'}
                initialHeight={600}
            >
                <ManageContentTypes onClose={() => setShowManage(false)} />
            </PopupWindow>
            {contentTypesList.length > 0 && <SC.Table>
                <SC.TableItem>
                    <SC.TableThreads span='4'>
                        <h6>
                            Name
                        </h6>
                    </SC.TableThreads>
                </SC.TableItem>
                {contentTypesList.map(({ model }, index) =>
                    <SC.TableItem key={index}>
                        <SC.TableThreads span='6'>
                            <h6>
                                {model.contentTypeName}
                            </h6>
                        </SC.TableThreads>
                        <SC.TableThreads span='5'>
                        </SC.TableThreads>
                        <SC.TableThreads span='1'>
                            <SC.TableIcon >
                                <IconEdit />
                            </SC.TableIcon>
                            <SC.TableIcon onClick={()=>onDeleteContentType(model)}>
                                <IconDelete />
                            </SC.TableIcon>
                        </SC.TableThreads>
                    </SC.TableItem>
                )}
            </SC.Table>}
        </SC.ContentTypesWrapper>
    )
}

export default memo(ContentTpyesListComponent);
