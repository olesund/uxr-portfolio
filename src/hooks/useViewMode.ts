import { useSearchParams } from 'react-router-dom';
import { useCallback, useMemo } from 'react';

export type ViewMode = 'read' | 'present';

export function useViewMode() {
  const [searchParams, setSearchParams] = useSearchParams();

  const mode: ViewMode = useMemo(() => {
    return searchParams.get('mode') === 'present' ? 'present' : 'read';
  }, [searchParams]);

  const setMode = useCallback((newMode: ViewMode) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if (newMode === 'present') {
        params.set('mode', 'present');
      } else {
        params.delete('mode');
      }
      return params;
    }, { replace: true });
  }, [setSearchParams]);

  const isPresent = mode === 'present';
  const isRead = mode === 'read';

  return { mode, setMode, isPresent, isRead };
}
