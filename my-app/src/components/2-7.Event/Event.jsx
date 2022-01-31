import React from 'react';

export default function Event() {

  const handleButtonClick = (e) => {
    console.dir(e)
    console.log('handleButtonClick')
  }

  const handleClickCapture = () => {
    console.log('handleClickCapture')
  }

  const handleClickCapture2 = () => {
    console.log('handleClickCapture2')
  }

  const handleClickBubble = () => {
    console.log('handleClickBubble')
  }

  // 이 경우는 마우스 커서가 버튼을 벗어날 때 실행된다.
  const handleMouseLeave = () => {
    console.log('onMouseLeave')
  }

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
      <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>Button</button>
      </div>
    </div>
  );
}
