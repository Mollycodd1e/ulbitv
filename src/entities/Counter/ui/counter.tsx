import { Button } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/CounterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'


export const Counter = () => {
	const dispatch = useDispatch()
	const counterValue = useSelector(getCounterValue)
	const incFunc = () => {
		dispatch(counterActions.increment())
	}
	const decFunc = () => {
		dispatch(counterActions.decrement())
	}

	return (
		<div>
			<h1 data-testid="value-title">{counterValue}</h1>
			<Button onClick={incFunc} data-testid="increment-btn">+</Button>
			<Button onClick={decFunc} data-testid="decrement-btn">-</Button>
		</div>
	)
}
