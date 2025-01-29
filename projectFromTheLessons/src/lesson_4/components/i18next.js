import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from '../locals/translationEN.json';
import translationHE from '../locals/translationHE.json';
import language from "./useContext/language";
import { useContext } from "react";

// const lng=useContext(language);
// the translations
const resources = {
  en: {
    translation: translationEN
  },
  he:{
    translation: translationHE
  }
 
};

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'he',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
