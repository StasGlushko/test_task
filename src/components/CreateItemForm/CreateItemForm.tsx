import { useState } from 'react'
import s from './CreateItemForm.module.scss'
import { useActions } from '../../hooks/useActions'

export const CreateItemForm = () => {
	const [inputText, setInputText] = useState<string>('')
	const [inputInt, setInputInt] = useState<string>('')

	const { createItem } = useActions()

	const submit = () => {
		if(inputInt.length > 0 && inputText.length > 0) {

			if(Number(inputInt) > 99) {
				alert('Число не має перевищувати 99')
			} else if (Number(inputInt) < 0){
				alert('Число не може бути менше 0')
			} else {
				createItem({ priority: inputInt, text: inputText })
				setInputInt('')
				setInputText('')
			}
		}
	}

	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				submit()
			}}
			className={s.form}>
			<input
				type='text'
				placeholder='Title...'
				value={inputText}
				onChange={e => setInputText(e.target.value)}
				className={s.textInput}
			/>
			<input
				type='number'
				value={inputInt}
				placeholder='0'
				onChange={e => setInputInt(e.target.value)}
				className={s.numInput}
			/>
			<button type='submit' className={s.submitBtn}>
				Add
			</button>
		</form>
	)
}
