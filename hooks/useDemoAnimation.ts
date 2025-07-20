import { useState, useEffect } from 'react';

export const useDemoAnimation = (totalSteps: number, interval: number = 3000) => {
  const [demoStep, setDemoStep] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDemoStep((prev) => (prev + 1) % totalSteps);
    }, interval);
    return () => clearInterval(intervalId);
  }, [totalSteps, interval]);

  return demoStep;
};