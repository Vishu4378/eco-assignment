import styled from '@emotion/styled';
export const Container = styled.div`
  flex: 2.5;
  padding: 0 1rem;
  & > div {
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
  }
  section {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
`;
