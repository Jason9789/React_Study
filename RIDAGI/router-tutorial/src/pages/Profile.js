import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
  google: {
    name: '구글',
    description: '구글신',
  },
  naver: {
    name: '네이버',
    description: '초록창',
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
