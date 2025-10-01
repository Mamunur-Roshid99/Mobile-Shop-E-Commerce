import React from 'react'
import CategoryPage from './CategoryPage'
import DealsDay from '../HomePage/DealsDay';
import CTASection from '../HomePage/CTASection';

const Index = ({ slug }) => {
    console.log(slug)
  return (
    <div>
      <CategoryPage slug={slug} />
      <DealsDay />
      <CTASection />
    </div>
  );
};

export default Index
