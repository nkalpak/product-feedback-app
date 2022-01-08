import * as React from 'react';

export function useToggle(initialState: boolean = false) {
  const [isOn, setIsOn] = React.useState(initialState);

  return React.useMemo(() => [isOn, () => setIsOn((isOn) => !isOn)] as const, [isOn]);
}
