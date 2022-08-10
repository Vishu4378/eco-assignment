import styled from '@emotion/styled';

export const Container = styled.div`
  width: clamp(100px, 100%, 250px);
  min-height: 500px;
  background-color: #ffffff;
  border-radius: 5px;
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    padding-bottom: 0.5rem;
    h1 {
      font-weight: 400;
      font-size: 1.2rem;
    }
    i {
      font-size: 1.2rem;
    }
  }
  .brands {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    label {
      display: flex;
      gap: 0.5rem;
      input {
        cursor: pointer;
      }
    }
  }
  .categories {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    label {
      display: flex;
      gap: 0.5rem;
      input {
        cursor: pointer;
      }
    }
  }
  .price {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    label {
      display: flex;
      gap: 0.5rem;
      input {
        cursor: pointer;
      }
    }
  }
`;
