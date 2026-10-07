import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  style: ['normal', 'italic'],
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
