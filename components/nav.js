export function Nav({ variant = 'default', current }) {
  const isTransparent = variant === 'transparent'
  const links = [
    { href: '/blog/', label: 'Blogg', key: 'blog' },
    { href: '/#contact', label: 'Kontakt', key: 'contact' },
  ]

  return (
    <nav className={isTransparent ? 'nav transparent' : 'nav'}>
      <div className="inner">
        <a href="/" className="logo" aria-label="sthlm.io">
          <img src="/static/logo_small.svg" alt="" />
        </a>
        <ul className="links">
          {links.map((l) => (
            <li key={l.key}>
              <a
                href={l.href}
                className={current === l.key ? 'active' : ''}
                aria-current={current === l.key ? 'page' : undefined}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/*language=SCSS*/}
      <style jsx>{`
        .nav {
          width: 100%;
          background: #fff;
        }

        .nav.transparent {
          background: transparent;
          border-bottom: 0;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 5;
        }

        .inner {
          margin: 0 auto;
          width: 1024px;
          max-width: calc(100% - clamp(28px, 6vw, 40px));
          padding: 18px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .logo {
          display: inline-flex;
          line-height: 0;
        }

        .logo img {
          width: 130px;
          height: auto;
          display: block;
        }

        .nav.transparent .logo img {
          filter: brightness(0) invert(1);
        }

        .links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          gap: 28px;
        }

        .links a {
          display: inline-block;
          padding: 6px 2px;
          font-size: 15px;
          font-weight: 600;
          color: #0a0a0a;
          text-decoration: none;
          border-bottom: 2px solid transparent;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .links a:hover {
          color: #3e46cf;
        }

        .links a.active {
          border-bottom-color: #0a1a10;
        }

        .nav.transparent .links a {
          color: #fff;
        }

        .nav.transparent .links a.active {
          border-bottom-color: #fff;
        }

        .nav.transparent .links a:hover {
          color: rgba(255, 255, 255, 0.85);
        }
      `}</style>
    </nav>
  )
}
