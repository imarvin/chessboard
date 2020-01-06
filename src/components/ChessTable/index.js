import React from 'react';
import './index.scss';
import { ChessTableCell } from '../ChessTableCell';

export const ChessTable = () => {
    let cols = [..."abcdefgh"];
    let rows = [..."12345678"];
    return (
        <div className="chess__table">
            {rows && 
                rows.reverse().map( (row, i) => {
                    return (
                        <div key={row+i} className="chess__row">
                            <ChessTableCell key={row} row={row} cols={cols} />
                        </div>
                    )
                })
            }
        </div>
    )
};
