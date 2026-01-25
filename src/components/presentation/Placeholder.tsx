import React from 'react';
import { cn } from '@/lib/utils';
import { Image, BarChart3, Video, FileText } from 'lucide-react';

type PlaceholderType = 'image' | 'chart' | 'video' | 'document';

interface PlaceholderProps {
  type: PlaceholderType;
  description: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'wide' | 'tall';
}

const iconMap = {
  image: Image,
  chart: BarChart3,
  video: Video,
  document: FileText,
};

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  wide: 'aspect-[21/9]',
  tall: 'aspect-[3/4]',
};

const Placeholder: React.FC<PlaceholderProps> = ({
  type,
  description,
  className,
  aspectRatio = 'video',
}) => {
  const Icon = iconMap[type];

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/50 p-6 text-center',
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      <Icon className="mb-3 h-10 w-10 text-muted-foreground/60" />
      <p className="text-sm font-medium text-muted-foreground">
        [VISUAL PLACEHOLDER]
      </p>
      <p className="mt-1 text-xs text-muted-foreground/80">{description}</p>
    </div>
  );
};

export default Placeholder;
