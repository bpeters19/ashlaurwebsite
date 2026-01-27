"use client";

import React from 'react';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle, Home, Building2, Wrench, Zap } from "lucide-react";

interface Option {
  value: string;
  label: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description?: string;
}

const InteractiveServiceSelector = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});

  const questions: { id: string; question: string; options: Option[] }[] = [
    {
      id: "propertyType",
      question: "What type of property needs work?",
      options: [
        { value: "residential", label: "Residential Home", icon: Home },
        { value: "commercial", label: "Commercial Building", icon: Building2 },
        { value: "renovation", label: "Renovation Project", icon: Wrench },
        { value: "new-construction", label: "New Construction", icon: Zap },
      ],
    },
    {
      id: "scope",
      question: "What&apos;s the scope of your project?",
      options: [
        { value: "small", label: "Small Updates", description: "Kitchen, bathroom, or room renovations" },
        { value: "medium", label: "Major Renovation", description: "Multiple rooms or whole floor" },
        { value: "large", label: "Full Property", description: "Complete home or building renovation" },
        { value: "custom", label: "Custom Build", description: "New construction or major additions" },
      ],
    },
    {
      id: "timeline",
      question: "When do you need this completed?",
      options: [
        { value: "asap", label: "ASAP", description: "Within 1-2 months" },
        { value: "3-6months", label: "3-6 Months", description: "Flexible timeline" },
        { value: "6-12months", label: "6-12 Months", description: "Planning ahead" },
        { value: "planning", label: "Just Planning", description: "Researching options" },
      ],
    },
  ];

  const handleSelection = (questionId: string, value: string) => {
    setSelections(prev => ({ ...prev, [questionId]: value }));
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    }
  };

  const resetSelector = () => {
    setCurrentStep(0);
    setSelections({});
  };

  const getRecommendation = () => {
    const { propertyType, scope } = selections;

    if (propertyType === "residential" && scope === "small") {
      return {
        title: "Residential Renovation Package",
        services: ["Design Consultation", "Permits & Planning", "Quality Materials", "Professional Installation"],
        estimatedTime: "4-8 weeks",
        contact: "Let&apos;s discuss your vision",
      };
    }

    if (propertyType === "commercial" && scope === "large") {
      return {
        title: "Commercial Construction Package",
        services: ["Project Management", "Licensed Contractors", "Quality Assurance", "Timeline Guarantee"],
        estimatedTime: "3-6 months",
        contact: "Schedule a consultation",
      };
    }

    return {
      title: "Custom Construction Solution",
      services: ["Personalized Assessment", "Detailed Proposal", "Expert Team", "Full Project Support"],
      estimatedTime: "Based on your needs",
      contact: "Get your custom quote",
    };
  };

  return (
    <section className="py-20 bg-gradient-to-br from-surface to-surface/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Find Your Perfect Solution</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Answer a few questions and we&apos;ll recommend the ideal construction package for your project.
          </p>
        </motion.div>

        <div className="bg-card rounded-2xl shadow-2xl p-8 md:p-12">
          <AnimatePresence mode="wait">
            {currentStep < questions.length ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-muted mb-2">
                    <span>Step {currentStep + 1} of {questions.length}</span>
                    <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      className="bg-primary h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-2xl font-bold text-secondary mb-8 text-center">
                  {questions[currentStep].question}
                </h3>

                {/* Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions[currentStep].options.map((option, index) => {
                    const Icon = option.icon || CheckCircle;
                    const isSelected = selections[questions[currentStep].id] === option.value;

                    return (
                      <motion.button
                        key={option.value}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSelection(questions[currentStep].id, option.value)}
                        className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                          isSelected
                            ? "border-primary bg-primary/10 shadow-lg"
                            : "border-muted hover:border-primary/50 hover:shadow-md"
                        }`}
                      >
                        <div className="flex items-start space-x-4">
                          <Icon className={`w-8 h-8 mt-1 ${isSelected ? "text-primary" : "text-muted"}`} />
                          <div>
                            <h4 className="font-semibold text-secondary mb-1">{option.label}</h4>
                            {option.description && (
                              <p className="text-sm text-muted">{option.description}</p>
                            )}
                          </div>
                          {isSelected && (
                            <CheckCircle className="w-6 h-6 text-primary ml-auto mt-1" />
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="recommendation"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mb-8">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-secondary mb-4">Perfect Match Found!</h3>
                </div>

                {(() => {
                  const rec = getRecommendation();
                  return (
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 mb-8">
                      <h4 className="text-2xl font-bold text-secondary mb-4">{rec.title}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h5 className="font-semibold text-secondary mb-2">Included Services:</h5>
                          <ul className="text-left space-y-1">
                            {rec.services.map((service, index) => (
                              <li key={index} className="flex items-center text-muted">
                                <ChevronRight className="w-4 h-4 text-primary mr-2" />
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-secondary mb-2">Estimated Timeline:</h5>
                          <p className="text-muted">{rec.estimatedTime}</p>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {rec.contact}
                      </motion.button>
                    </div>
                  );
                })()}

                <button
                  onClick={resetSelector}
                  className="text-muted hover:text-secondary transition-colors duration-300"
                >
                  Start Over
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default InteractiveServiceSelector;