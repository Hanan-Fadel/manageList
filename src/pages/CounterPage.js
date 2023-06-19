import { produce } from 'immer';
import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';



const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const CHANGE_VALUE_TO_ADD = 'change-value-to-add';
const ADD_VALUE = 'add-value';

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count+1; //using immer, i.e. allowed us to directly mutate state
            return; //instead of break;

            // return { //without immer
            //     ...state,
            //     count: state.count + 1,
            //   };
        case DECREMENT_COUNT: 
        // return {
        //     ...state,
        //     count: state.count - 1,
        //   };
            state.count = state.count -1;
            return;
        case CHANGE_VALUE_TO_ADD:
            // return {
            //     ...state,
            //     valueToAdd: action.payload,
            //   };
            state.valueToAdd = action.payload;
            return;
        case ADD_VALUE:
            // return {
            //     ...state,
            //     valueToAdd: action.payload.valueToAdd,
            //     count: action.payload.count
            //   };
               state.valueToAdd = action.payload.valueToAdd;
               state.count = action.payload.count;
               return;

            //     count: action.payload.count
        default: return; //return state (without immer we have to return state);
    }
    
  };

function CounterPage({initialCount}) {
//  const [count, setCount] = useState(initialCount);
//  const [valueToAdd, setValueToAdd] = useState(0);

//const [state, dispatch] = useReducer(reducer, { //without immer library
const [state, dispatch] = useReducer(produce(reducer), { //with immer library
    count: initialCount,
    valueToAdd: 0
});

 const increment = ()=> {
    //setCount(count+1);
    dispatch({
        type: 'increment'
    }); 
 };

 const decrement = ()=> {
    //setCount(count-1);
    dispatch({
        type: 'decrement'
    }); 
 };

 const handleChange = (event)=> {
  //we add || 0 to fix the NaN because when event.target.value ='', parseInt('')=NaN
  const value = parseInt(event.target.value) || 0;
  dispatch({
    type: 'change-value-to-add',
    payload: value
  });
 };

 const handleSubmit = (event)=> {
    event.preventDefault();
    // setCount(count+valueToAdd)
    // setValueToAdd(0);
      //   setValueToAdd(value); 
      dispatch({
        type: 'add-value',
        payload: {
            count: state.count +  state.valueToAdd,
            valueToAdd: 0
        }
      });
 };

 return(
    <Panel className="m-3">
        <h1 className='tex-lg'>Count is {state.count} </h1>
        <div className='flex flex-row'>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
        <form onSubmit={handleSubmit}>
            <label>Add a lot!</label>
            <input 
                value={state.valueToAdd || ''}
                onChange={handleChange}
                type='number' 
                className='p-1 m-3 bg-gray-50 border border-gray-300'
            />
            <Button>Add it!</Button>
        </form>
    </Panel>
 );
}

export default CounterPage;