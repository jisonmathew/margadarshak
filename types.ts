
import React from 'react';

// Definitions for the core application entities
export interface HubPortal {
  id: string;
  name: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

export interface CareerOpportunity {
  id: string;
  title: string;
  company: string;
  location: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
