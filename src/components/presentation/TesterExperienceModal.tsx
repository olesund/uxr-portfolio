import React, { useState, useMemo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Download, Video, ArrowRight, RotateCcw } from 'lucide-react';
import basicVideoExample from '@/assets/basic-video-example.mov';
import advancedVideoExample from '@/assets/advanced-video-example.mov';

interface TesterExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'intro' | 'assignment' | 'task' | 'completion' | 'ease' | 'done';

const apps = [
  { name: 'Instagram Reels', type: 'step-by-step' },
  { name: 'TikTok', type: 'step-by-step' },
  { name: 'CapCut', type: 'stacked' },
  { name: 'InShot', type: 'stacked' },
];

const TesterExperienceModal: React.FC<TesterExperienceModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<Step>('intro');
  const [completionAnswer, setCompletionAnswer] = useState<string>('');
  const [easeAnswer, setEaseAnswer] = useState<string>('');

  const { assignedApp, assignedVideo } = useMemo(() => {
    const app = apps[Math.floor(Math.random() * apps.length)];
    const video = Math.random() > 0.5 ? 'basic' : 'advanced';
    return { assignedApp: app, assignedVideo: video };
  }, [isOpen]);

  const handleClose = () => {
    setStep('intro');
    setCompletionAnswer('');
    setEaseAnswer('');
    onClose();
  };

  const handleRestart = () => {
    setStep('intro');
    setCompletionAnswer('');
    setEaseAnswer('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Tester Experience Simulation</DialogTitle>
          <DialogDescription>
            Experience what participants went through in our usability study
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          {step === 'intro' && (
            <div className="space-y-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Video className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Welcome to the Study</h3>
                <p className="text-muted-foreground">
                  In this study, you will be randomly assigned an app and asked to recreate a reference video. 
                  Afterwards, you'll answer a few questions about your experience.
                </p>
              </div>
              <Button onClick={() => setStep('assignment')} className="gap-2">
                Begin <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {step === 'assignment' && (
            <div className="space-y-6">
              <div className="rounded-2xl bg-muted/60 p-6 text-center">
                <p className="mb-4 text-sm text-muted-foreground">Your random assignment:</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">App</p>
                    <p className="text-2xl font-bold text-foreground">{assignedApp.name}</p>
                    <p className="text-xs text-muted-foreground">
                      ({assignedApp.type === 'step-by-step' ? 'Step-by-step flow' : 'Stacked timeline'} editor)
                    </p>
                  </div>
                  <div className="h-px bg-border" />
                  <div>
                    <p className="text-sm text-muted-foreground">Video Type</p>
                    <p className="text-2xl font-bold text-foreground capitalize">{assignedVideo}</p>
                    <p className="text-xs text-muted-foreground">
                      {assignedVideo === 'basic' 
                        ? 'Single clip + music + one text element' 
                        : 'Three clips synced to music + three text elements'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Button onClick={() => setStep('task')} className="gap-2">
                  <Download className="h-4 w-4" /> Download App & Continue
                </Button>
              </div>
            </div>
          )}

          {step === 'task' && (
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold text-foreground">Your Task</h3>
                  <p className="mb-4 text-muted-foreground">
                    Using <strong>{assignedApp.name}</strong>, recreate the following reference video as closely as possible:
                  </p>
                  <div className="rounded-xl overflow-hidden bg-muted">
                    <video 
                      src={assignedVideo === 'basic' ? basicVideoExample : advancedVideoExample} 
                      controls 
                      className="w-full h-auto max-h-[240px] object-contain" 
                      preload="metadata" 
                    />
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground italic">
                    In the real study, participants would now open {assignedApp.name} and attempt to recreate this video. 
                    For this simulation, imagine you've completed the task.
                  </p>
                </CardContent>
              </Card>
              <div className="flex justify-center">
                <Button onClick={() => setStep('completion')} className="gap-2">
                  I've Finished the Task <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 'completion' && (
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold text-foreground">Question 1: Task Completion</h3>
                  <p className="mb-6 text-muted-foreground">
                    Were you able to complete the video editing task?
                  </p>
                  <RadioGroup value={completionAnswer} onValueChange={setCompletionAnswer}>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 rounded-lg border border-border p-3 hover:bg-muted/50">
                        <RadioGroupItem value="yes" id="yes" />
                        <Label htmlFor="yes" className="flex-1 cursor-pointer">Yes, I completed the task</Label>
                      </div>
                      <div className="flex items-center space-x-3 rounded-lg border border-border p-3 hover:bg-muted/50">
                        <RadioGroupItem value="partial" id="partial" />
                        <Label htmlFor="partial" className="flex-1 cursor-pointer">Partially completed</Label>
                      </div>
                      <div className="flex items-center space-x-3 rounded-lg border border-border p-3 hover:bg-muted/50">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no" className="flex-1 cursor-pointer">No, I could not complete the task</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
              <div className="flex justify-center">
                <Button 
                  onClick={() => setStep('ease')} 
                  disabled={!completionAnswer}
                  className="gap-2"
                >
                  Continue <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 'ease' && (
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold text-foreground">Question 2: Ease of Use</h3>
                  <p className="mb-6 text-muted-foreground">
                    How easy or difficult was it to complete the video editing task using {assignedApp.name}?
                  </p>
                  <RadioGroup value={easeAnswer} onValueChange={setEaseAnswer}>
                    <div className="space-y-3">
                      {[
                        { value: '5', label: 'Very Easy' },
                        { value: '4', label: 'Easy' },
                        { value: '3', label: 'Neither Easy nor Difficult' },
                        { value: '2', label: 'Difficult' },
                        { value: '1', label: 'Very Difficult' },
                      ].map((option) => (
                        <div 
                          key={option.value} 
                          className="flex items-center space-x-3 rounded-lg border border-border p-3 hover:bg-muted/50"
                        >
                          <RadioGroupItem value={option.value} id={`ease-${option.value}`} />
                          <Label htmlFor={`ease-${option.value}`} className="flex-1 cursor-pointer">
                            {option.value} — {option.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
              <div className="flex justify-center">
                <Button 
                  onClick={() => setStep('done')} 
                  disabled={!easeAnswer}
                  className="gap-2"
                >
                  Submit <Check className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 'done' && (
            <div className="space-y-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                <Check className="h-8 w-8 text-green-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Thank You!</h3>
                <p className="text-muted-foreground">
                  This completes the tester experience. In the real study, we collected these responses 
                  from 200 participants across all four apps and both video types.
                </p>
              </div>
              <div className="rounded-2xl bg-muted/60 p-4 text-left">
                <p className="mb-2 text-sm font-medium text-foreground">Your responses:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• App: {assignedApp.name}</li>
                  <li>• Video: {assignedVideo}</li>
                  <li>• Completed: {completionAnswer === 'yes' ? 'Yes' : completionAnswer === 'partial' ? 'Partially' : 'No'}</li>
                  <li>• Ease rating: {easeAnswer}/5</li>
                </ul>
              </div>
              <div className="flex justify-center gap-3">
                <Button variant="outline" onClick={handleRestart} className="gap-2">
                  <RotateCcw className="h-4 w-4" /> Try Again
                </Button>
                <Button onClick={handleClose}>Close</Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TesterExperienceModal;
