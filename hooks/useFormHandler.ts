'use client';

import React from "react"

/**
 * Custom hook for form handling
 * Manages form state, validation, and submission
 */

import { useState, useCallback } from 'react';
import { ContactFormData } from '@/lib/types';

interface UseFormHandlerReturn {
  formData: ContactFormData;
  isLoading: boolean;
  error: string | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  resetForm: () => void;
}

const initialFormState: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export function useFormHandler(): UseFormHandlerReturn {
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      setError(null);
    },
    []
  );

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Please enter a message');
      return false;
    }
    return true;
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError(null);

      if (!validateForm()) {
        return;
      }

      setIsLoading(true);

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // In production, send to backend
        console.log('Form submitted:', formData);

        // Success
        setFormData(initialFormState);
        // You could show a success toast here
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An error occurred';
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
    [formData]
  );

  const resetForm = useCallback(() => {
    setFormData(initialFormState);
    setError(null);
  }, []);

  return {
    formData,
    isLoading,
    error,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
