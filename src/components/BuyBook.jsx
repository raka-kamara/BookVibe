import React from 'react';

const BuyBook = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Buy Books from Us</h1>
      <p className="mb-5"> Browse our collection of books and discover new adventures, knowledge,
          and inspiration. Take the first step towards a lifelong journey of
          learning and enjoyment.</p>
      <button className="btn btn-primary">Buy Book</button>
    </div>
  </div>
</div>
    );
};

export default BuyBook;