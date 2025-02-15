import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const SignUpProcess = (props) => {
  return (
    <>
      <div className="sign-up-process-container">
        <Head>
          <title>Sign-Up-Process - Final Site</title>
          <meta property="og:title" content="Sign-Up-Process - Final Site" />
        </Head>
        <header
          data-thq="thq-navbar"
          className="sign-up-process-navbar-interactive"
        >
          <img
            alt="image"
            src="/v02%2012.31.2024%20logo-200h.png"
            className="sign-up-process-image"
          />
          <div
            data-thq="thq-navbar-nav"
            className="sign-up-process-desktop-menu"
          >
            <nav className="sign-up-process-links1">
              <Link href="/">
                <a className="sign-up-process-link1">Home</a>
              </Link>
              <Link href="/how-it-works">
                <a className="sign-up-process-link2">How it Works</a>
              </Link>
              <Link href="/faq">
                <a className="sign-up-process-link3">FAQ</a>
              </Link>
              <span className="sign-up-process-text1">Sign Up</span>
            </nav>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="sign-up-process-burger-menu"
          >
            <svg viewBox="0 0 1024 1024" className="sign-up-process-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="sign-up-process-mobile-menu"
          >
            <div className="sign-up-process-nav">
              <div className="sign-up-process-top">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="sign-up-process-logo"
                />
                <div
                  data-thq="thq-close-menu"
                  className="sign-up-process-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="sign-up-process-icon12"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="sign-up-process-links2">
                <span className="sign-up-process-text2">About</span>
                <span className="sign-up-process-text3">Features</span>
                <span className="sign-up-process-text4">Pricing</span>
                <span className="sign-up-process-text5">Team</span>
                <span className="sign-up-process-text6">Blog</span>
              </nav>
              <div className="sign-up-process-buttons">
                <button className="sign-up-process-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="sign-up-process-icon14"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="sign-up-process-icon16"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="sign-up-process-icon18"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .sign-up-process-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .sign-up-process-navbar-interactive {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .sign-up-process-image {
            width: 108px;
            height: 33px;
            object-fit: cover;
          }
          .sign-up-process-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .sign-up-process-links1 {
            flex: 1;
            display: flex;
            align-items: center;
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: flex-end;
          }
          .sign-up-process-link1 {
            text-decoration: none;
          }
          .sign-up-process-link2 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .sign-up-process-link3 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .sign-up-process-text1 {
            margin-left: var(--dl-space-space-twounits);
          }
          .sign-up-process-burger-menu {
            display: none;
          }
          .sign-up-process-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .sign-up-process-mobile-menu {
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
          .sign-up-process-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-up-process-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .sign-up-process-logo {
            height: 2rem;
          }
          .sign-up-process-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .sign-up-process-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .sign-up-process-links2 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-up-process-text2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .sign-up-process-text3 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .sign-up-process-text4 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .sign-up-process-text5 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .sign-up-process-text6 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .sign-up-process-buttons {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .sign-up-process-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .sign-up-process-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .sign-up-process-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .sign-up-process-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          @media (max-width: 767px) {
            .sign-up-process-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .sign-up-process-desktop-menu {
              display: none;
            }
            .sign-up-process-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .sign-up-process-text2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .sign-up-process-text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .sign-up-process-text4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .sign-up-process-text5 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .sign-up-process-text6 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .sign-up-process-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .sign-up-process-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

export default SignUpProcess
