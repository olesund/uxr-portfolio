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
import { Check, ArrowRight, RotateCcw } from 'lucide-react';
import basicVideoExample from '@/assets/basic-video-example.mov';
import advancedVideoExample from '@/assets/advanced-video-example.mov';

interface TesterExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'task' | 'questions' | 'results';

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
  const [step, setStep] = useState<Step>('task');
  const [completionAnswer, setCompletionAnswer] = useState<string>('');
  const [easeAnswer, setEaseAnswer] = useState<string>('');

  const { assignedApp, assignedVideo, timeOnTask } = useMemo(() => {
    const app = apps[Math.floor(Math.random() * apps.length)];
    const video = Math.random() > 0.5 ? 'basic' : 'advanced';
    const minutes = Math.floor(Math.random() * 4) + 1;
    const seconds = Math.floor(Math.random() * 60);
    const time = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    return { assignedApp: app, assignedVideo: video, timeOnTask: time };
  }, [isOpen]);

  const handleClose = () => {
    setStep('task');
    setCompletionAnswer('');
    setEaseAnswer('');
    onClose();
  };

  const handleRestart = () => {
    setStep('task');
    setCompletionAnswer('');
    setEaseAnswer('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Tester Experience Simulation</DialogTitle>
          <DialogDescription>
            Experience what participants went through in our usability study
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          {step === 'task' && (
            <div className="space-y-6">
              <div className="rounded-2xl bg-muted/60 p-5">
                <p className="mb-1 text-sm text-muted-foreground">You have been assigned:</p>
                <p className="text-2xl font-bold text-foreground">{assignedApp.name}</p>
              </div>

              <div>
                <h3 className="mb-3 font-semibold text-foreground">Your Task</h3>
                <p className="mb-4 text-muted-foreground">
                  Using {assignedApp.name}, recreate the following reference video as closely as possible:
                </p>
                <div className="rounded-xl overflow-hidden bg-muted">
                  <video 
                    src={assignedVideo === 'basic' ? basicVideoExample : advancedVideoExample} 
                    controls 
                    className="w-full h-auto max-h-[280px] object-contain" 
                    preload="metadata" 
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground italic">
                  In the real study, participants would open {assignedApp.name} and tap "Start task" when they were ready to edit. 
                  For this simulation, imagine you've completed the task.
                </p>
              </div>

              <div className="flex justify-center">
                <Button onClick={() => setStep('questions')} className="gap-2">
                  I've Finished the Task <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 'questions' && (
            <div className="space-y-6">
              <Card>
                <CardContent className="p-5">
                  <h3 className="mb-4 font-semibold text-foreground">Question 1: Task Completion</h3>
                  <p className="mb-4 text-muted-foreground">
                    Were you able to complete the video editing task?
                  </p>
                  <RadioGroup value={completionAnswer} onValueChange={setCompletionAnswer}>
                    <div className="space-y-2">
                      {[
                        { value: 'yes', label: 'Yes, I completed the task' },
                        { value: 'partial', label: 'Partially completed' },
                        { value: 'no', label: 'No, I could not complete the task' },
                      ].map((option) => (
                        <div 
                          key={option.value}
                          className="flex items-center space-x-3 rounded-lg border border-border p-3 hover:bg-muted/50"
                        >
                          <RadioGroupItem value={option.value} id={option.value} />
                          <Label htmlFor={option.value} className="flex-1 cursor-pointer">{option.label}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <h3 className="mb-4 font-semibold text-foreground">Question 2: Ease of Use</h3>
                  <p className="mb-4 text-muted-foreground">
                    How easy or difficult was it to complete the task using {assignedApp.name}?
                  </p>
                  <RadioGroup value={easeAnswer} onValueChange={setEaseAnswer}>
                    <div className="space-y-2">
                      {[
                        { value: '5', label: '5 — Very Easy' },
                        { value: '4', label: '4 — Easy' },
                        { value: '3', label: '3 — Neither Easy nor Difficult' },
                        { value: '2', label: '2 — Difficult' },
                        { value: '1', label: '1 — Very Difficult' },
                      ].map((option) => (
                        <div 
                          key={option.value} 
                          className="flex items-center space-x-3 rounded-lg border border-border p-3 hover:bg-muted/50"
                        >
                          <RadioGroupItem value={option.value} id={`ease-${option.value}`} />
                          <Label htmlFor={`ease-${option.value}`} className="flex-1 cursor-pointer">
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <Button 
                  onClick={() => setStep('results')} 
                  disabled={!completionAnswer || !easeAnswer}
                  className="gap-2"
                >
                  Submit <Check className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 'results' && (
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
                <p className="mb-2 text-sm font-medium text-foreground">Example response</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• App: {assignedApp.name} ({assignedApp.type === 'step-by-step' ? 'Step-by-step' : 'Stacked timeline'})</li>
                  <li>• Video type: {assignedVideo === 'basic' ? 'Basic' : 'Advanced'}</li>
                  <li>• Completed: {completionAnswer === 'yes' ? 'Yes' : completionAnswer === 'partial' ? 'Partially' : 'No'}</li>
                  <li>• Ease rating: {easeAnswer}/5</li>
                  <li>• Time on task: {timeOnTask}</li>
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
