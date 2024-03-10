
const languages = [
    {code: "en", lang: "English"},
    {code: "fr", lang: "French"},
    {code: "hi", lang: "Hindi"},
    {code: "ar", lang: "Arabic"},
]

const changeLanguage = (i18n,lng) => {
    i18n.changeLanguage(lng);
}

export { languages,changeLanguage };