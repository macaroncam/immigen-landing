import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { 
  Lock, 
  CheckCircle, 
  ArrowLeft, 
  ArrowRight, 
  Activity, 
  Send,
  Upload,
  FileText,
  X,
  AlertCircle,
  Cloud,
  Shield
} from 'lucide-react';
import { FloatingParticles, MatrixRain } from '../shared/BackgroundEffects';
import { GlitchText, TerminalWindow } from '../shared/UIComponents';
import { Navigation } from '../shared/Navigation';
import { formSteps, earlyAccessBenefits } from '../../data/content';
import { earlyAccessService, type EarlyAccessSubmission } from '../../services/earlyAccessService';

interface EarlyAccessPageProps {
  onBackToLanding: () => void;
  onNavigatePricing: () => void;
  onNavigateAbout: () => void;
  onNavigateCustomers: () => void;
  onNavigateProduct: () => void;
  onNavigateContact: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  countryOfCitizenship: string;
  visaType: string;
  timeline: string;
  cvFile: File | null;
}

export const EarlyAccessPage = ({ 
  onBackToLanding, 
  onNavigatePricing, 
  onNavigateAbout, 
  onNavigateCustomers, 
  onNavigateProduct, 
  onNavigateContact 
}: EarlyAccessPageProps) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    countryOfCitizenship: '',
    visaType: '',
    timeline: '',
    cvFile: null
  });
  
  const [formStep, setFormStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
  const [showValidation, setShowValidation] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string | File | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear field error when user starts typing
    if (fieldErrors[field]) {
      setFieldErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    
    if (file) {
      const validation = earlyAccessService.validateFile(file);
      if (!validation.valid) {
        setFieldErrors(prev => ({
          ...prev,
          cvFile: validation.error!
        }));
        return;
      }
    }
    
    handleInputChange('cvFile', file);
  };

  const removeFile = () => {
    handleInputChange('cvFile', null);
  };

  const validateCurrentStep = (): { [key: string]: string } => {
    const errors: { [key: string]: string } = {};
    
    switch (formStep) {
      case 0:
        if (!formData.firstName.trim()) errors.firstName = 'Please fill out your first name';
        if (!formData.lastName.trim()) errors.lastName = 'Please fill out your last name';
        if (!formData.email.trim()) errors.email = 'Please fill out your email';
        if (!formData.countryOfCitizenship.trim()) errors.countryOfCitizenship = 'Please fill out your country of citizenship';
        
        // Basic email validation
        if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = 'Please enter a valid email address';
        }
        break;
        
      case 1:
        if (!formData.visaType) errors.visaType = 'Please select a visa type';
        if (!formData.timeline) errors.timeline = 'Please select a timeline';
        break;
        
      case 2:
        if (!formData.cvFile) {
          errors.cvFile = 'Please upload your CV/Resume';
        } else {
          const validation = earlyAccessService.validateFile(formData.cvFile);
          if (!validation.valid) {
            errors.cvFile = validation.error!;
          }
        }
        break;
    }
    
    return errors;
  };

  const checkEmailDuplicate = async (email: string): Promise<boolean> => {
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      return false;
    }

    setIsCheckingEmail(true);
    try {
      const exists = await earlyAccessService.checkEmailExists(email);
      if (exists) {
        setFieldErrors(prev => ({
          ...prev,
          email: 'This email has already been submitted. Please use a different email address.'
        }));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error checking email:', error);
      return false;
    } finally {
      setIsCheckingEmail(false);
    }
  };

  const handleNext = async () => {
    setSubmitError('');
    const errors = validateCurrentStep();
    
    // Check for email duplicates on step 0
    if (formStep === 0 && formData.email.trim() && !errors.email) {
      const isDuplicate = await checkEmailDuplicate(formData.email);
      if (isDuplicate) {
        setShowValidation(true);
        return;
      }
    }
    
    setFieldErrors(errors);
    setShowValidation(true);
    
    if (Object.keys(errors).length === 0) {
      if (formStep < 2) {
        setFormStep(formStep + 1);
        setShowValidation(false);
        setFieldErrors({});
      } else {
        await handleSubmit();
      }
    }
  };

  const handleStepNavigation = (targetStep: number) => {
    if (targetStep <= formStep) {
      setFormStep(targetStep);
      setShowValidation(false);
      setFieldErrors({});
      setSubmitError('');
    }
  };

  const handleSubmit = async () => {
    if (!formData.cvFile) {
      setSubmitError('Please upload your CV before submitting.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const submissionData: EarlyAccessSubmission = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        countryOfCitizenship: formData.countryOfCitizenship,
        visaType: formData.visaType,
        timeline: formData.timeline,
        cvFile: formData.cvFile
      };

      const result = await earlyAccessService.submitEarlyAccess(submissionData);

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(result.error || 'Failed to submit your application. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentStepData = formSteps[formStep];

  const renderFormStep = () => {
    switch (formStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-lime-400 font-mono">
                  First Name <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className={`bg-black/50 text-white font-mono ${
                    showValidation && fieldErrors.firstName 
                      ? 'border-red-400/70' 
                      : 'border-lime-400/30'
                  }`}
                  placeholder="Enter first name"
                />
                {showValidation && fieldErrors.firstName && (
                  <>
                    <div className="h-px bg-red-400 w-full"></div>
                    <p className="text-red-400 text-xs font-mono mt-1">{fieldErrors.firstName}</p>
                  </>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-lime-400 font-mono">
                  Last Name <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className={`bg-black/50 text-white font-mono ${
                    showValidation && fieldErrors.lastName 
                      ? 'border-red-400/70' 
                      : 'border-lime-400/30'
                  }`}
                  placeholder="Enter last name"
                />
                {showValidation && fieldErrors.lastName && (
                  <>
                    <div className="h-px bg-red-400 w-full"></div>
                    <p className="text-red-400 text-xs font-mono mt-1">{fieldErrors.lastName}</p>
                  </>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-lime-400 font-mono">
                Email Address <span className="text-red-400">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`bg-black/50 text-white font-mono ${
                    showValidation && fieldErrors.email
                      ? 'border-red-400/70' 
                      : 'border-lime-400/30'
                  }`}
                  placeholder="your.email@domain.com"
                />
                {isCheckingEmail && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Activity className="w-4 h-4 text-lime-400 animate-spin" />
                  </div>
                )}
              </div>
              {showValidation && fieldErrors.email && (
                <>
                  <div className="h-px bg-red-400 w-full"></div>
                  <p className="text-red-400 text-xs font-mono mt-1">{fieldErrors.email}</p>
                </>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="citizenship" className="text-lime-400 font-mono">
                Country of Citizenship <span className="text-red-400">*</span>
              </Label>
              <Input
                id="citizenship"
                value={formData.countryOfCitizenship}
                onChange={(e) => handleInputChange('countryOfCitizenship', e.target.value)}
                className={`bg-black/50 text-white font-mono ${
                  showValidation && fieldErrors.countryOfCitizenship 
                    ? 'border-red-400/70' 
                    : 'border-lime-400/30'
                }`}
                placeholder="e.g., India, China, Brazil"
              />
              {showValidation && fieldErrors.countryOfCitizenship && (
                <>
                  <div className="h-px bg-red-400 w-full"></div>
                  <p className="text-red-400 text-xs font-mono mt-1">{fieldErrors.countryOfCitizenship}</p>
                </>
              )}
            </div>
          </div>
        );
        
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="text-lime-400 font-mono">
                Visa Type Interest <span className="text-red-400">*</span>
              </Label>
              <Select onValueChange={(value) => handleInputChange('visaType', value)}>
                <SelectTrigger className={`bg-black/50 text-white font-mono ${
                  showValidation && fieldErrors.visaType 
                    ? 'border-red-400/70' 
                    : 'border-lime-400/30'
                }`}>
                  <SelectValue placeholder="Select visa type" />
                </SelectTrigger>
                <SelectContent className="bg-black border-lime-400/30">
                  <SelectItem value="eb1a">EB-1A</SelectItem>
                  <SelectItem value="eb2-niw">EB-2 NIW</SelectItem>
                  <SelectItem value="help-decide">Help me decide</SelectItem>
                </SelectContent>
              </Select>
              {showValidation && fieldErrors.visaType && (
                <>
                  <div className="h-px bg-red-400 w-full"></div>
                  <p className="text-red-400 text-xs font-mono mt-1">{fieldErrors.visaType}</p>
                </>
              )}
            </div>
            <div className="space-y-2">
              <Label className="text-lime-400 font-mono">
                Timeline <span className="text-red-400">*</span>
              </Label>
              <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                <SelectTrigger className={`bg-black/50 text-white font-mono ${
                  showValidation && fieldErrors.timeline 
                    ? 'border-red-400/70' 
                    : 'border-lime-400/30'
                }`}>
                  <SelectValue placeholder="When do you plan to apply?" />
                </SelectTrigger>
                <SelectContent className="bg-black border-lime-400/30">
                  <SelectItem value="immediate">Immediately (within 1 month)</SelectItem>
                  <SelectItem value="soon">Soon (1-3 months)</SelectItem>
                  <SelectItem value="planning">Planning (3-6 months)</SelectItem>
                  <SelectItem value="exploring">Just exploring (6+ months)</SelectItem>
                </SelectContent>
              </Select>
              {showValidation && fieldErrors.timeline && (
                <>
                  <div className="h-px bg-red-400 w-full"></div>
                  <p className="text-red-400 text-xs font-mono mt-1">{fieldErrors.timeline}</p>
                </>
              )}
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <Label className="text-lime-400 font-mono">Upload Your CV/Resume</Label>
              
              {!formData.cvFile ? (
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    id="cv-upload"
                  />
                  <div className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors bg-black/20 ${
                    showValidation && fieldErrors.cvFile 
                      ? 'border-red-400/50 hover:border-red-400/70' 
                      : 'border-lime-400/30 hover:border-lime-400/50'
                  }`}>
                    <Upload className="w-12 h-12 text-lime-400 mx-auto mb-4" />
                    <p className="text-lime-400 font-mono font-semibold mb-2">
                      Drop your CV here or click to browse
                    </p>
                    <p className="text-gray-400 font-mono text-sm">
                      Supports PDF, DOC, DOCX (max 10MB)
                    </p>
                    <div className="mt-4 bg-lime-400/10 rounded-lg p-3 border border-lime-400/20">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Cloud className="w-4 h-4 text-lime-400" />
                        <Shield className="w-4 h-4 text-lime-400" />
                      </div>
                      <p className="text-lime-400 font-mono text-xs">
                        <span className="text-gray-500">&gt;</span> Securely stored in Google Drive & analyzed by our AI
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-lime-400/10 border border-lime-400/30 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-8 h-8 text-lime-400" />
                      <div>
                        <p className="text-white font-mono font-semibold">
                          {formData.cvFile.name}
                        </p>
                        <p className="text-gray-400 font-mono text-sm">
                          {earlyAccessService.formatFileSize(formData.cvFile.size)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={removeFile}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="mt-3 bg-lime-400/20 rounded-lg p-3 border border-lime-400/30">
                    <div className="flex items-center space-x-2 mb-1">
                      <Cloud className="w-3 h-3 text-lime-400" />
                      <p className="text-lime-400 font-mono text-xs">
                        <span className="text-gray-500">&gt;</span> Ready for secure upload to Google Drive
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {showValidation && fieldErrors.cvFile && (
                <>
                  <div className="h-px bg-red-400 w-full"></div>
                  <p className="text-red-400 text-xs font-mono mt-1">{fieldErrors.cvFile}</p>
                </>
              )}
              
              <div className="text-center">
                <p className="text-gray-400 font-mono text-sm">
                  Your CV will be securely processed and stored in Google Drive
                </p>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-lime-400 flex items-center justify-center p-4">
        <FloatingParticles />
        <MatrixRain />
        
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className="w-20 h-20 mx-auto bg-lime-400/20 rounded-full flex items-center justify-center mb-8">
              <CheckCircle className="w-10 h-10 text-lime-400" />
            </div>
            
            <GlitchText>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
                Access Request Submitted
              </h1>
            </GlitchText>
            
            <TerminalWindow title="submission_confirmed" className="max-w-lg mx-auto">
              <div className="space-y-2">
                <div className="text-lime-400">
                  <span className="text-gray-500">system@immigen:~$</span> process_application --user={formData.email}
                </div>
                <div className="text-green-400">✓ Application received</div>
                <div className="text-green-400">✓ Uploaded to Google Drive</div>
                <div className="text-green-400">✓ Added to priority queue</div>
                <div className="text-green-400">✓ Confirmation email sent</div>
                <div className="text-lime-400">Status: Processing early access request</div>
              </div>
            </TerminalWindow>
            
            <p className="text-xl text-gray-300 leading-relaxed font-mono">
              Welcome to the neural network, <span className="text-lime-400">{formData.firstName}</span>.
              <br />
              You'll receive early access within 48 hours.
            </p>
            
            <Button 
              onClick={onBackToLanding}
              className="bg-lime-400 text-black hover:bg-lime-300 font-mono font-bold"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Landing
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-lime-400">
      <FloatingParticles />
      <MatrixRain />
      
      <Navigation 
        onBackToHome={onBackToLanding} 
        onNavigatePricing={onNavigatePricing}
        onNavigateAbout={onNavigateAbout}
        onNavigateCustomers={onNavigateCustomers}
        onGetEarlyAccess={() => {}} // Current page
        onNavigateProduct={onNavigateProduct}
        onNavigateContact={onNavigateContact}
        showBackButton={false}
        isLandingPage={false}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge className="mb-6 bg-lime-400/20 text-lime-400 border-lime-400/50 font-mono text-sm px-4 py-2">
            <Lock className="w-4 h-4 mr-2" />
            EARLY ACCESS REQUEST
          </Badge>
          
          <GlitchText>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
              Get priority access.
            </h1>
          </GlitchText>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-mono">
            Join self-starters & global firms in pioneering the immigration revolution with Immigen.
            <br />
            <span className="text-lime-400">Limited spots available.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <TerminalWindow title="early_access_protocol">
              <div className="mb-3 text-xs text-gray-400 font-mono">
                <span className="text-lime-400">&gt;</span> Click completed steps to edit
              </div>
              <div className="space-y-3">
                {formSteps.map((step, index) => (
                  <div 
                    key={index}
                    onClick={() => handleStepNavigation(index)}
                    className={`flex items-center space-x-3 ${
                      index === formStep ? 'text-lime-400' : 
                      index < formStep ? 'text-green-400 cursor-pointer hover:text-green-300' : 'text-gray-500'
                    } ${index <= formStep ? 'transition-colors' : ''}`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs ${
                      index === formStep ? 'border-lime-400 bg-lime-400/20' :
                      index < formStep ? 'border-green-400 bg-green-400/20 hover:bg-green-400/30' : 'border-gray-500'
                    } ${index <= formStep ? 'transition-all' : ''}`}>
                      {index < formStep ? <CheckCircle className="w-3 h-3" /> : index + 1}
                    </div>
                    <div>
                      <div className="font-mono text-sm">{step.title}</div>
                      <div className="font-mono text-xs opacity-70">{step.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </TerminalWindow>

            <div className="space-y-4">
              <h3 className="text-white font-mono text-lg">What You'll Get:</h3>
              <div className="space-y-3">
                {earlyAccessBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 font-mono text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="bg-black/80 backdrop-blur-sm border-lime-400/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white font-mono">
                      Step {formStep + 1}: {currentStepData.title}
                    </CardTitle>
                    <CardDescription className="text-lime-400/70 font-mono">
                      {currentStepData.description}
                    </CardDescription>
                  </div>
                  <Badge className="bg-lime-400/20 text-lime-400 font-mono">
                    {formStep + 1}/3
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {renderFormStep()}
                
                {submitError && (
                  <div className="bg-red-400/10 border border-red-400/30 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <p className="text-red-400 font-mono text-sm">{submitError}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between">
                  {formStep > 0 && (
                    <Button 
                      variant="outline"
                      onClick={() => setFormStep(formStep - 1)}
                      className="border-lime-400/50 text-lime-400 hover:bg-lime-400/10 font-mono"
                      disabled={isSubmitting}
                    >
                      <ArrowLeft className="mr-2 w-4 h-4" />
                      Previous
                    </Button>
                  )}
                  
                  <Button 
                    onClick={handleNext}
                    disabled={isSubmitting || isCheckingEmail}
                    className="bg-lime-400 text-black hover:bg-lime-300 font-mono font-bold ml-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Activity className="mr-2 w-4 h-4 animate-spin" />
                        Uploading to Drive...
                      </>
                    ) : isCheckingEmail ? (
                      <>
                        <Activity className="mr-2 w-4 h-4 animate-spin" />
                        Checking...
                      </>
                    ) : formStep < 2 ? (
                      <>
                        Next
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Submit to Drive
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};