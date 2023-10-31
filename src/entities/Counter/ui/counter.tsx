import classNames from 'shared/lib/classNames/classNames'
import cls from './Counter.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/CounterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

interface ICounterProps {
	className?: string
}

export const Counter = ({ className }: ICounterProps) => {
	const dispatch = useDispatch()
	const counterValue = useSelector(getCounterValue)
	const incFunc = () => {
		dispatch(counterActions.increment())
	}
	const decFunc = () => {
		dispatch(counterActions.decrement())
	}

	return (
		<div className={classNames(cls.root, {}, [className])}>
			<h1 data-testid="value-title">{counterValue}</h1>
			<Button onClick={incFunc} data-testid="inc-btn">inc</Button>
			<Button onClick={decFunc} data-testid="dec-btn">dec</Button>
		</div>
	)
}
