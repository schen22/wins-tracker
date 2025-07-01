// Typography utilities for consistent text styling across the app

export const typography = {
  // Form headers (main section titles)
  formHeader: "text-sm font-semibold text-gray-700",
  
  // Form content text (user input, labels, buttons)
  formContent: "text-sm font-medium",
  
  // Small helper text (descriptions, counts, etc.)
  helperText: "text-xs font-medium text-gray-600",
  
  // Form title (main progress form title)
  formTitle: "text-2xl font-bold text-gray-800",
  
  // Form subtitle/description
  formSubtitle: "text-gray-600 text-sm",
  
  // App title (main page header)
  appTitle: "text-3xl font-bold text-gray-900",
  
  // App subtitle
  appSubtitle: "text-gray-600"
} as const;

// Helper function to get typography classes
export const getTypography = (variant: keyof typeof typography): string => {
  return typography[variant];
};