import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full bg-gradient-to-r from-slate-900 via-slate-700 to-slate-100 py-6 md:py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-4 left-1/4 w-12 h-12 md:w-16 md:h-16 border border-yellow-500/40 rounded-full"></div>
          <div className="absolute top-2 right-1/4 w-10 h-10 md:w-12 md:h-12 border border-cyan-400/40 rounded-full"></div>
        </div>

        <div className="text-center z-10 relative px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-3 md:mb-4 text-white tracking-wider">
            in<span className="text-yellow-400">4</span>nn
          </h1>
          <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full"></div>
            <p className="text-sm md:text-lg text-slate-200 font-medium tracking-wide">
              声と想いをつなぐインタビューハブ
            </p>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full"></div>
          </div>

          <div className="flex items-center justify-center gap-4 md:gap-8 mb-4 md:mb-6">
            <div className="text-center">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                <span className="text-lg md:text-2xl">🔍</span>
              </div>
              <p className="text-xs md:text-sm text-yellow-400 font-medium">cognize</p>
            </div>
            <div className="w-8 md:w-12 h-0.5 bg-slate-400"></div>
            <div className="text-center">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                <span className="text-lg md:text-2xl">💫</span>
              </div>
              <p className="text-xs md:text-sm text-cyan-400 font-medium">emission</p>
            </div>
          </div>

          <div className="w-16 md:w-24 h-0.5 bg-slate-400 mx-auto"></div>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="flex-1 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white flex flex-col justify-center items-center p-6 md:p-8 relative overflow-hidden min-h-[50vh] lg:min-h-auto">
          <div className="absolute inset-0 opacity-8">
            <div className="absolute top-12 md:top-20 left-12 md:left-20 w-20 md:w-32 h-20 md:h-32 border border-yellow-500/25 rounded-full"></div>
            <div className="absolute bottom-16 md:bottom-32 right-8 md:right-16 w-16 md:w-24 h-16 md:h-24 border border-yellow-500/15 rounded-full"></div>
            <div className="absolute top-1/2 left-4 md:left-8 w-12 md:w-16 h-12 md:h-16 border border-yellow-500/20 rounded-full"></div>
          </div>

          <div className="text-center max-w-lg z-10">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 md:mb-6 text-white">cognize</h2>
              <p className="text-lg md:text-2xl text-yellow-200 mb-2 md:mb-3 font-medium">気づき、支えるひと</p>
              <p className="text-sm md:text-base text-slate-300 mb-6 md:mb-10 leading-relaxed max-w-sm mx-auto">
                若者の声を直接聴き、社会の変化を肌で感じる。
                <br />
                <span className="text-yellow-300 font-medium">安心・健全な仕組み</span>で支援を提供。
              </p>

              <Link href="/cognize">
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-slate-900 font-bold py-3 md:py-4 text-base md:text-lg shadow-xl shadow-yellow-500/20 transform hover:scale-105 transition-all duration-200">
                  cognizeとして参加する
                  <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-gradient-to-br from-slate-50 via-cyan-50 to-cyan-100 text-slate-900 flex flex-col justify-center items-center p-6 md:p-8 relative overflow-hidden min-h-[50vh] lg:min-h-auto">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-8 md:top-16 right-12 md:right-20 w-24 md:w-40 h-24 md:h-40 border border-cyan-400/25 rounded-full"></div>
            <div className="absolute bottom-12 md:bottom-24 left-6 md:left-12 w-18 md:w-28 h-18 md:h-28 border border-cyan-300/30 rounded-full"></div>
            <div className="absolute top-1/3 right-4 md:right-8 w-14 md:w-20 h-14 md:h-20 border border-cyan-500/20 rounded-full"></div>
          </div>

          <div className="text-center max-w-lg z-10">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 md:mb-6 text-slate-900">
                emission
              </h2>
              <p className="text-lg md:text-2xl text-cyan-600 mb-2 md:mb-3 font-medium">声を放つひと</p>
              <p className="text-sm md:text-base text-slate-600 mb-6 md:mb-10 leading-relaxed max-w-sm mx-auto">
                あなたの経験や考えを共有し、
                <br />
                <span className="text-cyan-600 font-medium">ギフトカードで謝礼</span>を受け取る。
                <br />
                あなたの声が未来を照らします。
              </p>

              <Link href="/emission">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold py-3 md:py-4 text-base md:text-lg shadow-xl shadow-cyan-500/20 transform hover:scale-105 transition-all duration-200">
                  emissionとして参加する
                  <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="absolute top-4 md:top-8 right-4 md:right-8">
            <p className="text-xs md:text-sm text-slate-600 font-medium">あなたはどちらですか？</p>
          </div>
        </div>
      </div>
    </div>
  )
}
