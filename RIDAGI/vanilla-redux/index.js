import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// action : 프로젝트의 상태에 변화를 일으키는 것
// 액션 이름은 문자열 형태로, 주로 대문자로 작성하며 고유해야 한다.
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 이름을 사용하여 액션 객체를 만드는 액션 생성 함수를 작성한다.
// 액션 객체는 type 값을 반드시 갖고 있어야 하며
// 그 외에 추후 상태를 업데이트할 때 참고하고 싶은 값을 마음대로 넣을 수 있다.

const toggleSwitch = () => ({
  type: TOGGLE_SWITCH,
});
const increase = (difference) => ({
  type: INCREASE,
  difference,
});
const decrease = () => ({
  type: DECREASE,
});
// 초깃값 설정
// 이 프로젝트에서 사용할 초깃값을 정의한다.
// 초깃값의 형태는 자유이다. 숫자일 수도, 문자일 수도, 객체일 수도 있다.
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 정의
// 리듀서는 변화를 일으키는 함수다.
// 함수의 파라미터로는 state와 action 값을 받아온다.
// state가 undefined일 때는 initialState를 기본값으로 사용한다.
function reducer(state = initialState, action) {
  // action.type에 따라 다른 작업을 처리
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        // 리듀서에서는 상태의 불변성을 유지하면서 데이터에 변화를 일으켜야 한다.
        // 이때, spread 연산자를 사용하면 편한데,
        // 객체의 구조가 복잡해지면 (ex. object.something.inside.value)
        // spread 연산자로 불변성을 관리하며 업데이트 하는 것이 굉장히 번거롭다.
        // 따라서 리덕스의 상태는 최대한 깊지 않은 구조로 진행하는 것이 좋다.
        // 객체의 구조가 복잡해지거나 배열도 함께 다룰 땐 immer 라이브러리를 사용하면 좀 더 쉽게 리듀서 작성이 가능하다.
        ...state, // 불변성 유지를 해야 함.
        toggle: !state.toggle,
      };

    case INCREASE:
      return {
        ...state, // 불변성
        counter: state.counter + action.difference,
      };

    case DECREASE:
      return {
        ...state, // 불변성
        counter: state.counter - 1,
      };

    default:
      return state;
  }
}

// 스토어 만들기.
const store = createStore(reducer);

// render
// 이 함수는 상태가 업데이트될 때마다 호출된다.
// 리액트의 render와는 다르게 이미 html을 사용하여 만들어진 ui의 속성을 상태에 따라 변경한다.
const render = () => {
  const state = store.getState(); // 현재 상태 불러오기

  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }

  // 카운터 처리
  counter.innerText = state.counter;
};

render();

// 구독 subscribe
// 스토어의 상태가 바뀔 때마다 render가 호출되도록 한다.
// subscribe 함수를 사용하여 수행할 수 있다.
store.subscribe(render);

const listener = () => {
  console.log('update requested');
};

// 추후에는 subscribe 함수 대신 react-redux 라이브러리 사용 예정
const unsubscribe = store.subscribe(listener);

// 액션 밟생 시키기 -> dispatch
divToggle.onclick = () => {
  console.log('divToggle Clicked');
  store.dispatch(toggleSwitch());
};

btnIncrease.onclick = () => {
  console.log('btnIncrease Clicked');
  store.dispatch(increase(1));
};

btnDecrease.onclick = () => {
  console.log('btnDecrease Clicked');
  store.dispatch(decrease());
};
