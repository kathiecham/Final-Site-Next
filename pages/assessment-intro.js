import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const AssessmentIntro = (props) => {
  return (
    <>
      <div className="assessment-intro-container1">
        <Head>
          <title>Assessment-Intro - Final Site</title>
          <meta property="og:title" content="Assessment-Intro - Final Site" />
        </Head>
        <div className="assessment-intro-container2"></div>
        <img
          alt="image"
          src="/v02%2012.31.2024%20logo-200h.png"
          className="assessment-intro-image"
        />
        <div className="assessment-intro-container3">
          <h1 className="assessment-intro-text1">Unstoppable Assessment</h1>
        </div>
        <div className="assessment-intro-container4">
          <span className="assessment-intro-text2">
            <span>
              This assessment is designed to help us better support you in your
              Unstoppable Beta Group journey. It also lets you acknowledge where
              you are at, reflect on how you think, and celebrate what
              you&apos;re good at.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="assessment-intro-text4"></br>
            <br></br>
            <span>
              Review each statement carefully and choose the response that
              resonates most with you. There are 70 statements and will take 10
              -15 minutes. Please complete in one sitting. 
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              A partial assessment will not be saved, and your group selection
              will be lost.
            </span>
          </span>
        </div>
        <Link href="/assessment-1">
          <a className="assessment-intro-link button">Next</a>
        </Link>
      </div>
      <style jsx>
        {`
          .assessment-intro-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .assessment-intro-container2 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
          }
          .assessment-intro-image {
            width: 108px;
            height: 33px;
            align-self: flex-start;
            object-fit: cover;
            margin-left: var(--dl-space-space-fourunits);
          }
          .assessment-intro-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .assessment-intro-text1 {
            font-size: 42px;
            margin-top: var(--dl-space-space-twounits);
          }
          .assessment-intro-container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .assessment-intro-text2 {
            font-size: 24px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 500;
            line-height: 1.25;
            margin-left: 200px;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: 200px;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .assessment-intro-link {
            color: #ffffff;
            font-size: 32px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            text-decoration: none;
            background-color: rgb(255, 91, 2);
          }
          @media (max-width: 479px) {
            .assessment-intro-text1 {
              font-size: 42px;
              text-align: center;
            }
            .assessment-intro-text2 {
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment-intro-text4 {
              font-size: 24px;
              font-style: normal;
              font-weight: 500;
            }
          }
        `}
      </style>
    </>
  )
}

export default AssessmentIntro
