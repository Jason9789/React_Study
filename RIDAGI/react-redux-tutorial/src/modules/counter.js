// 1. 가장 먼저 할 작업은 액션 타입을 정의하는 것이다.
// "모듈 이름/액션 이름"과 같은 형태로 액션 타입을 정의한다.
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

// 액션 함수 만들기
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

// 초기 상태 및 리듀서 함수 만들기
const initialState = {
  number: 0,
}

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      }

    case DECREASE:
      return {
        number: state.number - 1,
      }

    default:
      return state
  }
}

export default counter
