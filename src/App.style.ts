import styled from '@emotion/styled';
export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  & > main {
    flex: 1;
    padding-top: 1rem;
    display: flex;
    background-color: #f1f1f1;
  }
`;
