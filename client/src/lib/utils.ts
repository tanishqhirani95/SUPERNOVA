import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to create delay for scroll animations
export function getAnimationDelay(index: number, baseDelay: number = 100): string {
  return `${index * baseDelay}ms`;
}

// Function to validate email
export function isValidEmail(email: string): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Function to validate phone number
export function isValidPhone(phone: string): boolean {
  const phonePattern = /^[0-9\s\-\+\(\)]{10,15}$/;
  return phonePattern.test(phone);
}
