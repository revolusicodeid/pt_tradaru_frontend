import React from 'react';

export const ListTaskOne = ({ index,data }) => (
    <span key={index}>
        Beli : {data.beli},&nbsp; Jual : {data.jual},&nbsp;
    </span>
);

export default ListTaskOne;