import Link from 'next/link';

export const metadata = {
  title: '개인정보처리방침 | 오늘의 운세',
  description: '오늘의 운세 서비스 개인정보처리방침',
};

export default function PrivacyPage() {
  return (
    <div style={{ background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">← 홈으로</Link>
        <h1 className="text-3xl font-bold text-white mb-2">개인정보처리방침</h1>
        <p className="text-white/40 text-sm mb-10">최종 수정일: 2025년 3월 3일</p>

        <div className="space-y-10 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. 개인정보 수집 항목 및 목적</h2>
            <p>오늘의 운세(이하 "서비스")는 운세 서비스 제공을 위해 아래와 같이 최소한의 정보를 수집합니다.</p>
            <ul className="mt-3 space-y-2 pl-4 list-disc">
              <li><strong className="text-white">생년월일</strong>: 별자리 및 띠 계산, 운세 생성 목적으로 활용되며 서버에 저장되지 않습니다.</li>
              <li><strong className="text-white">접속 로그(IP, 브라우저 정보)</strong>: 서비스 안정성 유지 및 부정 이용 방지 목적으로 Vercel 서버에 자동 수집됩니다.</li>
              <li><strong className="text-white">쿠키 및 광고 데이터</strong>: Google AdSense를 통해 맞춤 광고 제공 목적으로 수집될 수 있습니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. 개인정보 보유 및 이용 기간</h2>
            <p>생년월일은 운세 생성 후 즉시 파기되며 별도로 저장되지 않습니다. 접속 로그는 Vercel 정책에 따라 최대 30일간 보관 후 자동 삭제됩니다.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. 개인정보 제3자 제공</h2>
            <p>서비스는 이용자의 개인정보를 원칙적으로 제3자에게 제공하지 않습니다. 다만 아래의 경우는 예외입니다.</p>
            <ul className="mt-3 space-y-2 pl-4 list-disc">
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령에 의거하거나 수사기관의 요청이 있는 경우</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. 개인정보 처리 위탁</h2>
            <table className="w-full text-sm border border-white/10 rounded-lg overflow-hidden mt-3">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-4 py-2 text-left text-white">수탁 업체</th>
                  <th className="px-4 py-2 text-left text-white">위탁 업무</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-2">Google (Google AI)</td>
                  <td className="px-4 py-2">운세 텍스트 생성 (AI 처리)</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-2">Vercel Inc.</td>
                  <td className="px-4 py-2">서버 호스팅 및 로그 관리</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-2">Google AdSense</td>
                  <td className="px-4 py-2">광고 서비스 제공</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. 쿠키(Cookie) 사용</h2>
            <p>서비스는 Google AdSense 광고 제공을 위해 쿠키를 사용합니다. 쿠키는 이용자의 브라우저 설정에서 거부할 수 있으나, 일부 서비스 이용이 제한될 수 있습니다.</p>
            <p className="mt-2">Google의 광고 쿠키 사용 방식에 대한 자세한 내용은 <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">Google 광고 정책</a>을 참고하세요.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. 이용자의 권리</h2>
            <p>이용자는 언제든지 아래의 권리를 행사할 수 있습니다.</p>
            <ul className="mt-3 space-y-2 pl-4 list-disc">
              <li>개인정보 열람 요청</li>
              <li>개인정보 삭제 요청</li>
              <li>개인정보 처리 정지 요청</li>
            </ul>
            <p className="mt-3">권리 행사는 아래 개인정보 보호책임자에게 이메일로 요청하실 수 있습니다.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. 개인정보 보호책임자</h2>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p><strong className="text-white">책임자</strong>: 오늘의 운세 운영팀</p>
              <p className="mt-1"><strong className="text-white">이메일</strong>: <a href="mailto:dhcho0607@gmail.com" className="text-purple-400">dhcho0607@gmail.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. 방침 변경</h2>
            <p>본 개인정보처리방침은 법령 및 서비스 변경에 따라 수정될 수 있으며, 변경 시 사이트 공지를 통해 안내합니다.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
