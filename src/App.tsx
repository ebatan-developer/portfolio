import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.remove("light");
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    const themes: ("light" | "dark")[] = ["light", "dark"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return "☀️";
      case "dark":
        return "🌙";
      default:
        return "🌓";
    }
  };

  // データ配列
  const careerHistory = [
    {
      id: 1,
      company: "会社名",
      position: "職位",
      period: "YYYY年MM月 - 現在",
      description: "職務内容や担当プロジェクトの説明",
    },
    {
      id: 2,
      company: "前職",
      position: "職位",
      period: "YYYY年MM月 - YYYY年MM月",
      description: "職務内容や担当プロジェクトの説明",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "プロジェクト名",
      description: "プロジェクトの説明文",
      technologies: [
        { name: "React", color: "bg-blue-100 text-blue-800" },
        { name: "Node.js", color: "bg-green-100 text-green-800" },
        { name: "TypeScript", color: "bg-purple-100 text-purple-800" },
      ],
      githubUrl: "#",
    },
    {
      id: 2,
      title: "プロジェクト名2",
      description: "プロジェクトの説明文",
      technologies: [
        { name: "Vue.js", color: "bg-yellow-100 text-yellow-800" },
        { name: "Python", color: "bg-red-100 text-red-800" },
        { name: "PostgreSQL", color: "bg-indigo-100 text-indigo-800" },
      ],
      githubUrl: "#",
    },
  ];

  const articles = [
    {
      id: 1,
      title: "記事タイトル",
      date: "YYYY年MM月DD日",
      platform: "プラットフォーム名",
      description: "記事の概要や説明",
      url: "#",
    },
    {
      id: 2,
      title: "記事タイトル2",
      date: "YYYY年MM月DD日",
      platform: "プラットフォーム名",
      description: "記事の概要や説明",
      url: "#",
    },
  ];

  const links = [
    {
      id: 1,
      name: "GitHub",
      url: "#",
      icon: "Git",
      iconBg: "bg-gray-900",
    },
    {
      id: 2,
      name: "Twitter / X",
      url: "#",
      icon: "X",
      iconBg: "bg-blue-600",
    },
    {
      id: 3,
      name: "LinkedIn",
      url: "#",
      icon: "Li",
      iconBg: "bg-blue-700",
    },
    {
      id: 4,
      name: "Qiita",
      url: "#",
      icon: "Q",
      iconBg: "bg-green-600",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm transition-colors">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/portfolio/icon.png"
                alt="Ebatan"
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Ebatan
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                  フルスタックエンジニア
                </p>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              title={`現在: ${theme === "light" ? "ライト" : "ダーク"}モード`}
            >
              <span className="text-xl">{getThemeIcon()}</span>
              <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                {theme === "light" ? "Light" : "Dark"}
              </span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* About */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            About
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors">
            <p className="text-gray-700 dark:text-gray-300">
              Webベースのフルスタックエンジニアとして、フロントエンドからバックエンドまで幅広い技術に携わっています。
            </p>
          </div>
        </section>

        {/* Career */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            経歴
          </h2>
          <div className="space-y-4">
            {careerHistory.map((career) => (
              <div
                key={career.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {career.company} / {career.position}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  期間: {career.period}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {career.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            開発実績
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className={`px-2 py-1 text-sm rounded ${tech.color} dark:opacity-90`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                >
                  GitHub →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            投稿記事
          </h2>
          <div className="space-y-4">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  <a
                    href={article.url}
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {article.date} | {article.platform}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {article.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            リンク
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors">
            <div className="grid md:grid-cols-2 gap-4">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div
                    className={`w-10 h-10 ${link.iconBg} rounded-full flex items-center justify-center mr-3`}
                  >
                    <span className="text-white font-bold text-sm">
                      {link.icon}
                    </span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-black text-white py-8 transition-colors">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; 2024 Koya Ebata. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
