import NAV from "../componets/NAV";
import "../styles/globals.css";
import Layout from "../componets/Layout";

export default function App({ Component, props }) {
  return (
    <Layout>
      <Component {...props} />
      <footer>copyright</footer>
      <style jsx global>
        {`
          a {
            color: red;
          }
        `}
      </style>
    </Layout>
  );
}
