import React from 'react';
import { Container } from './Navbar.style';

interface Porptypes {
  searchText?: string;
  onSearchChange?: (value: string) => void;
}

const Navbar: React.FC<Porptypes> = ({ searchText, onSearchChange }) => {
  return (
    <Container>
      <div className='left'>
        <div className='brand'>
          <img src={'/assets/logo.png'} alt={'Logo'} />
        </div>
        <div className='search'>
          <input
            type={'text'}
            value={searchText ?? ''}
            onChange={(e) => onSearchChange?.(e.target.value)}
          />
          <i className='bx bx-search-alt-2'></i>
        </div>
      </div>
      <div className='right'>
        <div className='category'>
          <i className='bx bx-menu'></i>
          <p>Categories</p>
        </div>
        <div className='bell'>
          <i className='bx bxs-bell'></i>
        </div>
        <div className='user'>
          <img
            src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt='Profile'
          />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
