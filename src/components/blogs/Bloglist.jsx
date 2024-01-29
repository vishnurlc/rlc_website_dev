import React from 'react';
import InfinitScroll from '../chaufferservice/InfinitScroll';

const Bloglist = () => {
  return <InfinitScroll fetchApi={'blogs'} blog={true} />;
};

export default Bloglist;
