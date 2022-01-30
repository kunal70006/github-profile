import React from 'react'

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center pb-10 font-medium">
      <h1 className="text-lg tracking-wider text-slate-800">
        Built with
        <a
          className="ml-2 font-medium text-indigo-500 transition duration-150 ease-in hover:text-indigo-700"
          rel="noreferrer noopener"
          target="_blank"
          href="https://github.com/vercel/next.js/"
        >
          Next.js
        </a>
        <a
          className="ml-2 font-medium text-indigo-500 transition duration-150 ease-in hover:text-indigo-700"
          rel="noreferrer noopener"
          target="_blank"
          href="https://github.com/chartjs/Chart.js"
        >
          Chart.js
        </a>
        <a
          className="ml-2 font-medium text-indigo-500 transition duration-150 ease-in hover:text-indigo-700"
          rel="noreferrer noopener"
          target="_blank"
          href="https://github.com/IonicaBizau/node-gh-polyglot"
        >
          Github Polyglot
        </a>
        <a
          className="mx-2 font-medium text-indigo-500 transition duration-150 ease-in hover:text-indigo-700"
          rel="noreferrer noopener"
          target="_blank"
          href="https://github.com/tailwindlabs/tailwindcss"
        >
          Tailwind CSS
        </a>
        <a
          className="mr-2 font-medium text-indigo-500 transition duration-150 ease-in hover:text-indigo-700"
          rel="noreferrer noopener"
          target="_blank"
          href="https://github.com/joshwcomeau/react-flip-move"
        >
          React Flip Move
        </a>
        and more !
      </h1>
    </footer>
  )
}

export default Footer
