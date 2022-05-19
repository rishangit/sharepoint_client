import { FC, memo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, GridColumn } from "@progress/kendo-react-grid";

import { NewButton, PopupWindow } from "@app/common";
import * as SC from "../groups.styled";
import HeaderComponent, { HeaderType } from "@modules/header";
// import ManageGroups from "../manage";
import { groupList } from '../constant';
import { IconDelete, IconEdit } from "@app/icons";
import { deleteGroupData } from "@modules/groups/action";
import { getGruopList } from "@modules/groups/selector";
import GroupAdder from "@modules/groups/addGroup";


const GroupListComponent: FC = () => {
  const [showManage, setShowManage] = useState(false);
  const dispatch = useDispatch()
  const { groupList } = useSelector(getGruopList);

  const onclick = () => {
    setShowManage(true);
  };

  const deleteGroups = (name) => {
    const newGruop = groupList.filter((group: any) => group.name !== name)
    dispatch(deleteGroupData(newGruop))
  }

  const header: HeaderType = {
    title: "Groups",
    subTitle: "this is groups sub title",
    actions: <NewButton onClick={() => onclick()} />,
  };

  const popupWindowClose = () => {
    setShowManage(false)
  }

  return (
    <SC.GroupsWrapper>
      <HeaderComponent {...header}></HeaderComponent>
      <PopupWindow
        show={showManage}
        onClose={() => setShowManage(false)}
        title={'Add Groups'}
        initialHeight={400}
      >
        <GroupAdder onClose={popupWindowClose} />
      </PopupWindow>
      {groupList.length > 0 &&
        <SC.GroupTable>
          <SC.GroupTableItem>
            <SC.GroupTableThreads span='4'>
              <h6>
                Name
              </h6>
            </SC.GroupTableThreads>
          </SC.GroupTableItem>
          {groupList.map(({ name }: any, index) =>
            <SC.GroupTableItem key={index}>
              <SC.GroupTableThreads span='4'>
                <h6>
                  {name}
                </h6>
              </SC.GroupTableThreads>
              <SC.GroupTableThreads span='7'>
              </SC.GroupTableThreads>
              <SC.GroupTableThreads span='1' >
                <SC.GroupIcon onClick={() => deleteGroups(name)}>
                  <IconDelete />
                </SC.GroupIcon>
              </SC.GroupTableThreads>
            </SC.GroupTableItem>
          )}
        </SC.GroupTable>}
    </SC.GroupsWrapper>
  );
};

export default memo(GroupListComponent);
