import {createStore} from 'redux';

const reducerState = (state = {counter: 0}, action) => {
	if (action.type === 'INC') {
		return {counter: state.counter + 1};
	}
	if (action.type === 'DEC') {
		return {counter: state.counter - 1};
	}
	if (action.type === 'PLS') {
		return {counter: state.counter + Number(action.payload)};
	}
	if (action.type === 'MIN') {
		return {counter: state.counter - action.payload};
	}
	if (action.type === 'MPY') {
		return {counter: state.counter * action.payload};
	}
	if (action.type === 'DIV') {
		return {counter: state.counter / action.payload};
	}
	return state;
};

const store = createStore(reducerState);

export default store;
