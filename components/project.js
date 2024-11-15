import React from 'react'
import PropTypes from 'prop-types'
import { Tags } from './tags'

export const Project = ({ from, to, role, title, children, tags }) => (
  <article className="project">
    <h3>
      {title}
      <span className="role">
        {role ? `${role}, ` : ''}
        {from} - {to}
      </span>
    </h3>
    {children}
    <Tags tags={tags} />
    {/*language=SCSS*/}
    <style jsx>
      {`
        .project {
          display: block;
        }

        .role {
          font-family: 'Overpass Mono';
          display: block;
          font-size: 16px;
          line-height: 1.2em;
          margin-top: 0.3em;
          font-weight: 400;
        }

        h3 {
          font-size: 16px;
        }

        @media screen and (min-width: 500px) {
          h3 {
            font-size: 20px;
          }
          .role {
            font-size: 18px;
          }
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
