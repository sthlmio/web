export const DownloadPdfButton = ({ href }) => {
  return (
    <>
      <a className="downloadPdf" href={href} download>
        Download as PDF
      </a>
      {/*language=SCSS*/}
      <style jsx>{`
        .downloadPdf {
          display: inline-block;
          text-transform: uppercase;
          background: #3e46cf;
          color: #fff;
          border: 0;
          outline: none;
          padding: 20px 40px;
          cursor: pointer;
          font-size: 18px;
          font-family: 'Noto Sans', sans-serif;
          font-weight: 300;
          -webkit-appearance: none;
          -webkit-border-radius: 0px;
          margin: 20px 0;
          text-decoration: none;

          &:hover {
            background: #4c52c1;
          }

          &:hover,
          &:visited {
            color: #fff;
          }
        }

        @media print {
          .downloadPdf {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
