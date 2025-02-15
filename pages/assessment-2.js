import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const Assessment2 = (props) => {
  return (
    <>
      <div className="assessment2-container10">
        <Head>
          <title>Assessment-2 - Final Site</title>
          <meta property="og:title" content="Assessment-2 - Final Site" />
        </Head>
        <div className="assessment2-container11">
          <img
            alt="image"
            src="/v02%2012.31.2024%20logo-200h.png"
            className="assessment2-image1"
          />
        </div>
        <div className="assessment2-container12">
          <img
            alt="image"
            src="/Progress Bar/picture1-200h.png"
            className="assessment2-image2"
          />
        </div>
        <div className="assessment2-container13">
          <h1 className="assessment2-text10">Challenges - Part 2</h1>
        </div>
        <form
          action="/my_unstoppable_scripts/process_form.php"
          method="POST"
          className="assessment2-form"
        >
          <div className="assessment2-container14">
            <div className="assessment2-container15">
              <span className="assessment2-text11">
                Feeling unmotivated despite knowing what needs to be done.
              </span>
            </div>
            <div className="assessment2-container16">
              <span className="assessment2-text12">Agree</span>
              <input
                type="radio"
                name="Question 13"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment2-checkbox10"
              />
              <input
                type="radio"
                name="Question 13"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment2-checkbox11"
              />
              <input
                type="radio"
                name="Question 13"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment2-checkbox12"
              />
              <input
                type="radio"
                name="Question 13"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment2-checkbox13"
              />
              <input
                type="radio"
                name="Question 13"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment2-checkbox14"
              />
              <span className="assessment2-text13">Disagree</span>
            </div>
            <div className="assessment2-container17">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment2-container18">
            <div className="assessment2-container19">
              <span className="assessment2-text15">
                Struggling to maintain work-life balance and harmony.
              </span>
            </div>
            <div className="assessment2-container20">
              <span className="assessment2-text16">Agree</span>
              <input
                type="radio"
                name="Question 14"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment2-checkbox15"
              />
              <input
                type="radio"
                name="Question 14"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment2-checkbox16"
              />
              <input
                type="radio"
                name="Question 14"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment2-checkbox17"
              />
              <input
                type="radio"
                name="Question 14"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment2-checkbox18"
              />
              <input
                type="radio"
                name="Question 14"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment2-checkbox19"
              />
              <span className="assessment2-text17">Disagree</span>
            </div>
            <div className="assessment2-container21">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment2-container22">
            <div className="assessment2-container23">
              <span className="assessment2-text19">
                Feeling disconnected from my purpose.
              </span>
            </div>
            <div className="assessment2-container24">
              <span className="assessment2-text20">Agree</span>
              <input
                type="radio"
                name="Question 15"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment2-checkbox20"
              />
              <input
                type="radio"
                name="Question 15"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment2-checkbox21"
              />
              <input
                type="radio"
                name="Question 15"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment2-checkbox22"
              />
              <input
                type="radio"
                name="Question 15"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment2-checkbox23"
              />
              <input
                type="radio"
                name="Question 15"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment2-checkbox24"
              />
              <span className="assessment2-text21">Disagree</span>
            </div>
            <div className="assessment2-container25">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment2-container26">
            <div className="assessment2-container27">
              <span className="assessment2-text23">
                Feeling unsupported by those around me.
              </span>
            </div>
            <div className="assessment2-container28">
              <span className="assessment2-text24">Agree</span>
              <input
                type="radio"
                name="Question 16"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment2-checkbox25"
              />
              <input
                type="radio"
                name="Question 16"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment2-checkbox26"
              />
              <input
                type="radio"
                name="Question 16"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment2-checkbox27"
              />
              <input
                type="radio"
                name="Question 16"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment2-checkbox28"
              />
              <input
                type="radio"
                name="Question 16"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment2-checkbox29"
              />
              <span className="assessment2-text25">Disagree</span>
            </div>
            <div className="assessment2-container29">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment2-container30">
            <div className="assessment2-container31">
              <span className="assessment2-text27">
                Struggling to maintain confidence in my decisions.
              </span>
            </div>
            <div className="assessment2-container32">
              <span className="assessment2-text28">Agree</span>
              <input
                type="radio"
                name="Question 17"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment2-checkbox30"
              />
              <input
                type="radio"
                name="Question 17"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment2-checkbox31"
              />
              <input
                type="radio"
                name="Question 17"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment2-checkbox32"
              />
              <input
                type="radio"
                name="Question 17"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment2-checkbox33"
              />
              <input
                type="radio"
                name="Question 17"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment2-checkbox34"
              />
              <span className="assessment2-text29">Disagree</span>
            </div>
            <div className="assessment2-container33">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment2-container34">
            <div className="assessment2-container35">
              <span className="assessment2-text31">
                Feeling like I’m not in control of my own success.
              </span>
            </div>
            <div className="assessment2-container36">
              <span className="assessment2-text32">Agree</span>
              <input
                type="radio"
                name="Question 18"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment2-checkbox35"
              />
              <input
                type="radio"
                name="Question 18"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment2-checkbox36"
              />
              <input
                type="radio"
                name="Question 18"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment2-checkbox37"
              />
              <input
                type="radio"
                name="Question 18"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment2-checkbox38"
              />
              <input
                type="radio"
                name="Question 18"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment2-checkbox39"
              />
              <span className="assessment2-text33">Disagree</span>
            </div>
            <div className="assessment2-container37">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment2-container38">
            <div className="assessment2-container39">
              <span className="assessment2-text35">
                Struggling to prioritize tasks and allocate time effectively.
              </span>
            </div>
            <div className="assessment2-container40">
              <span className="assessment2-text36">Agree</span>
              <input
                type="radio"
                name="Question 19"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment2-checkbox40"
              />
              <input
                type="radio"
                name="Question 19"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment2-checkbox41"
              />
              <input
                type="radio"
                name="Question 19"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment2-checkbox42"
              />
              <input
                type="radio"
                name="Question 19"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment2-checkbox43"
              />
              <input
                type="radio"
                name="Question 19"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment2-checkbox44"
              />
              <span className="assessment2-text37">Disagree</span>
            </div>
            <div className="assessment2-container41">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment2-container42">
            <div className="assessment2-container43">
              <span className="assessment2-text39">
                Feeling unprepared or under-skilled, not knowing enough to get
                started or advance.
              </span>
            </div>
            <div className="assessment2-container44">
              <span className="assessment2-text40">Agree</span>
              <input
                type="radio"
                name="Question 20"
                Style="transform: scale(1.5)"
                className="assessment2-checkbox45"
              />
              <input
                type="radio"
                name="Question 20"
                Style="transform: scale(1.5)"
                className="assessment2-checkbox46"
              />
              <input
                type="radio"
                name="Question 20"
                Style="transform: scale(1.5)"
                className="assessment2-checkbox47"
              />
              <input
                type="radio"
                name="Question 20"
                Style="transform: scale(1.5)"
                className="assessment2-checkbox48"
              />
              <input
                type="radio"
                name="Question 20"
                Style="transform: scale(1.5)"
                className="assessment2-checkbox49"
              />
              <span className="assessment2-text41">Disagree</span>
            </div>
            <div className="assessment2-container45">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment2-container46">
            <div className="assessment2-container47">
              <span className="assessment2-text43">
                Feeling anxious or uneasy about my future.
              </span>
            </div>
            <div className="assessment2-container48">
              <span className="assessment2-text44">Agree</span>
              <input
                type="radio"
                name="Question 21"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment2-checkbox50"
              />
              <input
                type="radio"
                name="Question 21"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment2-checkbox51"
              />
              <input
                type="radio"
                name="Question 21"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment2-checkbox52"
              />
              <input
                type="radio"
                name="Question 21"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment2-checkbox53"
              />
              <input
                type="radio"
                name="Question 21"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment2-checkbox54"
              />
              <span className="assessment2-text45">Disagree</span>
            </div>
            <div className="assessment2-container49">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment2-container50">
            <div className="assessment2-container51">
              <span className="assessment2-text47">
                Putting off tasks, finding it hard to start or finish projects.
              </span>
            </div>
            <div className="assessment2-container52">
              <span className="assessment2-text48">Agree</span>
              <input
                type="radio"
                name="Question 22"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment2-checkbox55"
              />
              <input
                type="radio"
                name="Question 22"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment2-checkbox56"
              />
              <input
                type="radio"
                name="Question 22"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment2-checkbox57"
              />
              <input
                type="radio"
                name="Question 22"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment2-checkbox58"
              />
              <input
                type="radio"
                name="Question 22"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment2-checkbox59"
              />
              <span className="assessment2-text49">Disagree</span>
            </div>
            <div className="assessment2-container53">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment2-container54">
            <div className="assessment2-container55">
              <span className="assessment2-text51">
                Feeling like I’m not living up to my potential.
              </span>
            </div>
            <div className="assessment2-container56">
              <span className="assessment2-text52">Agree</span>
              <input
                type="radio"
                name="Question 23"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment2-checkbox60"
              />
              <input
                type="radio"
                name="Question 23"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment2-checkbox61"
              />
              <input
                type="radio"
                name="Question 23"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment2-checkbox62"
              />
              <input
                type="radio"
                name="Question 23"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment2-checkbox63"
              />
              <input
                type="radio"
                name="Question 23"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment2-checkbox64"
              />
              <span className="assessment2-text53">Disagree</span>
            </div>
            <div className="assessment2-container57">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment2-container58">
            <div className="assessment2-container59">
              <span className="assessment2-text55">
                Feeling overwhelmed by the sheer volume of tasks and the
                information I need to handle.
              </span>
            </div>
            <div className="assessment2-container60">
              <span className="assessment2-text56">Agree</span>
              <input
                type="radio"
                name="Question 24"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment2-checkbox65"
              />
              <input
                type="radio"
                name="Question 24"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment2-checkbox66"
              />
              <input
                type="radio"
                name="Question 24"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment2-checkbox67"
              />
              <input
                type="radio"
                name="Question 24"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment2-checkbox68"
              />
              <input
                type="radio"
                name="Question 24"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment2-checkbox69"
              />
              <span className="assessment2-text57">Disagree</span>
            </div>
            <div className="assessment2-container61">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <Link href="/assessment-3">
            <a id="next_button_2" disabled className="assessment2-link button">
              Next
            </a>
          </Link>
        </form>
      </div>
      <style jsx>
        {`
          .assessment2-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .assessment2-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .assessment2-image1 {
            width: 116px;
            height: 100%;
            align-self: flex-start;
            object-fit: cover;
            margin-left: var(--dl-space-space-fourunits);
            padding-top: var(--dl-space-space-halfunit);
          }
          .assessment2-container12 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment2-image2 {
            width: 345px;
            height: 30px;
            object-fit: cover;
          }
          .assessment2-container13 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .assessment2-text10 {
            font-size: 36px;
            margin-top: var(--dl-space-space-twounits);
          }
          .assessment2-form {
            width: 200px;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .assessment2-container14 {
            display: flex;
            flex-direction: column;
          }
          .assessment2-container15 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment2-text11 {
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
          .assessment2-container16 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment2-text12 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment2-checkbox10 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox11 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox12 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox13 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox14 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-text13 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment2-container17 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment2-container18 {
            display: flex;
            flex-direction: column;
          }
          .assessment2-container19 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment2-text15 {
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
          .assessment2-container20 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment2-text16 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment2-checkbox15 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox16 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox17 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox18 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox19 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-text17 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment2-container21 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment2-container22 {
            display: flex;
            flex-direction: column;
          }
          .assessment2-container23 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment2-text19 {
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
          .assessment2-container24 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment2-text20 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment2-checkbox20 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox21 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox22 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox23 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox24 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-text21 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment2-container25 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment2-container26 {
            display: flex;
            flex-direction: column;
          }
          .assessment2-container27 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment2-text23 {
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
          .assessment2-container28 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment2-text24 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment2-checkbox25 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox26 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox27 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox28 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox29 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-text25 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment2-container29 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment2-container30 {
            display: flex;
            flex-direction: column;
          }
          .assessment2-container31 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment2-text27 {
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
          .assessment2-container32 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment2-text28 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment2-checkbox30 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox31 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox32 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox33 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox34 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-text29 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment2-container33 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment2-container34 {
            display: flex;
            flex-direction: column;
          }
          .assessment2-container35 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment2-text31 {
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
          .assessment2-container36 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment2-text32 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment2-checkbox35 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox36 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox37 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox38 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox39 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-text33 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment2-container37 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment2-container38 {
            display: flex;
            flex-direction: column;
          }
          .assessment2-container39 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment2-text35 {
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
          .assessment2-container40 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment2-text36 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment2-checkbox40 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox41 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox42 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox43 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox44 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-text37 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment2-container41 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment2-container42 {
            display: flex;
            flex-direction: column;
          }
          .assessment2-container43 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment2-text39 {
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
          .assessment2-container44 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment2-text40 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment2-checkbox45 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox46 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox47 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox48 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox49 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-text41 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment2-container45 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment2-container46 {
            display: flex;
            flex-direction: column;
          }
          .assessment2-container47 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment2-text43 {
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
          .assessment2-container48 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment2-text44 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment2-checkbox50 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox51 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox52 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox53 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox54 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-text45 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment2-container49 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment2-container50 {
            display: flex;
            flex-direction: column;
          }
          .assessment2-container51 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment2-text47 {
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
          .assessment2-container52 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment2-text48 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment2-checkbox55 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox56 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox57 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox58 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox59 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-text49 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment2-container53 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment2-container54 {
            display: flex;
            flex-direction: column;
          }
          .assessment2-container55 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment2-text51 {
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
          .assessment2-container56 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment2-text52 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment2-checkbox60 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox61 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox62 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox63 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox64 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-text53 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment2-container57 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment2-container58 {
            display: flex;
            flex-direction: column;
          }
          .assessment2-container59 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment2-text55 {
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
          .assessment2-container60 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment2-text56 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment2-checkbox65 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox66 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox67 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox68 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-checkbox69 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment2-text57 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment2-container61 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment2-link {
            color: rgb(255, 255, 255);
            display: flex;
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
            .assessment2-text10 {
              font-size: 42px;
              text-align: center;
            }
            .assessment2-text11 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment2-text12 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment2-checkbox10 {
              margin-right: 36px;
            }
            .assessment2-checkbox11 {
              margin-right: 36px;
            }
            .assessment2-checkbox12 {
              margin-right: 36px;
            }
            .assessment2-checkbox13 {
              margin-right: 36px;
            }
            .assessment2-checkbox14 {
              margin-right: 36px;
            }
            .assessment2-text15 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment2-text16 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment2-checkbox15 {
              margin-right: 36px;
            }
            .assessment2-checkbox16 {
              margin-right: 36px;
            }
            .assessment2-checkbox17 {
              margin-right: 36px;
            }
            .assessment2-checkbox19 {
              margin-right: 36px;
            }
            .assessment2-text19 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment2-text20 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment2-checkbox20 {
              margin-right: 36px;
            }
            .assessment2-checkbox21 {
              margin-right: 36px;
            }
            .assessment2-checkbox22 {
              margin-right: 36px;
            }
            .assessment2-checkbox23 {
              margin-right: 36px;
            }
            .assessment2-checkbox24 {
              margin-right: 36px;
            }
            .assessment2-text23 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment2-text24 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment2-checkbox25 {
              margin-right: 36px;
            }
            .assessment2-checkbox26 {
              margin-right: 36px;
            }
            .assessment2-checkbox27 {
              margin-right: 36px;
            }
            .assessment2-checkbox28 {
              margin-right: 36px;
            }
            .assessment2-checkbox29 {
              margin-right: 36px;
            }
            .assessment2-text27 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment2-text28 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment2-checkbox30 {
              margin-right: 36px;
            }
            .assessment2-checkbox31 {
              margin-right: 36px;
            }
            .assessment2-checkbox32 {
              margin-right: 36px;
            }
            .assessment2-checkbox33 {
              margin-right: 36px;
            }
            .assessment2-checkbox34 {
              margin-right: 36px;
            }
            .assessment2-text31 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment2-text32 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment2-checkbox35 {
              margin-right: 36px;
            }
            .assessment2-checkbox36 {
              margin-right: 36px;
            }
            .assessment2-checkbox37 {
              margin-right: 36px;
            }
            .assessment2-checkbox38 {
              margin-right: 36px;
            }
            .assessment2-checkbox39 {
              margin-right: 36px;
            }
            .assessment2-text35 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment2-text36 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment2-checkbox40 {
              margin-right: 36px;
            }
            .assessment2-checkbox41 {
              margin-right: 36px;
            }
            .assessment2-checkbox42 {
              margin-right: 36px;
            }
            .assessment2-checkbox43 {
              margin-right: 36px;
            }
            .assessment2-checkbox44 {
              margin-right: 36px;
            }
            .assessment2-text39 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment2-text40 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment2-checkbox45 {
              margin-right: 36px;
            }
            .assessment2-checkbox46 {
              margin-right: 36px;
            }
            .assessment2-checkbox47 {
              margin-right: 36px;
            }
            .assessment2-checkbox48 {
              margin-right: 36px;
            }
            .assessment2-checkbox49 {
              margin-right: 36px;
            }
            .assessment2-text43 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment2-text44 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment2-checkbox50 {
              margin-right: 36px;
            }
            .assessment2-checkbox51 {
              margin-right: 36px;
            }
            .assessment2-checkbox52 {
              margin-right: 36px;
            }
            .assessment2-checkbox53 {
              margin-right: 36px;
            }
            .assessment2-checkbox54 {
              margin-right: 36px;
            }
            .assessment2-text47 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment2-text48 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment2-checkbox55 {
              margin-right: 36px;
            }
            .assessment2-checkbox56 {
              margin-right: 36px;
            }
            .assessment2-checkbox57 {
              margin-right: 36px;
            }
            .assessment2-checkbox58 {
              margin-right: 36px;
            }
            .assessment2-text51 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment2-text52 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment2-checkbox60 {
              margin-right: 36px;
            }
            .assessment2-checkbox61 {
              margin-right: 36px;
            }
            .assessment2-checkbox62 {
              margin-right: 36px;
            }
            .assessment2-checkbox63 {
              margin-right: 36px;
            }
            .assessment2-checkbox64 {
              margin-right: 36px;
            }
            .assessment2-text55 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment2-text56 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment2-checkbox65 {
              margin-right: 36px;
            }
            .assessment2-checkbox66 {
              margin-right: 36px;
            }
            .assessment2-checkbox67 {
              margin-right: 36px;
            }
            .assessment2-checkbox68 {
              margin-right: 36px;
            }
            .assessment2-checkbox69 {
              margin-right: 36px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Assessment2
