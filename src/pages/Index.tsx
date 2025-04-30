
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import FeaturedServices from '@/components/home/FeaturedServices';
import HowItWorks from '@/components/home/HowItWorks';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <FeaturedServices />
      <HowItWorks />
    </Layout>
  );
};

export default Index;
