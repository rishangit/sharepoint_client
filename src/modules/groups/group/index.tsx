import { FC, memo, useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Grid, GridColumn } from "@progress/kendo-react-grid";

import { NewButton, PopupWindow } from "@app/common";
import * as SC from "../groups.styled";
import HeaderComponent, { HeaderType } from "@modules/header";
// import ManageGroups from "../manage";
import { groupList } from '../constant';
import { IconDelete, IconEdit } from "@app/icons";
import { setGroupData } from "@modules/groups/action";
import { getGruopList } from "@modules/groups/selector";
import GroupAdder from "@modules/groups/addGroup";


const GroupListComponent: FC = () => {
  const [showManage, setShowManage] = useState(false);
  const GroupListData = useSelector(getGruopList);
  console.log('GroupListData', GroupListData.groupList)

  const onclick = () => {
    setShowManage(true);
  };

  const deleteIcon = (e:any) => {
    return(
    <td > 
    <SC.GroupIcon onClick={(e)=>console.log('delete',e)} >
      <IconDelete />
    </SC.GroupIcon>
    </td>
  )}

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
        <GroupAdder onClose={popupWindowClose }/>
      </PopupWindow>
      <SC.GroupTable>
        <SC.GroupTableItem>
          <SC.GroupTableThreads span='4'>
            <h6>
              Name
              </h6>
          </SC.GroupTableThreads>
        </SC.GroupTableItem>
        {GroupListData.groupList.map(({ name }: any, index) =>
          <SC.GroupTableItem key={index}>
            <SC.GroupTableThreads span='4'>
              <h6>
                {name}
              </h6>
            </SC.GroupTableThreads>
            <SC.GroupTableThreads span='7'>
            </SC.GroupTableThreads>
            <SC.GroupTableThreads span='1' >
              <SC.GroupIcon>
                <IconDelete/>
              </SC.GroupIcon>
            </SC.GroupTableThreads>
          </SC.GroupTableItem>
        )}
      </SC.GroupTable>
      {/* <Grid style={{ height: "400px" }} data={GroupListData.groupList}>
      <GridColumn field="name" title="Name" width="500px" />
      <GridColumn cell={deleteIcon} width="80px"/>
    </Grid> */}
    </SC.GroupsWrapper>
  );
};

export default memo(GroupListComponent);
