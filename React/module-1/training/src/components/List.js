import React, {Component} from 'react';

const List = (props) => {
    console.log(props);
    return (
        <div className='dropdown__item' onClick={props.applyTrainer}>{props.name}</div>
    )
};

export default List;