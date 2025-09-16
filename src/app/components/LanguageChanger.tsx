import { usePathname, useRouter } from "next/navigation";

import { ChangeEvent } from "react";
import { i18nConfig } from "@/i18nConfig";
import { useTranslation } from "react-i18next";

const LanguageChanger = () => {
  const router = useRouter();
  const currentPathname = usePathname();
  const { i18n } = useTranslation();

  const currentLocale = i18n.language;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <select onChange={handleChange} value={currentLocale} className="border">
      <option disabled={currentLocale === "en"} value="en">
        EN
      </option>
      <option disabled={currentLocale === "ru"} value="ru">
        RU
      </option>
    </select>
  );
};

export default LanguageChanger;
