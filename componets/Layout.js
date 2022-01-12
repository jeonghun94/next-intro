import NAV from "./NAV";

export default function Layout({ children }) {
  return (
    <>
      <NAV />
      <div>{children}</div>
    </>
  );
}
