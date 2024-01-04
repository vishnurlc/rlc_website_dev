import InfinitScroll from '@/components/chaufferservice/InfinitScroll';

import React from 'react';

const page = () => {
  return (
    <div>
      <InfinitScroll fetchApi={'chauffeur-cars'} />
    </div>
  );
};

export default page;
