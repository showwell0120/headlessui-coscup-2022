import React from 'react';

export function useGetLatest(obj) {
  const ref = React.useRef();
  ref.current = obj;

  return React.useCallback(() => ref.current, []);
}
