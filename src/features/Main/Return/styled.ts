import styled from "styled-components";

export const ReturnStlyed = styled.div`
  position: fixed; /* 화면에 고정 */
  top: 50%; /* 화면의 세로 중간에 위치 */
  left: 50%; /* 화면의 가로 중간에 위치 */
  transform: translate(-50%, -50%); /* 정확히 중앙에 위치시킴 */
  background-color: white;
  width: 300px; /* 모달의 너비 (정사각형 형태로 만들기 위해서 길이를 맞춤) */
  height: 300px; /* 모달의 높이 (정사각형) */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 간소화된 그림자 */
  z-index: 1000; /* 모달이 다른 콘텐츠 위에 오도록 설정 */

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center; /* 중앙 정렬 */
    align-items: center; /* 가로 중앙 정렬 */
    gap: 20px;
    height: 100%;
    padding: 10px;
  }
  .return-btn {
    display: flex;
    gap: 10px;
  }
  /* 배경이 투명한 오버레이 스타일 (필요시 추가) */
  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white; /* 어두운 배경 */
    z-index: -1; /* 모달은 앞에, 배경은 뒤에 */
  }
`;
