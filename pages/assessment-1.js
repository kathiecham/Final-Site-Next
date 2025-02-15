import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Assessment1 = (props) => {
  return (
    <>
      <div className="assessment1-container10">
        <Head>
          <title>Assessment-1 - Final Site</title>
          <meta property="og:title" content="Assessment-1 - Final Site" />
        </Head>
        <div className="assessment1-container11"></div>
        <img
          alt="image"
          src="/v02%2012.31.2024%20logo-200h.png"
          className="assessment1-image"
        />
        <div className="assessment1-container12">
          <h1 className="assessment1-text10">Challenges - Part 1</h1>
        </div>
        <span className="assessment1-text11">
          Taking on too much, struggling to say no.
        </span>
        <form
          action="/my_unstoppable_scripts/process_form.php"
          method="POST"
          className="assessment1-form"
        >
          <div>
            <div className="assessment1-container14">
              <React.Fragment>
                <React.Fragment>
                  <Script>{`
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nextButton = document.getElementById("next-button-id"); // Change to actual ID
    const radioGroups = [...new Set([...form.querySelectorAll("input[type='radio']")].map(rb => rb.name))];

    function checkCompletion() {
        const allAnswered = radioGroups.every(name => form.querySelector(\`input[name="\${name}"]:checked\`));
        nextButton.disabled = !allAnswered;
    }

    // Run the check immediately in case some answers are pre-filled
    checkCompletion(); 

    form.addEventListener("change", checkCompletion);
});
`}</Script>
                </React.Fragment>
              </React.Fragment>
            </div>
          </div>
          <div className="assessment1-container15">
            <div className="assessment1-container16">
              <span className="assessment1-text12">Agree</span>
              <input
                type="checkbox"
                Type="Radio"
                name="Question 1"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment1-checkbox10"
              />
              <input
                type="radio"
                name="Question 1"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment1-checkbox11"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 1"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment1-checkbox12"
              />
              <input
                type="radio"
                name="Question 1"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment1-checkbox13"
              />
              <input
                type="radio"
                name="Question 1"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment1-checkbox14"
              />
              <span className="assessment1-text13">Disagree</span>
            </div>
            <div className="assessment1-container17">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment1-container18">
            <div className="assessment1-container19">
              <span className="assessment1-text15">
                Discouraged by past setbacks.
              </span>
            </div>
            <div className="assessment1-container20">
              <span className="assessment1-text16">Agree</span>
              <input
                type="checkbox"
                Type="Radio"
                name="Question 2"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment1-checkbox15"
              />
              <input
                type="radio"
                name="Question 2"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment1-checkbox16"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 2"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment1-checkbox17"
              />
              <input
                type="radio"
                name="Question 2"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment1-checkbox18"
              />
              <input
                type="radio"
                name="Question 2"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment1-checkbox19"
              />
              <span className="assessment1-text17">Disagree</span>
            </div>
            <div className="assessment1-container21">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment1-container22">
            <div className="assessment1-container23">
              <span className="assessment1-text19">
                Feeling overwhelmed by the sheer volume of tasks and the
                information I need to handle.
              </span>
            </div>
            <div className="assessment1-container24">
              <span className="assessment1-text20">Agree</span>
              <input
                type="checkbox"
                Type="Radio"
                name="Question 3"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment1-checkbox20"
              />
              <input
                type="radio"
                name="Question 3"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment1-checkbox21"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 3"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment1-checkbox22"
              />
              <input
                type="radio"
                name="Question 3"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment1-checkbox23"
              />
              <input
                type="radio"
                name="Question 3"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment1-checkbox24"
              />
              <span className="assessment1-text21">Disagree</span>
            </div>
            <div className="assessment1-container25">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment1-container26">
            <div className="assessment1-container27">
              <span className="assessment1-text23">
                Struggling to maintain momentum after initial enthusiasm.
              </span>
            </div>
            <div className="assessment1-container28">
              <span className="assessment1-text24">Agree</span>
              <input
                type="checkbox"
                Type="Radio"
                name="Question 4"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment1-checkbox25"
              />
              <input
                type="radio"
                name="Question 4"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment1-checkbox26"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 4"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment1-checkbox27"
              />
              <input
                type="radio"
                name="Question 4"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment1-checkbox28"
              />
              <input
                type="radio"
                name="Question 4"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment1-checkbox29"
              />
              <span className="assessment1-text25">Disagree</span>
            </div>
            <div className="assessment1-container29">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment1-container30">
            <div className="assessment1-container31">
              <span className="assessment1-text27">
                Not able to pick one goal, because they all seem important.
              </span>
            </div>
            <div className="assessment1-container32">
              <span className="assessment1-text28">Agree</span>
              <input
                type="checkbox"
                Type="Radio"
                name="Question 5"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment1-checkbox30"
              />
              <input
                type="radio"
                name="Question 5"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment1-checkbox31"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 5"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment1-checkbox32"
              />
              <input
                type="radio"
                name="Question 5"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment1-checkbox33"
              />
              <input
                type="radio"
                name="Question 5"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment1-checkbox34"
              />
              <span className="assessment1-text29">Disagree</span>
            </div>
            <div className="assessment1-container33">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment1-container34">
            <div className="assessment1-container35">
              <span className="assessment1-text31">
                Difficulty in setting boundaries with others.
              </span>
            </div>
            <div className="assessment1-container36">
              <span className="assessment1-text32">Agree</span>
              <input
                type="checkbox"
                Type="Radio"
                name="Question 6"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment1-checkbox35"
              />
              <input
                type="radio"
                name="Question 6"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment1-checkbox36"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 6"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment1-checkbox37"
              />
              <input
                type="radio"
                name="Question 6"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment1-checkbox38"
              />
              <input
                type="radio"
                name="Question 6"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment1-checkbox39"
              />
              <span className="assessment1-text33">Disagree</span>
            </div>
            <div className="assessment1-container37">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment1-container38">
            <div className="assessment1-container39">
              <span className="assessment1-text35">
                Feeling anxious about making the wrong decisions.
              </span>
            </div>
            <div className="assessment1-container40">
              <span className="assessment1-text36">Agree</span>
              <input
                type="checkbox"
                Type="Radio"
                name="Question 7"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment1-checkbox40"
              />
              <input
                type="radio"
                name="Question 7"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment1-checkbox41"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 7"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment1-checkbox42"
              />
              <input
                type="radio"
                name="Question 7"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment1-checkbox43"
              />
              <input
                type="radio"
                name="Question 7"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment1-checkbox44"
              />
              <span className="assessment1-text37">Disagree</span>
            </div>
            <div className="assessment1-container41">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment1-container42">
            <div className="assessment1-container43">
              <span className="assessment1-text39">
                Struggling to do the work.
              </span>
            </div>
            <div className="assessment1-container44">
              <span className="assessment1-text40">Agree</span>
              <input
                type="checkbox"
                Type="Radio"
                name="Question 8"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment1-checkbox45"
              />
              <input
                type="radio"
                name="Question 8"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment1-checkbox46"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 8"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment1-checkbox47"
              />
              <input
                type="radio"
                name="Question 8"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment1-checkbox48"
              />
              <input
                type="radio"
                name="Question 8"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment1-checkbox49"
              />
              <span className="assessment1-text41">Disagree</span>
            </div>
            <div className="assessment1-container45">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment1-container46">
            <div className="assessment1-container47">
              <span className="assessment1-text43">
                Putting off tasks, finding it hard to start or finish projects.
              </span>
            </div>
            <div className="assessment1-container48">
              <span className="assessment1-text44">Agree</span>
              <input
                type="checkbox"
                Type="Radio"
                name="Question 9"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment1-checkbox50"
              />
              <input
                type="radio"
                name="Question 9"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment1-checkbox51"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 9"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment1-checkbox52"
              />
              <input
                type="radio"
                name="Question 9"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment1-checkbox53"
              />
              <input
                type="radio"
                name="Question 9"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment1-checkbox54"
              />
              <span className="assessment1-text45">Disagree</span>
            </div>
            <div className="assessment1-container49">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment1-container50">
            <div className="assessment1-container51">
              <span className="assessment1-text47">
                Feeling stuck in a creative rut, uninspired or creatively
                blocked.
              </span>
            </div>
            <div className="assessment1-container52">
              <span className="assessment1-text48">Agree</span>
              <input
                type="checkbox"
                Type="Radio"
                name="Question 10"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment1-checkbox55"
              />
              <input
                type="radio"
                name="Question 10"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment1-checkbox56"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 10"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment1-checkbox57"
              />
              <input
                type="radio"
                name="Question 10"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment1-checkbox58"
              />
              <input
                type="radio"
                name="Question 10"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment1-checkbox59"
              />
              <span className="assessment1-text49">Disagree</span>
            </div>
            <div className="assessment1-container53">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment1-container54">
            <div className="assessment1-container55">
              <span className="assessment1-text51">
                Experiencing self-doubt that limits my decision-making and makes
                me feel not good enough.
              </span>
            </div>
            <div className="assessment1-container56">
              <span className="assessment1-text52">Agree</span>
              <input
                type="checkbox"
                Type="Radio"
                name="Question 11"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment1-checkbox60"
              />
              <input
                type="radio"
                name="Question 11"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment1-checkbox61"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 11"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment1-checkbox62"
              />
              <input
                type="radio"
                name="Question 11"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment1-checkbox63"
              />
              <input
                type="radio"
                name="Question 11"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment1-checkbox64"
              />
              <span className="assessment1-text53">Disagree</span>
            </div>
            <div className="assessment1-container57">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <div className="assessment1-container58">
            <div className="assessment1-container59">
              <span className="assessment1-text55">
                Unclear about the first steps to take.
              </span>
            </div>
            <div className="assessment1-container60">
              <span className="assessment1-text56">Agree</span>
              <input
                type="checkbox"
                Type="Radio"
                name="Question 12"
                Style="transform: scale(1.5)"
                value="1"
                className="assessment1-checkbox65"
              />
              <input
                type="radio"
                name="Question 12"
                Style="transform: scale(1.5)"
                value="2"
                className="assessment1-checkbox66"
              />
              <input
                type="checkbox"
                Type="radio"
                name="Question 12"
                Style="transform: scale(1.5)"
                value="3"
                className="assessment1-checkbox67"
              />
              <input
                type="radio"
                name="Question 12"
                Style="transform: scale(1.5)"
                value="4"
                className="assessment1-checkbox68"
              />
              <input
                type="radio"
                name="Question 12"
                Style="transform: scale(1.5)"
                value="5"
                className="assessment1-checkbox69"
              />
              <span className="assessment1-text57">Disagree</span>
            </div>
            <div className="assessment1-container61">
              <span>
                ______________________________________________________________________________________
              </span>
            </div>
          </div>
          <Link href="/assessment-2">
            <a id="next_button_1" disabled className="assessment1-link button">
              Next
            </a>
          </Link>
        </form>
      </div>
      <style jsx>
        {`
          .assessment1-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .assessment1-container11 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
          }
          .assessment1-image {
            width: 108px;
            height: 33px;
            align-self: flex-start;
            object-fit: cover;
            margin-left: var(--dl-space-space-fourunits);
          }
          .assessment1-container12 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .assessment1-text10 {
            font-size: 36px;
            margin-top: var(--dl-space-space-twounits);
          }
          .assessment1-text11 {
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
          .assessment1-form {
            flex: column;
            width: 200px;
            height: auto;
            display: flex;
            align-self: center;
            flex-direction: column;
          }
          .assessment1-container14 {
            display: contents;
          }
          .assessment1-container15 {
            flex: column;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment1-container16 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment1-text12 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment1-checkbox10 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox11 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox12 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox13 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox14 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-text13 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment1-container17 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment1-container18 {
            flex: column;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment1-container19 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment1-text15 {
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
          .assessment1-container20 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment1-text16 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment1-checkbox15 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox16 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox17 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox18 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox19 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-text17 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment1-container21 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment1-container22 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment1-container23 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment1-text19 {
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
          .assessment1-container24 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment1-text20 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment1-checkbox20 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox21 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox22 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox23 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox24 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-text21 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment1-container25 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment1-container26 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment1-container27 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment1-text23 {
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
          .assessment1-container28 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment1-text24 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment1-checkbox25 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox26 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox27 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox28 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox29 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-text25 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment1-container29 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment1-container30 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment1-container31 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment1-text27 {
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
          .assessment1-container32 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment1-text28 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment1-checkbox30 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox31 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox32 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox33 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox34 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-text29 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment1-container33 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment1-container34 {
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment1-container35 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment1-text31 {
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
          .assessment1-container36 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment1-text32 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment1-checkbox35 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox36 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox37 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox38 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox39 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-text33 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment1-container37 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment1-container38 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment1-container39 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment1-text35 {
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
          .assessment1-container40 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment1-text36 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment1-checkbox40 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox41 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox42 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox43 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox44 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-text37 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment1-container41 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment1-container42 {
            display: flex;
            flex-direction: column;
          }
          .assessment1-container43 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment1-text39 {
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
          .assessment1-container44 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment1-text40 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment1-checkbox45 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox46 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox47 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox48 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox49 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-text41 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment1-container45 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment1-container46 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment1-container47 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment1-text43 {
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
          .assessment1-container48 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment1-text44 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment1-checkbox50 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox51 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox52 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox53 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox54 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-text45 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment1-container49 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment1-container50 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment1-container51 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment1-text47 {
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
          .assessment1-container52 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment1-text48 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment1-checkbox55 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox56 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox57 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox58 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox59 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-text49 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment1-container53 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment1-container54 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment1-container55 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment1-text51 {
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
          .assessment1-container56 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment1-text52 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment1-checkbox60 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox61 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox62 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox63 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox64 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-text53 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment1-container57 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment1-container58 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .assessment1-container59 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .assessment1-text55 {
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
          .assessment1-container60 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .assessment1-text56 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-right: var(--dl-space-space-fourunits);
          }
          .assessment1-checkbox65 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox66 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox67 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox68 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-checkbox69 {
            width: auto;
            height: auto;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: 0px;
          }
          .assessment1-text57 {
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            padding-left: 0px;
          }
          .assessment1-container61 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .assessment1-link {
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
            .assessment1-text10 {
              font-size: 42px;
              text-align: center;
            }
            .assessment1-text11 {
              width: 424px;
              font-size: 24px;
              font-style: normal;
              align-items: center;
              font-family: Montserrat;
              font-weight: 500;
              line-height: 1.25;
              margin-left: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-twounits);
              margin-right: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .assessment1-form {
              width: var(--dl-size-size-xlarge);
            }
            .assessment1-container15 {
              width: 157px;
            }
            .assessment1-container16 {
              width: 425px;
            }
            .assessment1-text12 {
              width: 425px;
              height: auto;
              font-size: 18px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 400;
              margin-left: var(--dl-space-space-twounits);
              padding-right: 36px;
            }
            .assessment1-checkbox10 {
              width: 425px;
              height: auto;
              margin-right: 36px;
            }
            .assessment1-checkbox11 {
              width: 425px;
              height: auto;
              margin-right: 36px;
            }
            .assessment1-checkbox12 {
              width: 425px;
              height: auto;
              margin-right: 36px;
            }
            .assessment1-checkbox13 {
              width: 425px;
              height: auto;
              margin-right: 36px;
            }
            .assessment1-checkbox14 {
              width: 425px;
              height: auto;
              margin-right: 36px;
            }
            .assessment1-text13 {
              width: 425px;
              height: auto;
            }
            .assessment1-container17 {
              width: 100%;
            }
            .assessment1-text15 {
              width: 425px;
              height: auto;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment1-text16 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment1-checkbox15 {
              margin-right: 36px;
            }
            .assessment1-checkbox16 {
              margin-right: 36px;
            }
            .assessment1-checkbox17 {
              margin-right: 36px;
            }
            .assessment1-checkbox18 {
              margin-right: 36px;
            }
            .assessment1-checkbox19 {
              margin-right: 36px;
            }
            .assessment1-text19 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment1-text20 {
              padding-right: 36px;
            }
            .assessment1-checkbox20 {
              margin-right: 36px;
            }
            .assessment1-checkbox21 {
              margin-right: 36px;
            }
            .assessment1-checkbox22 {
              margin-right: 36px;
            }
            .assessment1-checkbox23 {
              margin-right: 36px;
            }
            .assessment1-checkbox24 {
              margin-right: 36px;
            }
            .assessment1-text23 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment1-text24 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment1-checkbox25 {
              margin-right: 36px;
            }
            .assessment1-checkbox26 {
              margin-right: 36px;
            }
            .assessment1-checkbox27 {
              margin-right: 36px;
            }
            .assessment1-checkbox28 {
              margin-right: 36px;
            }
            .assessment1-checkbox29 {
              margin-right: 36px;
            }
            .assessment1-text27 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment1-text28 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment1-checkbox30 {
              margin-right: 36px;
            }
            .assessment1-checkbox31 {
              margin-right: 36px;
            }
            .assessment1-checkbox32 {
              margin-right: 36px;
            }
            .assessment1-checkbox33 {
              margin-right: 36px;
            }
            .assessment1-checkbox34 {
              margin-right: 36px;
            }
            .assessment1-text31 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment1-text32 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment1-checkbox35 {
              margin-right: 36px;
            }
            .assessment1-checkbox36 {
              margin-right: 36px;
            }
            .assessment1-checkbox37 {
              margin-right: 36px;
            }
            .assessment1-checkbox38 {
              margin-right: 36px;
            }
            .assessment1-checkbox39 {
              margin-right: 36px;
            }
            .assessment1-text35 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment1-text36 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment1-checkbox40 {
              margin-right: 36px;
            }
            .assessment1-checkbox41 {
              margin-right: 36px;
            }
            .assessment1-checkbox42 {
              margin-right: 36px;
            }
            .assessment1-checkbox43 {
              margin-right: 36px;
            }
            .assessment1-checkbox44 {
              margin-right: 36px;
            }
            .assessment1-text39 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment1-text40 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment1-checkbox45 {
              margin-right: 36px;
            }
            .assessment1-checkbox46 {
              margin-right: 36px;
            }
            .assessment1-checkbox47 {
              margin-right: 36px;
            }
            .assessment1-checkbox48 {
              margin-right: 36px;
            }
            .assessment1-checkbox49 {
              margin-right: 36px;
            }
            .assessment1-text43 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment1-text44 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment1-checkbox50 {
              margin-right: 36px;
            }
            .assessment1-checkbox51 {
              margin-right: 36px;
            }
            .assessment1-checkbox52 {
              margin-right: 36px;
            }
            .assessment1-checkbox53 {
              margin-right: 36px;
            }
            .assessment1-checkbox54 {
              margin-right: 36px;
            }
            .assessment1-text47 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment1-text48 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment1-checkbox55 {
              margin-right: 36px;
            }
            .assessment1-checkbox56 {
              margin-right: 36px;
            }
            .assessment1-checkbox57 {
              margin-right: 36px;
            }
            .assessment1-checkbox58 {
              margin-right: 36px;
            }
            .assessment1-text51 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment1-text52 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment1-checkbox60 {
              margin-right: 36px;
            }
            .assessment1-checkbox61 {
              margin-right: 36px;
            }
            .assessment1-checkbox62 {
              margin-right: 36px;
            }
            .assessment1-checkbox63 {
              margin-right: 36px;
            }
            .assessment1-checkbox64 {
              margin-right: 36px;
            }
            .assessment1-text55 {
              width: 425px;
              font-family: Montserrat;
              margin-left: 32px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 32px;
            }
            .assessment1-text56 {
              margin-right: 36px;
              padding-right: 0px;
            }
            .assessment1-checkbox65 {
              margin-right: 36px;
            }
            .assessment1-checkbox66 {
              margin-right: 36px;
            }
            .assessment1-checkbox67 {
              margin-right: 36px;
            }
            .assessment1-checkbox68 {
              margin-right: 36px;
            }
            .assessment1-checkbox69 {
              margin-right: 36px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Assessment1
