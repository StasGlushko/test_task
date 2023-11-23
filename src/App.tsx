import { Todo } from './components/Todo/Todo'

import s from './styles/App.module.scss'
import preview from './assets/removebg-preview.svg'
import { useEffect } from 'react'
import { useActions } from './hooks/useActions'

const App = () => {
	const { setItems } = useActions()

	useEffect(() => {
		setItems()
	})

	return (
		<div className={s.wrapper}>
			<Todo />
			<div className={s.imgWrap}>
				<img className={s.prevImg} src={preview} alt='preview' />
			</div>
		</div>
	)
}

export default App
