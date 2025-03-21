export const CvTypography = ({ href }) => {
  return (
    <>
      <style jsx global>{`
        a,
        a:active,
        a:visited {
          font-weight: bold;
          color: #000;
        }

        a:hover {
          color: #3e46cf;
        }

        h1 {
          font-size: 32px;
        }

        h2 {
          font-size: 20px;
          margin-top: 1.5em;
          margin-bottom: 0.5em;
        }

        h3 {
          font-size: 16px;
          margin-top: 1.5em;
          margin-bottom: 0.5em;
        }

        h4 {
          font-size: 15px;
          font-weight: 600;
          text-transform: uppercase;
          margin: 0;
          margin-top: 20px; /* Smaller space above */
          margin-bottom: 15px; /* Smaller space below */
        }

        li,
        small,
        p {
          font-size: 16px;
        }

        p,
        blockquote,
        ul,
        ol,
        dt {
          width: auto;
          max-width: 700px;
        }

        @media screen and (min-width: 500px) {
          h1 {
            font-size: 43px;
          }

          h2 {
            font-size: 30px;
          }

          h3 {
            font-size: 20px;
          }

          li,
          small,
          p {
            font-size: 18px;
          }
        }

        @media print {
          h1 {
            font-size: 22px;
          }

          h2 {
            font-size: 18px;
          }

          h3 {
            font-size: 14px;
          }

          li,
          small,
          p {
            font-size: 12px;
          }

          a {
            text-decoration: none;
            font-weight: normal;
            color: #000;
          }
        }
      `}</style>
    </>
  )
}
