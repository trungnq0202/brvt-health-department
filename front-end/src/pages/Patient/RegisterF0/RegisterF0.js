import React, { Component } from "react";
import { Link } from "react-router-dom";

import RegisterF0Form from "../../../components/Form/registerF0Form"

export default class RegisterF0 extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center" style ={{ margin: "0 auto"}} >
        <RegisterF0Form/>
      </div>
    );
  }
}
