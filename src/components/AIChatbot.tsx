"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const cryptoKnowledgeBase: Record<string, string> = {
  bitcoin: "البيتكوين (BTC) هو أول وأكبر عملة رقمية، تم إنشاؤه في 2009 من قبل ساتوشي ناكاموتو. يعمل على شبكة لامركزية باستخدام تقنية البلوك تشين، بحد أقصى 21 مليون عملة. يُطلق عليه غالباً 'الذهب الرقمي' بسبب ندرة وخصائص تخزين القيمة.",
  ethereum: "الإيثيريوم (ETH) هي منصة لامركزية تتيح العقود الذكية والتطبيقات اللامركزية (dApps) للبناء والتشغيل دون توقف أو احتيال أو تدخل. تم إنشاؤها بواسطة فيتاليك بوتيرين في 2015 وهي ثاني أكبر عملة رقمية من حيث القيمة السوقية.",
  "smart contract": "العقود الذكية هي عقود ذاتية التنفيذ مع الشروط المكتوبة مباشرة في الكود. يتم تنفيذها تلقائياً عند استيفاء الشروط المحددة مسبقاً. جعل الإيثيريوم العقود الذكية شائعة، وهي أساس DeFi و NFTs والعديد من تطبيقات البلوك تشين الأخرى.",
  defi: "التمويل اللامركزي (DeFi) يشير إلى الخدمات المالية المبنية على تقنية البلوك تشين التي تعمل بدون وسطاء تقليديين مثل البنوك. يشمل الإقراض والاقتراض والتداول وزراعة العائد. منصات DeFi الشائعة تشمل Aave و Compound و Uniswap.",
  nft: "الرموز غير القابلة للاستبدال (NFTs) هي أصول رقمية فريدة تمثل ملكية عناصر محددة. على عكس العملات الرقمية، كل NFT فريد ولا يمكن نسخه. تُستخدم للفن الرقمي والمجموعات وعناصر الألعاب والمزيد.",
  "crypto wallet": "محفظة الكريبتو هي أداة رقمية تخزن مفاتيحك الخاصة وتتيح لك التفاعل مع شبكات البلوك تشين. الأنواع تشمل المحافظ الساخنة (برمجية، عبر الإنترنت) والمحافظ الباردة (أجهزة، دون اتصال). المحافظ الشائعة تشمل MetaMask و Ledger و Trezor.",
  blockchain: "البلوك تشين هي تقنية دفتر أستاذ موزعة تسجل المعاملات عبر أجهزة كمبيوتر متعددة. كل كتلة تحتوي على بيانات المعاملات وترتبط تشفيرياً بالكتلة السابقة، مما يخلق سلسلة غير قابلة للتغيير. إنها أساس جميع العملات الرقمية.",
  mining: "تعدين الكريبتو هو عملية التحقق من صحة المعاملات وإضافتها إلى البلوك تشين. يستخدم المعدون القوة الحسابية لحل المشاكل الرياضية المعقدة. البيتكوين يستخدم تعدين إثبات العمل، بينما انتقل الإيثيريوم إلى إثبات الحصة.",
  "proof of stake": "إثبات الحصة (PoS) هو آلية توافق حيث يتم اختيار المدققين لإنشاء كتل جديدة بناءً على كمية العملة الرقمية التي يمتلكونها وعلى استعدادهم لـ 'رهنها' كضمان. إنها أكثر كفاءة في استخدام الطاقة من إثبات العمل.",
  trading: "تداول الكريبتو يشمل شراء وبيع العملات الرقمية على البورصات. المفاهيم الرئيسية تشمل أوامر السوق، أوامر الحد، وقف الخسارة، التحليل الفني، وإدارة المخاطر. قم دائماً بأبحاثك الخاصة ولا تستثمر أكثر مما تتحمل خسارته.",
  halving: "تنصيف البيتكوين هو حدث يحدث كل 4 سنوات (210,000 كتلة) عندما يتم تقليل مكافأة الكتلة للمعدين إلى النصف. هذا يقلل المعدل الذي يتم به إنشاء بيتكوين جديد، مما يؤثر على العرض وربما السعر. من المتوقع أن يحدث التنصيف التالي في 2024.",
  security: "أفضل ممارسات أمان الكريبتو تشمل: استخدام المحافظ الأجهزية للمحافظ الكبيرة، تفعيل المصادقة الثنائية، عدم مشاركة المفاتيح الخاصة، الحذر من عمليات الاحتيال، استخدام البورصات الموثوقة، والحفاظ على تحديث برامجك.",
};

