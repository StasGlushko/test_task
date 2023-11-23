import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import s from './List.module.scss'

export const List = () => {
	const { items } = useTypedSelector(state => state.todo)
	const { deleteItem } = useActions()

	const deleteEl = (id: number): void => {
		deleteItem(id)
	}

	return (
		<ul className={s.list}>
			{!!items &&
				items.map(el => {
					return (
						<li key={el.id} className={s.item}>
							<div className={s.priority}>{el.priority}</div>
							<p className={s.text}>{el.text}</p>
							<button
								onClick={() => deleteEl(el.id)}
								className={s.deleteBtn}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='30'
									height='30'
									viewBox='0 0 30 30'
									fill='none'>
									<path
										d='M22.1312 9.63126L20.3687 7.86876L15 13.2375L9.63124 7.86876L7.86874 9.63126L13.2375 15L7.86874 20.3688L9.63124 22.1313L15 16.7625L20.3687 22.1313L22.1312 20.3688L16.7625 15L22.1312 9.63126Z'
										fill='#FFD700'
									/>
								</svg>
							</button>
						</li>
					)
				})}
		</ul>
	)
}
