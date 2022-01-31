import React from 'react';

export default function List() {
  
  const numbers = [1, 2, 3, 4, 5]

  // return (
  //   <ul>
  //     {numbers.map((item) => (
  //       <li key={item.toString()}>{item}</li>
  //     ))}
  //   </ul>
  // );

  const todos = [
    {id: 1, text: 'Dring Water'},
    {id: 2, text: 'Wash Car'},
    {id: 3, text: 'Listen Lecture'},
    {id: 4, text: 'Go to bed'}
  ]

    const Item = (props) => {
      return (
        // key 값은 props로 넘겨도 사용할 수 없다.
        // 따라서 key값, 혹은 id 값을 넘겨서 사용하려면 key가 아닌 다른 props를 넘겨줘야 한다.
      <li>{props.id} {props.text}</li>
      )
    }

    const todoList = todos.map((todo) => <Item key={todo.id} id={todo.id} text={todo.text} />)

  return (
    <>{todoList}</>
  )
}
