import React, { useState } from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import { Button } from '@/components/ui/button';
import AppendixModal from '@/components/presentation/AppendixModal';
import Placeholder from '@/components/presentation/Placeholder';
import { FileText, PlayCircle } from 'lucide-react';

type AppendixItem = {
  id: string;
  title: string;
  phase?: string;
  description: string;
  isInteractive?: boolean;
};

const appendixItems: Record<string, AppendixItem[]> = {
  'Phase 1 Materials': [
    { id: 'screener', title: 'Screener Survey', phase: 'Phase 1', description: 'Recruitment screener for creator community' },
    { id: 'activities', title: 'Community Activities (Weeks 1-6)', phase: 'Phase 1', description: 'Example activities from the online community' },
  ],
  'Phase 2 Materials': [
    { id: 'coding', title: 'Coding Sheet for Videos', phase: 'Phase 2', description: 'Template used to code video attributes' },
    { id: 'viz', title: 'Visualization (Differences in Means, Regressions)', phase: 'Phase 2', description: 'Statistical analysis visualizations' },
  ],
  'Phase 3 Materials': [
    { id: 'usability', title: 'Usability Testing Flow', phase: 'Phase 3', description: 'Experience the study yourself!', isInteractive: true },
  ],
  'Evidence of Impact': [
    { id: 'press-editor', title: 'Press Release: New Video Editor', description: 'Media coverage of the redesigned editor' },
    { id: 'press-edits', title: 'Press Release: Launch of Edits', description: 'Media coverage of Instagram Edits app launch' },
  ],
};

const Slide11Appendix: React.FC = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const handleOpenModal = (id: string) => {
    setOpenModal(id);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  const getItemById = (id: string): AppendixItem | undefined => {
    for (const items of Object.values(appendixItems)) {
      const found = items.find(item => item.id === id);
      if (found) return found;
    }
    return undefined;
  };

  const currentItem = openModal ? getItemById(openModal) : undefined;

  return (
    <SlideContainer slideNumber={10} header="Appendix">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Dummy Materials Overview
          </h2>
          <p className="text-muted-foreground">
            The following documents are 'dummy materials' that I've re-created from memory (with some assistance from Claude).
          </p>
        </div>

        {/* Appendix Sections */}
        <div className="space-y-6">
          {Object.entries(appendixItems).map(([section, items]) => (
            <div key={section}>
              <p className="mb-2 font-medium text-foreground">{section}</p>
              <div className="space-y-1">
                {items.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className="h-auto w-full justify-start gap-3 px-3 py-2 text-left"
                    onClick={() => handleOpenModal(item.id)}
                  >
                    {item.isInteractive ? (
                      <PlayCircle className="h-4 w-4 shrink-0 text-primary" />
                    ) : (
                      <FileText className="h-4 w-4 shrink-0 text-muted-foreground" />
                    )}
                    <span className="text-foreground">{item.title}</span>
                    {item.isInteractive && (
                      <span className="text-xs text-primary">(click to try it yourself!)</span>
                    )}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <AppendixModal
          isOpen={!!openModal}
          onClose={handleCloseModal}
          title={currentItem?.title || ''}
          phase={currentItem?.phase}
        >
          {currentItem?.isInteractive ? (
            <div className="space-y-4">
              <p className="text-muted-foreground">
                This interactive demo will walk you through the usability testing experience that participants went through.
              </p>
              <Placeholder
                type="video"
                description="Interactive usability testing simulation"
                aspectRatio="video"
              />
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-muted-foreground">{currentItem?.description}</p>
              <Placeholder
                type="document"
                description={`${currentItem?.title} content`}
                aspectRatio="video"
              />
            </div>
          )}
        </AppendixModal>
      </div>
    </SlideContainer>
  );
};

export default Slide11Appendix;
