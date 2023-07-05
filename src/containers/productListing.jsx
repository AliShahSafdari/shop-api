import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from '../redux/storeReducer';
import Header from './Hearder';

const ProductListing = () => {
  const dispatch = useDispatch();
  const storeData1 = useSelector((state) => state.storeData);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const renderList = storeData1.map((data) => (
    <div className="four column wide" key={data.id}>
      <div className="ui link cards">
        <div className="card">
          <img src={data.image} alt={data.title} className="image-all" />
          <Link to={`/product/${data.id}`} className="link">
            <div className="Content">
              <div className="header">{data.title}</div>
              <div className="meta price">{data.price}</div>
              <div className="meta">
                {' '}
                {data.category}
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <Header />
      <div className="grid-all">
        <>
          {' '}
          {renderList}
        </>
      </div>
    </div>
  );
};

export default ProductListing;
