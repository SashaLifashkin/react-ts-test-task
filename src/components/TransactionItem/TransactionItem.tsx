// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import { faApple } from '@fortawesome/free-brands-svg-icons'
import { MyIcon } from '../MyIcon/MyIcon'
import { TransactionData } from '../../types/TransactionData'
import './TransactionItem.css';

type Props ={
    transaction: TransactionData;
    openTransactionDetail: (transactionDetail: TransactionData | null) => void;
};

const rightDate = (date: string) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const transactionDate = new Date(date);
    const diffDays = Math.floor((Date.now() - transactionDate.getTime()) / (1000 * 3600 * 24))

    if (diffDays < 7) {
        return days[transactionDate.getDay()];
    }

    return date;
};

export const TransactionItem: React.FC<Props> = ({ transaction, openTransactionDetail }) => {
    const visibleDate = rightDate(transaction.date);

    return (
        <div className='transaction'>
            <div className='transaction-icon'>
                <MyIcon
                    iconName={transaction.iconName}
                    prefix={transaction.iconPrefix}
                />
            </div>
            {/* <FontAwesomeIcon icon={faApple} size="6x" /> */}
            {/* <FontAwesomeIcon icon={["fab", "apple"]} size="4x" /> */}
            {/* <div style={{width:'5em'}}>Will be some icon</div> */}
            <div className='transaction-info'>
                <div className='transaction-type'>
                    <span>
                        <strong>{transaction.name}</strong>
                    </span>
                    <span>
                        <strong>
                            {transaction.name === 'Credit'
                                ? `$${transaction.sum.toFixed(2)}`
                                : `+$${transaction.sum.toFixed(2)}`
                            }
                        </strong>
                    </span>
                </div>
                <div className='description'>
                    <span>{transaction.description}</span>
                </div>
                <div className='date'>
                    {transaction.authorizedUser !== '' ? (
                        <span>
                            {transaction.authorizedUser}
                            {' - '}
                            {visibleDate}
                        </span>
                    ) : (
                        <span>{visibleDate}</span>
                    )}
                </div>
            </div>
            <button
                className='button-to-detail'
                type="button"
                onClick={() => openTransactionDetail(transaction)}
            >
                <span className='icon'>
                    <i className='fa-solid fa-angle-right fa-lg'></i>
                </span>
            </button>
        </div>
    );
};
