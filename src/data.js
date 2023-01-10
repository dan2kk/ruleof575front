export const loginButton41Data = {
    children: "로그인",
};

export const initialMenu1Data = {
    loginButtonProps: loginButton41Data,
};

//시간표 영역
export const textbox6Data = {
    text: "이름",
};

export const textbox7Data = {
    text: "학과",
};

export const textbox8Data = {
    text: "학번",
};

export const textbox9Data = {
    text: "학년",
};

export const userInfoBox2Data = {
    textbox1Props: textbox6Data,
    textbox2Props: textbox7Data,
    textbox3Props: textbox8Data,
    textbox4Props: textbox9Data,
};


export const userInfoTimeTable2Data = {
    className: "user-info-time-table-1",
    userInfoBoxProps: userInfoBox2Data,
};
//TEXTBOXMENUTAB 데이터
export const textbox15Data = {
    children: "수업목록",
    className: "textbox1-1"
};

export const textbox16Data = {
    children: "추천교양",
    className: "textbox2-1",
};

export const textbox17Data = {
    children: "수업상세",
    className: "textbox3-1",
};

export const textbox18Data = {
    children: "졸업사정",
    className: "textbox4-1",
};

export const textboxMenuTab2Data = {
    className: "textbox-menu-tab-1",
    textbox11Props: textbox15Data,
    textbox12Props: textbox16Data,
    textbox13Props: textbox17Data,
    textbox14Props: textbox18Data,
};

export const loginButton42Data = {
    children: "로그인",
};

export const initialMenu2Data = {
    className: "initial-menu-1",
    loginButtonProps: loginButton42Data,
};

export const xMenuData = {
    textboxMenuTabProps: textboxMenuTab2Data,
    initialMenuProps: initialMenu2Data,
};

export const startData = {
    userInfoTimeTableProps: userInfoTimeTable2Data,
    xMenuProps: xMenuData,
};