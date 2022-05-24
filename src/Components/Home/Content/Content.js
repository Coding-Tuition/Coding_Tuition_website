import React from "react";
import "./Content.css";
// import Figma1 from "../../../../public/codingTuitionFigma1.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { KeyboardArrowDownIcon } from "@mui/material";
import { Rating } from "@mui/material";
const Content = () => {
  return (
    <div className='container-fluid content_main'>
      <div className='container_main_heading'>
        {/* <img
          src='/codingTuitionFigma1.svg'
          alt='mainHeading'
          className='container-fulid FigmaImage'
        /> */}
        <div className='main_heading_text'>
          <div className='main_heading_CodingTuition'>Coding Tuition</div>
          <div className='main_heading_subheading'>
            <p className='main_text_textline1'>
              High Quality Courses at Low Prices
            </p>
            <p className='main_text_textline2'>
              We are Latest in Tech and Highest in Quality
            </p>
          </div>
          <button className='enroll_btn btn btn-primary'>Enroll</button>
          <button className='enroll_btn btn btn-primary ms-5'>
            View all Courses
          </button>
        </div>
        <div className='FigmaImage1'>
          <img
            // src='/Slice 1.png'
            src='/Table.svg'
            alt='mainHeading'
            className='FigmaImage_coding'
            // width='30%'
            // height='50%'
          />
        </div>
      </div>
      <div className='mernlogo'>
        <div className='mernlogo_card'>
          <div className='mernlogo_card_text'>
            <p className='mernlogo_text'>
              Learn MERN Stack to develop a End to End Product using MongoDB
            </p>
            <p className='mernlogo_text_subtext'>
              A complete guide to understand MERN Stack and master it.
            </p>
            <button className='btn btn-primary mernlogo_btn'>Enroll</button>
          </div>
          <div className='merncard_image'>
            <img
              src='/MernStackLogo.png'
              alt='merStackLogo'
              className='mernImg'
            />
          </div>
        </div>
      </div>
      <div className='courses_card'>
        <div className='FrontEnd_card'>
          <div className='FrontEnd_card_Content'>
            <h3 className='FrontEnd_card_text'>
              Most Popular FronEnd Technology
            </h3>
            <button className='FrontEnd_Card_btn btn btn-primary'>
              Enroll Now
            </button>
          </div>
          <div className='FrontEnd_card_Image'>
            <img
              src='/FrontEnd_Image.png'
              alt='frontEnd_image'
              className='frontEnd_Img'
            />
          </div>
        </div>
        <div className='BackEnd_card'>
          <div className='BackEnd_card_Content'>
            <p className='BackEnd_card_text'>Trending BackEnd Technology</p>
            <button className='btn btn-warning BackEnd_card_btn'>
              Enroll Now
            </button>
          </div>
          <div className='BackEnd_card_Image'>
            <img
              src='/BackEnd.jpg'
              alt='backEnd_image'
              className='backEnd_Img'
            />
          </div>
        </div>
        <div className='MongoDB_card'>
          <div className='MongoDB_card_Content'>
            <p className='MongoDB_card_text'>Trending DataBase Technology</p>
            <button className='btn btn-success MongoDB_card_btn'>
              Enroll Now
            </button>
          </div>
          <div className='MongoDB_card_Image'>
            <img
              src='/DbIcon.png'
              alt='MongoDB_image'
              className='MongoDB_Img'
            />
          </div>
        </div>
      </div>
      <div className='fronEnd_courses'>
        <div className='card' style={{ width: "20rem" }}>
          <img src='/HTML.png' className='card-img-top' alt='HTML' />
          <div className='card-body'>
            <h5 className='card-title'>HTML Certification</h5>
            <p className='card-text'>
              HTML Certification Traning Course from Zero to Advance
            </p>
            <a href='#url' className='btn btn-primary'>
              Enroll
            </a>
            <br />
            <br />
            <div>
              <Rating
                name='half-rating-read'
                defaultValue={5}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        </div>

        <div className='card' style={{ width: "20rem" }}>
          <img src='/css.png' className='card-img-top, css_logo' alt='css' />
          <div className='card-body'>
            <h5 className='card-title'>CSS Certification</h5>
            <p className='card-text'>
              CSS Certification Traning Course from Zero to Advance
            </p>
            <a href='#url' className='btn btn-primary'>
              Enroll
            </a>
            <br />
            <br />
            <div>
              <Rating
                name='half-rating-read'
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        </div>

        <div className='card' style={{ width: "20rem" }}>
          <img src='/js.png' className='card-img-top' alt='javascript' />
          <div className='card-body'>
            <h5 className='card-title'>JavaScript Certification</h5>
            <p className='card-text'>
              JavaScript Certification Traning Course from Zero to Advance
            </p>
            <a href='#id' className='btn btn-primary'>
              Enroll
            </a>
            <br />
            <br />
            <div>
              <Rating
                name='half-rating-read'
                defaultValue={5}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        </div>

        <div className='card' style={{ width: "20rem" }}>
          <img src='/ReactJs.png' className='card-img-top' alt='javascript' />
          <div className='card-body'>
            <h5 className='card-title'>React Js Certification</h5>
            <p className='card-text'>
              React Js Certification Traning Course from Zero to Advance
            </p>
            <a href='#id' className='btn btn-primary'>
              Enroll
            </a>
            <br />
            <br />
            <div>
              <Rating
                name='half-rating-read'
                defaultValue={5}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      <div className='BackEnd_courses'>
        <div className='card' style={{ width: "20rem" }}>
          <img
            src='/Redux.png'
            className='card-img-top redux_logo'
            alt='HTML'
          />
          <div className='card-body'>
            <h5 className='card-title'>React + Redux Certification</h5>
            <p className='card-text'>
              React + Redux Certification Traning Course from Zero to Advance
            </p>
            <a href='#url' className='btn btn-primary'>
              Enroll
            </a>
            <br />
            <br />
            <div>
              <Rating
                name='half-rating-read'
                defaultValue={5}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        </div>

        <div className='card' style={{ width: "20rem" }}>
          <img
            src='/NodeJs.png'
            className='card-img-top node_logo'
            alt='HTML'
          />
          <div className='card-body'>
            <h5 className='card-title'> Node Certification</h5>
            <p className='card-text'>
              Node Certification Traning Course from Zero to Advance
            </p>
            <a href='#url' className='btn btn-primary'>
              Enroll
            </a>
            <br />
            <br />
            <div>
              <Rating
                name='half-rating-read'
                defaultValue={5}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        </div>

        <div className='card' style={{ width: "20rem" }}>
          <img
            src='/ExpressJs.png'
            className='card-img-top express_logo'
            alt='HTML'
          />
          <div className='card-body'>
            <h5 className='card-title'>Express Js Certification</h5>
            <p className='card-text'>
              Express Js Certification Traning Course from Zero to Advance
            </p>
            <a href='#url' className='btn btn-primary'>
              Enroll
            </a>
            <br />
            <br />
            <div>
              <Rating
                name='half-rating-read'
                defaultValue={5}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        </div>

        <div className='card' style={{ width: "20rem" }}>
          <img
            src='/MongoDB.png'
            className='card-img-top mongo_logo'
            alt='HTML'
          />
          <div className='card-body'>
            <h5 className='card-title'>MongoDB Certification</h5>
            <p className='card-text'>
              MongoDB Certification Traning Course from Zero to Advance
            </p>
            <a href='#url' className='btn btn-primary'>
              Enroll
            </a>
            <br />
            <br />
            <div>
              <Rating
                name='half-rating-read'
                defaultValue={5}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      <h1 className='visionandmission'>Our Vision and Mission</h1>
      <div className='our_vision'>
        <img
          src='/Mission&vision.png'
          alt='illustration'
          width='250px'
          className='vision_img'
        />

        <div className='vision_text'>
          <p className='vision_mission_text1'>
            Here at coding Tuition Our Mission is to tech coding to School and
            College Students at affordable Price and provide me a Quality
            Content so that our Students can lend into a good Job after
            completing our course.
          </p>
          <p className='vision_mission_text2'>
            We are commited to provide our Students a best in market course at
            affordable price. By Enrolling to our courses students gets access
            to our alumani community to help you get a job.
          </p>
        </div>
      </div>
      <h1 className='why_us'>Why to Choose Coding Tuition</h1>
      <div className='why_us_features'>
        <div className='lady_wfh_container'>
          <img src='/lady_WFH_ing.png' alt='lady wfh' className='lady_wfh' />
          <p className='lady_wfh_text'>
            Comfort of Learning form home without going to anywhere
          </p>
        </div>
        <div className='learning_with_pears_container'>
          <img
            src='/Learning_with_Pears.png'
            alt='learning'
            className='learning'
          />
          <p className='learning_text'>
            A Quality content at very low prices as compared to other education
            Portal.will receive a Certification on completing Course
          </p>
        </div>
        <div className='online_support_container'>
          <img
            src='/Online_Support.png'
            alt='online support'
            className='onlineSupport'
          />
          <p className='onlineSupport_text'>
            24/7 support when ever you got stuck any where and separate Doubt
            clearing classes
          </p>
        </div>
        <div className='woman_using_tablet'>
          <img
            src='/Woman using tablet.png'
            alt='women'
            className='womanUsingTablet'
          />
          <p className='womanUsingTablet_text'>
            Track your Growth in Professional Carrier
          </p>
        </div>
      </div>
      <h1 className='container why_us_text1'> Why to Choose Us</h1>
      <div className=' container choose_us'>
        <div className='why_us_text1'>
          <p>
            <button
              class='btn btn-primary collapse_btn'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#HighestQuality'
              aria-expanded='false'
              aria-controls='collapseExample'>
              Highest in Quality
              <KeyboardArrowDownIcon id='high' />
            </button>
          </p>
          <div className='collapse' id='HighestQuality'>
            <div className='card card-body card_text'>
              Here at coding Tuition, we take quality very seriously. Every
              video is produced with highest quality in audio, video and
              content. We are benchmark in quality standard.
            </div>
          </div>
          <p>
            <button
              className='btn btn-primary collapse_btn'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#LatestTech'
              aria-expanded='false'
              aria-controls='collapseExample'>
              Latest in Technology
              <KeyboardArrowDownIcon id='high' />
            </button>
          </p>
          <div className='collapse' id='LatestTech'>
            <div className='card card-body card_text'>
              Here at coding Tuition, all out content is latest in tech as per
              the latest version. We referesh our courses from time to time to
              make it relevant.
            </div>
          </div>

          <p>
            <button
              className='btn btn-primary collapse_btn'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#Experienced'
              aria-expanded='false'
              aria-controls='collapseExample'>
              Experienced Facility
              <KeyboardArrowDownIcon id='high' />
            </button>
          </p>
          <div className='collapse' id='Experienced'>
            <div className='card card-body card_text'>
              Here at coding Tuition, all out teaching staff are highly
              Experienced and have a wide knowledge on topic and are subject
              matter expert.
            </div>
          </div>

          <p>
            <button
              className='btn btn-primary collapse_btn'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#Moneyback'
              aria-expanded='false'
              aria-controls='collapseExample'>
              14 Days Money Back
              <KeyboardArrowDownIcon id='high' />
            </button>
          </p>
          <div className='collapse' id='Moneyback'>
            <div className='card card-body card_text'>
              Here at coding Tuition, If you don't like the course your fess
              will be refended within 14 days of course enrollment with any
              question asked.
            </div>
          </div>
        </div>
        <div className='choose_us_img'>
          <img src='/why_us.png' alt='why_us_img' className='why_usImg' />
        </div>
      </div>
    </div>
  );
};

export default Content;
