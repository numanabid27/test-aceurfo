import {  Shield, Clock,  Award, Users } from 'lucide-react';
import finance from "@/common/assets/img/financial.jpg";
import bookeeping from "@/common/assets/img/bookkeeping.jpg";
import report from "@/common/assets/img/report.jpg";
import cashFlow from "@/common/assets/img/cash-flow.jpg";
import software from "@/common/assets/img/soft.jpg";
import quickBook from "@/common/assets/img/quickBook.jpg"
import xero from "@/common/assets/img/xero.jpg";
import budget from "@/common/assets/img/budget.png"
import blockChain from "@/common/assets/img/blockchain.png"
import reports from "@/common/assets/img/report.png"
import cash from "@/common/assets/img/cashh.png"
import testing from "@/common/assets/img/testing.png"
import accounting from "@/common/assets/img/accounting.png"
import graph from "@/common/assets/img/graph-report.png"


export const SERVICES = [
    {
      icon: budget,
      title: 'Bookkeeping Services',
      description: 'Get maximum business financial health with our comprehensive bookkeeping services. We handle all aspects...',
      slug:"bookkeepings-services",
      longDescription:"Get maximum business financial health with our comprehensive bookkeeping services. We handle all aspects of your bookkeeping operations, so that you can focus on your core areas. With our extensive financial analysis, you’ll always know about the resources for maximum growth. Our team ensures the accuracy of financial records, enabling informed decision-making that leads to increased profitability.",
      img:bookeeping
    },
    {
      icon: blockChain,
      title: 'Financial Reporting',
      description: 'AccureCFO transforms financial reporting into a data-driven process that empowers businesses to make...',
      slug: 'financial-reporting',
      longDescription:"AccureCFO transforms financial reporting into a data-driven process that empowers businesses to make informed decisions. As an alternative to relying on static spreadsheets, AccureCFO delivers real-time, accurate, and visually rich reports tailored to bookkeeping needs. Thus, your business will gain access to automated profit and loss statements, balance sheets, cash flow reports, and much more. Therefore, these reports are accurate, ensuring that financial stakeholders can quickly grasp the company’s performance.",
      img:finance
    },
    {
      icon: reports,
      title: 'Payables & Receivables Reporting',
      description: 'AccureCFO makes handling payable and receivable simple, transparent, and efficient. Through real-time...',
      slug: 'payables-receivables-reporting',
      longDescription:"AccureCFO makes handling payable and receivable simple, transparent, and efficient. Through real-time reporting, businesses can smoothly track outstanding vendor obligations, due dates, and payment statuses while also monitoring customer invoices. Thus, this visibility helps your business to avoid late fees, support supplier relationships, and uphold a healthy cash flow, ensuring optimal working capital management.",
      img:report
    },
    {
      icon: cash,
      title: 'Cash Flow Management',
      description: 'AccureCFO simplifies cash flow management. We provide businesses with clear, real-time visibility into...',
      slug: 'cash-flow-management',
      img:cashFlow,
      longDescription:"AccureCFO simplifies cash flow management. We provide businesses with clear, real-time visibility into where money is coming from and where it is going. Through automated tracking of financing activities, it highlights daily operations, growth initiatives, and the impact of financing decisions on liquidity. Therefore, this enables you to verify the past transactions and find the immediate cash position with accuracy."
    },
    {
      icon: testing,
      title: 'Software implementations',
      description: 'AccureCFO ensures efficient software implementations by compounding technical expertise. Our deep...',
      slug: 'software-implementations',
      img:software,
      longDescription:"AccureCFO ensures efficient software implementations by compounding technical expertise. Our deep understanding of business finance makes us unique in the marketplace. From system selection to deployment, the process is carefully managed to align with business goals. Thus, the new tools integrate seamlessly with existing operations. Hence. this approach reduces disruptions, quickens adoption, and helps businesses quickly realize the value of their technological investments."
    },
    {
      icon: accounting,
      title: 'QuickBooks',
      description: 'If you want to enhance the power of QuickBooks by combining its reliable accounting features, get in...',
      slug: 'quickBooks',
      img:quickBook,
      longDescription:" If you want to enhance the power of QuickBooks by combining its reliable accounting features, get in touch with AccureCFO. While QuickBooks handles daily bookkeeping, AccureCFO takes the data a step further, transforming it into clear financial reports, performance dashboards, and actionable strategies. Hence, all these features can help businesses understand their proper financial health. Thus, this integration allows us to focus on growth and profitability"
    },
    {
      icon: graph,
      title: 'Xero',
      description: 'AccureCFO comes with the power of Xero to deliver accurate bookkeeping services that are combined...',
      slug: 'xero',
      img:xero,
      longDescription:"AccureCFO comes with the power of Xero to deliver accurate bookkeeping services that are combined with strategic financial insights. Furthermore, Xero modernizes accounting through automation, invoicing, and real-time bank feeds. AccureCFO confirms that the captured data interprets into evocative insights. By rotating raw numbers into actionable financial reports, your businesses get a clear picture of productivity, cash flow, and growth opportunities."
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


export const FAQS = [
  {
    question: "Does AccureCFO do all my bookkeeping tasks for me?",
    answer:
      "Our bookkeeping experts handle all your bookkeeping needs for you.  Each month, we will check that your books are accurate and that your deductions are maximized or not.",
  },
  {
    question: "Is it compulsory to connect my business accounts to AccureCFO?",
    answer:
      "Yes: Connecting your accounts to AccureCFO automates repetitive tasks like data entry, saving you time and effort. It eliminates the need for manual uploads. Thus, this ensures our bookkeeping team can work efficiently.",
  },
  {
    question: "Why does AccureCFO still need me to upload documents even if my accounts are connected?",
    answer:
      "Sometimes, we need some extra documents, such as account statements or receipts, to verify the accuracy of the information. Sharing files with the bookkeeping team is swift and easy, allowing for quick document uploads.",
  },
];


export const STEPS = [
  {
    number: "01.",
    title: "CONSULTATION",
    description: "Its time for every business to become digital."
  },
  {
    number: "02.",
    title: "IMPLEMENTATION",
    description: "We assist in mapping your business process on ideal."
  },
  {
    number: "03.",
    title: "CUSTOMIZATION",
    description: "We expertise in customizing MS Dynamics out."
  },
  {
    number: "04.",
    title: "INTEGRATION",
    description: "Our SI Engineer transform your multiple."
  },
  {
    number: "05.",
    title: "SUPPORT",
    description: "We are experts at fashioning learning events."
  },
];