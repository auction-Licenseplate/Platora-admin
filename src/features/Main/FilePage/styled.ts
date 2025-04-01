import styled from "styled-components";

export const FileStyled = styled.div`
  .file-wrap {
    width: 70%;
    margin: 0 auto;
  }
  .file-itemDiv {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
    border: 1px solid #ddd;
    padding: 10px;
    margin: 5px;
  }
  .file-mapDiv {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 5px;
    display: flex;
    align-items: center;
  }
  .file-imgDiv {
    display: flex;
    gap: 20px;
  }
  position: relative; /* 상대적 위치 */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* 어두운 반투명 배경 */
    z-index: 999; /* 모달보다 아래 */
  }
`;
