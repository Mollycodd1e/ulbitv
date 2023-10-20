import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

interface INotFountPageProps {
	className?: string
}

export const NotFoundPage = ({ className }: INotFountPageProps) => {
	const {t} = useTranslation()

	return <div className={classNames(cls.root, {}, [className])}>{t('Страница не найдена')}</div>
}
