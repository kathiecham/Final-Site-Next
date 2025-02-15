import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const FAQ = (props) => {
  return (
    <>
      <div className="faq-container1">
        <Head>
          <title>FAQ - Final Site</title>
          <meta property="og:title" content="FAQ - Final Site" />
        </Head>
        <header data-thq="thq-navbar" className="faq-navbar-interactive">
          <img
            alt="image"
            src="/v02%2012.31.2024%20logo-200h.png"
            className="faq-image"
          />
          <div data-thq="thq-navbar-nav" className="faq-desktop-menu">
            <nav className="faq-links1">
              <Link href="/">
                <a className="faq-link1">Home</a>
              </Link>
              <Link href="/how-it-works">
                <a className="faq-link2">How it Works</a>
              </Link>
              <span className="faq-text10">FAQ</span>
              <Link href="/sign-up-process">
                <a className="faq-link3">Sign Up</a>
              </Link>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="faq-burger-menu">
            <svg viewBox="0 0 1024 1024" className="faq-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="faq-mobile-menu">
            <div className="faq-nav">
              <div className="faq-top">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="faq-logo"
                />
                <div data-thq="thq-close-menu" className="faq-close-menu">
                  <svg viewBox="0 0 1024 1024" className="faq-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="faq-links2">
                <span className="faq-text11">About</span>
                <span className="faq-text12">Features</span>
                <span className="faq-text13">Pricing</span>
                <span className="faq-text14">Team</span>
                <span className="faq-text15">Blog</span>
              </nav>
              <div className="faq-buttons">
                <button className="faq-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="faq-icon14">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="faq-icon16">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="faq-icon18">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="faq-container2">
          <span className="faq-text16">
            <span className="faq-text17">What do You</span>
            <br className="faq-text18"></br>
            <span className="faq-text19">Want to Know?</span>
            <br></br>
          </span>
        </div>
        <div className="faq-container3">
          <div data-thq="accordion" className="faq-accordion1">
            <details
              name="FAQ"
              data-thq="accordion-trigger"
              className="faq-trigger1"
            >
              <summary data-thq="accordion-summary" className="faq-summary1">
                <span className="faq-text21">
                  Q: I’m not sure this will work for me
                </span>
                <div data-thq="accordion-icon" className="faq-icon-container1">
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="faq-container4">
                <p>
                  Unstoppable Groups is designed to help people find the right
                  path for their unique goals. While we provide the tools,
                  structure, and support, your success ultimately depends on
                  your willingness to put in the work. If you&apos;re ready to
                  commit, the process can help you achieve meaningful results.
                </p>
              </div>
            </div>
          </div>
          <div data-thq="accordion" className="faq-accordion2">
            <details
              name="FAQ"
              data-thq="accordion-trigger"
              className="faq-trigger2"
            >
              <summary data-thq="accordion-summary" className="faq-summary2">
                <span className="faq-text23">
                  Q: I don’t have a lot of time.
                </span>
                <div data-thq="accordion-icon" className="faq-icon-container2">
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="faq-container5">
                <p>
                  We understand that time is a precious resource. Unstoppable
                  Groups is structured to fit into your life, providing focused,
                  actionable steps each week. Even with a busy schedule, you can
                  make consistent progress by dedicating time to the process.
                </p>
              </div>
            </div>
          </div>
          <div data-thq="accordion" className="faq-accordion3">
            <details
              name="FAQ"
              data-thq="accordion-trigger"
              className="faq-trigger3"
            >
              <summary data-thq="accordion-summary" className="faq-summary3">
                <span className="faq-text25">
                  Q: I’ve tried other programs and they didn’t work.
                </span>
                <div data-thq="accordion-icon" className="faq-icon-container3">
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="faq-container6">
                <p>
                  A: What sets Unstoppable Groups apart is our personalized
                  approach and the supportive environment that encourages
                  self-reflection and growth. We believe in helping you uncover
                  what truly matters and guiding you to take the next logical
                  steps—steps that are tailored to your specific situation and
                  goals.
                </p>
              </div>
            </div>
          </div>
          <div data-thq="accordion" className="faq-accordion4">
            <details
              name="FAQ"
              data-thq="accordion-trigger"
              className="faq-trigger4"
            >
              <summary data-thq="accordion-summary" className="faq-summary4">
                <span className="faq-text27">
                  Q: What if I get stuck and can’t move forward?
                </span>
                <div data-thq="accordion-icon" className="faq-icon-container4">
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="faq-container7">
                <p>
                  A: Getting stuck is part of the journey, but with Unstoppable
                  Groups, you’re never alone. Whether through our mini-courses,
                  worksheets, self-reflection exercises, or the feedback you
                  receive, you&apos;ll have the tools to navigate obstacles and
                  keep moving forward.
                </p>
              </div>
            </div>
          </div>
          <div data-thq="accordion" className="faq-accordion5">
            <details
              name="FAQ"
              data-thq="accordion-trigger"
              className="faq-trigger5"
            >
              <summary data-thq="accordion-summary" className="faq-summary5">
                <span className="faq-text29">
                  Q: I’m worried about committing to something new.
                </span>
                <div data-thq="accordion-icon" className="faq-icon-container5">
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="faq-container8">
                <p>
                  A: Committing to Unstoppable Groups is a commitment to
                  yourself. We’re here to guide you, but the process works best
                  when you’re ready to take action. If you’re willing to invest
                  time and effort, this could be the transformative experience
                  you’re looking for.
                </p>
              </div>
            </div>
          </div>
          <div data-thq="accordion" className="faq-accordion6">
            <details
              name="FAQ"
              data-thq="accordion-trigger"
              className="faq-trigger6"
            >
              <summary data-thq="accordion-summary" className="faq-summary6">
                <span className="faq-text31">
                  Q: Is this program suitable for someone like me?
                </span>
                <div data-thq="accordion-icon" className="faq-icon-container6">
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="faq-container9">
                <p>
                  A: Unstoppable Groups is suitable for anyone who is ready to
                  invest time and effort into achieving their goals. Whether
                  you&apos;re looking to make a significant change or simply
                  refine your path, the process is adaptable to your needs. If
                  you’re willing to do the work, you’ll find the support and
                  structure to reach meaningful results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .faq-navbar-interactive {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .faq-image {
            width: 108px;
            height: 33px;
            object-fit: cover;
          }
          .faq-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .faq-links1 {
            flex: 1;
            display: flex;
            align-items: center;
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: flex-end;
          }
          .faq-link1 {
            text-decoration: none;
          }
          .faq-link2 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .faq-text10 {
            margin-left: var(--dl-space-space-twounits);
          }
          .faq-link3 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .faq-burger-menu {
            display: none;
          }
          .faq-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .faq-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .faq-logo {
            height: 2rem;
          }
          .faq-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .faq-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq-links2 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq-text11 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .faq-text12 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .faq-text13 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .faq-text14 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .faq-text15 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .faq-buttons {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .faq-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .faq-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .faq-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .faq-text16 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .faq-text17 {
            font-size: 42px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 600;
          }
          .faq-text18 {
            font-size: 42px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 600;
          }
          .faq-text19 {
            font-size: 42px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 600;
          }
          .faq-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: 200px;
            margin-right: 200px;
            flex-direction: column;
            justify-content: center;
          }
          .faq-accordion1 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .faq-trigger1 {
            cursor: pointer;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #d8ffff;
          }
          .faq-summary1 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .faq-text21 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 600;
          }
          .faq-icon-container1 {
            transition: transform 0.3s ease-in-out;
          }
          .faq-container4 {
            display: flex;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .faq-accordion2 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .faq-trigger2 {
            cursor: pointer;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #d8ffff;
          }
          .faq-summary2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .faq-text23 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 600;
          }
          .faq-icon-container2 {
            transition: transform 0.3s ease-in-out;
          }
          .faq-container5 {
            display: flex;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .faq-accordion3 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .faq-trigger3 {
            cursor: pointer;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #d8ffff;
          }
          .faq-summary3 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .faq-text25 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 600;
          }
          .faq-icon-container3 {
            transition: transform 0.3s ease-in-out;
          }
          .faq-container6 {
            display: flex;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .faq-accordion4 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .faq-trigger4 {
            cursor: pointer;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #d8ffff;
          }
          .faq-summary4 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .faq-text27 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 600;
          }
          .faq-icon-container4 {
            transition: transform 0.3s ease-in-out;
          }
          .faq-container7 {
            display: flex;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .faq-accordion5 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .faq-trigger5 {
            cursor: pointer;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #d8ffff;
          }
          .faq-summary5 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .faq-text29 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 600;
          }
          .faq-icon-container5 {
            transition: transform 0.3s ease-in-out;
          }
          .faq-container8 {
            display: flex;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .faq-accordion6 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .faq-trigger6 {
            cursor: pointer;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #d8ffff;
          }
          .faq-summary6 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .faq-text31 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 600;
          }
          .faq-icon-container6 {
            transition: transform 0.3s ease-in-out;
          }
          .faq-container9 {
            display: flex;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          @media (max-width: 767px) {
            .faq-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .faq-desktop-menu {
              display: none;
            }
            .faq-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .faq-text11 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .faq-text12 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .faq-text13 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .faq-text14 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .faq-text15 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .faq-text21 {
              font-size: 18px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 600;
            }
            .faq-text23 {
              font-size: 18px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 600;
            }
            .faq-text29 {
              font-size: 18px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 600;
            }
          }
          @media (max-width: 479px) {
            .faq-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .faq-mobile-menu {
              padding: 16px;
            }
            .faq-trigger1 {
              width: 425px;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .faq-text21 {
              font-size: 18px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 600;
            }
            .faq-text23 {
              font-size: 18px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 600;
            }
            .faq-text25 {
              font-size: 18px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 600;
            }
            .faq-text27 {
              font-size: 18px;
            }
            .faq-text29 {
              font-size: 18px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 600;
            }
          }
        `}
      </style>
    </>
  )
}

export default FAQ
