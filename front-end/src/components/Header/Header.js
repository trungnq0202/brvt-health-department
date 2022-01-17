import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import AdminHeader from "./userHeader/AdminHeader";
import PatientHeader from "./userHeader/PatientHeader";
import DoctorHeader from "./userHeader/DoctorHeader";
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAdmin: false,
      showDoctor: false,
      showPatient: false,
    };
  }

  componentDidMount() {
    // TODO: Fetch User
    switch (this.props.role) {
      case "ADMIN":
        this.setState({
          showAdmin: true,
          showDoctor: false,
          showPatient: false,
        });
        break;
      case "DOCTOR":
        this.setState({
          showAdmin: false,
          showDoctor: true,
          showPatient: false,
        });
        break;
      case "PATIENT":
        this.setState({
          showAdmin: false,
          showDoctor: false,
          showPatient: true,
        });
        break;
      default:
        this.setState({
          showAdmin: false,
          showDoctor: false,
          showPatient: true,
        });
    }
  }

  render() {
    const { showAdmin, showDoctor, showPatient } = this.state;
    return (
      <div>
        {showAdmin && <AdminHeader />}
        {showPatient && <PatientHeader />}
        {showDoctor && <DoctorHeader />}
      </div>
    );
  }
}
