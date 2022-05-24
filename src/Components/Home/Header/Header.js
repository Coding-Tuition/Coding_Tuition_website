import React, { useState } from "react";
import "./Header.css";
import ctIcon from "../../../logo-container.jpg";
import Modal from "react-modal";
import icons from "glyphicons";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#3accf24f",
    // backgroundColor: "grey",
    boxShadow: "10px 10px 5px grey",
  },
};

const Header = () => {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [signupModalIsOpen, setSignupModalIsOpen] = useState(false);
  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [confirmPassword, setConfirmPassword] = useState(undefined);
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password,
  });
  const [loginMessage, setLoginMessage] = useState("");

  const handleLogin = () => {
    setLoginModalIsOpen(true);
  };

  const handleSignup = () => {
    setSignupModalIsOpen(true);
  };

  const handleLoginCloseModal = (state, value) => {
    setLoginModalIsOpen(false);
  };
  const handleSignupCloseModal = () => {
    setSignupModalIsOpen(false);
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    const reqObj = {
      email,
      password,
    };

    // API call to send the data to backEnd
    // setLoginModalIsOpen: false;
    // setEmail: undefined;
    // setPassword: undefined;
    setLoginModalIsOpen(false);
  };
  const signupHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      // make API call

      setSignupModalIsOpen(false);
    }
  };

  return (
    <div className='header_top container-fluid'>
      <div className='ct_icon'>
        <img
          src={ctIcon}
          alt='homeIcon'
          className='ctIcon1'
          style={{ width: "24%" }}
        />
      </div>
      <div children='header_category'>
        <ul className='dot'>
          <li>
            <div className='dropdown'>
              <a
                class='btn btn-secondary dropdown-toggle'
                href='#'
                role='button'
                id='dropdownMenuLink'
                data-bs-toggle='dropdown'
                aria-expanded='false'>
                Courses
              </a>

              <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
                <li>
                  <a className='dropdown-item' href='#'>
                    HTML & CSS
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    React Js
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Node Js
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Express Js
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Mongoo DB
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    SQL
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Master MERN Stack
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>Internship</li>
          <li>Become Member</li>
          <li>About us</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className='login_signup'>
        <button className='login' onClick={handleLogin}>
          Login
        </button>
        <button className='signup' onClick={handleSignup}>
          Sign up
        </button>
      </div>
      <Modal isOpen={loginModalIsOpen} style={customStyles}>
        <div
          className='glyphicon glyphicon-remove btn-close'
          style={{
            float: "right",
            margin: "1px",
            backgroundColor: "red",
            color: "white",
          }}
          onClick={handleLoginCloseModal}></div>
        <div>
          <h2 className='loginhead'>Login</h2>
          <hr />
          <form onSubmit={loginHandler}>
            <div class='mb-3'>
              <label for='exampleInputEmail1' class='form-label'>
                Enter Email address
              </label>
              <input
                type='email'
                class='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                name='email'
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id='emailHelp' class='form-text'>
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class='mb-3'>
              <label for='exampleInputPassword1' class='form-label'>
                Password
              </label>
              <input
                type='password'
                class='form-control'
                id='exampleInputPassword1'
                value={password}
                name='password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class='mb-3 form-check'>
              <input
                type='checkbox'
                class='form-check-input'
                id='exampleCheck1'
              />
            </div>
            <button type='submit' className='btn btn-outline-success'>
              Login
            </button>
          </form>
        </div>
      </Modal>

      <Modal isOpen={signupModalIsOpen} style={customStyles}>
        <div
          className='btn-close'
          style={{
            float: "right",
            margin: "1px",
            backgroundColor: "red",
            color: "white",
          }}
          onClick={handleSignupCloseModal}></div>
        <div className='signupModal'>
          <h2>Create New Account</h2>
          <hr />
          <form onSubmit={signupHandler}>
            <div class='mb-3'>
              <label for='exampleFormControlInput1' class='form-label'>
                Enter First Name
              </label>
              <input
                type='text'
                class='form-control'
                id='exampleFormControlInput1'
                placeholder='First Name'
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div class='mb-3'>
              <label for='exampleFormControlInput2' class='form-label'>
                Enter last Name
              </label>
              <input
                type='text'
                class='form-control'
                id='exampleFormControlInput2'
                placeholder='Last Name'
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div class='mb-3'>
              <label for='exampleFormControlInput3' class='form-label'>
                Email address
              </label>
              <input
                type='email'
                class='form-control'
                id='exampleFormControlInput3'
                placeholder='name@example.com'
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class='mb-3'>
              <label for='exampleFormControlInput4' class='form-label'>
                Enter Password
              </label>
              <input
                type='password'
                class='form-control'
                id='exampleFormControlInput4'
                placeholder='Enter Password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class='mb-3'>
              <label for='exampleFormControlInput5' class='form-label'>
                Confirm Password
              </label>
              <input
                type='password'
                class='form-control'
                id='exampleFormControlInput5'
                placeholder='Confirm Password'
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type='submit' className='btn btn-outline-danger'>
              Create Account
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
