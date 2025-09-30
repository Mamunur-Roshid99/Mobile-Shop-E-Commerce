import React from 'react'
import CategoryPage from './CategoryPage'

const Index = ({ slug }) => {
    console.log(slug)
  return (
    <div>
      <CategoryPage slug={slug} />
    </div>
  );
};

export default Index
