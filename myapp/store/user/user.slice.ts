import { createSlice } from '@reduxjs/toolkit'

import { getStoreLocal } from '@/utils/local-storage/localStorage'

import { IUserInitialState } from './user.interface'

const initialState: IUserInitialState = {
	isLoading: false,
	user: getStoreLocal('user'),
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase
	},
})

export const { reducer } = userSlice
