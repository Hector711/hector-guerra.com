import React from 'react'

export default function ArrowDownIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill='none'
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icons"
      id='arrow-down-icon'
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}