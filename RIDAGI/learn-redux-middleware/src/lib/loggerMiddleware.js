// next 파라미터는 함수 형태이다.
// store.dispatch와 비슷한 역할을 하지만 차이점이 있다.
// next(action)을 호출하면 그다음 처리해야 할 미들웨어에게 액션을 넘겨주고,
// 만약 그 다음 미들웨어가 없다면 리듀서에게 액션을 넘겨준다.

const loggerMiddleware = (store) => (next) => (action) => {
  // 미들웨어 기본 구조

  console.group(action && action.type) // 액션 타입으로 log를 그룹화
  console.log('이전 상태', store.getState())
  next(action) // 다음 미들웨어 혹은 리듀서에게 전달
  console.log('다음 상태', store.getState()) // 업데이트된 상태
  console.groupEnd() // 그룹 끝
}

export default loggerMiddleware
