const theme = {
  colors: {
    background: "rgba(18, 18, 18, 1)", // 다크 배경 색상
    modalBackground: "rgba(18, 18, 18, 0.7)",
    primary: "rgba(33, 150, 243, 1)", // 파란색 계열 기본 색상
    primaryHover: "rgba(33, 150, 243, 0.8)", // 파란색 계열 호버 색상
    primary40: "rgba(33, 150, 243, 0.4)", // 파란색 계열 반투명 색상
    scrollTrack: "rgba(33, 33, 33, 0.2)", // 스크롤 트랙 색상
    secondary: "rgba(56, 60, 70, 1)", // 보조 배경 색상
    surface: "rgba(30, 30, 30, 1)", // 카드나 패널의 표면 색상
    primaryText: "rgba(255, 255, 255, 1)", // 기본 텍스트 색상
    secondaryText: "rgba(187, 190, 196, 1)", // 보조 텍스트 색상
    secondaryTextHover: "rgba(230, 230, 230, 1)", // 보조 텍스트 호버 색상
    border: "rgba(60, 60, 60, 1)", // 테두리 색상
    delete: "rgba(255, 67, 67, 1)", // 삭제 버튼 색상
    deleteHover: "rgba(255, 87, 87, 1)", // 삭제 버튼 호버 색상
  },
  font: {
    content: `"Pretendard-Regular", "Pretendard-Local"`,
  },
  flex: {
    rowCenter: `
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    `,
    rowLeftTop: `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  `,
    rowLeftCenter: `
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    `,
    rowBetweenTop: `
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    `,
    rowBetweenCenter: `
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `,
    rowBetweenBottom: `
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    `,
    rowRightCenter: `
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  `,
    columnCenter: `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    columnLeftCenter: `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    `,
    columnRightCenter: `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    `,
    columnCenterTop: `
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    `,
  },
};

export { theme };
