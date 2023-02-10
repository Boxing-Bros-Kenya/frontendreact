import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import bro1 from "./images/bro1.jpg";
import bro2 from "./images/bro2.jpg";
import img6 from "./images/img6.jpg";
import stephenImage from "./images/stephen.jpg";
import logoSmall from "./images/logosmall.png";
import axios from "axios";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  // const [message, setMessage] = useState(
  //   "A new member has been created, congrats!"
  // );

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      phonenumber: phone,
      // message: message,
    };
    axios
      .post("https://boxingbrosapi.herokuapp.com/api/emails", { data })
      .then((res) => {
        // console.log(res);
        window.location = "/";
      });
  }

  return (
    <>
      <MetaTags>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Boxing bros" />
        <meta property="og:site_name" content="Boxing Bros Kenya" />
        <meta
          name="description"
          content="Boxing bros Kenya, Boxing in kenya,Boxing,Boxing in Nairobi,Boxercise,Weight Loss,Fitness Nairobi
    Kick Boxing, Kick Boxing in Kenya, Kick Boxing in Nairobi, Muay Thai, Muay Thai in Kenya, Muay Thai in Nairobi,
    Boxing Gym,Muay Thai Gym, Personal training in Nairobi, Strength and Conditioning self defense, Personal trainer,
    Fitness center, Best Boxing Gym Nairobi,Best Muay Thai Nairobi"
        />
        <meta
          name="google-site-verification"
          content="MfG6oY-Y5pv0LHiy4IMi3ONLYN2T8FkQDdlU8FlouY4"
        />
        <meta
          property="og:description"
          content="This is the Landing page for Boxing bros. Follow us on instagram via the page.
    You can also contant us if you need training on Boxing or basic fitness"
        />
      </MetaTags>

      <title>BoxingBros</title>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="navigation__button open-menu">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a className="navigation__link-close close-menu">
                <span className="navigation__icon-close">X</span>
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link close-menu">
                <span>01.</span>About
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#section-features"
                className="navigation__link close-menu"
              >
                <span>02.</span>Benefits
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#section-packages"
                className="navigation__link close-menu"
              >
                <span>03.</span>Packages
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#section-stories"
                className="navigation__link close-menu"
              >
                <span>04.</span>Client Stories
              </a>
            </li>
            <li className="navigation__item">
              <a href="#section-book" className="navigation__link close-menu">
                <span>05.</span>Contact Us
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="https://instagram.com/boxingbros_ke?utm_source=ig_profile_share&igshid=1tfvvk7bzbx9z"
                target="_blank"
                className="navigation__link close-menu"
              >
                <span>06.</span>Gallery
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <header className="header">
        <div className="logo-box">
          {/*<img class="logo" src="images/logo.png" alt="BoxingBros">*/}
        </div>
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Boxing Bros</span>
            <span className="heading-primary-sub">
              where personal fitness begins
            </span>
          </h1>
          <a href="#section-book" className="btn btn-white btn-animated">
            BOOK NOW
          </a>
        </div>
      </header>
      <main>
        <section className="section-about" id="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">WHO ARE THE BROS</h2>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                ABOUT BRAYAN
              </h3>
              <p className="paragraph">
                Brayan Omondi is the epitome of fitness trainers with a
                background in basketball ,football, rugby and swimming. He began
                boxing in his late teens at the age of 19 and quickly rose to
                the ranks of the top heavyweight boxers in the country......
              </p>
              <a
                href="#popup-brayan"
                className="btn-text u-margin-bottom-medium"
              >
                Learn More →
              </a>
              <h3 className="heading-tertiary u-margin-bottom-small">
                ABOUT LENNOX
              </h3>
              <p className="paragraph">
                lennox omukwaya aka lennox hostile is a one of the stylish
                boxers known in the country, grew up in a boxing family with his
                father pugilist top copkusimba leading the national boxing team
                as its captain he comes from a family of boxers from his father,
                grandfather brother and....
              </p>
              <a href="#popup-lennox" className="btn-text">
                Learn More →
              </a>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  src={bro1}
                  alt="Photo1"
                  className="composition__photo composition__photo--p1"
                />
                <img
                  src={bro2}
                  alt="Photo2"
                  className="composition__photo composition__photo--p2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section-features" id="section-features">
          <div className="u-center-text u-margin-bottom-big u-margin-top-small">
            <h2 className="heading-secondary__features">
              SOME OF THE FEATURES
            </h2>
          </div>
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="icon-basic-clockwise feature-box__icon" />
                <h3 className="heading-tertiary u-margin-bottom-medium">
                  TIME
                </h3>
                <p className="feature-box__text">
                  We provide our services during convenient times that fit well
                  with your schedule.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="icon-basic-map feature-box__icon" />
                <h3 className="heading-tertiary u-margin-bottom-medium">
                  CONVENIENCE
                </h3>
                <p className="feature-box__text">
                  Our quality of training will ensure that your fitness needs
                  are well met.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="icon-basic-calendar feature-box__icon" />
                <h3 className="heading-tertiary u-margin-bottom-medium">
                  SCHEDULE
                </h3>
                <p className="feature-box__text">
                  We lias with your schedule ensuring that your personal
                  activities aren't altered.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="icon-basic-geolocalize-01 feature-box__icon" />
                <h3 className="heading-tertiary u-margin-bottom-medium">
                  LOCATION
                </h3>
                <p className="feature-box__text">
                  We provide both home training and gym training for your
                  convenience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-packages" id="section-packages">
          <div className="u-center-text u-margin-bottom-huge">
            <h2 className="heading-secondary">SOME OF THE PACKAGES</h2>
          </div>
          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card_side card_side-front">
                  <div className="card_picture card_picture-1">&nbsp;</div>
                  <h4 className="card_heading">
                    <span className="card_heading-span card_heading-span-1">
                      PERSONAL TRAINING
                    </span>
                  </h4>
                  <div className="card_details">
                    <ul>
                      <li>Sun - Sat</li>
                      <li>1 Session - 2000</li>
                      <li>8 Sessions - 10k</li>
                      <li>12 Sessions - 14k</li>
                      <li>1 Hour Per Session</li>
                    </ul>
                  </div>
                </div>
                <div className="card_side card_side-back card_side-back-1">
                  <div className="card_cta">
                    <div className="card_price-box">
                      <p className="card_price-only">Walk-In Session</p>
                      <p className="card_price-only">Ksh</p>
                      <p className="card_price-value">2000</p>
                    </div>
                    <a href="#section-book" className="btn btn-white">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <div className="card_side card_side-front">
                  <div className="card_picture card_picture-2">&nbsp;</div>
                  <h4 className="card_heading">
                    <span className="card_heading-span card_heading-span-2">
                      BOXING
                    </span>
                  </h4>
                  <div className="card_details">
                    <ul>
                      <li>Sun - Sat</li>
                      <li>1 Session - 2500</li>
                      <li>8 Sessions - 12k</li>
                      <li>12 Sessions - 15k</li>
                      <li>1 Hour Per Session</li>
                    </ul>
                  </div>
                </div>
                <div className="card_side card_side-back card_side-back-2">
                  <div className="card_cta">
                    <div className="card_price-box">
                      <p className="card_price-only">Walk-In Session</p>
                      <p className="card_price-only">Ksh</p>
                      <p className="card_price-value">2500</p>
                    </div>
                    <a href="#section-book" className="btn btn-white">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <div className="card_side card_side-front">
                  <div className="card_picture card_picture-3">&nbsp;</div>
                  <h4 className="card_heading">
                    <span className="card_heading-span card_heading-span-3">
                      KICKBOXING
                    </span>
                  </h4>
                  <div className="card_details">
                    <ul>
                      <li>Sun - Sat</li>
                      <li>1 Session - 2500</li>
                      <li>8 Sessions - 12k</li>
                      <li>12 Sessions - 15k</li>
                      <li>1 Hour Per Session</li>
                    </ul>
                  </div>
                </div>
                <div className="card_side card_side-back card_side-back-3">
                  <div className="card_cta">
                    <div className="card_price-box">
                      <p className="card_price-only">Walk-In Session</p>
                      <p className="card_price-only">Ksh</p>
                      <p className="card_price-value">2500</p>
                    </div>
                    <a href="#section-book" className="btn btn-white">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card_side card_side-front">
                  <div className="card_picture card_picture-4">&nbsp;</div>
                  <h4 className="card_heading">
                    <span className="card_heading-span card_heading-span-4">
                      MUAY THAI
                    </span>
                  </h4>
                  <div className="card_details">
                    <ul>
                      <li>Sun - Sat</li>
                      <li>1 Session - 2500</li>
                      <li>8 Sessions - 12k</li>
                      <li>12 Sessions - 15k</li>
                      <li>1 Hour Per Session</li>
                    </ul>
                  </div>
                </div>
                <div className="card_side card_side-back card_side-back-4">
                  <div className="card_cta">
                    <div className="card_price-box">
                      <p className="card_price-only">Walk-In Session</p>
                      <p className="card_price-only">Ksh</p>
                      <p className="card_price-value">2500</p>
                    </div>
                    <a href="#section-book" className="btn btn-white">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-stories" id="section-stories">
          <div className="bg-video">
            <video className="bg-video__content" autoPlay="" muted="" loop="">
              <source src="images/people.mp4" type="video/mp4" />
              Your browser does not support background videos!
            </video>
          </div>
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">CLIENT STORIES</h2>
          </div>
          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src={img6}
                  alt="Person of the image"
                  className="story__img"
                />
                <figcaption className="story__caption">
                  Sonny Muthoni
                </figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  I learnt boxing in the shortest time possible.
                </h3>
                <p>
                  Boxing brothers made boxing an amazing exprience for me and i
                  think boxercise was the best decision i've ever made. Boxing
                  is my therapy.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src={stephenImage}
                  alt="Person of the image"
                  className="story__img"
                />
                <figcaption className="story__caption">
                  Stephen Ngugi
                </figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Lost weight through boxercise
                </h3>
                <p>
                  It has been an amazing one year, i've been able to lose 15kgs
                  through boxercise all thanks to the boxing brothers.
                </p>
              </div>
            </div>
          </div>
          <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn-text">
              Read more stories →
            </a>
          </div>
        </section>
        <section className="section-book" id="section-book">
          <div className="row">
            <div className="book">
              <div className="book__form">
                <form
                  className="form"
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                >
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">START BOOKING NOW</h2>
                  </div>
                  <div className="form__group">
                    <input
                      className="form__input"
                      placeholder="Fullname"
                      required=""
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="name" className="form__label">
                      Fullname
                    </label>
                  </div>
                  <div className="form__group">
                    <input
                      className="form__input"
                      placeholder="Email Address"
                      name="email"
                      required=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email" className="form__label">
                      Email Address
                    </label>
                  </div>
                  <div className="form__group">
                    <input
                      className="form__input"
                      placeholder="Phone Number"
                      name="phone"
                      required=""
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <label htmlFor="phone" className="form__label">
                      Phone Number
                    </label>
                  </div>
                  <div className="form__group">
                    <button className="btn btn--green" type="submit">
                      BOOK
                    </button>
                  </div>
                </form>
                <form className="form__small">
                  <div className="u-margin-top-small u-margin-bottom-small">
                    <h2 className="heading-tertiary">OR</h2>
                  </div>
                  <div className="form__small-group ">
                    {/*<a class="btn btn--green" href="tel:+254706179903">CALL US!</a>*/}
                    <a className="btn btn--green" href="tel:+254792394507">
                      CALL US!
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="footer__logo-box">
            <img src={logoSmall} alt="Boxing bros" className="footer__logo" />
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <div className="footer__navigation">
                <ul className="footer__list">
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Twitter
                    </a>
                  </li>
                  <li className="footer__item">
                    <a
                      href="https://instagram.com/boxingbros_ke?utm_source=ig_profile_share&igshid=1tfvvk7bzbx9z"
                      className="footer__link"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Facebook
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-2">
              <p className="footer__copyright">
                Built by{" "}
                <a href="#" className="footer__link">
                  Frank Ojwang
                </a>
                . Copyright © by Frank.
              </p>
            </div>
          </div>
        </footer>
        {/*<div class="popup" id="popup">*/}
        {/*    <div class="popup__content">*/}
        {/*        <div class="popup__left">*/}
        {/*            <img src="images/img4.jpg" alt="photo 10" class="popup__img">*/}
        {/*            <img src="images/img6.jpg" alt="photo 20" class="popup__img">*/}
        {/*        </div>*/}
        {/*        <div class="popup__right">*/}
        {/*            <a href="#section-packages" class="popup__close">&times;</a>*/}
        {/*            <h2 class="heading-secondary u-margin-bottom-medium">Some text goes here</h2>*/}
        {/*            <h3 class="heading-tertiary u-margin-bottom-small">Some other text goes here</h3>*/}
        {/*            <p class="popup__text">*/}
        {/*                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor */}
        {/*                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud */}
        {/*                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure */}
        {/*                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. */}
        {/*                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit */}
        {/*                anim id est laborum*/}
        {/*            </p>*/}
        {/*            <a href="#" class="btn btn--green">BOOK NOW</a>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <div className="popup" id="popup-brayan">
          <div className="popup__content">
            <div className="popup__left">
              <img
                src="images/bro1a.jpg"
                alt="photo 10"
                className="popup__img"
              />
              <img
                src="images/bro1.jpg"
                alt="photo 20"
                className="popup__img"
              />
            </div>
            <div className="popup__right">
              <a href="#section-about" className="popup__close">
                ×
              </a>
              <h2 className="heading-secondary u-margin-bottom-medium">
                BRO 1
              </h2>
              <h3 className="heading-tertiary u-margin-bottom-small">
                About Brayan Omondi
              </h3>
              <p className="popup__text">
                Brayan Omondi is the epitome of fitness trainers with a
                background in basketball ,football, rugby and swimming. He began
                boxing in his late teens at the age of 19 and quickly rose to
                the ranks of the top heavyweight boxers in the country. at the
                age of 20 winning the regional and national novices. he
                proceeded to take a clean sweep in the national intermediates
                which secured him a spot to go and face the country's best in
                the national leagues, all this were as a result of participating
                in sports and prospering in them dilligently at an early age,
                he's a people's person, funny, smart and is deeply concerned
                with the welfare of animals and nature itself. with a goal to
                help people achieve their aspirations in and out of the fitness
                world. he believes that in anything you do, your physical state
                adds up to your achievement. Brayan knows how to associate with
                different kinds of people and will most definitely meet your
                personal fitness requirements. Just like Lennox, he's among the
                professional resident boxers and trainers in colosseum.
              </p>
            </div>
          </div>
        </div>
        <div className="popup" id="popup-lennox">
          <div className="popup__content">
            <div className="popup__left">
              <img
                src="images/bro11.jpg"
                alt="photo 10"
                className="popup__img"
              />
              {/*<img src="images/img6.jpg" alt="photo 20" class="popup__img">*/}
            </div>
            <div className="popup__right">
              <a href="#section-about" className="popup__close">
                ×
              </a>
              <h2 className="heading-secondary u-margin-bottom-medium">
                BRO 2
              </h2>
              <h3 className="heading-tertiary u-margin-bottom-small">
                About Lennox Omukwaya
              </h3>
              <p className="popup__text">
                Lennox Omukwaya aka lennox hostile is one of the stylish boxers
                known in the country, grew up in a boxing family with his father
                pugilist top cop kusimba leading the national boxing team as
                captain, he comes from a family of boxers from his father,
                grandfather brother and even uncles having participated in the
                sport, He began boxing at the age of 3 by watching his father
                train in the sweaty gyms of dallas and mathare in Nairobi.By the
                age 5 he developed the interest and went on to pursue and win
                the junior boxing championships, he continued playing the sport
                till the age of 14 when he proved to be too much for his
                contestants. Aftewards, he went on to win the novices and
                intermediates and decided to ventiure into personal and fitness
                training at the colloseum gym in Nairobi. Being one of the
                professional resident boxers and trainers in colosseum, he's by
                no doubt among the best boxers and fitness trainers in Nairobi
                with a skillset that has been mastered and pollished for over 20
                years. He's also lover of fine arts and intrigued by modern
                fasion. he's not just your average personal trainer he is a
                stylish one.
              </p>
            </div>
          </div>
          <p>YOU THINK YOU'RE FIT UNTIL YOU TRY BOXING ~Lennox Hostile.</p>
        </div>
        {/*
      <section class="grid-test">
          
          <div class="row">
              <div class="col-1-of-2">
                  Col 1 of 2
              </div>
              <div class="col-1-of-2">
                  Col 1 of 2
              </div>
          </div>

          <div class="row">
              <div class="col-1-of-3">
                  Col 1 of 3
              </div>
              <div class="col-1-of-3">
                  Col 1 of 3
              </div>
              <div class="col-1-of-3">
                  Col 1 of 3
              </div>
          </div>

          <div class="row">
              <div class="col-1-of-3">
                  Col 1 of 3
              </div>
              <div class="col-2-of-3">
                  Col 2 of 3
              </div>
          </div>

          <div class="row">
              <div class="col-1-of-4">
                  Col 1 of 4
              </div>
              <div class="col-1-of-4">
                  Col 1 of 4
              </div>
              <div class="col-1-of-4">
                  Col 1 of 4
              </div>
              <div class="col-1-of-4">
                  Col 1 of 4
              </div>
          </div>

          <div class="row">
              <div class="col-1-of-4">
                  Col 1 of 4
              </div>
              <div class="col-1-of-4">
                  Col 1 of 4
              </div>
              <div class="col-2-of-4">
                  Col 2 of 4
              </div>
          </div>
          <div class="row">
              <div class="col-1-of-4">
                  Col 1 of 4
              </div>
              <div class="col-3-of-4">
                  Col 3 of 4
              </div>
          </div>

      </section> */}
      </main>
    </>
  );
};
export default Home;
