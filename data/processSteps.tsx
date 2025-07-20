import React from 'react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  CheckCircle, 
  User, 
  Calendar, 
  BookOpen, 
  Award, 
  Trophy, 
  Brain, 
  Target, 
  FileText, 
  Download, 
  Eye 
} from 'lucide-react';

export const processSteps = [
  {
    number: "01",
    title: "CV Upload & Analysis",
    description: "Upload your resume and watch as our AI instantly extracts and analyzes your professional background, education, and achievements.",
    status: "PROCESSING",
    userInterface: () => (
      <div className="space-y-4">
        <div className="flex items-center space-x-3 p-4 bg-gray-900/80 rounded-lg border border-green-500/30">
          <CheckCircle className="w-6 h-6 text-green-500" />
          <div>
            <div className="text-white font-medium">sarah_chen_resume.pdf</div>
            <div className="text-green-400 text-sm">Successfully uploaded and parsed</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="text-lime-400 text-sm font-mono mb-2">Profile Summary:</div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-gray-900/60 rounded p-3">
              <User className="w-4 h-4 text-lime-400 mb-1" />
              <div className="text-gray-300">Dr. Sarah Chen</div>
              <div className="text-lime-400">ML Research Scientist</div>
            </div>
            <div className="bg-gray-900/60 rounded p-3">
              <Calendar className="w-4 h-4 text-lime-400 mb-1" />
              <div className="text-gray-300">Experience</div>
              <div className="text-lime-400">15 Years</div>
            </div>
            <div className="bg-gray-900/60 rounded p-3">
              <BookOpen className="w-4 h-4 text-lime-400 mb-1" />
              <div className="text-gray-300">Education</div>
              <div className="text-lime-400">PhD Computer Science</div>
            </div>
            <div className="bg-gray-900/60 rounded p-3">
              <Award className="w-4 h-4 text-lime-400 mb-1" />
              <div className="text-gray-300">Publications</div>
              <div className="text-lime-400">47 Papers</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    number: "02", 
    title: "AI Qualification Assessment",
    description: "Our neural networks analyze your qualifications against USCIS criteria, identifying your strongest immigration pathways with precision scoring.",
    status: "ANALYZING",
    userInterface: () => (
      <div className="space-y-4">
        <div className="text-lime-400 text-sm font-mono mb-3">Visa Eligibility Analysis:</div>
        
        <div className="space-y-3">
          <div className="p-4 bg-green-900/30 rounded-lg border border-green-500/50">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span className="text-white font-medium">EB-1A Extraordinary Ability</span>
              </div>
              <Badge className="bg-green-500/20 text-green-400">94.7% Match</Badge>
            </div>
            <div className="text-sm text-gray-300 mb-3">Strong candidate with multiple qualifying criteria</div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span className="text-gray-300">Original contributions in ML field</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span className="text-gray-300">Published research (47 papers, 1,200+ citations)</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span className="text-gray-300">Peer review for major conferences</span>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-blue-900/30 rounded-lg border border-blue-500/50">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-blue-500" />
                <span className="text-white font-medium">EB-2 Advanced Degree</span>
              </div>
              <Badge className="bg-blue-500/20 text-blue-400">87.3% Match</Badge>
            </div>
            <div className="text-sm text-gray-300">Alternative pathway with job offer requirement</div>
          </div>
        </div>
      </div>
    )
  },
  {
    number: "03",
    title: "Personalized Strategy",
    description: "Receive a tailored immigration strategy with specific evidence recommendations and timeline projections based on your unique profile.",
    status: "OPTIMIZING",
    userInterface: () => (
      <div className="space-y-4">
        <div className="text-lime-400 text-sm font-mono mb-3">Recommended Strategy:</div>
        
        <div className="p-4 bg-lime-900/20 rounded-lg border border-lime-500/50">
          <div className="flex items-center space-x-2 mb-3">
            <Target className="w-5 h-5 text-lime-400" />
            <span className="text-white font-medium">EB-1A Petition Strategy</span>
          </div>
          
          <div className="space-y-3">
            <div className="bg-gray-900/60 rounded p-3">
              <div className="text-lime-400 text-sm mb-2">Priority Evidence to Collect:</div>
              <div className="space-y-1 text-xs">
                <div className="text-gray-300">• Letters from 5-7 independent experts in AI/ML</div>
                <div className="text-gray-300">• Documentation of conference keynote speeches</div>
                <div className="text-gray-300">• Evidence of industry impact and adoption</div>
                <div className="text-gray-300">• Media coverage of research breakthroughs</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-900/60 rounded p-3">
                <div className="text-lime-400 text-sm">Success Probability</div>
                <div className="text-white text-lg font-bold">95.4%</div>
              </div>
              <div className="bg-gray-900/60 rounded p-3">
                <div className="text-lime-400 text-sm">Est. Timeline</div>
                <div className="text-white text-lg font-bold">4-6 months</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    number: "04",
    title: "Professional Petition Draft",
    description: "Watch as our AI generates a comprehensive, USCIS-compliant petition with evidence package, legal arguments, and supporting documentation.",
    status: "GENERATING",
    userInterface: () => (
      <div className="space-y-4">
        <div className="text-lime-400 text-sm font-mono mb-3">Petition Generation Complete:</div>
        
        <div className="space-y-3">
          <div className="p-4 bg-gray-900/80 rounded-lg border border-lime-500/30">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-lime-400" />
                <span className="text-white font-medium">I-140 Petition Package</span>
              </div>
              <Badge className="bg-lime-400/20 text-lime-400">Ready</Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-gray-800/60 rounded p-2">
                <div className="text-lime-400">Main Petition</div>
                <div className="text-white">32 pages</div>
              </div>
              <div className="bg-gray-800/60 rounded p-2">
                <div className="text-lime-400">Evidence Package</div>
                <div className="text-white">47 documents</div>
              </div>
              <div className="bg-gray-800/60 rounded p-2">
                <div className="text-lime-400">Expert Letters</div>
                <div className="text-white">6 drafted</div>
              </div>
              <div className="bg-gray-800/60 rounded p-2">
                <div className="text-lime-400">Legal Citations</div>
                <div className="text-white">23 precedents</div>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button size="sm" className="bg-lime-400 text-black hover:bg-lime-300 text-xs">
              <Download className="w-3 h-3 mr-1" />
              Download Package
            </Button>
            <Button size="sm" variant="outline" className="border-lime-400/50 text-lime-400 text-xs">
              <Eye className="w-3 h-3 mr-1" />
              Preview
            </Button>
          </div>
        </div>
      </div>
    )
  }
];