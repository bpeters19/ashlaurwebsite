"use client";

import React, { useState, useEffect, useRef } from "react";

const StepperSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const steps = [
    { number: "01", title: "Discover" },
    { number: "02", title: "Plan" },
    { number: "03", title: "Build" },
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      const duration = video.duration;
      if (duration > 0) {
        const newProgress = currentTime / duration;
        setProgress(newProgress);
        const newStep = Math.min(Math.floor(newProgress * 3), 2);
        setCurrentStep(newStep);
      }
    };

    const handleEnded = () => {
      setCurrentStep(0);
      setProgress(0);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    video.play().catch(console.error);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">Our Process</h2>
          <p className="text-lg text-muted">How we bring your vision to life</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-4 md:space-x-8 mb-8">
            {steps.map((step, index) => {
              let lineWidth = '0%';
              if (index < currentStep) {
                lineWidth = '100%';
              } else if (index === currentStep) {
                lineWidth = ((progress - index / 3) * 300) + '%';
              }
              const circleClass = index <= currentStep ? "bg-primary text-white scale-110" : "bg-blue-100 text-muted";
              const titleClass = index <= currentStep ? "font-semibold text-primary" : "text-muted";
              return (
                <React.Fragment key={step.number}>
                  <div className="flex flex-col items-center">
                    <div
                      className={"w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 " + circleClass}
                    >
                      {step.number}
                    </div>
                    <p
                      className={"mt-2 text-sm text-center transition-colors duration-500 " + titleClass}
                    >
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 h-1 bg-blue-100 min-w-[20px] md:min-w-[40px] relative overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-300 ease-out"
                        style={{ width: lineWidth }}
                      ></div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
          <div className="w-full max-w-md h-2 bg-blue-100 rounded-full overflow-hidden mb-8">
            <div
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ width: progress * 100 + '%' }}
            ></div>
          </div>
          <div className="w-full max-w-2xl">
            <video
              ref={videoRef}
              src="/video.mp4.webm"
              controls
              muted
              loop
              playsInline
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepperSection;