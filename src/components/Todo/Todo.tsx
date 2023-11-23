import { CreateItemForm } from '../CreateItemForm/CreateItemForm'
import { List } from '../List/List'
import s from './Todo.module.scss'

export const Todo = () => {
	return (
		<div className={s.todo}>
			<div className={s.content}>
				<h1 className={s.title}>Shopping List</h1>
				<CreateItemForm />
				<List />
			</div>

			<div className={s.eclipse1}></div>
			<div className={s.eclipse2}></div>
			<div className={s.eclipse3}></div>
			<div className={s.eclipse4}></div>
		</div>
	)
}
