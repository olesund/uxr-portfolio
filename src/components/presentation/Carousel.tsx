/**
 * Carousel - Progressive disclosure component for presentation mode
 *
 * Allows presenting multiple pages of content one at a time with navigation
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CarouselProps {
  children: React.ReactNode[];
  dark?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({ children, dark = false }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = React.Children.count(children);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <div className="relative">
      {/* Content Area */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {React.Children.toArray(children)[currentPage]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={prevPage}
          disabled={currentPage === 0}
          className={cn(
            'gap-1',
            dark ? 'text-[hsl(40,30%,95%)] hover:bg-[hsl(220,10%,28%)]' : ''
          )}
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        {/* Page Indicators */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={cn(
                'h-2 w-2 rounded-full transition-all',
                currentPage === index
                  ? dark
                    ? 'w-8 bg-[hsl(195,65%,55%)]'
                    : 'w-8 bg-primary'
                  : dark
                  ? 'bg-[hsl(40,30%,95%)]/30 hover:bg-[hsl(40,30%,95%)]/50'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              )}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className={cn(
            'gap-1',
            dark ? 'text-[hsl(40,30%,95%)] hover:bg-[hsl(220,10%,28%)]' : ''
          )}
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
