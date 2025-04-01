import styled from "styled-components";

export const SideBarStyled = styled.div`
  &.Sidebar-wrap {
    width: 30%;

    .sidebar-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin: auto;
    }

    .sidebar-title {
      font-size: 2vw;
      font-weight: 700;
    }
  }
`;
