import { Button } from 'shared/ui/Button/Button'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

//Компонент для теста ошибок
export const BugButton = () => {
	const [error, setError] = useState<boolean>(false)

	const { t } = useTranslation()
	const onThrow = () => {
		setError((prev) => !prev)
	}

	useEffect(() => {
		if (error) {
			throw new Error('error')
		}
	}, [error])

	return <Button onClick={onThrow}>{t('Тест ошибок')}</Button>
}
