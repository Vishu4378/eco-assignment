import { Container } from 'App.style';
import { Navbar } from 'Components';
import { FilterScreen, MainScreen } from 'Pages';
import React, { useState } from 'react';
import ProductData from 'Data/mockdata.json';
import { IPrice, ProductType } from 'Types';
import { FilterProducts } from 'utils';

const brands = [...new Set(ProductData.map((item) => item.brand))].slice(0, 4);
const categories = [...new Set(ProductData.map((item) => item.category))].slice(
  0,
  4
);

const priceList: IPrice[] = [
  {
    from: -1,
    to: 99,
  },
  {
    from: 100,
    to: 199,
  },

  {
    from: 200,
    to: 599,
  },
  {
    from: 600,
    to: 999,
  },
  {
    from: 1000,
    to: -1,
  },
];
const App = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<IPrice>();
  const [searchText, setSearchText] = useState('');

  const handleSelectBrand = (brand: string) => {
    setSelectedBrands((data) => {
      if (data.includes(brand)) {
        return data.filter((item) => brand != item);
      }
      return data.concat(brand);
    });
  };
  const handleSelectCategory = (category: string) => {
    setSelectedCategories((data) => {
      if (data.includes(category)) {
        return data.filter((item) => category != item);
      }
      return data.concat(category);
    });
  };
  const handleSelectPrice = (price: IPrice) => {
    setSelectedPrice((data) => {
      if (data === price) return;
      return price;
    });
  };

  const applyAllFilters = (products: ProductType[]) => {
    const filterCategories = FilterProducts.appyFilterCatgory(
      products,
      selectedCategories
    );
    const filterBrands = FilterProducts.applyBrandFilter(
      filterCategories,
      selectedBrands
    );
    const filterPrices = FilterProducts.applyPriceFilter(
      filterBrands,
      selectedPrice
    );
    const filterTitles = FilterProducts.applyNameFilter(
      filterPrices,
      searchText
    );
    return filterTitles;
  };

  return (
    <Container>
      <Navbar
        searchText={searchText}
        onSearchChange={(value) => setSearchText(value)}
      />
      <main>
        <FilterScreen
          prices={priceList}
          categories={categories}
          brands={brands}
          onBrandSelect={handleSelectBrand}
          onCategorySelect={handleSelectCategory}
          onPriceSelect={handleSelectPrice}
          selectedBrands={selectedBrands}
          selectedCategories={selectedCategories}
          selectedPrice={selectedPrice}
        />
        <MainScreen products={applyAllFilters(ProductData)} />
      </main>
    </Container>
  );
};

export default App;