export default function AIChatbot() {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: t("chatbot.greeting"),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for keywords in the knowledge base
    for (const [keyword, response] of Object.entries(cryptoKnowledgeBase)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }

    // Default responses for common queries
    if (lowerMessage.includes("ما هو") || lowerMessage.includes("اشرح")) {
      return "سأكون سعيداً بالشرح! هل يمكنك أن تكون أكثر تحديداً حول موضوع الكريبتو الذي تود التعلم عنه؟ يمكنني المساعدة في البيتكوين، الإيثيريوم، DeFi، NFTs، التداول، الأمان، والمزيد.";
    }

    if (lowerMessage.includes("كيف") && (lowerMessage.includes("اشتري") || lowerMessage.includes("ابدأ"))) {
      return "للبدء بالكريبتو: 1) اختر بورصة موثوقة (Binance، Coinbase، إلخ)، 2) أنشئ حساباً وأكمل التحقق من الهوية، 3) أعد محفظة آمنة، 4) ابدأ بمبالغ صغيرة، 5) استثمر فقط ما تتحمل خسارته. قم دائماً بأبحاثك الخاصة!";
    }

    if (lowerMessage.includes("سعر") || lowerMessage.includes("قيمة")) {
      return "ليس لدي بيانات أسعار في الوقت الفعلي، ولكن يمكنك التحقق من الأسعار الحالية على البورصات مثل Binance أو Coinbase أو CoinGecko. تذكر أن أسعار الكريبتو متقلبة جداً!";
    }

    if (lowerMessage.includes("آمن") || lowerMessage.includes("حماية")) {
      return cryptoKnowledgeBase.security;
    }

    if (lowerMessage.includes("توصية") || lowerMessage.includes("الأفضل")) {
      return "لا يمكنني تقديم نصائح مالية، لكن يمكنني شرح العملات الرقمية المختلفة وحالات استخدامها. قم دائماً بأبحاثك الخاصة (DYOR) قبل اتخاذ قرارات الاستثمار. ضع في اعتبارك عوامل مثل التكنولوجيا، الفريق، المجتمع، وحالة الاستخدام.";
    }

    // Default fallback
    return "ما زلت أتعلم! يمكنني مساعدتك في فهم مفاهيم الكريبتو مثل البيتكوين، الإيثيريوم، DeFi، NFTs، استراتيجيات التداول، وأفضل ممارسات الأمان. ما الموضوع المحدد الذي تود معرفة المزيد عنه؟";
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsTyping(true);

    // Simulate AI thinking
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    const response = generateResponse(userMessage);
    setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 group"
        style={{ backgroundColor: '#A346BD' }}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 w-96 max-w-[calc(100vw-3rem)] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 z-50 overflow-hidden">
          {/* Header */}
          <div className="p-4" style={{ background: 'linear-gradient(to right, #A346BD, #C084FC)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">{t("chatbot.title")}</h3>
                <p className="text-purple-100 text-sm">{t("chatbot.subtitle")}</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "text-white"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white"
                  }`}
                  style={message.role === "user" ? { backgroundColor: '#A346BD' } : undefined}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("chatbot.placeholder")}
                className="flex-1 px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': '#A346BD' } as any}
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="px-4 py-2 disabled:bg-slate-300 dark:disabled:bg-slate-600 text-white rounded-lg transition-colors"
                style={{ backgroundColor: '#A346BD' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
