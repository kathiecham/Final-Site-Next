import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const SelectAGroup = (props) => {
  return (
    <>
      <div className="select-a-group-container10">
        <Head>
          <title>Select-a-Group - Final Site</title>
          <meta property="og:title" content="Select-a-Group - Final Site" />
        </Head>
        <header
          data-thq="thq-navbar"
          className="select-a-group-navbar-interactive"
        >
          <img
            alt="image"
            src="/v02%2012.31.2024%20logo-200h.png"
            className="select-a-group-image"
          />
          <div
            data-thq="thq-navbar-nav"
            className="select-a-group-desktop-menu"
          >
            <nav className="select-a-group-links1">
              <span>Home</span>
              <span className="select-a-group-text11">How it Works</span>
              <span className="select-a-group-text12">FAQ</span>
              <span className="select-a-group-text13">Sign Up</span>
            </nav>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="select-a-group-burger-menu"
          >
            <svg viewBox="0 0 1024 1024" className="select-a-group-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="select-a-group-mobile-menu"
          >
            <div className="select-a-group-nav">
              <div className="select-a-group-top">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="select-a-group-logo"
                />
                <div
                  data-thq="thq-close-menu"
                  className="select-a-group-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="select-a-group-icon12"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="select-a-group-links2">
                <span className="select-a-group-text14">About</span>
                <span className="select-a-group-text15">Features</span>
                <span className="select-a-group-text16">Pricing</span>
                <span className="select-a-group-text17">Team</span>
                <span className="select-a-group-text18">Blog</span>
              </nav>
              <div className="select-a-group-buttons">
                <button className="select-a-group-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="select-a-group-icon14"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="select-a-group-icon16"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="select-a-group-icon18"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <form
          action="/my_unstoppable_scripts/process_form.php"
          method="POST"
          className="select-a-group-form"
        >
          <div id="group_selection_form" className="select-a-group-container11">
            <div className="select-a-group-container12">
              <div
                id="Group-Image1"
                onclick="document.getElementById('selected_group').value = 'Tuesday 6pm';"
                className="select-a-group-container13"
              >
                <span className="select-a-group-text19">Available XX</span>
              </div>
              <div id="Group-Image2" className="select-a-group-container14">
                <span className="select-a-group-text20">Available 32</span>
              </div>
              <div id="Group-Image3" className="select-a-group-container15">
                <span className="select-a-group-text21">Available 32</span>
              </div>
              <div id="Group-Image4" className="select-a-group-container16">
                <span className="select-a-group-text22">Available XX</span>
              </div>
            </div>
            <div id="None_work" className="select-a-group-container17">
              <input
                type="checkbox"
                id="checkbox-id"
                className="select-a-group-checkbox"
              />
              <span className="select-a-group-text23">
                  None of these available times work for me
              </span>
            </div>
            <div id="None_work_hidden" className="select-a-group-container18">
              <span className="select-a-group-text24">
                <span>
                  Let me know what might work for you. I can&apos;t guarantee
                  additional sessions, but I&apos;ll review responses and
                  consider future options. 
                </span>
                <span>Enter your preferred day and time.</span>
                <br></br>
              </span>
              <input
                type="text"
                placeholder="Preferred day &amp; time"
                className="input select-a-group-textinput1"
              />
            </div>
            <input
              type="text"
              id="first-name"
              placeholder="First Name"
              className="input select-a-group-textinput2"
            />
            <input
              type="text"
              id="last-name"
              placeholder="Last Name"
              className="input select-a-group-textinput3"
            />
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="input select-a-group-textinput4"
            />
            <Link href="/group-confirmation">
              <a
                id="group_selection_button"
                className="select-a-group-link button"
              >
                Submit
              </a>
            </Link>
          </div>
          <div>
            <div className="select-a-group-container20">
              <React.Fragment>
                <React.Fragment>
                  <Script>{`
  document.addEventListener("DOMContentLoaded", function () {
    // Select the hidden input field
    const hiddenInput = document.getElementById("selected_group")

    // Select ONE button (Group-Image1 for testing)
    document
      .getElementById("Group-Image1")
      .addEventListener("click", function () {
        hiddenInput.value = "Tuesday 6pm" // Change this to match the actual group name
      })
  })
`}</Script>
                </React.Fragment>
              </React.Fragment>
            </div>
          </div>
          <input
            type="hidden"
            id="selected_group"
            name="group_selection"
            placeholder="placeholder"
            className="input"
          />
        </form>
        <div>
          <div className="select-a-group-container22">
            <React.Fragment>
              <React.Fragment>
                <Script>{`
  console.log("Testing: Code Embed is running!")

  setTimeout(function () {
    var allInputs = document.getElementsByTagName("input")
    console.log("All input elements after delay:", allInputs)
  }, 5000) // 5-second delay
`}</Script>
              </React.Fragment>
            </React.Fragment>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .select-a-group-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .select-a-group-navbar-interactive {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .select-a-group-image {
            width: 108px;
            height: 33px;
            object-fit: cover;
          }
          .select-a-group-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .select-a-group-links1 {
            flex: 1;
            display: flex;
            align-items: center;
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: flex-end;
          }
          .select-a-group-text11 {
            margin-left: var(--dl-space-space-twounits);
          }
          .select-a-group-text12 {
            margin-left: var(--dl-space-space-twounits);
          }
          .select-a-group-text13 {
            margin-left: var(--dl-space-space-twounits);
          }
          .select-a-group-burger-menu {
            display: none;
          }
          .select-a-group-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .select-a-group-mobile-menu {
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
          .select-a-group-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .select-a-group-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .select-a-group-logo {
            height: 2rem;
          }
          .select-a-group-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .select-a-group-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .select-a-group-links2 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .select-a-group-text14 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .select-a-group-text15 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .select-a-group-text16 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .select-a-group-text17 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .select-a-group-text18 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .select-a-group-buttons {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .select-a-group-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .select-a-group-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .select-a-group-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .select-a-group-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .select-a-group-form {
            width: 200px;
            height: 100px;
            display: flex;
          }
          .select-a-group-container11 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .select-a-group-container12 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .select-a-group-container13 {
            width: 200px;
            height: 107px;
            display: flex;
            align-items: center;
            background-size: cover;
            justify-content: center;
            background-image: url('/Group Artwork/picture12-200h.png');
            background-position: center;
          }
          .select-a-group-container14 {
            width: 200px;
            height: 107px;
            display: flex;
            align-items: flex-end;
            background-size: cover;
            justify-content: center;
            background-image: url('/Group Artwork/picture21-200h.png');
            background-position: center;
          }
          .select-a-group-container15 {
            width: 200px;
            height: 108px;
            display: flex;
            background-size: cover;
            background-image: url('/Group Artwork/picture31-200h.png');
            background-position: center;
          }
          .select-a-group-container16 {
            width: 200px;
            height: 107px;
            display: flex;
            background-size: cover;
            background-image: url('/Group Artwork/picture41-200h.png');
            background-position: center;
          }
          .select-a-group-container17 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .select-a-group-container18 {
            flex: 0 0 auto;
            display: none;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .select-a-group-link {
            text-decoration: none;
          }
          .select-a-group-container20 {
            display: contents;
          }
          .select-a-group-container22 {
            display: contents;
          }
          @media (max-width: 767px) {
            .select-a-group-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .select-a-group-desktop-menu {
              display: none;
            }
            .select-a-group-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .select-a-group-text14 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .select-a-group-text15 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .select-a-group-text16 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .select-a-group-text17 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .select-a-group-text18 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .select-a-group-container10 {
              border-color: var(--dl-color-theme-neutral-dark);
              border-width: 3pt;
            }
            .select-a-group-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .select-a-group-mobile-menu {
              padding: 16px;
            }
            .select-a-group-form {
              width: auto;
              height: auto;
            }
            .select-a-group-container13 {
              width: 433px;
              height: 107px;
              margin-top: var(--dl-space-space-twounits);
              align-items: center;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
              justify-content: flex-end;
            }
            .select-a-group-text19 {
              font-size: 18px;
              align-self: flex-end;
              text-align: right;
              font-family: Montserrat;
              margin-left: 290px;
              margin-right: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .select-a-group-container14 {
              width: 433px;
              height: 107px;
              align-items: center;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-end;
            }
            .select-a-group-text20 {
              font-size: 18px;
              text-align: right;
              font-family: Montserrat;
              margin-left: 290px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .select-a-group-container15 {
              width: 434px;
              height: 108px;
              margin-top: 0px;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .select-a-group-text21 {
              font-size: 18px;
              align-self: flex-end;
              text-align: right;
              font-family: Montserrat;
              margin-left: 308px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .select-a-group-container16 {
              width: 430px;
              height: 107px;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-unit);
            }
            .select-a-group-text22 {
              font-size: 18px;
              align-self: flex-end;
              text-align: right;
              font-family: Montserrat;
              margin-left: 302px;
              margin-right: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .select-a-group-checkbox {
              align-self: center;
            }
            .select-a-group-text23 {
              font-size: 18px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 500;
              letter-spacing: inherit;
            }
            .select-a-group-container18 {
              margin-top: var(--dl-space-space-unit);
              margin-left: var(--dl-space-space-fourunits);
              margin-right: var(--dl-space-space-fourunits);
            }
            .select-a-group-text24 {
              color: var(--dl-color-theme-primary2);
              margin-bottom: var(--dl-space-space-unit);
            }
            .select-a-group-textinput1 {
              fill: var(--dl-color-theme-secondary1);
              color: #050d19;
              font-family: Montserrat;
              border-color: var(--dl-color-theme-primary2);
              border-width: 2px;
              background-color: transparent;
            }
            .select-a-group-textinput2 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              margin-top: var(--dl-space-space-twounits);
              font-family: Montserrat;
              border-color: var(--dl-color-theme-primary2);
              border-width: 2px;
              border-radius: 6px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .select-a-group-textinput3 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              align-self: center;
              font-family: Montserrat;
              border-color: var(--dl-color-theme-primary2);
              border-width: 2px;
              border-radius: 6px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .select-a-group-textinput4 {
              font-family: Montserrat;
              border-color: var(--dl-color-theme-primary2);
              border-width: 2px;
              border-radius: 6px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .select-a-group-link {
              color: rgb(255, 255, 255);
              align-self: center;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 600;
              animation-name: none;
              animation-delay: 0s;
              background-color: rgb(25, 62, 189);
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
          }
        `}
      </style>
    </>
  )
}

export default SelectAGroup
