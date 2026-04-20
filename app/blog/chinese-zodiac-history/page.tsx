import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';

export const metadata: Metadata = {
  title: '동양 12지(십이지) 완벽 역사 가이드 — 기원, 신화, 음양오행 원리 | StarFate',
  description: '쥐부터 돼지까지 12지 동물의 기원 신화, 음양오행 철학, 역사적 발전 과정을 체계적으로 정리합니다. 왜 이 12동물이 선택됐는지, 동아시아 문화에서 어떤 의미를 가지는지 깊이 있게 탐구합니다.',
  alternates: { canonical: 'https://www.starfate.day/blog/chinese-zodiac-history' },
  openGraph: {
    title: '동양 12지(십이지) 완벽 역사 가이드 — 기원, 신화, 음양오행 원리',
    description: '12지 동물의 기원 신화와 음양오행 철학을 체계적으로 정리합니다.',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

const animals = [
  { name: '쥐(子)', year: '2020, 2008, 1996', element: '양수(陽水)', hour: '23:00~01:00', trait: '영리함, 적응력, 기회 포착' },
  { name: '소(丑)', year: '2021, 2009, 1997', element: '음토(陰土)', hour: '01:00~03:00', trait: '근면, 인내, 신뢰성' },
  { name: '호랑이(寅)', year: '2022, 2010, 1998', element: '양목(陽木)', hour: '03:00~05:00', trait: '용기, 리더십, 독립심' },
  { name: '토끼(卯)', year: '2023, 2011, 1999', element: '음목(陰木)', hour: '05:00~07:00', trait: '온화함, 직관력, 외교적 능력' },
  { name: '용(辰)', year: '2024, 2012, 2000', element: '양토(陽土)', hour: '07:00~09:00', trait: '카리스마, 야망, 행운' },
  { name: '뱀(巳)', year: '2025, 2013, 2001', element: '음화(陰火)', hour: '09:00~11:00', trait: '지혜, 직관, 우아함' },
  { name: '말(午)', year: '2026, 2014, 2002', element: '양화(陽火)', hour: '11:00~13:00', trait: '자유, 열정, 활동성' },
  { name: '양(未)', year: '2027, 2015, 2003', element: '음토(陰土)', hour: '13:00~15:00', trait: '창의성, 예술적 감각, 평화로움' },
  { name: '원숭이(申)', year: '2028, 2016, 2004', element: '양금(陽金)', hour: '15:00~17:00', trait: '재치, 유머, 다재다능' },
  { name: '닭(酉)', year: '2029, 2017, 2005', element: '음금(陰金)', hour: '17:00~19:00', trait: '꼼꼼함, 성실함, 솔직함' },
  { name: '개(戌)', year: '2030, 2018, 2006', element: '양토(陽土)', hour: '19:00~21:00', trait: '충성심, 정의감, 보호 본능' },
  { name: '돼지(亥)', year: '2031, 2019, 2007', element: '음수(陰水)', hour: '21:00~23:00', trait: '관대함, 성실함, 낙천성' },
];

export default function ChineseZodiacHistoryPage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: '동양 12지(십이지) 완벽 역사 가이드 — 기원, 신화, 음양오행 원리',
              description: '12지 동물의 기원 신화와 음양오행 철학을 체계적으로 정리합니다.',
              datePublished: '2026-04-08',
              dateModified: '2026-04-08',
              author: { '@type': 'Organization', name: 'StarFate 편집팀', url: 'https://www.starfate.day/about' },
              publisher: { '@type': 'Organization', name: 'StarFate', url: 'https://www.starfate.day' },
              mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.starfate.day/blog/chinese-zodiac-history' },
            }),
          }}
        />

        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}>
              동양철학 역사
            </span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            동양 12지(십이지) 완벽 역사 가이드 — 기원, 신화, 음양오행 원리
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            수천 년의 역사를 가진 동양 12지는 단순한 띠가 아닙니다. 왜 하필 이 12동물인지, 어디서 왔는지, 음양오행과 어떻게 연결되는지 그 깊은 뿌리를 탐구합니다.
          </p>
        </header>

        <AuthorBio date="2026년 4월 8일" readTime="13분" category="동양철학 역사" />

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">12지의 기원 — 언제, 어디서 시작됐는가</h2>
            <p className="mb-3">
              십이지(十二支)의 기원은 기원전 2000년경 중국 상(商)나라 시대로 거슬러 올라갑니다. 초기에는 단순히 시간과 방향을 나타내는 체계였습니다. 하루 24시간을 12개의 구간으로 나누고(각 2시간), 나침반의 12방향을 표시하는 데 사용됐습니다.
            </p>
            <p className="mb-3">
              동물과의 연결은 한나라(漢, 기원전 206년~기원후 220년) 시대에 완성된 것으로 추정됩니다. 왕충(王充)의 저서 <em>논형(論衡)</em>에 12동물이 언급되며, 이 시기에 12지와 동물의 연결이 체계화됐습니다.
            </p>
            <p>
              이후 12지는 실크로드를 통해 한국, 일본, 베트남, 티베트, 몽골 등 아시아 전역으로 퍼졌습니다. 각 문화권마다 일부 동물이 달라졌는데, 예를 들어 베트남에서는 소 대신 물소, 토끼 대신 고양이를 사용합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">옥황상제의 경주 — 12동물 선정 신화</h2>
            <p className="mb-3">
              중국에서 가장 유명한 12지 기원 신화는 옥황상제(玉皇大帝)의 경주 이야기입니다.
            </p>
            <div className="rounded-2xl p-5 mb-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-white/70 mb-3">
                옥황상제가 12마리의 동물을 선발하여 하늘의 달력을 만들기로 했습니다. 강을 건너 가장 먼저 도착하는 순서대로 12지에 배치하기로 했습니다.
              </p>
              <p className="text-white/70 mb-3">
                영리한 쥐는 소의 등에 몰래 올라탔다가 결승선 직전에 뛰어내려 1등을 차지했습니다. 근면한 소가 2등, 용맹한 호랑이가 3등을 했습니다. 토끼는 강을 건너다 돌과 통나무를 뛰어다녀 4등, 용은 비를 내리느라 늦어 5등, 뱀은 말의 발굽에 숨어 있다가 6등을 했습니다.
              </p>
              <p className="text-white/70">
                말이 7등으로 들어오는 줄 알았지만 말의 발굽에서 뱀이 나와 6등을 뺏겼습니다. 양, 원숭이, 닭은 뗏목을 함께 만들어 협력하여 각각 8·9·10등을 했고, 개는 씻느라 늦어 11등, 돼지는 중간에 배불리 먹고 자느라 꼴찌 12등을 했습니다.
              </p>
            </div>
            <p>
              고양이는 쥐의 방해로 경주에 늦어 12지에 포함되지 못했다는 이야기도 있습니다. 이것이 고양이와 쥐가 천적이 된 이유라는 민간 설화가 전해집니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">음양오행(陰陽五行)과 12지의 관계</h2>
            <p className="mb-3">
              12지는 동양 철학의 근간인 음양오행과 깊이 연결됩니다. 이 관계를 이해하면 12지의 더 깊은 의미를 파악할 수 있습니다.
            </p>
            <div className="rounded-2xl p-5 mb-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-white font-semibold mb-3">음양(陰陽)과 12지</h3>
              <p className="text-white/60 mb-3">
                12지 동물들은 음양으로 나뉩니다. 발가락(발톱) 수가 짝수인 동물은 음(陰), 홀수인 동물은 양(陽)에 배치됩니다.
              </p>
              <ul className="space-y-1 text-xs text-white/50">
                <li>· 양(陽): 쥐(4발 + 전발 5개), 호랑이, 용, 말, 원숭이, 개</li>
                <li>· 음(陰): 소, 토끼, 뱀, 양, 닭, 돼지</li>
              </ul>
            </div>
            <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-white font-semibold mb-3">오행(五行)과 12지</h3>
              <p className="text-white/60 mb-3">
                오행(木·火·土·金·水)은 각각 두 개의 12지와 연결됩니다. 목(木)은 생명력, 화(火)는 열정, 토(土)는 안정, 금(金)은 정의, 수(水)는 지혜를 상징합니다.
              </p>
              <ul className="space-y-1 text-xs text-white/50">
                <li>· 목(木) — 호랑이·토끼: 성장, 창의력</li>
                <li>· 화(火) — 뱀·말: 열정, 표현력</li>
                <li>· 토(土) — 소·용·양·개: 안정, 중재력</li>
                <li>· 금(金) — 원숭이·닭: 정밀함, 결단력</li>
                <li>· 수(水) — 쥐·돼지: 지혜, 직관력</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">천간(天干)과의 결합 — 60갑자(甲子) 체계</h2>
            <p className="mb-3">
              12지는 단독으로 쓰이기도 하지만, 10개의 천간(天干: 甲乙丙丁戊己庚辛壬癸)과 결합하여 60갑자(甲子) 체계를 만듭니다. 12와 10의 최소공배수가 60이기 때문에, 60년을 주기로 같은 조합이 반복됩니다.
            </p>
            <p className="mb-3">
              예를 들어 2024년은 갑진년(甲辰年) — 갑(甲)은 양목(陽木), 진(辰)은 용(龍)입니다. 2025년은 을사년(乙巳年) — 을(乙)은 음목(陰木), 사(巳)는 뱀입니다. 2026년은 병오년(丙午年) — 병(丙)은 양화(陽火), 오(午)는 말입니다.
            </p>
            <p>
              이 60갑자 체계는 단순히 년도 표시를 넘어, 개인의 사주(四柱: 태어난 년·월·일·시) 분석에 핵심적으로 사용됩니다. 사주명리학에서 각 기둥의 천간과 지지가 어떻게 조화를 이루는지를 분석하여 개인의 성격과 운세를 파악합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">12동물 — 특성과 시간대 완벽 정리</h2>
            <p className="mb-3">각 동물은 특정 시간대(2시간씩)와 연결됩니다. 태어난 시간에 따라 "시지(時支)"가 결정되며, 이것도 성격 분석에 활용됩니다.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-white/10 rounded-lg overflow-hidden">
                <thead>
                  <tr style={{ background: 'rgba(124,58,237,0.2)' }}>
                    <th className="px-3 py-2 text-left text-white">동물</th>
                    <th className="px-3 py-2 text-left text-white">대표 년도</th>
                    <th className="px-3 py-2 text-left text-white">오행</th>
                    <th className="px-3 py-2 text-left text-white">시간대</th>
                    <th className="px-3 py-2 text-left text-white">핵심 특성</th>
                  </tr>
                </thead>
                <tbody>
                  {animals.map((a, i) => (
                    <tr key={i} className="border-t border-white/10" style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                      <td className="px-3 py-2 text-white/80">{a.name}</td>
                      <td className="px-3 py-2 text-white/50">{a.year}</td>
                      <td className="px-3 py-2 text-white/50">{a.element}</td>
                      <td className="px-3 py-2 text-white/50">{a.hour}</td>
                      <td className="px-3 py-2 text-white/60">{a.trait}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">동아시아 각국의 12지 변형</h2>
            <p className="mb-3">
              12지는 아시아 전역으로 퍼지면서 각 문화에 맞게 변형됐습니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { country: '🇰🇷 한국', note: '중국 12지와 동일. 단, 호랑이는 한국 문화에서 특히 중요한 수호신 역할을 함.' },
                { country: '🇻🇳 베트남', note: '소 → 물소, 토끼 → 고양이로 대체. 베트남에 토끼가 드물어 친숙한 고양이를 사용.' },
                { country: '🇯🇵 일본', note: '중국 12지와 동일하나, 멧돼지(猪)를 돼지로 부름. 12지 외에도 별자리 개념과 혼용.' },
                { country: '🇹🇭 태국', note: '뱀 대신 나가(용의 일종)를 사용하는 일부 전통이 있음. 힌두-불교 영향 반영.' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 className="text-white font-semibold mb-2">{item.country}</h3>
                  <p className="text-white/55 text-xs">{item.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">현대에서의 12지 활용</h2>
            <p className="mb-3">
              오늘날 12지는 다양한 방식으로 활용됩니다. 전통적으로는 사주명리(四柱命理), 풍수(風水), 결혼 날짜 선정, 이름 짓기 등에 사용됩니다. 현대에는 성격 분석, 궁합 분석, 연간 운세 예측에 널리 사용되고 있습니다.
            </p>
            <p>
              특히 한국, 중국, 일본에서는 연초에 해당 년도의 띠 동물을 주제로 한 다양한 문화적 행사, 기념품, 상품들이 출시됩니다. 2026년 병오년(말띠 해)에는 말을 주제로 한 다양한 문화적 표현이 나타날 것입니다.
            </p>
          </section>

        </div>

        <div className="mt-8 p-6 rounded-2xl text-center" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)' }}>
          <p className="text-white/60 mb-4 text-sm">내 띠 운세가 궁금하다면?</p>
          <Link href="/chinese-zodiac" className="inline-block px-6 py-3 rounded-full font-bold text-white text-sm" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)' }}>
            🐉 12지 운세 보기 →
          </Link>
        </div>

        <nav className="mt-10">
          <h3 className="text-sm text-white/40 mb-3 font-semibold uppercase tracking-widest">관련 글</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/chinese-vs-western-zodiac" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">☯️ 동양 12지 vs 서양 별자리</div>
              <div className="text-white/30 text-xs mt-1">두 전통의 차이점 비교</div>
            </Link>
            <Link href="/blog/chinese-zodiac-compatibility" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">🐉 동양 12지 궁합 가이드</div>
              <div className="text-white/30 text-xs mt-1">음양오행으로 보는 띠 궁합</div>
            </Link>
          </div>
        </nav>
      </article>
    </div>
  );
}
