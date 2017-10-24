import React, { Component } from "react";

import GetInfoBtn from "../components/GetInfoBtn.react";
import InputCity from "../components/InputCity.react";

import { Col } from "react-bootstrap";

export  default class SearchCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onBtnClick = this.onBtnClick.bind(this);
    }

    onInputChange(e) {
        this.setState({ inputValue: e.target.value })
        console.log(e);;
    }

    onBtnClick() {
        this.props.onChangeCity(this.state.inputValue);
    }

    render() {
        return (
            <form>
                <Col md={3} sm={4}>
                    <InputCity value={this.state.inputValue} onInputChange={this.onInputChange.bind(this)} />
                </Col>
                <Col md={3} sm={3}>
                    <GetInfoBtn onBtnClick={this.onBtnClick.bind(this)} />
                </Col>
            </form>
        );
    }
}
