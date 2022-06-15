import React, { useCallback } from 'react'
import { List } from 'react-virtualized'
import TodoListItem from './TodoListItem'
import './TodoList.scss'

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRerenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index]
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      )
    },
    [onRemove, onToggle, todos],
  )
  return (
    <List
      className="TodoList"
      width={512} // 전체 크기
      height={513} // 전체 높이
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRerenderer}
      list={todos} // 배열
      style={{ outline: 'none' }} // List에 기본 적용되는 outline 스타일 제거
    />
  )
}

export default React.memo(TodoList)
