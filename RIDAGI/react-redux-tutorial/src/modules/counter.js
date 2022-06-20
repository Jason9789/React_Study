import { createAction, handleActions } from 'redux-actions'

// 1. 가장 먼저 할 작업은 액션 타입을 정의하는 것이다.
// "모듈 이름/액션 이름"과 같은 형태로 액션 타입을 정의한다.
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

// 액션 함수 만들기 -> createAction을 사용하면 더 편하게 가능
export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)

// 초기 상태 및 리듀서 함수 만들기
const initialState = {
  number: 0,
}

// 리듀서 함수도 handleActions를 사용하면 더 간단하고 가독성 높게 작성할 수 있다.
// 첫 번째 파라미터에는 각 액션에 대한 업데이트 함수
// 두 번째 파라미터에는 초기 상태
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
)

export default counter
