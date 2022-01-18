import React, { Component } from "react";
import { Link } from "react-router-dom";

import UpdateHealthForm from "../../../components/Form/UpdateHealthForm"

export default class UpdateHealth extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center" style ={{ margin: "0 auto"}} >
        <UpdateHealthForm/>
      </div>
    );
  }
}
