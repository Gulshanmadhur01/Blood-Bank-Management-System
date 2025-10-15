import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  
  const [bloodGroup, setBloodGroup] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <div>
      <form
        style={{ width: "25rem" }}
        onSubmit={(e) => {
          if (formType === "login")
            return handleLogin(e, email, password, role);
          else if (formType === "register")
            return handleRegister(
              e,
              name,
              role,
              email,
              password,
              organisationName,
              hospitalName,
              address,
              phone,
              bloodGroup,
              birthdate,
              gender,
              termsAccepted
            );
        }}
      >
        <h2 className="fw-normal mb-2 pb-2" style={{ letterSpacing: 1 }}>
          {formTitle}
        </h2>
        <hr size="1" />
        <div className="d-flex mb-3 gap-2">
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donarRadio"
              value={"donar"}
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
            />
            <label htmlFor="donarRadio" className="form-check-label">
              Donar
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="adminRadio"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Admin
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="hospitalRadio"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="hospitalRadio" className="form-check-label">
              Hospital
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="organisationRadio"
              value={"organisation"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="organisationRadio" className="form-check-label">
              Organisation
            </label>
          </div>
        </div>

        {(() => {
          switch (formType) {
            case "login":
              return (
                <>
                  
                  <InputType
                    labelText={"Email"}
                    lableForm={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"Password"}
                    lableForm={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            case "register":
              return (
                <>
                  {(role === "donar" || role === "admin") && (
                    <InputType
                      labelText={"Name"}
                      lableForm={"forName"}
                      inputType={"text"}
                      name={"name"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}
                  {role === "hospital" && (
                    <InputType
                      labelText={"Hospital Name"}
                      lableForm={"forHospitalName"}
                      inputType={"text"}
                      name={"hospitalName"}
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                    />
                  )}
                  {role === "organisation" && (
                    <InputType
                      labelText={"Organisation Name"}
                      lableForm={"forOrganisationName"}
                      inputType={"text"}
                      name={"organisationName"}
                      value={organisationName}
                      onChange={(e) => setOrganisationName(e.target.value)}
                    />
                  )}
                  <InputType
                    labelText={"Email"}
                    lableForm={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"Password"}
                    lableForm={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputType
                    labelText={"Phone No."}
                    lableForm={"forPhone"}
                    inputType={"text"}
                    name={"phone"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <InputType
                    labelText={"Birthdate"}
                    lableForm={"forBirthdate"}
                    inputType={"date"}
                    name={"birthdate"}
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                  />
                  <div className="form-outline mb-4">
                    <label className="form-label d-block" htmlFor="forGender">Gender</label>
                    <div className="d-flex gap-4">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="genderMale" value="male" onChange={(e)=>setGender(e.target.value)} />
                        <label className="form-check-label" htmlFor="genderMale">Male</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="genderFemale" value="female" onChange={(e)=>setGender(e.target.value)} />
                        <label className="form-check-label" htmlFor="genderFemale">Female</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="genderOther" value="other" onChange={(e)=>setGender(e.target.value)} />
                        <label className="form-check-label" htmlFor="genderOther">Other</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="forBloodGroup">Blood Group</label>
                    <select
                      id="forBloodGroup"
                      name="bloodGroup"
                      className="form-control form-control-lg"
                      value={bloodGroup}
                      onChange={(e) => setBloodGroup(e.target.value)}
                    >
                      <option value="">Select blood group</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                    </select>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="forAddress">Address</label>
                    <textarea
                      id="forAddress"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control form-control-lg"
                      rows={3}
                      placeholder="House/Flat, Street, City, State, Pincode"
                    />
                  </div>
                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" id="termsCheck" checked={termsAccepted} onChange={(e)=>setTermsAccepted(e.target.checked)} />
                    <label className="form-check-label" htmlFor="termsCheck">
                      I agree to the terms and conditions
                    </label>
                  </div>
                </>
              );
            default:
          return null;
          }
        })()}

        <div className="pt-1 mb-4 d-flex gap-4">
          <button className="btn btn-info btn-lg btn-block" type="submit">
            {submitBtn}
          </button>
          {formType === "login" ? (
            <p className="mt-2">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          ) : (
            <p className="mt-2">
              Already Have an account? <Link to="/login">Login</Link>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
