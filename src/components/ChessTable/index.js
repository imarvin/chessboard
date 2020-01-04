import React from 'react';
import './index.scss';

export const ChessTable = () => {
    let cols = [..."abcdefgh"];
    let rows = [..."12345678"];
    return (
        <div className="chess__table">
            {rows.map(row => {
                return (
                    <div className="chess__row">
                        {cols.map(col => {
                            return (
                                <div className="chess__cell" data-cell={`${col}${row}`}>{col}{row}</div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
};
