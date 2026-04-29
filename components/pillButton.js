export function PillButton({
  href,
  type,
  disabled,
  onClick,
  children,
  ariaLabel,
  size = 'default',
  arrow = 'right',
}) {
  const Tag = href ? 'a' : 'button'
  const tagProps = href
    ? { href, 'aria-label': ariaLabel }
    : {
        type: type || 'button',
        disabled,
        onClick,
        'aria-label': ariaLabel,
      }

  const arrowSvg = arrow === 'none' ? null : (
    <svg
      className="pillArrow"
      viewBox="0 0 24 24"
      width={size === 'small' ? 14 : 18}
      height={size === 'small' ? 14 : 18}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {arrow === 'left' ? (
        <>
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </>
      ) : (
        <>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </>
      )}
    </svg>
  )

  return (
    <Tag
      {...tagProps}
      className={`pillBtn ${size === 'small' ? 'small' : ''} ${
        arrow === 'left' ? 'arrowLeft' : ''
      }`}
    >
      {arrow === 'left' && arrowSvg}
      <span>{children}</span>
      {arrow === 'right' && arrowSvg}

      {/*language=SCSS*/}
      <style jsx>{`
        .pillBtn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 26px;
          border-radius: 999px;
          background: #0a1a10;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          border: 0;
          cursor: pointer;
          -webkit-appearance: none;
          box-shadow: 0 0 0 0 #33e06b;
          transition:
            transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform;
        }

        .pillBtn.small {
          gap: 6px;
          padding: 7px 16px;
          font-size: 13px;
          font-weight: 600;
        }

        .pillBtn:hover {
          background: #0a1a10;
          transform: translateY(-5px);
          box-shadow: 0 5px 0 0 #33e06b;
        }

        .pillBtn.small:hover {
          transform: translateY(-3px);
          box-shadow: 0 3px 0 0 #33e06b;
        }

        .pillBtn:active {
          transform: translateY(-3px);
          box-shadow: 0 3px 0 0 #33e06b;
        }

        .pillBtn.small:active {
          transform: translateY(-2px);
          box-shadow: 0 2px 0 0 #33e06b;
        }

        .pillBtn:disabled {
          pointer-events: none;
          opacity: 0.4;
        }

        .pillArrow {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .pillBtn:hover .pillArrow {
          transform: translateX(3px);
        }

        .pillBtn.arrowLeft:hover .pillArrow {
          transform: translateX(-3px);
        }
      `}</style>
    </Tag>
  )
}
