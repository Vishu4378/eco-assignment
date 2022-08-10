import styled from '@emotion/styled';

export const Container = styled.nav`
  display: flex;
  padding: 0.5rem 0;
  .left {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1;
    .brand {
      img {
        width: 100px;
      }
    }
    .search {
      border: 2px solid #cfcfcf;
      display: flex;
      align-items: center;
      position: relative;
      border-radius: 0.2rem;
      overflow: hidden;
      i {
        position: absolute;
        right: 3px;
        font-size: 1rem;
        color: #7b7b7b;
      }
      input {
        border: none;
        padding: 0.3rem;
        padding-right: 1.2rem;
        &:focus {
          outline: none;
        }
      }
    }
  }
  .right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    .category {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .bell {
      i {
        color: #7b7b7b;
        font-size: 1.2rem;
      }
    }
    .user {
      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }
`;
