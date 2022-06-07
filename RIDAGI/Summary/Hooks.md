## Hooks 개념 요약

간단한 개념 요약만 정리했기 때문에 관련된 코드는 같은 레벨에 있는 `hooks-tutorial/src/Components` 폴더를 확인하면 된다.

---

### `useState`

```js
import React, { useState } from 'react'

...

const [value, setValue] = useState(0)
```

`useState`는 가장 기본적인 **Hook**이며, 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있다.

`useState` 함수의 파라미터에는 상태의 기본 값을 넣어주면 된다.
이때, 배열의 원소가 뜻하는 바는 다음과 같다.

1. 첫 번째는 **상태값**
2. 두 번째는 **상태를 설정하는 함수**

함수에 파라미터를 넣어서 호출하면 전달받은 파라미터로 값이 바뀌게 되고, 컴포넌트가 정상적으로 리렌더링 된다.

`useState`를 여러 번 사용할 수 있다. 컴포넌트에서 관리해야 할 상태가 여러개라면 그만큼 `useState`를 여러 번 사용하면 된다.

<br />

---

<br />

### `useEffect`

`useEffect`는 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 **Hook**이다. (클래스형 컴포넌트의 `componentDidMount`와 `componentDidUpdate`를 합친 형태로 봐도 무방하다.)

<br />

- `useEffect` 기본 틀
  ```js
  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    console.log({
      name,
      nickname,
    });
  });
  ```

<br />

- 마운트될 때만 실행하고 싶을 때
  ```js
  useEffect(() => {
    console.log('마운트될 때만 실행됩니다.');
  }, []);
  ```

<br />

- 특정 값이 업데이트될 때만 실행하고 싶을 때
  ```js
  useEffect(() => {
    console.log(name);
  }, [name]);
  ```

<br />

`useEffect`는 기본적으로 렌더링되고 난 직후마다 실행되며, 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라진다.

이때, 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면, `useEffect`에서 `cleanup` 함수를 반환해야 한다.

```js
useEffect(() => {
  console.log('effect');
  console.log(name);

  return () => {
    console.log('cleanup');
    console.log(name);
  };
}, [name]);
```

`cleanup` 함수는 호출될 때 업데이트 되기 직전의 값을 보여준다.

오직 언마운트될 때만 `cleanup` 함수를 호출하고 싶다면 `useEffect` 함수의 두 번째 파라미터에 비어 있는 배열을 넣으면 된다.

```js
useEffect(() => {
  console.log('effect');

  return () => {
    console.log('unmount');
  };
}, []);
```

<br />

---

<br />

### `useReducer`

`useReducer`는 `useState`보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용하는 **Hook**이다.

리듀서는 현재 상태, 업데이트를 위한 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 함수이다. 리듀서 함수에서 새로운 상태를 만들 때는 반드시 **불변성**을 지켜줘야 한다.

```js
function reducer(state, action) {
  return { ... } // 불변성을 지키면서 업데이트한 새로운 상태 반환
}
```

액션 값은 주로 다음과 같은 형태이다.

```js
{
  type: 'INCREMENT';
}
```
