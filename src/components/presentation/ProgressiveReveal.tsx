/**
 * ProgressiveReveal - Component for revealing items one at a time
 *
 * Like PowerPoint animations, allows clicking through items to reveal them sequentially
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProgressiveRevealProps {
  children: React.ReactNode[];
  dark?: boolean;
  startVisible?: number; // How many items are visible initially (default: 1)
}

export const ProgressiveReveal: React.FC<ProgressiveRevealProps> = ({
  children,
  dark = false,
  startVisible = 1,
}) => {
  const [visibleCount, setVisibleCount] = useState(startVisible);
  const totalItems = React.Children.count(children);
  const allVisible = visibleCount >= totalItems;

  const showNext = () => {
    if (visibleCount < totalItems) {
      setVisibleCount(visibleCount + 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Rendered Items */}
      <div className="space-y-6">
        {React.Children.toArray(children).slice(0, visibleCount).map((child, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {child}
          </motion.div>
        ))}
      </div>

      {/* Reveal Button */}
      {!allVisible && (
        <div className="flex justify-center pt-4">
          <Button
            onClick={showNext}
            variant="outline"
            size="lg"
            className={cn(
              'gap-2',
              dark ? 'text-[hsl(40,30%,95%)] hover:bg-[hsl(220,10%,28%)] border-[hsl(40,30%,95%)]/20' : ''
            )}
          >
            Show More
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};
