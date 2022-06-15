export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <span> span</span>
    </div>
  );
}
