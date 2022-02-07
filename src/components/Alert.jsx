import React from 'react';

const Alert = (props) => {
    const capitalized = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return <>
        {props.alert && <div className={`mx-5 my-1 alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalized(props.alert.type)}</strong>: {props.alert.msg}
        </div>}
    </>
};

export default Alert;