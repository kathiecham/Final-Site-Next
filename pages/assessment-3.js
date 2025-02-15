import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const Assessment3 = (props) => {
  return (
    <>
      <div className="assessment3-container10">
        <Head>
          <title>Assessment-3 - Final Site</title>
          <meta property="og:title" content="Assessment-3 - Final Site" />
        </Head>
        <div className="assessment3-container11">
          <img
            alt="image"
            src="/v02%2012.31.2024%20logo-200h.png"
            className="assessment3-image1"
          />
        </div>
        <div className="assessment3-container12">
          <img
            alt="image"
            src="/Progress Bar/picture2-200h.png"
            className="assessment3-image2"
          />
        </div>
        <div className="assessment3-container13">
          <h1 className="assessment3-text10">Mindset – Part 1</h1>
        </div>
        <form
          action="/my_unstoppable_scripts/process_form.php"
          method="POST"
          className="assessment3-form1"
        >
          <div className="assessment3-container14">
            <div className="assessment3-container15">
              <span className="assessment3-text11">
                {' '}
                I adapt my plans when circumstances change.
              </span>
            </div>
            <div className="assessment3-container16">
              <span className="assessment3-text12">Agree</span>
              <input
                type="radio"
                name="Question 25"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment3-checkbox10"
              />
              <input
                type="radio"
                name="Question 25"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment3-checkbox11"
              />
              <input
                type="radio"
                name="Question 25"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment3-checkbox12"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 25"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment3-checkbox13"
              />
              <input
                type="radio"
                name="Question 25"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment3-checkbox14"
              />
              <span className="assessment3-text13">Disagree</span>
            </div>
            <div className="assessment3-container17">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment3-container18">
            <div className="assessment3-container19">
              <span className="assessment3-text15">
                I enjoy the process of learning, not just the outcome.
              </span>
            </div>
            <div className="assessment3-container20">
              <span className="assessment3-text16">Agree</span>
              <input
                type="radio"
                name="Question 26"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment3-checkbox15"
              />
              <input
                type="radio"
                name="Question 26"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment3-checkbox16"
              />
              <input
                type="radio"
                name="Question 26"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment3-checkbox17"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 26"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment3-checkbox18"
              />
              <input
                type="radio"
                name="Question 26"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment3-checkbox19"
              />
              <span className="assessment3-text17">Disagree</span>
            </div>
            <div className="assessment3-container21">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment3-container22">
            <div className="assessment3-container23">
              <span className="assessment3-text19">
                I regularly reflect on what I’m thankful for.
              </span>
            </div>
            <div className="assessment3-container24">
              <span className="assessment3-text20">Agree</span>
              <input
                type="radio"
                name="Question 27"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment3-checkbox20"
              />
              <input
                type="radio"
                name="Question 27"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment3-checkbox21"
              />
              <input
                type="radio"
                name="Question 27"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment3-checkbox22"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 27"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment3-checkbox23"
              />
              <input
                type="radio"
                name="Question 27"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment3-checkbox24"
              />
              <span className="assessment3-text21">Disagree</span>
            </div>
            <div className="assessment3-container25">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment3-container26">
            <div className="assessment3-container27">
              <span className="assessment3-text23">
                Feedback feels like a personal attack.
              </span>
            </div>
            <div className="assessment3-container28">
              <span className="assessment3-text24">Agree</span>
              <input
                type="radio"
                name="Question 28"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment3-checkbox25"
              />
              <input
                type="radio"
                name="Question 28"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment3-checkbox26"
              />
              <input
                type="radio"
                name="Question 28"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment3-checkbox27"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 28"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment3-checkbox28"
              />
              <input
                type="radio"
                name="Question 28"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment3-checkbox29"
              />
              <span className="assessment3-text25">Disagree</span>
            </div>
            <div className="assessment3-container29">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment3-container30">
            <div className="assessment3-container31">
              <span className="assessment3-text27">
                I acknowledge the progress I’ve made, even if it’s small.
              </span>
            </div>
            <div className="assessment3-container32">
              <span className="assessment3-text28">Agree</span>
              <input
                type="radio"
                name="Question 29"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment3-checkbox30"
              />
              <input
                type="radio"
                name="Question 29"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment3-checkbox31"
              />
              <input
                type="radio"
                name="Question 29"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment3-checkbox32"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 29"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment3-checkbox33"
              />
              <input
                type="radio"
                name="Question 29"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment3-checkbox34"
              />
              <span className="assessment3-text29">Disagree</span>
            </div>
            <div className="assessment3-container33">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment3-container34">
            <div className="assessment3-container35">
              <span className="assessment3-text31">
                If I struggle, it means I&apos;m not capable.
              </span>
            </div>
            <div className="assessment3-container36">
              <span className="assessment3-text32">Agree</span>
              <input
                type="radio"
                name="Question 30"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment3-checkbox35"
              />
              <input
                type="radio"
                name="Question 30"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment3-checkbox36"
              />
              <input
                type="radio"
                name="Question 30"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment3-checkbox37"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 30"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment3-checkbox38"
              />
              <input
                type="radio"
                name="Question 30"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment3-checkbox39"
              />
              <span className="assessment3-text33">Disagree</span>
            </div>
            <div className="assessment3-container37">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment3-container38">
            <div className="assessment3-container39">
              <span className="assessment3-text35">
                I express gratitude to those who help me.
              </span>
            </div>
            <div className="assessment3-container40">
              <span className="assessment3-text36">Agree</span>
              <input
                type="radio"
                name="Question 31"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment3-checkbox40"
              />
              <input
                type="radio"
                name="Question 31"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment3-checkbox41"
              />
              <input
                type="radio"
                name="Question 31"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment3-checkbox42"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 31"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment3-checkbox43"
              />
              <input
                type="radio"
                name="Question 31"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment3-checkbox44"
              />
              <span className="assessment3-text37">Disagree</span>
            </div>
            <div className="assessment3-container41">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment3-container42">
            <div className="assessment3-container43">
              <span className="assessment3-text39">
                I stay focused on my goals, even when things get tough.
              </span>
            </div>
            <div className="assessment3-container44">
              <span className="assessment3-text40">Agree</span>
              <input
                type="radio"
                name="Question 32"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment3-checkbox45"
              />
              <input
                type="radio"
                name="Question 32"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment3-checkbox46"
              />
              <input
                type="radio"
                name="Question 32"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment3-checkbox47"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 32"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment3-checkbox48"
              />
              <input
                type="radio"
                name="Question 32"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment3-checkbox49"
              />
              <span className="assessment3-text41">Disagree</span>
            </div>
            <div className="assessment3-container45">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment3-container46">
            <div className="assessment3-container47">
              <span className="assessment3-text43">
                I take the initiative to solve problems before they escalate.
              </span>
            </div>
            <div className="assessment3-container48">
              <span className="assessment3-text44">Agree</span>
              <input
                type="radio"
                name="Question 33"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment3-checkbox50"
              />
              <input
                type="radio"
                name="Question 33"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment3-checkbox51"
              />
              <input
                type="radio"
                name="Question 33"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment3-checkbox52"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 33"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment3-checkbox53"
              />
              <input
                type="radio"
                name="Question 33"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment3-checkbox54"
              />
              <span className="assessment3-text45">Disagree</span>
            </div>
            <div className="assessment3-container49">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment3-container50">
            <div className="assessment3-container51">
              <span className="assessment3-text47">
                I’m willing to change my perspective when presented with new
                information.
              </span>
            </div>
            <div className="assessment3-container52">
              <span className="assessment3-text48">Agree</span>
              <input
                type="radio"
                name="Question 34"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment3-checkbox55"
              />
              <input
                type="radio"
                name="Question 34"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment3-checkbox56"
              />
              <input
                type="radio"
                name="Question 34"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment3-checkbox57"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 34"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment3-checkbox58"
              />
              <input
                type="radio"
                name="Question 34"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment3-checkbox59"
              />
              <span className="assessment3-text49">Disagree</span>
            </div>
            <div className="assessment3-container53">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
            <form className="assessment3-form2"></form>
          </div>
          <Link href="/assessment-4">
            <a id="next_button_3" disabled className="assessment3-link button">
              Next
            </a>
          </Link>
        </form>
      </div>
      <style jsx>
        {`
          .assessment3-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .assessment3-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .assessment3-image1 {
            width: 116px;
            height: 100%;
            align-self: flex-start;
            object-fit: cover;
            margin-left: var(--dl-space-space-fourunits);
            padding-top: var(--dl-space-space-halfunit);
          }
          .assessment3-container12 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment3-image2 {
            width: 345px;
            height: 30px;
            object-fit: cover;
          }
          .assessment3-container13 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .assessment3-text10 {
            font-size: 36px;
            margin-top: var(--dl-space-space-twounits);
          }
          .assessment3-form1 {
            width: 200px;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .assessment3-container14 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment3-container15 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment3-text11 {
            width: 628px;
            display: flex;
            font-size: 24px;
            font-style: normal;
            text-align: left;
            font-family: 'Montserrat';
            font-weight: 500;
            line-height: 1.25;
            margin-left: 0px;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .assessment3-container16 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment3-text12 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment3-checkbox10 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox11 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox12 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox13 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox14 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-text13 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment3-container17 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment3-container18 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment3-container19 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment3-text15 {
            width: 628px;
            display: flex;
            font-size: 24px;
            font-style: normal;
            text-align: left;
            font-family: 'Montserrat';
            font-weight: 500;
            line-height: 1.25;
            margin-left: 0px;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .assessment3-container20 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment3-text16 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment3-checkbox15 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox16 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox17 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox18 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox19 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-text17 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment3-container21 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment3-container22 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment3-container23 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment3-text19 {
            width: 628px;
            display: flex;
            font-size: 24px;
            font-style: normal;
            text-align: left;
            font-family: 'Montserrat';
            font-weight: 500;
            line-height: 1.25;
            margin-left: 0px;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .assessment3-container24 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment3-text20 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment3-checkbox20 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox21 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox22 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox23 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox24 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-text21 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment3-container25 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment3-container26 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment3-container27 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment3-text23 {
            width: 628px;
            display: flex;
            font-size: 24px;
            font-style: normal;
            text-align: left;
            font-family: 'Montserrat';
            font-weight: 500;
            line-height: 1.25;
            margin-left: 0px;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .assessment3-container28 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment3-text24 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment3-checkbox25 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox26 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox27 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox28 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox29 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-text25 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment3-container29 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment3-container30 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment3-container31 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment3-text27 {
            width: 628px;
            display: flex;
            font-size: 24px;
            font-style: normal;
            text-align: left;
            font-family: 'Montserrat';
            font-weight: 500;
            line-height: 1.25;
            margin-left: 0px;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .assessment3-container32 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment3-text28 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment3-checkbox30 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox31 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox32 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox33 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox34 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-text29 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment3-container33 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment3-container34 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment3-container35 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment3-text31 {
            width: 628px;
            display: flex;
            font-size: 24px;
            font-style: normal;
            text-align: left;
            font-family: 'Montserrat';
            font-weight: 500;
            line-height: 1.25;
            margin-left: 0px;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .assessment3-container36 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment3-text32 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment3-checkbox35 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox36 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox37 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox38 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox39 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-text33 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment3-container37 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment3-container38 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment3-container39 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment3-text35 {
            width: 628px;
            display: flex;
            font-size: 24px;
            font-style: normal;
            text-align: left;
            font-family: 'Montserrat';
            font-weight: 500;
            line-height: 1.25;
            margin-left: 0px;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .assessment3-container40 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment3-text36 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment3-checkbox40 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox41 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox42 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox43 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox44 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-text37 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment3-container41 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment3-container42 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment3-container43 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment3-text39 {
            width: 628px;
            display: flex;
            font-size: 24px;
            font-style: normal;
            text-align: left;
            font-family: 'Montserrat';
            font-weight: 500;
            line-height: 1.25;
            margin-left: 0px;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .assessment3-container44 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment3-text40 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment3-checkbox45 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox46 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox47 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox48 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox49 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-text41 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment3-container45 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment3-container46 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment3-container47 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment3-text43 {
            width: 628px;
            display: flex;
            font-size: 24px;
            font-style: normal;
            text-align: left;
            font-family: 'Montserrat';
            font-weight: 500;
            line-height: 1.25;
            margin-left: 0px;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .assessment3-container48 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment3-text44 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment3-checkbox50 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox51 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox52 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox53 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox54 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-text45 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment3-container49 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment3-container50 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment3-container51 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment3-text47 {
            width: 628px;
            display: flex;
            font-size: 24px;
            font-style: normal;
            text-align: left;
            font-family: 'Montserrat';
            font-weight: 500;
            line-height: 1.25;
            margin-left: 0px;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .assessment3-container52 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment3-text48 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment3-checkbox55 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox56 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox57 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox58 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-checkbox59 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment3-text49 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment3-container53 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment3-form2 {
            width: 200px;
            height: 100px;
            display: flex;
          }
          .assessment3-link {
            color: rgb(255, 255, 255);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-fiveunits);
            font-family: 'Montserrat';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-sixunits);
            text-decoration: none;
            background-color: rgb(255, 91, 2);
          }
          @media (max-width: 479px) {
            .assessment3-text10 {
              font-size: 42px;
              text-align: center;
            }
            .assessment3-text11 {
              width: 425px;
              font-size: 24px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 500;
              line-height: 1.25;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment3-text12 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment3-checkbox10 {
              margin-right: 36px;
            }
            .assessment3-checkbox11 {
              margin-right: 36px;
            }
            .assessment3-checkbox12 {
              margin-right: 36px;
            }
            .assessment3-checkbox13 {
              margin-right: 36px;
            }
            .assessment3-checkbox14 {
              margin-right: 36px;
            }
            .assessment3-text15 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment3-text16 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment3-checkbox15 {
              margin-right: 36px;
            }
            .assessment3-checkbox16 {
              margin-right: 36px;
            }
            .assessment3-checkbox17 {
              margin-right: 36px;
            }
            .assessment3-checkbox18 {
              margin-right: 36px;
            }
            .assessment3-checkbox19 {
              margin-right: 36px;
            }
            .assessment3-text19 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment3-text20 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment3-checkbox20 {
              margin-right: 36px;
            }
            .assessment3-checkbox21 {
              margin-right: 36px;
            }
            .assessment3-checkbox22 {
              margin-right: 36px;
            }
            .assessment3-checkbox23 {
              margin-right: 36px;
            }
            .assessment3-checkbox24 {
              margin-right: 36px;
            }
            .assessment3-text23 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment3-text24 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment3-checkbox25 {
              margin-right: 36px;
            }
            .assessment3-checkbox26 {
              margin-right: 36px;
            }
            .assessment3-checkbox27 {
              margin-right: 36px;
            }
            .assessment3-checkbox28 {
              margin-right: 36px;
            }
            .assessment3-checkbox29 {
              margin-right: 36px;
            }
            .assessment3-text27 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment3-text28 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment3-checkbox30 {
              margin-right: 36px;
            }
            .assessment3-checkbox31 {
              margin-right: 36px;
            }
            .assessment3-checkbox32 {
              margin-right: 36px;
            }
            .assessment3-checkbox33 {
              margin-right: 36px;
            }
            .assessment3-checkbox34 {
              margin-right: 36px;
            }
            .assessment3-text31 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment3-text32 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment3-checkbox35 {
              margin-right: 36px;
            }
            .assessment3-checkbox36 {
              margin-right: 36px;
            }
            .assessment3-checkbox37 {
              margin-right: 36px;
            }
            .assessment3-checkbox38 {
              margin-right: 36px;
            }
            .assessment3-checkbox39 {
              margin-right: 36px;
            }
            .assessment3-text35 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment3-text36 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment3-checkbox40 {
              margin-right: 36px;
            }
            .assessment3-checkbox41 {
              margin-right: 36px;
            }
            .assessment3-checkbox42 {
              margin-right: 36px;
            }
            .assessment3-checkbox43 {
              margin-right: 36px;
            }
            .assessment3-checkbox44 {
              margin-right: 36px;
            }
            .assessment3-text39 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment3-text40 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment3-checkbox45 {
              margin-right: 36px;
            }
            .assessment3-checkbox46 {
              margin-right: 36px;
            }
            .assessment3-checkbox47 {
              margin-right: 36px;
            }
            .assessment3-checkbox48 {
              margin-right: 36px;
            }
            .assessment3-checkbox49 {
              margin-right: 36px;
            }
            .assessment3-text43 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment3-text44 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment3-checkbox50 {
              margin-right: 36px;
            }
            .assessment3-checkbox51 {
              margin-right: 36px;
            }
            .assessment3-checkbox52 {
              margin-right: 36px;
            }
            .assessment3-checkbox53 {
              margin-right: 36px;
            }
            .assessment3-checkbox54 {
              margin-right: 36px;
            }
            .assessment3-text47 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment3-text48 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment3-checkbox55 {
              margin-right: 36px;
            }
            .assessment3-checkbox56 {
              margin-right: 36px;
            }
            .assessment3-checkbox57 {
              margin-right: 36px;
            }
            .assessment3-checkbox58 {
              margin-right: 36px;
            }
            .assessment3-checkbox59 {
              margin-right: 36px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Assessment3
