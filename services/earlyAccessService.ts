import { API_URL } from '../config/environment';

interface EarlyAccessSubmission {
  firstName: string;
  lastName: string;
  email: string;
  countryOfCitizenship: string;
  visaType: string;
  timeline: string;
  cvFile: File;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

class EarlyAccessService {
  private baseUrl: string;

  constructor() {
    // Use the centralized environment configuration
    this.baseUrl = API_URL;
  }

  async submitEarlyAccess(formData: EarlyAccessSubmission): Promise<ApiResponse> {
    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append('firstName', formData.firstName);
      submitData.append('lastName', formData.lastName);
      submitData.append('email', formData.email);
      submitData.append('countryOfCitizenship', formData.countryOfCitizenship);
      submitData.append('visaType', formData.visaType);
      submitData.append('timeline', formData.timeline);
      submitData.append('cvFile', formData.cvFile);

      const response = await fetch(`${this.baseUrl}/early-access`, {
        method: 'POST',
        body: submitData,
        // Don't set Content-Type header - let browser set it with boundary for FormData
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || `HTTP error! status: ${response.status}`);
      }

      return result;
    } catch (error) {
      console.error('Early access submission error:', error);
      
      if (error instanceof Error) {
        // Handle specific error types
        if (error.message.includes('duplicate email') || error.message.includes('already exists')) {
          return {
            success: false,
            error: 'This email has already been submitted. Please use a different email address.',
            message: 'Duplicate email detected'
          };
        }
        
        if (error.message.includes('network') || error.message.includes('fetch')) {
          return {
            success: false,
            error: 'Network error. Please check your connection and try again.',
            message: 'Connection failed'
          };
        }

        return {
          success: false,
          error: error.message,
          message: 'Submission failed'
        };
      }

      return {
        success: false,
        error: 'An unexpected error occurred. Please try again.',
        message: 'Unknown error'
      };
    }
  }

  async checkEmailExists(email: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/early-access/check-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      return result.exists || false;
    } catch (error) {
      console.error('Email check error:', error);
      // Return false on error to allow submission attempt
      return false;
    }
  }

  // Utility method to validate file before submission
  validateFile(file: File): { valid: boolean; error?: string } {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!file) {
      return { valid: false, error: 'Please select a file to upload.' };
    }

    if (file.size > maxSize) {
      return { valid: false, error: 'File size must be less than 10MB.' };
    }

    if (!allowedTypes.includes(file.type)) {
      return { valid: false, error: 'Please upload a PDF, DOC, or DOCX file.' };
    }

    return { valid: true };
  }

  // Format file size for display
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}

// Export singleton instance
export const earlyAccessService = new EarlyAccessService();
export type { EarlyAccessSubmission, ApiResponse };