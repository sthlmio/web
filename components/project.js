import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tags } from './tags'

export const Project = ({ from, to, role, title, children, tags }) => (
  <article className="project">
    <h3>
      {title}
      <span className="role">
        {role}, {from} - {to}
      </span>
    </h3>
    <h4></h4>
    {children}
    <Tags tags={tags} />
    {/*language=SCSS*/}
    <style jsx>
      {`
        .project {
          page-break-inside: avoid;
          display: block;
        }

        .role {
          display: block;
          font-size: 0.8em;
          text-transform: uppercase;
          line-height: 1.2em;
          margin-top: 0.3em;
        }
      `}
    </style>
  </article>
)

Project.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  role: PropTypes.string,
  title: PropTypes.node,
  tags: PropTypes.arrayOf(PropTypes.string),
}
