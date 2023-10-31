import { Counter } from 'entities/Counter'
import { useTranslation } from 'react-i18next'

function AboutPage() {
	const { t } = useTranslation('about')

	return <div>{t('О Сайте')}<Counter /></div>
}

export default AboutPage

