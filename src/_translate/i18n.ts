import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "./locales/en/en.json"
import es from "./locales/es/es.json"
import ja from "./locales/ja/ja.json"
import pt_BR from "./locales/pt_BR/pt_BR.json"

const resources = {
    "en": en,
    "es": es,
    "ja": ja,
    "pt-BR": pt_BR
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: navigator.language,
        interpolation: {
            escapeValue: false,
        }
    })

export default i18n
