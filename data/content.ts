import { 
  Brain, 
  Search, 
  Shield, 
  FileText, 
  CheckCircle, 
  User, 
  Calendar, 
  BookOpen, 
  Award, 
  Trophy, 
  Target, 
  Download, 
  Eye 
} from 'lucide-react';

export const features = [
  {
    icon: Brain,
    title: "Neural CV Analysis",
    description: "Advanced ML algorithms dissect your CV with 99.7% accuracy, identifying immigration pathways in microseconds.",
    code: "analyze_cv(cv_data) → pathways[]"
  },
  {
    icon: Search,
    title: "Smart Route Discovery",
    description: "AI-powered decision trees evaluate 10,000+ case precedents to find your optimal pathway.",
    code: "find_optimal_route(profile) → EB1A|EB2"
  },
  {
    icon: Shield,
    title: "Evidence Engine",
    description: "Proprietary algorithms generate USCIS-compliant evidence packages with 95% approval rates.",
    code: "generate_evidence(case) → package.pdf"
  },
  {
    icon: FileText,
    title: "Auto-Draft System",
    description: "GPT-4 powered petition drafting with legal precedent integration and compliance checking.",
    code: "draft_petition(data) → 30_page_doc"
  }
];

export const testimonials = [
  {
    name: "Dr. Sarah Chen",
    title: "ML Research Scientist",
    avatar: "/api/placeholder/40/40",
    content: "The AI analysis was surgical. It identified edge cases in my profile that even my lawyer missed. EB1-A approved in 3.2 months.",
    rating: 5,
    tech_details: "Processing Time: 47.3 seconds | Accuracy: 99.8%"
  },
  {
    name: "Alex Rodriguez",
    title: "Senior SWE @ Meta",
    avatar: "/api/placeholder/40/40", 
    content: "Like having a team of immigration lawyers running 24/7. The evidence recommendations were algorithmically perfect.",
    rating: 5,
    tech_details: "Evidence Score: 9.7/10 | Success Probability: 96.4%"
  },
  {
    name: "Dr. Priya Patel",
    title: "AI Researcher",
    avatar: "/api/placeholder/40/40",
    content: "The tech is insane. Real-time case law analysis, predictive modeling - this is the future of legal services.",
    rating: 5,
    tech_details: "Case Analysis: 10,247 precedents | Match Rate: 94.1%"
  }
];

export const plans = [
  {
    name: "Basic Scan",
    price: "$99",
    description: "AI analysis and pathway recommendation",
    features: [
      "Neural CV Analysis",
      "Route Recommendation Engine", 
      "Basic Evidence Outline",
      "Email Support"
    ],
    api_calls: "100 API calls",
    processing: "Standard processing"
  },
  {
    name: "Full Stack",
    price: "$499",
    description: "Complete AI-powered petition system",
    features: [
      "Advanced Neural Analysis",
      "Evidence Generation Engine",
      "30-Page Auto-Draft System",
      "Priority Queue Processing",
      "Revision Algorithms"
    ],
    popular: true,
    api_calls: "1000 API calls",
    processing: "GPU-accelerated"
  },
  {
    name: "Enterprise",
    price: "$999", 
    description: "White-glove AI with human oversight",
    features: [
      "Everything in Full Stack",
      "Expert Validation Layer",
      "1-on-1 Technical Support",
      "Unlimited Processing",
      "Custom AI Training"
    ],
    api_calls: "Unlimited API calls",
    processing: "Dedicated cluster"
  }
];

export const demoSteps = [
  {
    title: "CV Upload Complete",
    status: "✓ Processing CV: senior_engineer.pdf",
    details: "Extracting qualifications, experience, publications...",
    progress: 100
  },
  {
    title: "Neural Analysis Running",
    status: "🧠 Analyzing against EB1-A criteria",
    details: "Found 7/10 qualifying criteria matches",
    progress: 75
  },
  {
    title: "Route Optimization",
    status: "🎯 Recommending optimal pathway",
    details: "EB1-A: 94.7% match | EB-2: 87.3% match",
    progress: 90
  },
  {
    title: "Petition Generation",
    status: "📄 Drafting 30-page petition",
    details: "Including evidence package and legal citations",
    progress: 65
  }
];

export const earlyAccessBenefits = [
  "Priority access to beta release",
  "Free CV analysis (worth $99)",
  "Direct feedback channel",
  "Early adopter pricing"
];

export const formSteps = [
  {
    title: "Personal Information",
    description: "Let's start with basic details"
  },
  {
    title: "Immigration Goals",
    description: "Tell us about your visa objectives"
  },
  {
    title: "Upload Your CV",
    description: "Let our AI analyze your background"
  }
];