import React from 'react'
import { render as renderDom } from 'react-dom'
import { createStore } from 'redux'
// import App from './components/app'

const DECREMENT = 'DECREMENT'
const decrement = (howMuch) => { return {type: DECREMENT, amount: howMuch}}

const INCREMENT = 'INCREMENT'
const increment = (howMuch) => { return {type: INCREMENT, amount: howMuch}}

const MULTIPLY = 'MULTIPLY'
const multiply = (howMuch) => { return {type: MULTIPLY, amount: howMuch}}

const DEVIDE = 'DEVIDE'
const devide = (howMuch) => { return {type: DEVIDE, amount: howMuch}}

const Counter = (props) => {
	console.log(props)
	return (
		<div>
		<h2>I got the count: {props.count}</h2>
		<input type="number" placeholder="Enter Amount" id="inputAmt"/>
		<button onClick={() => props.dispatch(increment(Number(document.getElementById('inputAmt').value)))}>+</button>
		<button onClick={() => props.dispatch(decrement(Number(document.getElementById('inputAmt').value)))}>-</button>
		<button onClick={() => props.dispatch(multiply(Number(document.getElementById('inputAmt').value)))}>x</button>
		<button onClick={() => props.dispatch(devide(Number(document.getElementById('inputAmt').value)))}>÷</button>
		</div>
	)
}

const countReducer = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
		console.log("----", typeof action.amount)
			return state + action.amount
		case 'DECREMENT':
			return state - action.amount
		case 'MULTIPLY':
			return state * action.amount
		case 'DEVIDE':
			return state / action.amount
		default: return state
	}
}

const store = createStore(countReducer)

const redraw = () => {

	renderDom(
		<Counter count={store.getState()} dispatch={store.dispatch} />,
		 document.getElementById('app'))
}


store.subscribe(redraw)
redraw()
