import React from 'https://esm.sh/react';


function AppInput(props) {
    console.log({props})
    return (
        <div className="AppInput">
            <label htmlFor="{props.id}">{props.label}</label>
            <input type="{props.type}" placeholder={props.placeholder} id={props.id} />
        </div>
    )
}

export default AppInput;