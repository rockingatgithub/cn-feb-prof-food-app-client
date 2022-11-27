import React from 'react';

function Order(props) {
    return (
        <div>
            {props.orders.map((order) => {
                return <li>{order.name}</li>
            })}
        </div>
    );
}

export default Order;