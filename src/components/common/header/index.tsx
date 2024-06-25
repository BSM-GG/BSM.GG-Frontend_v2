import * as S from "./index.css";
import Link from "next/link";
import HeaderLink from "./headerLink";

import { Logo } from "@/style/base/svg";
import { ROUTE, ROUTENAME } from "@/constants/router";
import { getItem } from "@/utils";

const Header = () => {
  return (
    <nav className={S.Container}>
      <section className={S.HeaderLinkSection}>
        <Link href={ROUTE.HOME}>
          <Logo />
        </Link>
        <div className={S.LinkBox}>
          {Object.keys(ROUTENAME).map((e) => (
            <HeaderLink key={ROUTE[e]} routeName={e} />
          ))}
        </div>
      </section>

      {!String(getItem("access_token")).length ? (
        <Link href={ROUTE.REGISTER_ACCOUNT}>
          <div className={S.RegistAccountButton}>소환사명 연동하기</div>
        </Link>
      ) : (
        <Link href={ROUTE.ADDITIONALINFO}>
          <div className={S.RegistAccountButton}>연동된 소환사명 변경하기</div>
        </Link>
      )}
    </nav>
  );
};

export default Header;
