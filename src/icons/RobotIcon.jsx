import * as React from "react"

function RobotIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icons"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M6 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2zM12 2v2M9 12v9M15 12v9M5 16l4-2M15 14l4 2M9 18h6M10 8v.01M14 8v.01" />
    </svg>
  )
}

export default RobotIcon