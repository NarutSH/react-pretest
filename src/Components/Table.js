import React, { useState, useEffect } from "react";

const Table = ({ products }) => {
  const [sortProducts, setSortProducts] = useState([]);

  const onDesSortClick = () => {
    const tempProducts = [...products];

    const res = tempProducts.sort((a, b) => {
      return b.price - a.price;
    });

    setSortProducts(res);
  };
  const onAccSortClick = () => {
    const tempProducts = [...products];

    const res = tempProducts.sort((a, b) => {
      return a.price - b.price;
    });

    setSortProducts(res);
  };

  const onRestoreClick = () => {
    setSortProducts(products);
  };

  useEffect(() => {
    setSortProducts(products);
  }, [products]);

  return (
    <div className="py-4">
      <div className="text-center">
        <button
          className="btn btn-outline-primary  mx-3 rounded-pill"
          onClick={onRestoreClick}
        >
          default
        </button>
        <button
          className="btn btn-warning mx-3  rounded-pill"
          onClick={onDesSortClick}
        >
          Descending
        </button>
        <button
          className="btn btn-info mx-3  rounded-pill"
          onClick={onAccSortClick}
        >
          Accending
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Brand</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
          </tr>
        </thead>
        <tbody>
          {sortProducts.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <img src={item.thumbnail} alt={item.title} width="30px" />

                  {item.title}
                </td>
                <td>{item.brand}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
