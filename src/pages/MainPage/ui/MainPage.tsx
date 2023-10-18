import { useTranslation } from "react-i18next"

function MainPage() {
  const { t } = useTranslation()
  return <div>
    {t("Главная страница")}
    {t("Привет")}
    </div>
}

export default MainPage
