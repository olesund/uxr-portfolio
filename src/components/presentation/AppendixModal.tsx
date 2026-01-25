import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import Placeholder from './Placeholder';

interface AppendixModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  phase?: string;
  children?: React.ReactNode;
}

const AppendixModal: React.FC<AppendixModalProps> = ({
  isOpen,
  onClose,
  title,
  phase,
  children,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[85vh] max-w-3xl">
        <DialogHeader>
          {phase && (
            <p className="text-sm font-medium text-primary">{phase}</p>
          )}
          <DialogTitle className="text-xl">{title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Reconstructed example material for demonstration purposes
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-4 py-4">
            {children || (
              <Placeholder
                type="document"
                description="Content for this appendix item will be added here"
                aspectRatio="video"
              />
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default AppendixModal;
