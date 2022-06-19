// 프로젝트의 다양한 곳에서 사용될 수 있는 유틸 함수들은 src/lib에 작성한다.

import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
  // 대기 중/ 완료/ 실패에 대한 상태 관리

  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);

      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }

      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
}
