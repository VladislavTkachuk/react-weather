import React from "react";

import "bootstrap/dist/css/bootstrap.css";

const InputCity = (props) => (
    <div>
        <label>
            <input type="text"
                className="form-control"
                value={props.value}
                onChange={props.onInputChange}
                placeholder="Enter name of the city..."
                />
            <span className="help-block">The name have to be only in english.</span>
        </label>
    </div>
)

export default InputCity;
