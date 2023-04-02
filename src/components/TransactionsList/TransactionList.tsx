import React, { useState } from 'react';
import { TransactionData } from '../../types/TransactionData'
import { TransactionDetail } from '../TransactionDetail';
import { TransactionItem } from '../TransactionItem'
import './TransactionList.css'

type Props = {
    transactions: TransactionData[];
    creditLimit: number;
};

const dayOfSeason = () => {
    const date = new Date();
    const year = date.getFullYear();
    const spring = new Date(year, 2, 1);
    const summer = new Date(year, 5, 1);
    const autumn = new Date(year, 8, 1);
    const winter = new Date(year, 11, 1);
    const seasonsStartDate = [spring, summer, autumn, winter];

    let currentSeason: Date | undefined;
    for (let season of seasonsStartDate) {
        if (date >= season) {
            currentSeason = season;
        } else {
            break;
        }
    }

    let dayOfSeason = -1;
    if (currentSeason !== undefined) {
        const diffDays = Math.floor((Date.now() - currentSeason.getTime()) / (1000 * 3600 * 24));
        dayOfSeason = diffDays + 1;
    }

    return dayOfSeason;
}

const pointCount = (seasonDay: number) => {
    if (seasonDay === 1) {
        return 2;
    }

    if (seasonDay === 2) {
        return 3;
    }

    let prevDayPoints = 2;
    let prevPrevDayPoints = 3;
    let points = 0;

    for (let i = 3; i <= seasonDay; i++) {
        points = Math.round(prevPrevDayPoints + prevDayPoints * 0.6);
        prevPrevDayPoints = prevDayPoints;
        prevDayPoints = points;
    }

    if (points >= 1000) {
        return Math.round(points / 1000) + 'K'
    }

    return points
}

export const TransactionList: React.FC<Props> = ({ transactions, creditLimit }) => {
    const [selectedTransaction, setSelectedTransaction] = useState<TransactionData | null>(null);
    const someSum = 17.30;
    const currentSum = creditLimit - someSum;
    const currentMonth = new Date().toLocaleString('en-US', { month: 'long' })
    const seasonDay = dayOfSeason();
    const points = pointCount(seasonDay);

    const handleTransactionClick = (transaction: TransactionData | null) => {
        setSelectedTransaction(transaction);
    };

    return (
        <>
            {selectedTransaction === null ? (
                <section className='transaction-list'>
                    <div className='actual-info'>
                        <div className='card-points-block'>
                            <div className='card-balance'>
                                <p><strong>Card balance</strong></p>
                                <p className='some-sum'>{`$${someSum.toFixed(2)}`}</p>
                                <p>{`$${currentSum.toFixed(2)}`} Available</p>
                            </div>
                            <div className='daily-points'>
                                <p><strong>Daily Points</strong></p>
                                <p>{points}</p>
                            </div>
                        </div>
                        <div className='payment'>
                            <div className='payment-info'>
                                <p><strong>No Payment Due</strong></p>
                                <p>{`You’ve paid your ${currentMonth} balance`}</p>
                            </div>
                            <div className='circle'>
                                <span className='icon icon-span'>
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=' latest-transaciont-list'>
                        <h2 className='title is-3'>Latest Transactions</h2>
                    </div>
                    <ul className='transcation-unordered-list'>
                        {transactions.map(item => (
                            <li
                                key={item.id}
                                // onClick={() => handleTransactionClick(item)}
                            >
                                <TransactionItem
                                    transaction={item}
                                    openTransactionDetail={handleTransactionClick}
                                />
                            </li>
                        ))}
                    </ul>
                    </section>
            ) : (
                <TransactionDetail
                    transactionDetail={selectedTransaction}
                    closeTransactionDetail={handleTransactionClick}
                />
            )}
    </>
    );
};
