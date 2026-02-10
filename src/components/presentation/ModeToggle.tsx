import React from 'react';
import { BookOpen, Presentation } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ViewMode } from '@/hooks/useViewMode';

interface ModeToggleProps {
  mode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

const ModeToggle: React.FC<ModeToggleProps> = ({ mode, onModeChange }) => {
  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-1 rounded-full bg-background/95 p-1 shadow-lg backdrop-blur-sm border border-border">
      <button
        onClick={() => onModeChange('read')}
        className={cn(
          'flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all',
          mode === 'read'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )}
        aria-label="Switch to Read mode"
      >
        <BookOpen className="h-4 w-4" />
        <span className="hidden sm:inline">Read</span>
      </button>
      <button
        onClick={() => onModeChange('present')}
        className={cn(
          'flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all',
          mode === 'present'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )}
        aria-label="Switch to Present mode"
      >
        <Presentation className="h-4 w-4" />
        <span className="hidden sm:inline">Present</span>
      </button>
    </div>
  );
};

export default ModeToggle;
