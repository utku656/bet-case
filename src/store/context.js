import React , { useState , useContext , createContext } from 'react';
export const nesineContext = createContext({ coupon: [] });
export const useAppContext = () => useContext(nesineContext);

export function Context (props) {
  const [coupon, setCoupon] = useState([]);
  const handleCouponAdd = (couponDetails) => {
      let sameRow = -1;
        for(let i=0; i < coupon.length; i++) {
            if (couponDetails.code === coupon[i].code) {
              sameRow = i;
                break;
            }
        }
    if (sameRow > -1) {
      coupon.splice(sameRow, 1);
    }
    setCoupon([...coupon, couponDetails]);
  };

  const handleCouponDelete = (index) => {
    coupon.splice(index, 1);
    setCoupon([...coupon]);
  };

  const contextValue = {
    coupon,
    handleCouponDelete,
    handleCouponAdd,
  };

  return <nesineContext.Provider 
            value={contextValue}>{props.children}
          </nesineContext.Provider>;
};

