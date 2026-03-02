import Link from 'next/link';

export const metadata = {
  title: '문의하기 | 오늘의 운세',
  description: '오늘의 운세 서비스 문의하기',
};

export default function ContactPage() {
  return (
    <div style={{ background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)', minHeight: '100vh' }}>
      <div className="max-w-2xl mx-auto px-6 py-16 text-white/80">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">← 홈으로</Link>
        <h1 className="text-3xl font-bold text-white mb-2">문의하기</h1>
        <p className="text-white/40 text-sm mb-10">궁금한 점이나 불편한 사항을 알려주세요.</p>

        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold mb-4">📧 이메일 문의</h2>
            <p className="text-sm mb-2">아래 이메일로 문의 주시면 영업일 기준 2-3일 내에 답변드립니다.</p>
            <a
              href="mailto:contact@fortune-site.com"
              className="text-purple-400 hover:text-purple-300 font-medium text-lg"
            >
              contact@fortune-site.com
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold mb-4">❓ 자주 묻는 질문</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white font-medium">Q. 운세가 매일 바뀌나요?</p>
                <p className="mt-1">A. 네, AI가 오늘 날짜를 기준으로 매일 새로운 운세를 생성합니다.</p>
              </div>
              <div>
                <p className="text-white font-medium">Q. 개인정보가 저장되나요?</p>
                <p className="mt-1">A. 아니요. 입력하신 생년월일은 운세 생성 후 즉시 파기되며 저장되지 않습니다.</p>
              </div>
              <div>
                <p className="text-white font-medium">Q. 운세는 얼마나 정확한가요?</p>
                <p className="mt-1">A. 본 서비스의 운세는 AI가 생성한 오락적 콘텐츠로, 실제 미래를 예측하지 않습니다. 재미로 즐겨주세요!</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold mb-2">🛡️ 개인정보 관련 문의</h2>
            <p className="text-sm">개인정보 열람·삭제·처리 정지 요청은 이메일로 접수해 주세요.</p>
            <p className="text-sm mt-1">개인정보 보호책임자: 오늘의 운세 운영팀</p>
          </div>
        </div>
      </div>
    </div>
  );
}
