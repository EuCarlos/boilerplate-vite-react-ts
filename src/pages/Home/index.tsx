import { useTranslation } from "react-i18next"

export function Home() {
    const { t } = useTranslation()

    return (
        <h1>{t("Hello World!")}</h1>
    )
}