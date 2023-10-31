import { getCounter } from '../getCounter/getCounter'
import { createSelector } from 'reselect'

export const getCounterValue = createSelector(getCounter, (counter) => counter.value)
