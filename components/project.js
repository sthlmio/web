import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const Project = ({ from, to, role, title, children, tags }) => (
  <article>
    <h4>{title}</h4>
    <p className="text">
      {role}, {from} - {to}
    </p>
    {children}
    <ul className="tags">
      {tags.map(tag => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
    {/*language=SCSS*/}
    <style jsx>
      {`
        .tags {
          list-style-type: none;
          padding: 0;
        }
        .tags li {
          float: left;
          background: #f5f5f5;
          padding: 5px 10px;
          margin-right: 10px;
          margin-bottom: 5px;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
        }
      `}
    </style>
  </article>
);

Project.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  role: PropTypes.string,
  title: PropTypes.node,
  tags: PropTypes.arrayOf(PropTypes.string)
};
