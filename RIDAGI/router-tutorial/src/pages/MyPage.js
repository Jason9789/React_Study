import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const MyPage = () => {
  const isLoggedIn = false;

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h1>로그인이 필요합니다</h1>
          <Link to='/login'>로그인하러 가기</Link>
        </div>
      ) : (
        <h1>마이 페이지</h1>
      )}
    </div>
  );
};

export default MyPage;
