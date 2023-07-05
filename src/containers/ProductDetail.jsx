import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Hearder';

const ProductDetail = () => {
  const storeData1 = useSelector((state) => state.storeData);
  const { productId } = useParams();
  const oneData = storeData1.find((data) => data.id === parseInt(productId, 10));
  return (
    <div>
      <Header />

      <div className="grid-all">
        <div className="ui placehoder segment">
          <div className="ui two column stackable center  aligned grid">
            <div className="ui vertical divider"> And </div>
            <div className="middle aligned row">
              <div className="column lp">
                <img src={oneData.image} className="ui fluid image" alt={oneData.title} />
              </div>
              <div className="column rp">
                <h1>{oneData.title}</h1>
                <h2>
                  <span className="ui teal tag label">
                    {' '}
                    $
                    {oneData.price}
                  </span>
                </h2>
                <h3 className="ui brown block header">
                  {' '}
                  {oneData.category}
                </h3>
                <p>{oneData.description}</p>
                <div className="ui vertical animated button" tabIndex={oneData.id}>
                  <div className="hidden content">
                    <i className="shop icon" />
                  </div>
                  <div className="visible content"> Add to Cart</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
