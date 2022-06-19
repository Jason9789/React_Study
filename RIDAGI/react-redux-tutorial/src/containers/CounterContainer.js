import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { increase, decrease } from '../modules/counter'

const CounterContainer = ({ number, increase, decrease }) => {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease} />
}

// 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
const mapStateToProps = (state) => ({
  number: state.counter.number,
})

// 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
const mapDispatchToProps = (dispatch) =>
  // increase: () => {
  //   dispatch(increase())
  // },
  // decrease: () => {
  //   dispatch(decrease())
  // },

  // 각 액션 생성 함수를 호출하고 dispatch로 감싸는 것을 편하게 하는 방법
  bindActionCreators(
    {
      increase,
      decrease,
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
