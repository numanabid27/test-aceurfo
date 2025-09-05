import { Calculator, FileText, TrendingUp, Shield, Clock,  Award, Users } from 'lucide-react';
export const SERVICES = [
    {
      icon: Calculator,
      title: 'Monthly Bookkeeping',
      description: 'Complete monthly bookkeeping services including transaction categorization, reconciliation, and financial statement preparation.',
      features: ['Bank reconciliation', 'Expense categorization', 'Monthly reports', 'QuickBooks setup']
    },
    {
      icon: FileText,
      title: 'Tax Preparation',
      description: 'Year-round tax preparation and planning to ensure your books are always tax-ready and compliant.',
      features: ['Tax planning', 'Quarterly filings', 'Year-end preparation', 'IRS correspondence']
    },
    {
      icon: TrendingUp,
      title: 'Financial Analysis',
      description: 'In-depth financial analysis and reporting to help you understand your business performance and make informed decisions.',
      features: ['Profit & loss analysis', 'Cash flow forecasting', 'Budget planning', 'KPI tracking']
    },
    {
      icon: Shield,
      title: 'Compliance & Audit',
      description: 'Ensure your business stays compliant with all regulations and is prepared for any audits or reviews.',
      features: ['Compliance monitoring', 'Audit preparation', 'Documentation', 'Risk assessment']
    },
    {
      icon: Clock,
      title: 'Payroll Services',
      description: 'Complete payroll management including processing, tax filings, and employee record maintenance.',
      features: ['Payroll processing', 'Tax withholdings', 'Direct deposits', 'Employee records']
    },
    {
      icon: Users,
      title: 'CFO Advisory',
      description: 'Strategic financial guidance and CFO-level advisory services to help scale your business effectively.',
      features: ['Strategic planning', 'Financial modeling', 'Investment analysis', 'Growth planning']
    }
];

export const PLANS = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Monthly bookkeeping',
        'Bank reconciliation',
        'Financial statements',
        'Expense categorization',
        'Email support',
        'QuickBooks setup'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Everything in Starter',
        'Weekly bookkeeping',
        'Tax preparation support',
        'Cash flow analysis',
        'Dedicated bookkeeper',
        'Phone support',
        'Custom reports',
        'Payroll integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For established businesses with complex needs',
      features: [
        'Everything in Professional',
        'Daily bookkeeping',
        'CFO advisory services',
        'Multi-entity support',
        'Advanced reporting',
        'Priority support',
        'Custom integrations',
        'Audit preparation'
      ],
      popular: false
    }
];

export const STATS = [
    { icon: Users, number: '10,000+', label: 'Happy Clients' },
    { icon: Clock, number: '15+', label: 'Years Experience' },
    { icon: Award, number: '99.9%', label: 'Accuracy Rate' },
    { icon: Shield, number: '100%', label: 'Secure & Compliant' }
  ];

export const TEAM = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'CPA with 20+ years of experience helping businesses grow through better financial management.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Former Big 4 consultant specializing in process optimization and financial systems.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Senior Bookkeeper',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'QuickBooks ProAdvisor with expertise in small business accounting and tax preparation.'
    }
  ];