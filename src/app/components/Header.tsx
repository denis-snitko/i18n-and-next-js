"use client";

import LanguageChanger from "./LanguageChanger";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Header = () => {
  const i18nNamespaces = ["header"];
  const { t } = useTranslation(i18nNamespaces);

  return (
    <header className="p-4 border-b flex justify-between items-center">
      <ul className="flex gap-4">
        <li>
          <Link href="/">{t("menu.home")}</Link>
        </li>
        <li>
          <Link href="/about">{t("menu.about")}</Link>
        </li>
      </ul>

      <div>
        {t("switchLanguage")}:&nbsp;
        <LanguageChanger />
      </div>
    </header>
  );
};

export default Header;
