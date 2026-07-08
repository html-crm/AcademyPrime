"use client";

import Link from "next/link";
import AIChatbot from "@/components/AIChatbot";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

export default function Home() {
  const { language, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            <div className="px-4 py-4 space-y-3">
              <Link href="#courses" className="block text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                {t("nav.courses")}
              </Link>
              <Link href="#videos" className="block text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                {t("nav.videos")}
              </Link>
              <Link href="#articles" className="block text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                {t("nav.articles")}
              </Link>
              <div className="flex items-center gap-4 py-2">
                <LanguageToggle />
              </div>
              <button className="w-full text-white px-4 py-2 rounded-lg font-medium transition-colors" style={{ backgroundColor: '#A346BD' }} onClick={() => setMobileMenuOpen(false)}>
                {t("nav.getStarted")}
              </button>
            </div>
          </div>
        )}
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
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-400">{t("footer.copyright")}</p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
}
