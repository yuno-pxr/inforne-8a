import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Shield, MessageSquare, Gift } from "lucide-react"

export default function EmissionPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl md:text-3xl font-serif font-bold">
              <span className="text-gray-900">in</span>
              <span className="text-cyan-500">4</span>
              <span className="text-gray-900">nn</span>
            </Link>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl md:text-3xl">💫</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">emission — 声を放つひと</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12">「あなたの声が、未来を照らす光になる」</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-gray-900 mb-8 md:mb-12">
          参加メリット
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <MessageSquare className="w-12 h-12 text-cyan-500 mb-4" />
              <CardTitle className="font-serif text-gray-900">自分の意見を言葉にするチャンス</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">インタビューで経験や考えを共有できます。</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <Gift className="w-12 h-12 text-cyan-500 mb-4" />
              <CardTitle className="font-serif text-gray-900">謝礼はギフトカードで受け取れる</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">安心・健全な仕組みで報酬を受け取れます。</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <Shield className="w-12 h-12 text-cyan-500 mb-4" />
              <CardTitle className="font-serif text-gray-900">未来につながる体験</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">あなたの声が、誰かの気づきとなり社会を動かします。</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-gray-900 mb-8 md:mb-12">
            安心設計
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 mb-2">完全招待制で安全な参加環境</h3>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 mb-2">
                謝礼はAmazonギフトなど金券のみ
              </h3>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 mb-2">不健全な関係性を避ける設計</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-gray-900 mb-8 md:mb-12">
          利用フロー（emission視点）
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">招待を受けて登録</h3>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">インタビューに答える</h3>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">ギフトカードを受け取る</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cyan-500 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 md:mb-8">
            emissionとして参加しませんか？
          </h2>
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-cyan-500 text-lg px-6 md:px-8 py-3 md:py-4 font-semibold"
          >
            emissionとして参加希望を送る
          </Button>
        </div>
      </section>

      <footer className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="text-center text-sm text-gray-500">
            <p className="mb-2">© 2025 in4nn</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <Link href="/terms" className="hover:text-gray-900 transition-colors">
                利用規約
              </Link>
              <span className="hidden sm:inline">|</span>
              <Link href="/privacy" className="hover:text-gray-900 transition-colors">
                プライバシーポリシー
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
