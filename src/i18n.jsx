import i18n from 'i18next';
import { initReactI18next, Translation } from 'react-i18next';
import uzTranslation from '../public/locale/uz.json'
import enTransaltion from '../public/locale/en.json'
import ruTransaltion from '../public/locale/ru.json'
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
const language = localStorage.getItem('i18nextLng') || 'uz'
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng:language ,
    debug: true,
    resources :{
        uz:{translation :  uzTranslation},
        en:{translation :  enTransaltion},
        ru:{translation: ruTransaltion}
    },
    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;