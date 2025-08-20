import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Shield, Users, Gift } from "lucide-react"

export default function CognizePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl md:text-3xl font-serif font-bold">
              <span className="text-white">in</span>
              <span className="text-yellow-400">4</span>
              <span className="text-white">nn</span>
            </Link>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl md:text-3xl">🔍</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">cognize — 気づき、支えるひと</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12">「安心と信頼を、未来に差し出す」</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-white mb-8 md:mb-12">参加メリット</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <Users className="w-12 h-12 text-yellow-400 mb-4" />
              <CardTitle className="font-serif text-white">若者の声を直接聴ける</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">社会の変化を肌で感じ、次世代のリアルな声を知ることができます。</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <Gift className="w-12 h-12 text-yellow-400 mb-4" />
              <CardTitle className="font-serif text-white">支援は健全で合理的</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                インタビュー協力費としてギフトで提供。調査・CSR活動としても価値があります。
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <Shield className="w-12 h-12 text-yellow-400 mb-4" />
              <CardTitle className="font-serif text-white">安心の仕組み</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">招待制、キャップ制、現金授受なしでリスクを最小化しています。</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-800 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-white mb-8 md:mb-12">安心設計</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-serif font-bold text-white mb-2">完全招待制で信頼性を担保</h3>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-serif font-bold text-white mb-2">
                月額上限（キャップ制）で過度な支援を防止
              </h3>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-serif font-bold text-white mb-2">ギフトカード利用で明朗・透明</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-white mb-8 md:mb-12">
          利用フロー（cognize視点）
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">招待を受けて登録</h3>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">若者へのインタビューを実施</h3>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">デポジットを通じてギフトが送られる</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow-400 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6 md:mb-8">
            cognizeとして参加しませんか？
          </h2>
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-6 md:px-8 py-3 md:py-4">
            cognizeとして参加希望を送る
          </Button>
        </div>
      </section>

      <footer className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="text-center text-sm text-gray-400">
            <p className="mb-2">© 2025 in4nn</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <Link href="/terms" className="hover:text-white transition-colors">
                利用規約
              </Link>
              <span className="hidden sm:inline">|</span>
              <Link href="/privacy" className="hover:text-white transition-colors">
                プライバシーポリシー
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
