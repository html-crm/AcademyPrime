"use client";

import Link from "next/link";
import AIChatbot from "@/components/AIChatbot";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

export default function Home() {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#A346BD' }}>
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">Academy Prime</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#courses" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">{t("nav.courses")}</Link>
              <Link href="#videos" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">{t("nav.videos")}</Link>
              <Link href="#articles" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">{t("nav.articles")}</Link>
              <LanguageToggle />
              <button className="text-white px-4 py-2 rounded-lg font-medium transition-colors" style={{ backgroundColor: '#A346BD' }}>
                {t("nav.getStarted")}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="animated-bg absolute inset-0 opacity-20"></div>
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            {t("hero.title1")}
            <span className="block bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #A346BD, #C084FC)' }}>
              {t("hero.title2")}
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            {t("hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-white px-8 py-3 rounded-lg font-medium transition-colors text-lg hover:opacity-90" style={{ backgroundColor: '#A346BD' }}>
              {t("hero.startLearning")}
            </button>
            <button className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-8 py-3 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-lg">
              {t("hero.browseCourses")}
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-100 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold dark:text-purple-400" style={{ color: '#A346BD' }}>50+</div>
              <div className="text-slate-600 dark:text-slate-400">{t("stats.courses")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">200+</div>
              <div className="text-slate-600 dark:text-slate-400">{t("stats.videos")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">500+</div>
              <div className="text-slate-600 dark:text-slate-400">{t("stats.articles")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">100K+</div>
              <div className="text-slate-600 dark:text-slate-400">{t("stats.learners")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t("courses.title")}</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t("courses.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: t("courses.bitcoin.title"),
                description: t("courses.bitcoin.description"),
                level: t("courses.bitcoin.level"),
                duration: t("courses.bitcoin.duration"),
                icon: "₿"
              },
              {
                title: t("courses.ethereum.title"),
                description: t("courses.ethereum.description"),
                level: t("courses.ethereum.level"),
                duration: t("courses.ethereum.duration"),
                icon: "Ξ"
              },
              {
                title: t("courses.defi.title"),
                description: t("courses.defi.description"),
                level: t("courses.defi.level"),
                duration: t("courses.defi.duration"),
                icon: "💰"
              },
              {
                title: t("courses.trading.title"),
                description: t("courses.trading.description"),
                level: t("courses.trading.level"),
                duration: t("courses.trading.duration"),
                icon: "📈"
              },
              {
                title: t("courses.nft.title"),
                description: t("courses.nft.description"),
                level: t("courses.nft.level"),
                duration: t("courses.nft.duration"),
                icon: "🎨"
              },
              {
                title: t("courses.security.title"),
                description: t("courses.security.description"),
                level: t("courses.security.level"),
                duration: t("courses.security.duration"),
                icon: "🔒"
              }
            ].map((course, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-4xl mb-4">{course.icon}</div>
                <div className="flex gap-2 mb-3">
                  <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ backgroundColor: '#E9D5FF', color: '#A346BD' }}>
                    {course.level}
                  </span>
                  <span className="text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-full">
                    {course.duration}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{course.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t("videos.title")}</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t("videos.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: t("videos.video1.title"),
                youtubeId: "G2ozxTzPybE",
                duration: "15:30",
                views: "125K"
              },
              {
                title: t("videos.video2.title"),
                youtubeId: "zH30a6xT1y4",
                duration: "22:45",
                views: "89K"
              },
              {
                title: t("videos.video3.title"),
                youtubeId: "7PQ-Sk5sM7g",
                duration: "18:20",
                views: "156K"
              },
              {
                title: t("videos.video4.title"),
                youtubeId: "eM1dH8X4-5A",
                duration: "25:10",
                views: "78K"
              },
              {
                title: t("videos.video5.title"),
                youtubeId: "oQeRrE5TbKM",
                duration: "30:00",
                views: "203K"
              },
              {
                title: t("videos.video6.title"),
                youtubeId: "C4M5lQW7y2E",
                duration: "20:15",
                views: "67K"
              }
            ].map((video, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className="relative aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors" style={{ '--tw-hover-color': '#A346BD' } as any}>{video.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span>⏱ {video.duration}</span>
                    <span>👁 {video.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t("articles.title")}</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t("articles.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: t("articles.article1.title"),
                excerpt: t("articles.article1.excerpt"),
                category: t("articles.article1.category"),
                date: t("articles.article1.date")
              },
              {
                title: t("articles.article2.title"),
                excerpt: t("articles.article2.excerpt"),
                category: t("articles.article2.category"),
                date: t("articles.article2.date")
              },
              {
                title: t("articles.article3.title"),
                excerpt: t("articles.article3.excerpt"),
                category: t("articles.article3.category"),
                date: t("articles.article3.date")
              },
              {
                title: t("articles.article4.title"),
                excerpt: t("articles.article4.excerpt"),
                category: t("articles.article4.category"),
                date: t("articles.article4.date")
              },
              {
                title: t("articles.article5.title"),
                excerpt: t("articles.article5.excerpt"),
                category: t("articles.article5.category"),
                date: t("articles.article5.date")
              },
              {
                title: t("articles.article6.title"),
                excerpt: t("articles.article6.excerpt"),
                category: t("articles.article6.category"),
                date: t("articles.article6.date")
              }
            ].map((article, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow cursor-pointer">
                <span className="text-xs font-medium px-2 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#E9D5FF', color: '#A346BD' }}>
                  {article.category}
                </span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{article.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{article.excerpt}</p>
                <div className="text-sm text-slate-500 dark:text-slate-400">{article.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(to right, #A346BD, #C084FC)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t("cta.title")}</h2>
          <p className="text-purple-100 text-lg mb-8">
            {t("cta.description")}
          </p>
          <button className="bg-white px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors text-lg" style={{ color: '#A346BD' }}>
            {t("cta.button")}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#A346BD' }}>
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-xl font-bold text-white">Academy Prime</span>
              </div>
              <p className="text-sm">{t("footer.tagline")}</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">{t("footer.learning")}</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">{t("footer.courses")}</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">{t("footer.videos")}</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">{t("footer.articles")}</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">{t("footer.glossary")}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">{t("footer.resources")}</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">{t("footer.blog")}</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">{t("footer.community")}</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">{t("footer.faq")}</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">{t("footer.support")}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">{t("footer.company")}</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">{t("footer.about")}</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">{t("footer.contact")}</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">{t("footer.privacy")}</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">{t("footer.terms")}</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
      
      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
}
