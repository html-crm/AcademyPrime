"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    "nav.courses": "الدورات",
    "nav.videos": "الفيديوهات",
    "nav.articles": "المقالات",
    "nav.getStarted": "ابدأ الآن",
    
    // Hero
    "hero.title1": "أتقن العملات الرقمية",
    "hero.title2": "وتقنية البلوك تشين",
    "hero.description": "منصة تعليمية مجانية للعملات الرقمية مع دورات قيادية من الخبراء، دروس فيديو، ومقالات متعمقة. ابدأ رحلتك في عالم الأصول الرقمية اليوم.",
    "hero.startLearning": "ابدأ التعلم مجاناً",
    "hero.browseCourses": "تصفح الدورات",
    
    // Stats
    "stats.courses": "دورة مجانية",
    "stats.videos": "فيديو تعليمي",
    "stats.articles": "مقال",
    "stats.learners": "متعلم",
    
    // Courses
    "courses.title": "الدورات المجانية",
    "courses.description": "مسارات تعليمية منظمة من المبتدئ إلى المتقدم، تغطي جميع جوانب العملات الرقمية والبلوك تشين.",
    "courses.bitcoin.title": "أساسيات البيتكوين",
    "courses.bitcoin.description": "تعلم أساسيات البيتكوين، كيف يعمل، ولماذا هو مهم.",
    "courses.bitcoin.level": "مبتدئ",
    "courses.bitcoin.duration": "ساعتين",
    "courses.ethereum.title": "الإيثيريوم والعقود الذكية",
    "courses.ethereum.description": "افهم الإيثيريوم، العقود الذكية، والتطبيقات اللامركزية.",
    "courses.ethereum.level": "متوسط",
    "courses.ethereum.duration": "4 ساعات",
    "courses.defi.title": "أساسيات التمويل اللامركزي",
    "courses.defi.description": "استكشف التمويل اللامركزي، الإقراض، الاقتراض، وزراعة العائد.",
    "courses.defi.level": "متوسط",
    "courses.defi.duration": "3 ساعات",
    "courses.trading.title": "استراتيجيات التداول",
    "courses.trading.description": "أتقن التحليل الفني، إدارة المخاطر، وعلم نفس التداول.",
    "courses.trading.level": "متقدم",
    "courses.trading.duration": "5 ساعات",
    "courses.nft.title": "الرموز غير القابلة للاستبدال",
    "courses.nft.description": "تعلم عن الرموز غير القابلة للاستبدال، المجموعات الرقمية، والميتافيرس.",
    "courses.nft.level": "مبتدئ",
    "courses.nft.duration": "ساعتين",
    "courses.security.title": "أفضل ممارسات الأمان",
    "courses.security.description": "احمِ أصولك الرقمية بإجراءات أمنية ومحافظ مناسبة.",
    "courses.security.level": "مبتدئ",
    "courses.security.duration": "ساعة ونصف",
    
    // Videos
    "videos.title": "الدروس المرئية",
    "videos.description": "تعلم من خبراء الصناعة من خلال محتوى فيديو جذاب يغطي مهارات الكريبتو العملية.",
    "videos.video1.title": "كيف تشتري أول بيتكوين لك",
    "videos.video2.title": "إعداد محفظة الأجهزة",
    "videos.video3.title": "فهم دورات السوق",
    "videos.video4.title": "شرح زراعة العائد",
    "videos.video5.title": "قراءة الرسوم البيانية الفنية",
    "videos.video6.title": "دليل الضرائب للمستثمرين في الكريبتو",
    
    // Articles
    "articles.title": "أحدث المقالات",
    "articles.description": "تحليلات متعمقة وأدلة للبقاء على اطلاع بنظام الكريبتو.",
    "articles.article1.title": "مستقبل تقنية البلوك تشين",
    "articles.article1.excerpt": "استكشاف الاتجاهات والابتكارات الناشئة في مجال البلوك تشين لعام 2024 وما بعده.",
    "articles.article1.category": "التكنولوجيا",
    "articles.article1.date": "15 يناير 2024",
    "articles.article2.title": "فهم تنصيف البيتكوين",
    "articles.article2.excerpt": "دليل شامل لأحداث تنصيف البيتكوين وتأثيرها على السعر والعرض.",
    "articles.article2.category": "البيتكوين",
    "articles.article2.date": "12 يناير 2024",
    "articles.article3.title": "تحديث المشهد التنظيمي",
    "articles.article3.excerpt": "أحدث التطورات في تنظيمات الكريبتو عبر الولايات القضائية الرئيسية حول العالم.",
    "articles.article3.category": "التنظيم",
    "articles.article3.date": "10 يناير 2024",
    "articles.article4.title": "حلول التوسع من الطبقة الثانية",
    "articles.article4.excerpt": "كيف تحل بروتوكولات الطبقة الثانية مشكلة قابلية توسع البلوك تشين وتقليل تكاليف المعاملات.",
    "articles.article4.category": "الإيثيريوم",
    "articles.article4.date": "8 يناير 2024",
    "articles.article5.title": "شرح العملات الخاصة بالخصوصية",
    "articles.article5.excerpt": "نظرة عامة على العملات الرقمية المركزة على الخصوصية وكيف تحمي هوية المستخدم.",
    "articles.article5.category": "الخصوصية",
    "articles.article5.date": "5 يناير 2024",
    "articles.article6.title": "اتجاهات التبني المؤسسي",
    "articles.article6.excerpt": "الشركات الكبرى والمؤسسات المالية التي تتبنى العملات الرقمية والبلوك تشين.",
    "articles.article6.category": "الصناعة",
    "articles.article6.date": "3 يناير 2024",
    
    // CTA
    "cta.title": "ابدأ رحلتك في الكريبتو اليوم",
    "cta.description": "انضم إلى آلاف المتعلمين الذين يتقنون تقنيات العملات الرقمية والبلوك تشين مع مواردنا التعليمية المجانية.",
    "cta.button": "أنشئ حساباً مجانياً",
    
    // Footer
    "footer.tagline": "تمكين العالم بالتعليم المجاني للعملات الرقمية.",
    "footer.learning": "التعلم",
    "footer.courses": "الدورات",
    "footer.videos": "الفيديوهات",
    "footer.articles": "المقالات",
    "footer.glossary": "المسرد",
    "footer.resources": "الموارد",
    "footer.blog": "المدونة",
    "footer.community": "المجتمع",
    "footer.faq": "الأسئلة الشائعة",
    "footer.support": "الدعم",
    "footer.company": "الشركة",
    "footer.about": "من نحن",
    "footer.contact": "اتصل بنا",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
    "footer.copyright": "© 2024 Academy Prime. جميع الحقوق محفوظة.",
    
    // Chatbot
    "chatbot.title": "مساعد الكريبتو الذكي",
    "chatbot.subtitle": "اسألني أي شيء عن الكريبتو",
    "chatbot.greeting": "👋 مرحباً! أنا مساعد الكريبتو الذكي. اسألني أي شيء عن البيتكوين، الإيثيريوم، DeFi، NFTs، التداول، أو أي موضوع كريبتو!",
    "chatbot.placeholder": "اسأل عن البيتكوين، الإيثيريوم، DeFi...",
  },
  en: {
    // Navigation
    "nav.courses": "Courses",
    "nav.videos": "Videos",
    "nav.articles": "Articles",
    "nav.getStarted": "Get Started",
    
    // Hero
    "hero.title1": "Master Cryptocurrency",
    "hero.title2": "& Blockchain Technology",
    "hero.description": "Free crypto education platform with expert-led courses, video tutorials, and in-depth articles. Start your journey into the world of digital assets today.",
    "hero.startLearning": "Start Learning Free",
    "hero.browseCourses": "Browse Courses",
    
    // Stats
    "stats.courses": "Free Courses",
    "stats.videos": "Video Tutorials",
    "stats.articles": "Articles",
    "stats.learners": "Learners",
    
    // Courses
    "courses.title": "Free Courses",
    "courses.description": "Structured learning paths from beginner to advanced, covering all aspects of cryptocurrency and blockchain.",
    "courses.bitcoin.title": "Bitcoin Basics",
    "courses.bitcoin.description": "Learn the fundamentals of Bitcoin, how it works, and why it matters.",
    "courses.bitcoin.level": "Beginner",
    "courses.bitcoin.duration": "2 hours",
    "courses.ethereum.title": "Ethereum & Smart Contracts",
    "courses.ethereum.description": "Understand Ethereum, smart contracts, and decentralized applications.",
    "courses.ethereum.level": "Intermediate",
    "courses.ethereum.duration": "4 hours",
    "courses.defi.title": "DeFi Fundamentals",
    "courses.defi.description": "Explore decentralized finance, lending, borrowing, and yield farming.",
    "courses.defi.level": "Intermediate",
    "courses.defi.duration": "3 hours",
    "courses.trading.title": "Trading Strategies",
    "courses.trading.description": "Master technical analysis, risk management, and trading psychology.",
    "courses.trading.level": "Advanced",
    "courses.trading.duration": "5 hours",
    "courses.nft.title": "NFTs & Digital Assets",
    "courses.nft.description": "Learn about non-fungible tokens, digital collectibles, and the metaverse.",
    "courses.nft.level": "Beginner",
    "courses.nft.duration": "2 hours",
    "courses.security.title": "Security Best Practices",
    "courses.security.description": "Protect your crypto assets with proper security measures and wallets.",
    "courses.security.level": "Beginner",
    "courses.security.duration": "1.5 hours",
    
    // Videos
    "videos.title": "Video Tutorials",
    "videos.description": "Learn from industry experts through engaging video content covering practical crypto skills.",
    "videos.video1.title": "How to Buy Your First Bitcoin",
    "videos.video2.title": "Setting Up a Hardware Wallet",
    "videos.video3.title": "Understanding Market Cycles",
    "videos.video4.title": "Yield Farming Explained",
    "videos.video5.title": "Reading Technical Charts",
    "videos.video6.title": "Tax Guide for Crypto Investors",
    
    // Articles
    "articles.title": "Latest Articles",
    "articles.description": "In-depth analysis and guides to stay updated with the crypto ecosystem.",
    "articles.article1.title": "The Future of Blockchain Technology",
    "articles.article1.excerpt": "Exploring emerging trends and innovations in the blockchain space for 2024 and beyond.",
    "articles.article1.category": "Technology",
    "articles.article1.date": "Jan 15, 2024",
    "articles.article2.title": "Understanding Bitcoin Halving",
    "articles.article2.excerpt": "A comprehensive guide to Bitcoin's halving events and their impact on price and supply.",
    "articles.article2.category": "Bitcoin",
    "articles.article2.date": "Jan 12, 2024",
    "articles.article3.title": "Regulatory Landscape Update",
    "articles.article3.excerpt": "Latest developments in crypto regulations across major jurisdictions worldwide.",
    "articles.article3.category": "Regulation",
    "articles.article3.date": "Jan 10, 2024",
    "articles.article4.title": "Layer 2 Scaling Solutions",
    "articles.article4.excerpt": "How Layer 2 protocols are solving blockchain scalability and reducing transaction costs.",
    "articles.article4.category": "Ethereum",
    "articles.article4.date": "Jan 8, 2024",
    "articles.article5.title": "Privacy Coins Explained",
    "articles.article5.excerpt": "An overview of privacy-focused cryptocurrencies and how they protect user anonymity.",
    "articles.article5.category": "Privacy",
    "articles.article5.date": "Jan 5, 2024",
    "articles.article6.title": "Institutional Adoption Trends",
    "articles.article6.excerpt": "Major corporations and financial institutions embracing cryptocurrency and blockchain.",
    "articles.article6.category": "Industry",
    "articles.article6.date": "Jan 3, 2024",
    
    // CTA
    "cta.title": "Start Your Crypto Journey Today",
    "cta.description": "Join thousands of learners mastering cryptocurrency and blockchain technology with our free educational resources.",
    "cta.button": "Create Free Account",
    
    // Footer
    "footer.tagline": "Empowering the world with free cryptocurrency education.",
    "footer.learning": "Learning",
    "footer.courses": "Courses",
    "footer.videos": "Videos",
    "footer.articles": "Articles",
    "footer.glossary": "Glossary",
    "footer.resources": "Resources",
    "footer.blog": "Blog",
    "footer.community": "Community",
    "footer.faq": "FAQ",
    "footer.support": "Support",
    "footer.company": "Company",
    "footer.about": "About Us",
    "footer.contact": "Contact",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.copyright": "© 2024 Academy Prime. All rights reserved.",
    
    // Chatbot
    "chatbot.title": "Crypto AI Assistant",
    "chatbot.subtitle": "Ask me anything about crypto",
    "chatbot.greeting": "👋 Hi! I'm your Crypto AI Assistant. Ask me anything about Bitcoin, Ethereum, DeFi, NFTs, trading, or any crypto topic!",
    "chatbot.placeholder": "Ask about Bitcoin, Ethereum, DeFi...",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["ar"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
