import React, { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [tab, setTab] = useState('work')

  const handleTabs = (e) => {
    setTab(e)
  }

  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    // Page
    <div className="px-8 py-32 lg:px-0 dark:bg-gray-900">
      <Head>
        <title>Loreina Chew</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {/* Center column */}
      <div className="flex flex-col max-w-4xl mx-auto justify-content">
        {/* Header */}
        <div className="flex flex-col md:flex-row mb-32 animate-slide1">
          {/* Header left */}
          <div className="w-full md:w-2/3 mb-4 md:mb-0 items-baseline text-left">
            <p className="text-2xl font-medium text-cool-900 dark:text-cool-50">
              Loreina Chew
            </p>
          </div>
          {/* Header right */}
          <div className="w-1/2 md:w-1/3 flex flex-row items-baseline justify-start md:justify-end md:text-right">
            <a
              className="w-1/6 mr-2 md:mr-0 appearance-none"
              type="button"
              style={{ transition: 'all .15s ease' }}
              href="https://linkedin.com/in/loreina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="appearance-none stroke-current text-cool-400 dark:text-malibu-600 hover:text-malibu-400"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              className="w-1/6 mr-2 md:mr-0 appearance-none"
              type="button"
              style={{ transition: 'all .15s ease' }}
              href="https://github.com/loreina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="appearance-none stroke-current text-cool-400 dark:text-malibu-600 hover:text-malibu-400"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                target="_blank"
                rel="noopener noreferrer"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              className="w-1/6 mr-2 md:mr-0 appearance-none"
              type="button"
              style={{ transition: 'all .15s ease' }}
              href="mailto:loreina98@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="appearance-none stroke-current text-cool-400 dark:text-malibu-600    hover:text-malibu-400"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a
              className="w-1/6 mr-2 md:mr-0 appearance-none"
              type="button"
              style={{ transition: 'all .15s ease' }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="appearance-none stroke-current text-cool-400 dark:text-malibu-600    hover:text-malibu-400"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
              </svg>
            </a>
          </div>
        </div>
        {/* Nav */}
        <div className="w-full flex flex-row mb-16 animate-slide2">
          <div className="group mr-6" onClick={() => handleTabs('work')}>
            <button
              className={`text-xl outline-none focus:outline-none ${
                tab === 'work'
                  ? 'font-medium text-cool-900 dark:text-cool-50'
                  : 'font-normal text-cool-600 dark:text-cool-400 group-hover:text-cool-900 dark:group-hover:text-cool-50'
              }`}
            >
              Work
            </button>
            <div
              className={`mt-1 w-full h-1 cursor-pointer rounded-full ${
                tab === 'work'
                  ? 'bg-malibu-400 bg-opacity-100'
                  : 'group-hover:bg-malibu-200'
              }`}
              style={{ transition: 'all 0.15s ease' }}
            />
          </div>
          <div className="group mr-6" onClick={() => handleTabs('about')}>
            <button
              className={`text-xl outline-none focus:outline-none ${
                tab === 'about'
                  ? 'font-medium text-cool-900 dark:text-cool-50'
                  : 'font-normal text-cool-600 dark:text-cool-400 group-hover:text-cool-900 dark:group-hover:text-cool-50'
              }`}
            >
              About
            </button>
            <div
              className={`mt-1 w-full h-1 cursor-pointer rounded-full ${
                tab === 'about'
                  ? 'bg-malibu-400 bg-opacity-100'
                  : 'group-hover:bg-malibu-200'
              }`}
              style={{ transition: 'all 0.15s ease' }}
            />
          </div>
        </div>
        {/* Work */}
        {tab === 'work' && (
          <div className="w-full flex flex-col mb-16 animate-slide3">
            <div className="group w-full mb-16">
              <a
                href="https://mchacks.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                <object
                  className="max-w-full mb-4 pointer-events-none group-hover:opacity-90"
                  data="mchacks.svg"
                  type="image/svg+xml"
                >
                  <img
                    className="max-w-full mb-4 cursor-pointer group-hover:opacity-90"
                    style={{ transition: 'all .15s ease' }}
                    src="mchacks.svg"
                  />
                </object>
                <p
                  className="text-xl font-medium text-cool-900 dark:text-cool-50 mb-1 group-hover:text-mchacks"
                  style={{ transition: 'all .15s ease' }}
                >
                  McHacks
                </p>
                <p className="text-xl font-normal text-cool-400">
                  Designing for Canada's favourite hackathon
                </p>
              </a>
            </div>
            <div className="group w-full mb-16">
              <a
                href="https://letsweav.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <object
                  className="max-w-full mb-4 pointer-events-none group-hover:opacity-80"
                  data="weav.svg"
                  type="image/svg+xml"
                >
                  <img
                    className="max-w-full mb-4 cursor-pointer group-hover:opacity-80"
                    style={{ transition: 'all .15s ease' }}
                    src="weav.svg"
                  />
                </object>
                <p
                  className="text-xl font-medium text-cool-900 dark:text-cool-50 mb-1 group-hover:text-weav"
                  style={{ transition: 'all .15s ease' }}
                >
                  Weav
                </p>
                <p className="text-xl font-normal text-cool-400">
                  Matching students to rideshares between cities
                </p>
              </a>
            </div>
            <div className="group w-full mb-16">
              <a
                href="https://sweaterplanet.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <object
                  className="max-w-full mb-4 pointer-events-none group-hover:opacity-95"
                  data="sweaterplanet.svg"
                  type="image/svg+xml"
                >
                  <img
                    className="max-w-full mb-4 cursor-pointer group-hover:opacity-95"
                    style={{ transition: 'all .15s ease' }}
                    src="sweaterplanet.svg"
                  />
                </object>
                <p
                  className="text-xl font-medium text-cool-900 dark:text-cool-50 mb-1 group-hover:text-sp"
                  style={{ transition: 'all .15s ease' }}
                >
                  Sweater Planet
                </p>
                <p className="text-xl font-normal text-cool-400">
                  Web components for an e-commerce platform
                </p>
              </a>
            </div>
          </div>
        )}
        {/* About */}
        {tab === 'about' && (
          <div className="w-full flex flex-col mb-16 animate-slide4">
            {/* Profile image */}
            <div className="mb-16">
              <img src="me.png" />
            </div>
            {/* About me */}
            <div className="w-full flex flex-col md:flex-row mb-16">
              <div className="w-full md:w-1/4 mb-8 md:mb-0">
                <p className="text-sm font-bold uppercase text-cool-900 dark:text-cool-50">
                  About me
                </p>
              </div>
              <div className="w-full md:w-1/2 mb-12">
                <p className="text-md font-normal text-cool-600 dark:text-cool-300 mb-6">
                  Hey, I’m Loreina! 👋
                </p>
                <p className="text-md font-normal text-cool-600 dark:text-cool-300 mb-6">
                  I’m a designer from Toronto who’s gotten to wear many hats as
                  a product manager, web developer, and undergraduate
                  researcher.
                </p>
                <p className="text-md font-normal text-cool-600 dark:text-cool-300">
                  I'm also a recent graduate from McGill University, with a B.A.
                  in computer science and international development.
                </p>
              </div>
            </div>
            {/* Live */}
            <div className="w-full flex flex-col md:flex-row mb-32">
              <div class="flex flex-row items-center w-full md:w-1/4 mb-8 md:mb-0">
                <span class="flex h-3 w-3 mr-2">
                  <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <p className="uppercase text-sm font-bold text-red-400 mr-8">
                  Live
                </p>
              </div>
              <p className="text-cool-600 dark:text-cool-300">
                Building the easiest way to send, store, and sell bitcoin @
                Stack
              </p>
            </div>
            {/* Open source */}
            <div className="w-full flex flex-col md:flex-row mb-16">
              <div className="w-full md:w-1/4 mb-8 md:mb-0">
                <p className="text-sm font-bold uppercase text-cool-900 dark:text-cool-50">
                  Open source
                </p>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="w-full flex flex-col mb-12">
                  <a
                    className="font-semibold text-malibu-400 hover:text-cool-400 mb-4"
                    href="https://github.com/hackmcgill/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    hackmcgill / dashboard
                  </a>
                  <p className="text-md font-normal text-cool-600 dark:text-cool-300">
                    A hackathon dashboard for organizers, sponsors, and
                    students. Built with React and TypeScript.
                  </p>
                </div>
                <div className="w-full flex flex-col mb-12">
                  <a
                    className="font-semibold text-malibu-400 hover:text-cool-400 mb-4"
                    href="https://github.com/loreina/hackmcgill"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    hackmcgill / hackerAPI
                  </a>
                  <p className="text-md font-normal text-cool-600 dark:text-cool-300">
                    A REST API powering the tools behind McHacks. Built with
                    NodeJS, Express, and MongoDB.
                  </p>
                </div>
              </div>
            </div>
            {/* Research */}
            <div className="w-full flex flex-col md:flex-row mb-16">
              <div className="w-full md:w-1/4 mb-8 md:mb-0">
                <p className="text-sm font-bold uppercase text-cool-900 dark:text-cool-50">
                  Research
                </p>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="w-full flex flex-col mb-12">
                  <a
                    className="font-semibold text-malibu-400 hover:text-cool-400 mb-4"
                    href="https://escholarship.mcgill.ca/concern/papers/fn106z29n"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Habitat 67: A Federation in Parts
                  </a>
                  <p className="text-md font-normal text-cool-600 dark:text-cool-300">
                    Published course paper analyzing the architectural history
                    and national significance of Habitat 67 in Montreal during
                    Expo '67.
                  </p>
                </div>
                <div className="w-full flex flex-col mb-12">
                  <p className="font-semibold text-cool-900 dark:text-cool-50 mb-4">
                    Ethics in Interaction Design
                  </p>
                  <p className="text-md font-normal text-cool-600 dark:text-cool-300">
                    Undergraduate research paper exploring the ethical issues in
                    interaction design practice.{' '}
                    <span className="text-cool-400 italic">Coming soon.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Scroll to top */}
        <div className="block m-auto" onClick={() => scrollToTop()}>
          <svg
            className="stroke-current text-cool-900 dark:text-cool-50 hover:text-malibu-400 cursor-pointer animate-bounce"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="30" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </div>
      </div>
    </div>
  )
}
