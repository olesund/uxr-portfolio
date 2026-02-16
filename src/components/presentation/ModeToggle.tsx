/**
 * ModeToggle - Toggle between Read and Present modes
 */

import React from 'react';
import { FileText, Presentation, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ModeToggleProps {
  mode: 'read' | 'present';
  onModeChange: (mode: 'read' | 'present') => void;
  onReset?: () => void;
  className?: string;
}

export const ModeToggle: React.FC<ModeToggleProps> = ({
  mode,
  onModeChange,
  onReset,
  className,
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2',
        className
      )}
    >
      <div className="inline-flex rounded-full bg-muted p-1">
        <Button
          variant={mode === 'read' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onModeChange('read')}
          className={cn(
            'gap-2 rounded-full',
            mode === 'read' ? '' : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <FileText className="h-4 w-4" />
          Read
        </Button>
        <Button
          variant={mode === 'present' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onModeChange('present')}
          className={cn(
            'gap-2 rounded-full',
            mode === 'present' ? '' : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <Presentation className="h-4 w-4" />
          Present
        </Button>
      </div>
      {mode === 'present' && onReset && (
        <Button
          variant="outline"
          size="sm"
          onClick={onReset}
          className="gap-2 rounded-full"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
      )}
    </div>
  );
};
