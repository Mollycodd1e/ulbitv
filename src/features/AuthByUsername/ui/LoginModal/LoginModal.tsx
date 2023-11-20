import classNames from 'shared/lib/classNames/classNames'
import cls from './LoginModal.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { Suspense } from 'react'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Loader } from 'shared/ui/Loader/Loader'

interface ILoginModalProps {
	className?: string
	children?: React.ReactNode
	isOpen?: boolean
	onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: ILoginModalProps) => {
	return (
		<Modal
			className={classNames(cls.root, {}, [className])}
			isOpen={isOpen}
			setIsOpen={onClose}>
			<Suspense fallback={<Loader></Loader>}>
				<LoginFormAsync></LoginFormAsync>
			</Suspense>
		</Modal>
	)
}
