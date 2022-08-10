import styled from '@emotion/styled'

export const Container = styled.div`
  background-color: #ffffff;
  width: 250px;

  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 0 0 3px 3px;
  }
  .content {
    padding: 0.5rem 1rem;
    h1 {
      font-size: 14px;
      font-weight: 400;
      padding-bottom: 0.5rem;
    }
    p {
      color: #6c6c6c;
      font-size: 12px;
      padding-bottom: 0.5rem;
    }
    h2 {
      padding-bottom: 0.5rem;
      font-weight: 400;
    }
  }
`;
