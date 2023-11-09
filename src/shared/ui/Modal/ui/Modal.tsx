import classNames from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import {
	Dispatch,
	KeyboardEvent,
	MouseEvent,
	SetStateAction,
	useCallback,
	useEffect,
} from 'react'
import { Portal } from 'shared/ui/Portal/ui/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface IModalProps {
	className?: string
	children?: React.ReactNode
	isOpen?: boolean
	setIsOpen?: Dispatch<SetStateAction<boolean>>
}

export const Modal = ({ className, children, isOpen, setIsOpen }: IModalProps) => {
	const closeHandler = useCallback(() => {
		setIsOpen(false)
	}, [])

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			closeHandler()
		}
	}, [])

	const onContentClick = (e: MouseEvent) => {
		e.stopPropagation()
	}

	const { theme } = useTheme()
	console.log(theme)
	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', (e) => onKeyDown(e as any))
		}

		return () => {
			window.removeEventListener('keydown', (e) => onKeyDown(e as any))
		}
	}, [isOpen])

	return (
		<Portal element={document.querySelector('.app')}>
			<div className={classNames(cls.root, { [cls.opened]: isOpen }, [className])}>
				<div
					className={cls.overlay}
					onClick={() => setIsOpen((prev) => !prev)}
					onKeyDown={onKeyDown}>
					<div
						className={classNames(cls.content, { [cls.light]: theme === 'light' }, [])}
						onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	)
}
