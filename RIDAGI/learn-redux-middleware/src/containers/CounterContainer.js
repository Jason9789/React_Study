import { connect } from 'react-redux'
import { increaseAsync, decreaseAsync } from '../modules/counter'
import Counter from '../components/Counter'

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  )
}

// 첫 dispatch : 함수 형태
// 두 번째 dispatch : 객체 형태
export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increaseAsync,
    decreaseAsync,
  },
)(CounterContainer)
