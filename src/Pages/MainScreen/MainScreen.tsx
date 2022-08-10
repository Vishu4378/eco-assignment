import { Product } from 'Components';
import React, { useState } from 'react';
import { ProductType, SortBy } from 'Types';
import { Container } from './MainScreen.style';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const SORT_OPTIONS = ['PRICE HIGH TO LOW', 'PRICE LOW TO HIGH'];

interface Proptypes {
  products?: ProductType[];
}
const MainScreen = ({ products }: Proptypes) => {
  const [sortType, setSortType] = useState<SortBy>('PRICE LOW TO HIGH');

  const sortProducts = (items: ProductType[]) => {
    if (sortType === 'PRICE HIGH TO LOW')
      return items.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        }
        if (a.price < b.price) {
          return 1;
        }
        return 0;
      });
    if (sortType === 'PRICE LOW TO HIGH')
      return items.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
    return items;
  };

  return (
    <Container>
      <div>
        <div className='location'>Home / Products</div>
        <div className='filter'>
          <Select
            displayEmpty
            value={sortType}
            onChange={(e) => setSortType?.(e.target.value as any)}
          >
            {SORT_OPTIONS.map((item, index) => (
              <MenuItem value={item} key={index}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <section>
        {sortProducts(products ?? []).map((item) => (
          <Product {...item} key={item.id} />
        ))}
      </section>
    </Container>
  );
};

export default MainScreen;
