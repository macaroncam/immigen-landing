// Environment configuration helper
interface EnvironmentConfig {
  apiUrl: string;
  isDevelopment: boolean;
  isProduction: boolean;
}

// Helper function to safely access environment variables
const getEnvVar = (key: string, defaultValue: string = ''): string => {
  try {
    // Use Vite's import.meta.env if available
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      return import.meta.env[key] || defaultValue;
    }
    
    // Fallback for other environments
    return defaultValue;
  } catch (error) {
    console.warn(`Failed to access environment variable ${key}, using default:`, defaultValue);
    return defaultValue;
  }
};

// Environment configuration
export const environment: EnvironmentConfig = {
  apiUrl: getEnvVar('VITE_API_URL', 'http://localhost:3001/api'),
  isDevelopment: getEnvVar('NODE_ENV', 'development') === 'development',
  isProduction: getEnvVar('NODE_ENV', 'development') === 'production',
};

// Export individual values for convenience
export const API_URL = environment.apiUrl;
export const IS_DEVELOPMENT = environment.isDevelopment;
export const IS_PRODUCTION = environment.isProduction;

// Debug logging in development
if (IS_DEVELOPMENT) {
  console.log('Environment configuration:', environment);
}