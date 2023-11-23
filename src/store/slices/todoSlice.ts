import { createSlice } from '@reduxjs/toolkit'

interface ITodoItem {
	priority: string
	text: string
	id: number
}

interface ITodoSlice {
	items: ITodoItem[]
}

const initialState: ITodoSlice = {
	items: [],
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		setItems: state => {
			const items = window.localStorage.getItem('items')

			if (items) {
				state.items = JSON.parse(items)
			}
		},
		createItem: (state, action) => {
			const newItem: ITodoItem = {
				priority: action.payload.priority,
				text: action.payload.text,
				id: state.items.length + 1,
			}

			const items: ITodoItem[] = [newItem, ...state.items]
			
			window.localStorage.setItem('items', JSON.stringify(items))
			state.items.unshift(newItem)
		},
		deleteItem: (state, action) => {
			const newItems = state.items.filter(el => el.id != action.payload)

			window.localStorage.setItem('items', JSON.stringify(newItems))
			state.items = newItems
		},
	},
})

export const todoAction = todoSlice.actions

export default todoSlice.reducer
