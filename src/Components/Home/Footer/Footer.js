import React from "react";
import "./Footer.css";
import ctIcon from "../../../logo-container.jpg";

const Footer = () => {
  return (
    <div className='container-fill footer'>
      <div className='address_footer'>
        <div className='footer_logo'>
          <div className='footer_icon'>
            {" "}
            <img
              src={ctIcon}
              alt='homeIcon'
              className='footer_icon2'
              style={{ width: "5%" }}
            />
            <span className='footer_companyName'>Coding Tuition</span>
          </div>
          <p className='footer_content'>
            LearnCodeOnline - Quality content at affordable pricing. Home for
            programmers. Video Courses on latest tech in easy understandable
            language.
          </p>
          <p className='copyright_sologan'>
            Copyright @2021 Coding Tuition All rights reserved
          </p>
        </div>
      </div>
      <div className='services_footer'>
        <h3>Services</h3>
        <div className='services_footer_details'>
          <ul className='services_list'>
            <li className='services_list_item'>
              <a href='https//google.com' className='services_link'>
                About Us
              </a>
            </li>
            <li className='services_list_item'>
              <a href='#Blog' className='services_link'>
                Blog
              </a>
            </li>
            <li className='services_list_item'>
              <a href='#Mentor' className='services_link'>
                Become a mentor
              </a>
            </li>
            <li className='services_list_item'>
              <a href='#Affliate' className='services_link'>
                Become an Affiliate
              </a>
            </li>
            <li className='services_list_item'>
              <a href='#Fame' className='services_link'>
                Hall of Fame
              </a>
            </li>
            <li className='services_list_item'>
              <a href='#Stories' className='services_link'>
                Success Stories
              </a>
            </li>
            <li className='services_list_item'>
              <a href='#Job' className='services_link'>
                Job guarantee
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='Resource_footer'>
        <h3>Resources</h3>
        <div className='resources_Footer_list'>
          <ul className='resouces_list'>
            <li className='resources_list_item'>
              <a href='#RecordedTutition' className='resources_link'>
                Recorded Tuition
              </a>
            </li>
            <li className='resources_list_item'>
              <a href='#LiveClasses' className='resources_link'>
                Live Tuition
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='contactUs_footer'>
        <h3>Contact Us</h3>
        <ul className='contactUS_list'>
          <li className='contactUs_list_item'>
            <a href='https://www.youtube.com' className='contactUs_link'>
              YouTube
            </a>
          </li>
          <li className='contactUs_list_item'>
            <a href='#LinkedIn' className='contactUs_link'>
              LinkedIn
            </a>
          </li>
          <li className='contactUs_list_item'>
            <a href='#Facebook' className='contactUs_link'>
              Facebook
            </a>
          </li>
          <li className='contactUs_list_item'>
            <a href='#Instagram' className='contactUs_link'>
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
