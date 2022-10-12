import React, {useState} from "react";
import './NewTodoForm.css';

const NewTodoForm = () => {
	const [inputValue, setInputValue] = useState('')

	return (
		<>
			<div className={'new-todo-form'}>
				<input type={'text'} className={'new-todo-input'}
				       placeholder={'New todo...'}
				       onChange={(e) => setInputValue(e.target.value)}/>
				<button className={'new-todo-button'}>Create Todo</button>
			</div>
		</>
	)
}

export default NewTodoForm;