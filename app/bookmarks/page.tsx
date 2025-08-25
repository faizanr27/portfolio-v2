import Link from "next/link"

export default function Bookmarks() {
  // const tools = [
  //   { name: "WebTUI", icon: "→", url: "#" },
  //   { name: "Anime.js", icon: "⚡", url: "#" },
  //   { name: "SVG Logos", icon: "◐", url: "#" },
  //   { name: "Mono UI Components", icon: "▢", url: "#" },
  //   { name: "Handy Arrows", icon: "↗", url: "#" },
  //   { name: "Fancy Components", url: "#" },
  //   { name: "Methods for random gradients", icon: "◆", url: "#" },
  //   { name: "Transform Tools", icon: "●", url: "#" },
  //   { name: "Silk", icon: "$", url: "#" },
  //   { name: "NativewindUI", icon: "▣", url: "#" },
  // ]

  const articles = [
    { name: "How does a screen work?", icon: "▣", url: "https://www.makingsoftware.com/chapters/how-a-screen-works" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 px-16 py-20">
          <div className="max-w-xl">
            <h1 className="text-5xl font-light mb-3 tracking-tight">bookmarks</h1>
            <p className="text-gray-500 mb-16 text-base leading-relaxed">
              a collection of interesting links, articles, and resources I've saved
            </p>

            {/* Tools Section */}
{/*             <section className="mb-16">
              <h2 className="text-2xl font-light mb-8 tracking-tight">tools</h2>
              <div className="space-y-2">
                {tools.map((tool, index) => (
                  <div key={index} className="flex items-center gap-3 py-1">
                    {tool.icon && <span className="text-gray-500 text-sm w-4 flex-shrink-0">{tool.icon}</span>}
                    {!tool.icon && <span className="w-4 flex-shrink-0"></span>}
                    <Link href={tool.url} className="text-gray-400 hover:text-white transition-colors text-base">
                      {tool.name}
                    </Link>
                  </div>
                ))}
              </div>
            </section> */}

            {/* Articles Section */}
            <section>
              <h2 className="text-2xl font-light mb-8 tracking-tight">articles</h2>
              <div className="space-y-2">
                {articles.map((article, index) => (
                  <div key={index} className="flex items-center gap-3 py-1">
                    {article.icon && <span className="text-gray-500 text-sm w-4 flex-shrink-0">{article.icon}</span>}
                    {!article.icon && <span className="w-4 flex-shrink-0"></span>}
                    <Link href={article.url} className="text-gray-400 hover:text-white transition-colors text-base">
                      {article.name}
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

      </div>
    </div>
  )
}
