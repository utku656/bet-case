import React, { useState, memo } from 'react';
import { useAppContext } from '../../../store/context';
import { choiceOne, 
    choiceTwo, 
    choiceTree , 
    choiceFour ,
    choiceFive , 
    choiceSix , 
    choiceSeven } from '../../../constants/constants'
import './table-row.scss';

function TableRow(props) {
    const [matchResultSelected, setMatchResultSelected] = useState();
    const { coupon, handleCouponAdd, handleCouponDelete } = useAppContext();

    const match = {
        info: props.info,
        code: props.code,
        staticVariable: props.staticVariable,
    };

    const handleCoupon = (rateDetails, matchItem, index) => {
        setMatchResultSelected((prevState) => (prevState === index ? '' : index));
        let deletedIndex = -1;

        for (let i = 0; i < coupon.length; i++) {
             if (coupon[i].code === matchItem.code
                && coupon[i].rate === rateDetails.rate) {
                deletedIndex = i;
                break;
            }
        }
        if (deletedIndex > -1) {
            handleCouponDelete(deletedIndex);
            
        }else{
            const matchInfo = {
                ...rateDetails,
                ...matchItem
            };
            handleCouponAdd(matchInfo);
        }
        
    };

    return (
        <div className="table-row">
            <div className="match-info">
                <div>{props.code}</div>
                <div>{props.time}</div>
                <div>{props.info}</div>
            </div>
            <div >Yorumlar</div>
            <div>{props.staticVariable}</div>
            <div 
                className={`${matchResultSelected === 1 ? 'selected' : ''}`}
                onClick={() => handleCoupon(props.matchResult.host, match, choiceOne)}
            >
                {props.matchResult.host.rate}
            </div>
            <div 
                className={`${matchResultSelected === 2 ? 'selected' : ''}`}
                onClick={() => handleCoupon(props.matchResult.draw, match,  choiceTwo)}
            >{props.matchResult.draw.rate}</div>
            <div />
            <div 
                className={`${matchResultSelected === 3 ? 'selected' : ''}`}
                onClick={() => handleCoupon(props.goalCountResult.lower, match, choiceTree )}
            >{props.goalCountResult.lower.rate}</div>
            <div 
                className={`${matchResultSelected === 4 ? 'selected' : ''}`}
                onClick={() => handleCoupon(props.goalCountResult.upper, match, choiceFour )}
            >{props.goalCountResult.upper.rate}</div>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div 
                className={`${matchResultSelected === 5 ? 'selected' : ''}`}
                onClick={() => handleCoupon(props.doubleChanceResult.x1, match,choiceFive)}
            >{props.doubleChanceResult.x1.rate}</div>
            <div 
                className={`${matchResultSelected === 6 ? 'selected' : ''}`}
                onClick={() => handleCoupon(props.doubleChanceResult.x12, match,choiceSix)}
            >{props.doubleChanceResult.x12.rate}</div>
            <div 
                className={`${matchResultSelected === 7 ? 'selected' : ''}`}
                onClick={() => handleCoupon(props.doubleChanceResult.x2, match ,choiceSeven)}
            >{props.doubleChanceResult.x2.rate}</div>
            <div />
            <div />
            <div>3</div>
        </div>
    );
};
export default memo(TableRow);
