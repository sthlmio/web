import React, { Component } from 'react'

export const Lead = ({ children }) => (
  <>
    <p className="lead">{children}</p>

    {/*language=SCSS*/}
    <style jsx>
      {`
        .lead {
          font-size: 18px;
          margin-top: 0;
          margin-bottom: 0.6em;
        }

        @media screen and (min-width: 500px) {
          .lead {
            font-size: 22px;
          }
        }

        @media print {
          .lead {
            font-size: 16px;
          }
        }
      `}
    </style>
  </>
)
