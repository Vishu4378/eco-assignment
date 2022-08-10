import React, { useState } from 'react';
import { Container } from './Filter.style';
import { IPrice } from 'Types';

interface Proptypes {
  selectedBrands?: string[];
  selectedCategories?: string[];
  selectedPrice?: IPrice;
  brands?: string[];
  categories?: string[];
  prices?: IPrice[];
  onBrandSelect?: (brand: string) => void;
  onCategorySelect?: (category: string) => void;
  onPriceSelect?: (price: IPrice) => void;
}

const Filter = ({
  selectedPrice,
  selectedBrands,
  selectedCategories,
  brands,
  categories,
  prices,
  onBrandSelect,
  onCategorySelect,
  onPriceSelect,
}: Proptypes) => {
  return (
    <Container>
      <div className='head'>
        <h1>Filter</h1>
        <i className='bx bx-filter'></i>
      </div>
      <hr />
      {brands && (
        <div className='brands'>
          <h4>Brands</h4>
          {brands.map((item) => (
            <label htmlFor={`brand-${item}`}>
              <input
                checked={selectedBrands?.includes(item) ?? false}
                type={'checkbox'}
                onClick={() => onBrandSelect?.(item)}
              />
              <p>{item}</p>
            </label>
          ))}
        </div>
      )}

      {categories && (
        <div className='categories'>
          <h4>Catogaries</h4>
          {categories.map((item) => (
            <label htmlFor={`category-${item}`}>
              <input
                checked={selectedCategories?.includes(item) ?? false}
                type={'checkbox'}
                onClick={() => onCategorySelect?.(item)}
              />
              <p>{item}</p>
            </label>
          ))}
        </div>
      )}

      {prices && (
        <div className='price'>
          <h4>Price</h4>
          {prices.map((item) => (
            <label htmlFor={`category-${item}`}>
              <input
                type={'checkbox'}
                checked={selectedPrice === item}
                onClick={() => onPriceSelect?.(item)}
              />
              <p>
                {item.from < 0 && ' < '}
                {item.to < 0 && ' > '}
                {item.from > -1 && '$' + item.from}
                {item.from > -1 && item.to > -1 && ' - '}
                {item.to > -1 && '$' + item.to}
              </p>
            </label>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Filter;
