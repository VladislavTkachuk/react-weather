import React from "react";

import "bootstrap/dist/css/bootstrap.css";

const GetInfoBtn = (props) => (
    <div>
        <button type="button" className="btn btn-info" onClick={props.onBtnClick}>Get Weather Info</button>
    </div>
)

export default GetInfoBtn;
