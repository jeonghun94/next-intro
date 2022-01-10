import NAV from "../componets/NAV";
import "../styles/globals.css";

export default function App({ Component, props }) {
  return (
    <>
      <NAV />
      <Component {...props} />
      <style jsx global>
        {`
          a {
            color: red;
          }
        `}
      </style>
    </>
  );
}
