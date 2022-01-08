import * as React from 'react';

export function ScrollBlock() {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return null;
}
