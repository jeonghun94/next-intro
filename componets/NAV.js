import Link from "next/link";
import { useRouter } from "next/router";

export default function NAV() {
  const router = useRouter();
  return (
    <nav>
      <Link href={"/"}>
        <a className={router.pathname === "/" ? "active" : ""}>home</a>
      </Link>
      <Link href={"/about"}>
        <a className={router.pathname === "/about" ? "active" : ""}>about</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: #red;
        }
        a {
          text-decoration: none;
          margin-right: 10px;
        }
        .active {
          color: blue;
        }
      `}</style>
    </nav>
  );
}
