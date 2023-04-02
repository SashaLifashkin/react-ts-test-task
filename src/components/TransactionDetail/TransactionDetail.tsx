import React from 'react';
import { TransactionData } from '../../types/TransactionData';
import './TransactionDetail.css';

type Props = {
    transactionDetail: TransactionData | null;
    closeTransactionDetail: (transactionDetail: TransactionData | null) => void;
};

export const TransactionDetail: React.FC<Props> = ({ transactionDetail, closeTransactionDetail }) => {
    return (
        <section className='transaction-detail'>
            <button
                className='button-to-back'
                type='button'
                onClick={() => closeTransactionDetail(null)}
            >
                <span className='icon'>
                    <i className='fa-solid fa-angle-left fa-lg'></i>
                </span>
            </button>
            <div className='main-info'>
                <div className='sum-info'>
                    <p className='about-sum'><strong>{`$${transactionDetail?.sum.toFixed(2)}`}</strong></p>
                    <p>{`Airalo`}</p>
                    <p>{transactionDetail?.date}</p>
                </div>
                <div className='status-total-info'>
                    <div className='status'>
                        <p>
                            <strong>Status: </strong>
                            {transactionDetail?.pending ? (
                                <strong>{`Pending`}</strong>
                            ) : (
                                <strong>{`Approved`}</strong>
                            )}
                        </p>
                        <p>{transactionDetail?.description}</p>
                    </div>
                    <hr className='hr-line' />
                    <div className='total'>
                        <span><strong>Total</strong></span>
                        <span><strong>{`$${transactionDetail?.sum.toFixed(2)}`}</strong></span>
                    </div>
                </div>
            </div>
        </section>
    );
};
