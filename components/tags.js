import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const Tags = ({ tags }) => {
  if (tags.length === 0) return null
  return (
    <>
      <ul className="tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      {/*language=SCSS*/}
      <style jsx>
        {`
          .tags {
            list-style-type: none;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
          }
          .tags li {
            background: #f5f5f5;
            padding: 5px 10px;
            margin-right: 10px;
            margin-bottom: 5px;
            font-weight: 600;
            font-size: 12px;
            text-transform: uppercase;
          }

          @media screen and (min-width: 500px) {
            font-size: 14px;
          }

          @media print {
            .tags li {
              background: none;
              padding: 0;
              font-weight: normal;
              padding: 0;
              margin-right: 0;
              margin-bottom: 0;
              line-height: 1.6em;
              font-weight: 600;
              font-size: 9px;
              text-transform: uppercase;

              &:after {
                content: '|';
                margin: 0 5px;
                display: inline-block;
              }

              &:last-child:after {
                display: none;
              }
            }
          }
        `}
      </style>
    </>
  )
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}
