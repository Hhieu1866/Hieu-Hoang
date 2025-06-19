"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, ExternalLink, Heart, Eye } from "lucide-react"

export default function SnippetsPage() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }

    const observer = new MutationObserver(handleThemeChange)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  }, [])

  const snippets = [
    {
      title: "Custom React Hook - useLocalStorage",
      description: "A reusable hook for managing localStorage with TypeScript support and error handling",
      language: "TypeScript",
      category: "React Hooks",
      likes: 45,
      views: 1200,
      code: `const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage key "' + key + '":', error);
      return initialValue;
    }
  });
  
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error setting localStorage key "' + key + '":', error);
    }
  };
  
  return [storedValue, setValue] as const;
};

// Usage Example:
const [name, setName] = useLocalStorage<string>('name', 'John Doe');`,
      tags: ["React", "TypeScript", "Hooks", "localStorage"],
    },
    {
      title: "Advanced Debounce Function",
      description: "Enhanced debounce utility with immediate execution option and cancellation support",
      language: "JavaScript",
      category: "Utilities",
      likes: 32,
      views: 890,
      code: `const debounce = (func, wait, immediate = false) => {
  let timeout;
  
  const debounced = function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func(...args);
  };
  
  // Add cancel method
  debounced.cancel = () => {
    clearTimeout(timeout);
    timeout = null;
  };
  
  return debounced;
};

// Usage Examples:
const debouncedSearch = debounce((query) => {
  console.log('Searching for:', query);
}, 300);

// Cancel if needed
debouncedSearch.cancel();`,
      tags: ["JavaScript", "Performance", "Utility", "Optimization"],
    },
    {
      title: "CSS Grid Auto-Fit Layout",
      description: "Responsive grid layout that automatically adjusts columns based on container width",
      language: "CSS",
      category: "Layouts",
      likes: 28,
      views: 650,
      code: `.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.grid-item {
  background: var(--card-background);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.grid-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* For smaller screens */
@media (max-width: 768px) {
  .responsive-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0.5rem;
  }
}`,
      tags: ["CSS", "Grid", "Responsive", "Layout"],
    },
    {
      title: "API Error Handler",
      description: "Comprehensive error handling utility for API requests with retry logic",
      language: "TypeScript",
      category: "API Utils",
      likes: 38,
      views: 1100,
      code: `interface ApiError {
  message: string;
  status: number;
  code?: string;
}

class ApiErrorHandler {
  static async handleRequest<T>(
    requestFn: () => Promise<T>,
    maxRetries: number = 3,
    retryDelay: number = 1000
  ): Promise<T> {
    let lastError: ApiError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await requestFn();
      } catch (error) {
        lastError = this.parseError(error);
        
        if (attempt === maxRetries || !this.shouldRetry(lastError)) {
          throw lastError;
        }
        
        await this.delay(retryDelay * attempt);
      }
    }
    
    throw lastError!;
  }
  
  private static parseError(error: any): ApiError {
    if (error.response) {
      return {
        message: error.response.data?.message || 'API Error',
        status: error.response.status,
        code: error.response.data?.code
      };
    }
    
    return {
      message: error.message || 'Network Error',
      status: 0
    };
  }
  
  private static shouldRetry(error: ApiError): boolean {
    return error.status >= 500 || error.status === 0;
  }
  
  private static delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Usage:
const fetchUserData = async (userId: string) => {
  return ApiErrorHandler.handleRequest(
    () => fetch(\`/api/users/\${userId}\`).then(res => res.json()),
    3, // max retries
    1000 // retry delay
  );
};`,
      tags: ["TypeScript", "API", "Error Handling", "Retry Logic"],
    },
    {
      title: "Theme Context Provider",
      description: "React context for managing dark/light theme with system preference detection",
      language: "TypeScript",
      category: "React Context",
      likes: 52,
      views: 1450,
      code: `import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  actualTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('system');
  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme;
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setActualTheme(mediaQuery.matches ? 'dark' : 'light');
      
      const handler = (e: MediaQueryListEvent) => {
        setActualTheme(e.matches ? 'dark' : 'light');
      };
      
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    } else {
      setActualTheme(theme);
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', actualTheme === 'dark');
  }, [actualTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, actualTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};`,
      tags: ["React", "Context", "Theme", "TypeScript"],
    },
    {
      title: "Form Validation Hook",
      description: "Flexible form validation hook with custom rules and real-time validation",
      language: "TypeScript",
      category: "React Hooks",
      likes: 41,
      views: 980,
      code: `interface ValidationRule<T> {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: T) => string | null;
}

interface FormField<T> {
  value: T;
  error: string | null;
  touched: boolean;
}

export const useFormValidation = <T extends Record<string, any>>(
  initialValues: T,
  validationRules: Partial<Record<keyof T, ValidationRule<T[keyof T]>>>
) => {
  const [fields, setFields] = useState<Record<keyof T, FormField<T[keyof T]>>>(
    Object.keys(initialValues).reduce((acc, key) => {
      acc[key as keyof T] = {
        value: initialValues[key as keyof T],
        error: null,
        touched: false
      };
      return acc;
    }, {} as Record<keyof T, FormField<T[keyof T]>>)
  );

  const validateField = (name: keyof T, value: T[keyof T]): string | null => {
    const rules = validationRules[name];
    if (!rules) return null;

    if (rules.required && (!value || value === '')) {
      return 'This field is required';
    }

    if (rules.minLength && String(value).length < rules.minLength) {
      return \`Minimum length is \${rules.minLength}\`;
    }

    if (rules.maxLength && String(value).length > rules.maxLength) {
      return \`Maximum length is \${rules.maxLength}\`;
    }

    if (rules.pattern && !rules.pattern.test(String(value))) {
      return 'Invalid format';
    }

    if (rules.custom) {
      return rules.custom(value);
    }

    return null;
  };

  const setFieldValue = (name: keyof T, value: T[keyof T]) => {
    setFields(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        error: validateField(name, value),
        touched: true
      }
    }));
  };

  const isValid = Object.values(fields).every(field => !field.error);
  const values = Object.keys(fields).reduce((acc, key) => {
    acc[key as keyof T] = fields[key as keyof T].value;
    return acc;
  }, {} as T);

  return {
    fields,
    values,
    isValid,
    setFieldValue
  };
};`,
      tags: ["React", "Hooks", "Validation", "Forms"],
    },
  ]

  return (
    <main
      className="min-h-screen font-mono transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#1a1a1a" : "#f8f9fa" }}
    >
      <Navigation />

      <div className="pt-20 px-4">
        <div className="max-w-6xl mx-auto py-20">
          <div className="mb-12">
            <h1 className={`text-4xl md:text-6xl font-bold mb-8 ${isDark ? "text-white" : "text-black"} font-mono`}>
              <span className={isDark ? "text-green-400" : "text-green-600"}>Snippets</span>
              <span className={isDark ? "text-green-400" : "text-green-600"}>.</span>
            </h1>
            <p className={`${isDark ? "text-white/80" : "text-black/80"} font-mono text-lg`}>
              // Useful code snippets, utilities, and reusable components I've created
            </p>
          </div>

          <div className="space-y-8">
            {snippets.map((snippet, index) => (
              <Card
                key={snippet.title}
                className={`${isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"}`}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className={`${isDark ? "text-white" : "text-black"} font-mono text-xl`}>
                          {snippet.title}
                        </CardTitle>
                        <span
                          className={`px-3 py-1 ${
                            isDark ? "bg-blue-900 text-blue-400" : "bg-blue-100 text-blue-700"
                          } font-mono text-sm rounded`}
                        >
                          {snippet.language}
                        </span>
                      </div>

                      <p className={`${isDark ? "text-white/70" : "text-black/70"} font-mono text-sm mb-3`}>
                        {snippet.description}
                      </p>

                      <div
                        className={`flex items-center gap-4 text-sm ${isDark ? "text-white/60" : "text-black/60"} font-mono`}
                      >
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {snippet.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {snippet.views}
                        </div>
                        <span className={`px-2 py-1 ${isDark ? "bg-gray-800" : "bg-gray-200"} rounded text-xs`}>
                          {snippet.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div
                    className={`${
                      isDark ? "bg-black border-gray-700" : "bg-gray-100 border-gray-300"
                    } p-4 rounded-lg border mb-6 overflow-x-auto`}
                  >
                    <pre className={`${isDark ? "text-green-400" : "text-green-700"} font-mono text-sm`}>
                      <code>{snippet.code}</code>
                    </pre>
                  </div>

                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div className="flex flex-wrap gap-2">
                      {snippet.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 ${
                            isDark ? "bg-gray-800 text-white/80" : "bg-gray-200 text-black/80"
                          } font-mono text-xs rounded`}
                        >
                          #{tag.toLowerCase()}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className={`${
                          isDark
                            ? "border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                            : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                        } font-mono`}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className={`${
                          isDark
                            ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
                            : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                        } font-mono`}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
