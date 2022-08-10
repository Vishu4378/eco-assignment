import { IPrice, ProductType } from 'Types';

export class FilterProducts {
  static appyFilterCatgory = (
    products: ProductType[],
    selectedCategories: string[]
  ) => {
    if (!selectedCategories.length) return products;
    const filteredProducts = products.filter((product) => {
      if (selectedCategories.includes(product.category)) return true;
      return false;
    });
    return filteredProducts;
  };

  static applyBrandFilter = (
    products: ProductType[],
    selectedBrands: string[]
  ) => {
    if (!selectedBrands.length) return products;
    const filteredProducts = products.filter((product) => {
      if (selectedBrands.includes(product.brand)) return true;
      return false;
    });
    return filteredProducts;
  };

  static applyPriceFilter = (
    products: ProductType[],
    selectedPrice?: IPrice
  ) => {
    if (!selectedPrice) return products;
    const filteredProducts = products.filter((product) => {
      if (selectedPrice.from < 0) {
        return product.price <= selectedPrice.to;
      }
      if (selectedPrice.to < 0) {
        return product.price >= selectedPrice.from;
      }
      return (
        product.price <= selectedPrice.to && product.price >= selectedPrice.from
      );
    });
    return filteredProducts;
  };

  static applyNameFilter = (products: ProductType[], searchText: string) => {
    const filteredProducts = products.filter((product) => {
      const title = product.title.toLocaleLowerCase().replace(/\s/g, '');
      const search = searchText.toLocaleLowerCase().replace(/\s/g, '');
      return title.includes(search);
    });

    return filteredProducts;
  };
}
