'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useLang } from '@/lib/useLang';

const content = {
  ko: {
    back: '← 홈으로',
    title: '문의하기',
    subtitle: '궁금한 점이나 불편한 사항을 알려주세요.',
    emailTitle: '📧 이메일 문의',
    emailDesc: '아래 이메일로 문의 주시면 영업일 기준 2-3일 내에 답변드립니다.',
    faqTitle: '❓ 자주 묻는 질문',
    faq: [
      { q: '운세가 매일 바뀌나요?', a: '네, AI가 오늘 날짜를 기준으로 매일 새로운 운세를 생성합니다.' },
      { q: '개인정보가 저장되나요?', a: '아니요. 입력하신 생년월일은 운세 생성 후 즉시 파기되며 저장되지 않습니다.' },
      { q: '운세는 얼마나 정확한가요?', a: '본 서비스의 운세는 AI가 생성한 오락적 콘텐츠로, 실제 미래를 예측하지 않습니다. 재미로 즐겨주세요!' },
    ],
    privacyTitle: '🛡️ 개인정보 관련 문의',
    privacyDesc: '개인정보 열람·삭제·처리 정지 요청은 이메일로 접수해 주세요.',
    privacyManager: '개인정보 보호책임자: 오늘의 운세 운영팀',
  },
  en: {
    back: '← Back to Home',
    title: 'Contact',
    subtitle: 'Feel free to reach out with any questions or concerns.',
    emailTitle: '📧 Email Us',
    emailDesc: "Send us an email and we'll get back to you within 2–3 business days.",
    faqTitle: '❓ FAQ',
    faq: [
      { q: 'Does the fortune change every day?', a: "Yes, our AI generates a new fortune daily based on today's date." },
      { q: 'Is my personal information stored?', a: 'No. Your birth date is used only to generate the fortune and is immediately discarded.' },
      { q: 'How accurate is the fortune?', a: 'Our fortune is AI-generated entertainment content and does not predict actual future events. Enjoy it for fun!' },
    ],
    privacyTitle: '🛡️ Privacy Inquiries',
    privacyDesc: 'For personal data access, deletion, or processing halt requests, please contact us by email.',
    privacyManager: 'Data Protection Officer: Fortune Teller Operations Team',
  },
  zh: {
    back: '← 返回首页',
    title: '联系我们',
    subtitle: '如有任何问题或建议，请随时联系我们。',
    emailTitle: '📧 电子邮件',
    emailDesc: '请发送电子邮件，我们将在2–3个工作日内回复您。',
    faqTitle: '❓ 常见问题',
    faq: [
      { q: '运势每天都会变吗？', a: 'AI会根据当天日期每天生成新的运势。' },
      { q: '个人信息会被保存吗？', a: '不会。您输入的生日仅用于生成运势，生成后立即销毁，不会被储存。' },
      { q: '运势有多准确？', a: '本服务的运势是AI生成的娱乐内容，不预测实际未来。请当作娱乐享用！' },
    ],
    privacyTitle: '🛡️ 隐私相关咨询',
    privacyDesc: '如需查阅、删除或停止处理个人信息，请通过电子邮件联系我们。',
    privacyManager: '个人信息保护负责人：今日运势运营团队',
  },
  ja: {
    back: '← ホームへ',
    title: 'お問い合わせ',
    subtitle: 'ご質問やご不明な点がございましたら、お気軽にご連絡ください。',
    emailTitle: '📧 メールでのお問い合わせ',
    emailDesc: '以下のメールアドレスにご連絡いただければ、2〜3営業日以内にご返答いたします。',
    faqTitle: '❓ よくある質問',
    faq: [
      { q: '運勢は毎日変わりますか？', a: 'はい、AIが今日の日付に基づいて毎日新しい運勢を生成します。' },
      { q: '個人情報は保存されますか？', a: 'いいえ。入力された生年月日は運勢生成後に即時破棄され、保存されません。' },
      { q: '運勢はどのくらい正確ですか？', a: '本サービスの運勢はAIが生成したエンタメコンテンツで、実際の未来を予測するものではありません。楽しんでご利用ください！' },
    ],
    privacyTitle: '🛡️ 個人情報に関するお問い合わせ',
    privacyDesc: '個人情報の閲覧・削除・処理停止のご要望は、メールにてお受けします。',
    privacyManager: '個人情報保護責任者：今日の運勢 運営チーム',
  },
};

const siteName = { ko: '오늘의 운세', en: 'Fortune Teller', zh: '今日运势', ja: '今日の運勢' };

export default function ContactPage() {
  const { lang } = useLang();
  const c = content[lang];

  useEffect(() => {
    document.title = `${c.title} | ${siteName[lang]}`;
  }, [lang, c.title]);

  return (
    <div style={{ background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)', minHeight: '100vh' }}>
      <div className="max-w-2xl mx-auto px-6 py-16 text-white/80">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">{c.back}</Link>
        <h1 className="text-3xl font-bold text-white mb-2">{c.title}</h1>
        <p className="text-white/40 text-sm mb-10">{c.subtitle}</p>
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold mb-4">{c.emailTitle}</h2>
            <p className="text-sm mb-2">{c.emailDesc}</p>
            <a href="mailto:dhcho0607@gmail.com" className="text-purple-400 hover:text-purple-300 font-medium text-lg">
              dhcho0607@gmail.com
            </a>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold mb-4">{c.faqTitle}</h2>
            <div className="space-y-4 text-sm">
              {c.faq.map((item, i) => (
                <div key={i}>
                  <p className="text-white font-medium">Q. {item.q}</p>
                  <p className="mt-1">A. {item.a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold mb-2">{c.privacyTitle}</h2>
            <p className="text-sm">{c.privacyDesc}</p>
            <p className="text-sm mt-1">{c.privacyManager}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
