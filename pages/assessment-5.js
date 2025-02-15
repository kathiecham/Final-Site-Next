import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const Assessment5 = (props) => {
  return (
    <>
      <div className="assessment5-container10">
        <Head>
          <title>Assessment-5 - Final Site</title>
          <meta property="og:title" content="Assessment-5 - Final Site" />
        </Head>
        <div className="assessment5-container11">
          <img
            alt="image"
            src="/v02%2012.31.2024%20logo-200h.png"
            className="assessment5-image1"
          />
        </div>
        <div className="assessment5-container12">
          <img
            alt="image"
            src="/Progress Bar/picture4-200h.png"
            className="assessment5-image2"
          />
        </div>
        <div className="assessment5-container13">
          <h1 className="assessment5-text10">Attributes – Part 1</h1>
        </div>
        <form
          action="/my_unstoppable_scripts/process_form.php"
          method="POST"
          className="assessment5-form1"
        >
          <div className="assessment5-container14">
            <div className="assessment5-container15">
              <span className="assessment5-text11">
                I take the initiative to make positive changes.
              </span>
            </div>
            <div type="radio" className="assessment5-container16">
              <span className="assessment5-text12">Agree</span>
              <input
                type="radio"
                name="Question 46"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment5-checkbox10"
              />
              <input
                type="radio"
                name="Question 46"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment5-checkbox11"
              />
              <input
                type="radio"
                name="Question 46"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment5-checkbox12"
              />
              <input
                type="radio"
                name="Question 46"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment5-checkbox13"
              />
              <input
                type="radio"
                name="Question 46"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment5-checkbox14"
              />
              <span className="assessment5-text13">Disagree</span>
            </div>
            <div className="assessment5-container17">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment5-container18">
            <div className="assessment5-container19">
              <span className="assessment5-text15">
                I believe I have the ability to figure out and accomplish almost
                any task.
              </span>
            </div>
            <div type="radio" className="assessment5-container20">
              <span className="assessment5-text16">Agree</span>
              <input
                type="radio"
                name="Question 47"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment5-checkbox15"
              />
              <input
                type="radio"
                name="Question 47"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment5-checkbox16"
              />
              <input
                type="radio"
                name="Question 47"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment5-checkbox17"
              />
              <input
                type="radio"
                name="Question 47"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment5-checkbox18"
              />
              <input
                type="radio"
                name="Question 47"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment5-checkbox19"
              />
              <span className="assessment5-text17">Disagree</span>
            </div>
            <div className="assessment5-container21">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment5-container22">
            <div className="assessment5-container23">
              <span className="assessment5-text19">
                I keep an open mind in most situations.
              </span>
            </div>
            <div type="radio" className="assessment5-container24">
              <span className="assessment5-text20">Agree</span>
              <input
                type="radio"
                name="Question 48"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment5-checkbox20"
              />
              <input
                type="radio"
                name="Question 48"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment5-checkbox21"
              />
              <input
                type="radio"
                name="Question 48"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment5-checkbox22"
              />
              <input
                type="radio"
                name="Question 48"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment5-checkbox23"
              />
              <input
                type="radio"
                name="Question 48"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment5-checkbox24"
              />
              <span className="assessment5-text21">Disagree</span>
            </div>
            <div className="assessment5-container25">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment5-container26">
            <div className="assessment5-container27">
              <span className="assessment5-text23">
                I challenge myself to step outside my comfort zone.
              </span>
            </div>
            <div type="radio" className="assessment5-container28">
              <span className="assessment5-text24">Agree</span>
              <input
                type="radio"
                name="Question 49"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment5-checkbox25"
              />
              <input
                type="radio"
                name="Question 49"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment5-checkbox26"
              />
              <input
                type="radio"
                name="Question 49"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment5-checkbox27"
              />
              <input
                type="radio"
                name="Question 49"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment5-checkbox28"
              />
              <input
                type="radio"
                name="Question 49"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment5-checkbox29"
              />
              <span className="assessment5-text25">Disagree</span>
            </div>
            <div className="assessment5-container29">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment5-container30">
            <div className="assessment5-container31">
              <span className="assessment5-text27">
                I listen actively to others.
              </span>
            </div>
            <div type="radio" className="assessment5-container32">
              <span className="assessment5-text28">Agree</span>
              <input
                type="radio"
                name="Question 50"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment5-checkbox30"
              />
              <input
                type="radio"
                name="Question 50"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment5-checkbox31"
              />
              <input
                type="radio"
                name="Question 50"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment5-checkbox32"
              />
              <input
                type="radio"
                name="Question 50"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment5-checkbox33"
              />
              <input
                type="radio"
                name="Question 50"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment5-checkbox34"
              />
              <span className="assessment5-text29">Disagree</span>
            </div>
            <div className="assessment5-container33">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment5-container34">
            <div className="assessment5-container35">
              <span className="assessment5-text31">
                I persevere through difficulties, though it might take time.
              </span>
            </div>
            <div type="radio" className="assessment5-container36">
              <span className="assessment5-text32">Agree</span>
              <input
                type="radio"
                name="Question 51"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment5-checkbox35"
              />
              <input
                type="radio"
                name="Question 51"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment5-checkbox36"
              />
              <input
                type="radio"
                name="Question 51"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment5-checkbox37"
              />
              <input
                type="radio"
                name="Question 51"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment5-checkbox38"
              />
              <input
                type="radio"
                name="Question 51"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment5-checkbox39"
              />
              <span className="assessment5-text33">Disagree</span>
            </div>
            <div className="assessment5-container37">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment5-container38">
            <div className="assessment5-container39">
              <span className="assessment5-text35">
                I communicate clearly and effectively.
              </span>
            </div>
            <div type="radio" className="assessment5-container40">
              <span className="assessment5-text36">Agree</span>
              <input
                type="radio"
                name="Question 52"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment5-checkbox40"
              />
              <input
                type="radio"
                name="Question 52"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment5-checkbox41"
              />
              <input
                type="radio"
                name="Question 52"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment5-checkbox42"
              />
              <input
                type="radio"
                name="Question 52"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment5-checkbox43"
              />
              <input
                type="radio"
                name="Question 52"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment5-checkbox44"
              />
              <span className="assessment5-text37">Disagree</span>
            </div>
            <div className="assessment5-container41">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment5-container42">
            <div className="assessment5-container43">
              <span className="assessment5-text39">
                I remain persistent despite obstacles.
              </span>
            </div>
            <div type="radio" className="assessment5-container44">
              <span className="assessment5-text40">Agree</span>
              <input
                type="radio"
                name="Question 53"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment5-checkbox45"
              />
              <input
                type="radio"
                name="Question 53"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment5-checkbox46"
              />
              <input
                type="radio"
                name="Question 53"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment5-checkbox47"
              />
              <input
                type="radio"
                name="Question 53"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment5-checkbox48"
              />
              <input
                type="radio"
                name="Question 53"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment5-checkbox49"
              />
              <span className="assessment5-text41">Disagree</span>
            </div>
            <div className="assessment5-container45">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment5-container46">
            <div className="assessment5-container47">
              <span className="assessment5-text43">
                I innovate and find new ways to approach problems.
              </span>
            </div>
            <div type="radio" className="assessment5-container48">
              <span className="assessment5-text44">Agree</span>
              <input
                type="radio"
                name="Question 54"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment5-checkbox50"
              />
              <input
                type="radio"
                name="Question 54"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment5-checkbox51"
              />
              <input
                type="radio"
                name="Question 54"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment5-checkbox52"
              />
              <input
                type="radio"
                name="Question 54"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment5-checkbox53"
              />
              <input
                type="radio"
                name="Question 54"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment5-checkbox54"
              />
              <span className="assessment5-text45">Disagree</span>
            </div>
            <div className="assessment5-container49">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment5-container50">
            <div className="assessment5-container51">
              <span className="assessment5-text47">
                I value and use feedback to improve.
              </span>
            </div>
            <div type="radio" className="assessment5-container52">
              <span className="assessment5-text48">Agree</span>
              <input
                type="radio"
                name="Question 55"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment5-checkbox55"
              />
              <input
                type="radio"
                name="Question 55"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment5-checkbox56"
              />
              <input
                type="radio"
                name="Question 55"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment5-checkbox57"
              />
              <input
                type="radio"
                name="Question 55"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment5-checkbox58"
              />
              <input
                type="radio"
                name="Question 55"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment5-checkbox59"
              />
              <span className="assessment5-text49">Disagree</span>
            </div>
            <div className="assessment5-container53">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment5-container54">
            <div className="assessment5-container55">
              <span className="assessment5-text51">
                I plan my tasks efficiently.
              </span>
            </div>
            <div type="radio" className="assessment5-container56">
              <span className="assessment5-text52">Agree</span>
              <input
                type="radio"
                name="Question 56"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment5-checkbox60"
              />
              <input
                type="radio"
                name="Question 56"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment5-checkbox61"
              />
              <input
                type="radio"
                name="Question 56"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment5-checkbox62"
              />
              <input
                type="radio"
                name="Question 56"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment5-checkbox63"
              />
              <input
                type="radio"
                name="Question 56"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment5-checkbox64"
              />
              <span className="assessment5-text53">Disagree</span>
            </div>
            <div className="assessment5-container57">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment5-container58">
            <div className="assessment5-container59">
              <span className="assessment5-text55">
                I am sincere in my interactions.
              </span>
            </div>
            <div type="radio" className="assessment5-container60">
              <span className="assessment5-text56">Agree</span>
              <input
                type="radio"
                name="Question 57"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment5-checkbox65"
              />
              <input
                type="radio"
                name="Question 57"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment5-checkbox66"
              />
              <input
                type="radio"
                name="Question 57"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment5-checkbox67"
              />
              <input
                type="radio"
                name="Question 57"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment5-checkbox68"
              />
              <input
                type="radio"
                name="Question 57"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment5-checkbox69"
              />
              <span className="assessment5-text57">Disagree</span>
            </div>
            <div className="assessment5-container61">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
            <form className="assessment5-form2"></form>
          </div>
          <Link href="/assessment-6">
            <a id="next_button_5" disabled className="assessment5-link button">
              Next
            </a>
          </Link>
        </form>
      </div>
      <style jsx>
        {`
          .assessment5-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .assessment5-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .assessment5-image1 {
            width: 116px;
            height: 100%;
            align-self: flex-start;
            object-fit: cover;
            margin-left: var(--dl-space-space-fourunits);
            padding-top: var(--dl-space-space-halfunit);
          }
          .assessment5-container12 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment5-image2 {
            width: 345px;
            height: 30px;
            object-fit: cover;
          }
          .assessment5-container13 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .assessment5-text10 {
            font-size: 36px;
            margin-top: var(--dl-space-space-twounits);
          }
          .assessment5-form1 {
            width: 200px;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .assessment5-container14 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment5-container15 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment5-text11 {
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
          .assessment5-container16 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment5-text12 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment5-checkbox10 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox11 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox12 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox13 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox14 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-text13 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment5-container17 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment5-container18 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment5-container19 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment5-text15 {
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
          .assessment5-container20 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment5-text16 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment5-checkbox15 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox16 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox17 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox18 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox19 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-text17 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment5-container21 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment5-container22 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment5-container23 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment5-text19 {
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
          .assessment5-container24 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment5-text20 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment5-checkbox20 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox21 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox22 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox23 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox24 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-text21 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment5-container25 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment5-container26 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment5-container27 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment5-text23 {
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
          .assessment5-container28 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment5-text24 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment5-checkbox25 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox26 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox27 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox28 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox29 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-text25 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment5-container29 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment5-container30 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment5-container31 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment5-text27 {
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
          .assessment5-container32 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment5-text28 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment5-checkbox30 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox31 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox32 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox33 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox34 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-text29 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment5-container33 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment5-container34 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment5-container35 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment5-text31 {
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
          .assessment5-container36 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment5-text32 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment5-checkbox35 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox36 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox37 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox38 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox39 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-text33 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment5-container37 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment5-container38 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment5-container39 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment5-text35 {
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
          .assessment5-container40 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment5-text36 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment5-checkbox40 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox41 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox42 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox43 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox44 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-text37 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment5-container41 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment5-container42 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment5-container43 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment5-text39 {
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
          .assessment5-container44 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment5-text40 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment5-checkbox45 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox46 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox47 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox48 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox49 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-text41 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment5-container45 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment5-container46 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment5-container47 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment5-text43 {
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
          .assessment5-container48 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment5-text44 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment5-checkbox50 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox51 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox52 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox53 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox54 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-text45 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment5-container49 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment5-container50 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment5-container51 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment5-text47 {
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
          .assessment5-container52 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment5-text48 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment5-checkbox55 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox56 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox57 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox58 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox59 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-text49 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment5-container53 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment5-container54 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment5-container55 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment5-text51 {
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
          .assessment5-container56 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment5-text52 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment5-checkbox60 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox61 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox62 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox63 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox64 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-text53 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment5-container57 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment5-container58 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment5-container59 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment5-text55 {
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
          .assessment5-container60 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment5-text56 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment5-checkbox65 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox66 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox67 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox68 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-checkbox69 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment5-text57 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment5-container61 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment5-form2 {
            width: 200px;
            height: 100px;
            display: flex;
          }
          .assessment5-link {
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
            .assessment5-text10 {
              font-size: 42px;
              text-align: center;
            }
            .assessment5-text11 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment5-text15 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment5-text19 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment5-text23 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment5-text27 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment5-text31 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment5-text35 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment5-text39 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment5-text43 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment5-text47 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment5-text51 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment5-text55 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Assessment5
