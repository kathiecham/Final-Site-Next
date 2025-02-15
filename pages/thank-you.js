import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const ThankYou = (props) => {
  return (
    <>
      <div className="thank-you-container1">
        <Head>
          <title>Thank-You - Final Site</title>
          <meta property="og:title" content="Thank-You - Final Site" />
        </Head>
        <div className="thank-you-container2"></div>
        <img
          alt="image"
          src="/v02%2012.31.2024%20logo-200h.png"
          className="thank-you-image"
        />
        <div className="thank-you-container3">
          <h1 className="thank-you-text10">Thank You</h1>
        </div>
        <div className="thank-you-container4">
          <span className="thank-you-text11">
            <span className="thank-you-text12">
              You have taken the first step towards becoming Unstoppable.
            </span>
            <br className="thank-you-text13"></br>
            <br className="thank-you-text14"></br>
            <span className="thank-you-text15">
              After you verify your email address, you will receive a
              confirmation securing your place.
            </span>
            <br className="thank-you-text16"></br>
            <span className="thank-you-text17">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="thank-you-text18"></br>
            <span className="thank-you-text19">
              Before your first meeting, you will be sent a link to our mini
              on-boarding course to help you get started and to prepare for your
              successful journey ahead.
            </span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .thank-you-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .thank-you-container2 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: var(--dl-size-size-xsmall);
            display: flex;
            align-items: flex-start;
          }
          .thank-you-image {
            width: 108px;
            height: 33px;
            align-self: flex-start;
            object-fit: cover;
            margin-left: var(--dl-space-space-fourunits);
          }
          .thank-you-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .thank-you-text10 {
            font-size: 42px;
            margin-top: var(--dl-space-space-halfunit);
          }
          .thank-you-container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: 150px;
            margin-right: 150px;
          }
          .thank-you-text11 {
            font-size: 24px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 500;
            line-height: 1.25;
            margin-left: 175px;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: 175px;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .thank-you-text12 {
            line-height: 1.15;
          }
          .thank-you-text13 {
            line-height: 1.15;
          }
          .thank-you-text14 {
            line-height: 1.15;
          }
          .thank-you-text15 {
            line-height: 1.15;
          }
          .thank-you-text16 {
            line-height: 1.15;
          }
          .thank-you-text17 {
            line-height: 1.15;
          }
          .thank-you-text18 {
            line-height: 1.15;
          }
          .thank-you-text19 {
            line-height: 1.15;
          }
          @media (max-width: 479px) {
            .thank-you-image {
              margin-left: var(--dl-space-space-unit);
            }
            .thank-you-text10 {
              font-size: 42px;
              text-align: center;
            }
            .thank-you-text11 {
              width: 350px;
              font-family: Montserrat;
              margin-left: 0px;
              padding-top: var(--dl-space-space-unit);
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default ThankYou
