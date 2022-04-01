import React , { memo } from 'react';
import { useAppContext } from '../../store/context';
import './coupon.scss';

function Coupon  ()  {
  const { coupon } = useAppContext();
  let total = coupon.reduce((count, element) => count * Number(element.rate), 1).toFixed(2);

  return (
      <div className="coupon-content">
        {coupon?.map((element) => (
          <div key={`${element.code} - ${element.rate}`} className="event">
            <div className='coupon-match'>
            <div>{element.staticVariable}</div>
            <div>
              Kod:
              {element.code}
            </div>
            <div>
              Maç:
              {element.info}
            </div>
            </div>
            <div className="coupon-rate-mbs" >
            <div>
              Oran:
              {element.rate}
            </div>
            <div>
              MBS:
              {element.mbs}
            </div>
            </div>

          </div>
        ))}
        <div className="total">
          Toplam Tutar:
          {total !== 1 && total}
        </div>
      </div>
  );
};

export default memo(Coupon);
