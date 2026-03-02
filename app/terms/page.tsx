import Link from 'next/link';

export const metadata = {
  title: '이용약관 | 오늘의 운세',
  description: '오늘의 운세 서비스 이용약관',
};

export default function TermsPage() {
  return (
    <div style={{ background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">← 홈으로</Link>
        <h1 className="text-3xl font-bold text-white mb-2">이용약관</h1>
        <p className="text-white/40 text-sm mb-10">최종 수정일: 2025년 3월 3일</p>

        <div className="space-y-10 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">제1조 (목적)</h2>
            <p>본 약관은 오늘의 운세(이하 "서비스")가 제공하는 운세 서비스의 이용 조건 및 절차, 서비스 이용자와 서비스 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">제2조 (서비스 내용)</h2>
            <p>서비스는 이용자가 입력한 생년월일을 기반으로 별자리·띠를 계산하고, AI를 활용하여 오늘의 운세를 생성하여 제공합니다. 운세는 오락·참고 목적으로만 제공되며 어떠한 법적 책임도 지지 않습니다.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">제3조 (면책 조항)</h2>
            <ul className="space-y-2 pl-4 list-disc">
              <li>서비스가 제공하는 운세 정보는 AI가 생성한 오락적 콘텐츠로, 실제 미래를 예측하거나 보장하지 않습니다.</li>
              <li>운세 정보를 근거로 한 이용자의 결정 및 행동에 대해 서비스는 책임을 지지 않습니다.</li>
              <li>서비스는 천재지변, 시스템 장애 등 불가항력적 사유로 인한 서비스 중단에 대해 책임을 지지 않습니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">제4조 (광고)</h2>
            <p>서비스는 Google AdSense 등 제3자 광고 네트워크를 통해 광고를 게재할 수 있습니다. 광고 콘텐츠는 광고주의 책임 하에 제공되며, 서비스는 광고 내용에 대해 책임을 지지 않습니다.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">제5조 (저작권)</h2>
            <p>서비스가 생성한 운세 콘텐츠의 저작권은 서비스에 귀속됩니다. 이용자는 개인적인 용도로 공유할 수 있으나, 상업적 목적으로 무단 복제·배포하는 행위는 금지됩니다.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">제6조 (약관 변경)</h2>
            <p>서비스는 필요한 경우 본 약관을 변경할 수 있으며, 변경된 약관은 사이트 내 공지를 통해 효력이 발생합니다.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">제7조 (준거법)</h2>
            <p>본 약관은 대한민국 법령에 따라 해석되며, 서비스 이용과 관련한 분쟁은 대한민국 법원을 관할로 합니다.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
