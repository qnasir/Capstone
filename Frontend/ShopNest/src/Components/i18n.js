import i18n from 'i18next';
import LanguageDtector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend'

i18n.use(LanguageDtector).use(initReactI18next).use(Backend).init({
    debug: false,
    fallbackLng: "en",
    returnObjects: true,
})