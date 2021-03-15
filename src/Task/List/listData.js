import React from 'react';

export const listData = ({ items, Layout }) =>
  items.map((data,index) => (
    <Layout
      key={index}
      data={data}
    />
  ));