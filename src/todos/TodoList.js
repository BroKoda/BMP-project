import React, {useEffect} from 'react';
import {connect} from "react-redux";
import './TodoList.css';
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import {getTodosLoading, getTodos, getIncompleteTodos, getCompletedTodos} from "./selectors";
import {loadTodos, removeTodoRequest, markTodoAsCompletedRequest} from "./thunks";

const TodoList = ({incompleteTodos, completedTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos}) => {
	useEffect(() => {
		startLoadingTodos();
	}, [])

	const loadingMessage = <div>Loading todos ...</div>
	const content = (<div className={'list-wrapper'}>
		<NewTodoForm/>

		<h3>Incomplete todos:</h3>
		{incompleteTodos.map((todo, i) => (
			<TodoListItem
				key={i}
				todo={todo} onRemovePressed={onRemovePressed}
				onCompletedPressed={onCompletedPressed}/>
		))}

		<h3>Completed todos:</h3>
		{completedTodos.map((todo, i) => (
			<TodoListItem
				key={i}
				todo={todo} onRemovePressed={onRemovePressed}
				onCompletedPressed={onCompletedPressed}/>
		))}

		{/*{todos.map((todo, i) =>*/}
		{/*	<TodoListItem*/}
		{/*		key={i}*/}
		{/*		todo={todo} onRemovePressed={onRemovePressed}*/}
		{/*		onCompletedPressed={onCompletedPressed}/>*/}
		{/*)}*/}
	</div>)

	return (isLoading ? loadingMessage : content)
}

const mapStateToProps = state => ({
	isLoading: getTodosLoading(state),
	completedTodos: getCompletedTodos(state),
	incompleteTodos: getIncompleteTodos(state)
});

const mapDispatchToProps = dispatch => ({
	onRemovePressed: id => dispatch(removeTodoRequest(id)),
	onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
	startLoadingTodos: () => dispatch(loadTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);