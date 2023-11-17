import classNames from 'shared/lib/classNames/classNames'
import cls from './LoginModal.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

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
			<LoginForm setIsOpen={onClose}></LoginForm>
		</Modal>
	)
}
