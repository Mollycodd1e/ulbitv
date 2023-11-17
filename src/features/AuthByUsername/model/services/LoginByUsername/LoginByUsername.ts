import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

interface LoginByUsernameProps {
	username: string
	password: string
}

export const loginByUsername = createAsyncThunk<
	User,
	LoginByUsernameProps,
	{ rejectValue: string }
>('users/fetchByIdStatus', async (authData, thunkApi) => {
	try {
		const response = await axios.post<User>('http://localhost:80/login', authData)

		if (!response.data) {
			throw new Error()
		}

		localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
		thunkApi.dispatch(userActions.setAuthData(response.data))

		return response.data
	} catch (e) {
		console.log(e)
		return thunkApi.rejectWithValue(e)
	}
})
