import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <p>It's a page you can see first</p>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/profiles/google'>Google의 프로필</Link>
        </li>
        <li>
          <Link to='/profiles/naver'>Naver의 프로필</Link>
        </li>
        <li>
          <Link to='/profiles/void'>존재하지 않는 프로필</Link>
        </li>
        <li>
          <Link to='/articles'>게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
