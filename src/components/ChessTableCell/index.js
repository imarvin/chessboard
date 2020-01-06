import React from 'react';

export const ChessTableCell = (props) => {
    const { row, cols } = props;
    return (
        <>
            {cols && 
                cols.map(col => {
                    return (
                        <div key={col+row} className="chess__cell" data-cell={col+row} data-row={row} data-col={col}>
                            <span>{col}{row}</span>
                        </div>
                    )
                })
            }
        </>
    )
};
