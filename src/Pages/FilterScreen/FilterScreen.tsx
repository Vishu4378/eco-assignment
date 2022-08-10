import { Filter } from 'Components';
import React from 'react';
import { Container } from './FilterScreen.style';

interface Proptyeps extends React.ComponentProps<typeof Filter> {}

const FilterScreen: React.FC<Proptyeps> = ({ ...filterProps }) => {
  return (
    <Container>
      <Filter {...filterProps} />
    </Container>
  );
};

export default FilterScreen;
