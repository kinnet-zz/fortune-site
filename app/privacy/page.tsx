'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useLang } from '@/lib/useLang';

const content = {
  ko: {
    back: '← 홈으로',
    title: '개인정보처리방침',
    lastUpdated: '최종 수정일: 2025년 3월 3일',
    s1Title: '1. 개인정보 수집 항목 및 목적',
    s1Intro: '오늘의 운세(이하 "서비스")는 운세 서비스 제공을 위해 아래와 같이 최소한의 정보를 수집합니다.',
    s1Items: [
      { label: '생년월일', desc: ': 별자리 및 띠 계산, 운세 생성 목적으로 활용되며 서버에 저장되지 않습니다.' },
      { label: '접속 로그(IP, 브라우저 정보)', desc: ': 서비스 안정성 유지 및 부정 이용 방지 목적으로 Cloudflare 서버에 자동 수집됩니다.' },
      { label: '쿠키 및 광고 데이터', desc: ': Google AdSense를 통해 맞춤 광고 제공 목적으로 수집될 수 있습니다.' },
    ],
    s2Title: '2. 개인정보 보유 및 이용 기간',
    s2Body: '생년월일은 운세 생성 후 즉시 파기되며 별도로 저장되지 않습니다. 접속 로그는 Cloudflare 정책에 따라 최대 30일간 보관 후 자동 삭제됩니다.',
    s3Title: '3. 개인정보 제3자 제공',
    s3Intro: '서비스는 이용자의 개인정보를 원칙적으로 제3자에게 제공하지 않습니다. 다만 아래의 경우는 예외입니다.',
    s3Items: ['이용자가 사전에 동의한 경우', '법령에 의거하거나 수사기관의 요청이 있는 경우'],
    s4Title: '4. 개인정보 처리 위탁',
    s4ColA: '수탁 업체',
    s4ColB: '위탁 업무',
    s4Rows: [
      ['Google (Google AI)', '운세 텍스트 생성 (AI 처리)'],
      ['Cloudflare, Inc.', '서버 호스팅 및 로그 관리'],
      ['Google AdSense', '광고 서비스 제공'],
    ],
    s5Title: '5. 쿠키(Cookie) 사용',
    s5Body: '서비스는 Google AdSense 광고 제공을 위해 쿠키를 사용합니다. 쿠키는 이용자의 브라우저 설정에서 거부할 수 있으나, 일부 서비스 이용이 제한될 수 있습니다.',
    s5LinkPrefix: 'Google의 광고 쿠키 사용 방식에 대한 자세한 내용은 ',
    s5LinkText: 'Google 광고 정책',
    s5LinkSuffix: '을 참고하세요.',
    s6Title: '6. 이용자의 권리',
    s6Intro: '이용자는 언제든지 아래의 권리를 행사할 수 있습니다.',
    s6Items: ['개인정보 열람 요청', '개인정보 삭제 요청', '개인정보 처리 정지 요청'],
    s6Outro: '권리 행사는 아래 개인정보 보호책임자에게 이메일로 요청하실 수 있습니다.',
    s7Title: '7. 개인정보 보호책임자',
    s7ManagerLabel: '책임자',
    s7ManagerValue: '오늘의 운세 운영팀',
    s7EmailLabel: '이메일',
    s8Title: '8. 방침 변경',
    s8Body: '본 개인정보처리방침은 법령 및 서비스 변경에 따라 수정될 수 있으며, 변경 시 사이트 공지를 통해 안내합니다.',
  },
  en: {
    back: '← Back to Home',
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: March 3, 2025',
    s1Title: '1. Personal Information Collected and Purpose',
    s1Intro: 'Fortune Teller (hereinafter "Service") collects only the minimum necessary information to provide its fortune service.',
    s1Items: [
      { label: 'Date of birth', desc: ': Used to calculate zodiac sign and Chinese zodiac, and to generate fortunes. Not stored on our servers.' },
      { label: 'Access logs (IP, browser info)', desc: ': Automatically collected by Cloudflare servers to maintain service stability and prevent abuse.' },
      { label: 'Cookies and ad data', desc: ': May be collected via Google AdSense to serve personalized advertisements.' },
    ],
    s2Title: '2. Retention Period',
    s2Body: 'Date of birth is immediately discarded after fortune generation and is not stored separately. Access logs are automatically deleted after a maximum of 30 days in accordance with Cloudflare\'s policy.',
    s3Title: '3. Sharing with Third Parties',
    s3Intro: 'The Service does not share users\' personal information with third parties as a general rule. Exceptions include:',
    s3Items: ['When the user has given prior consent', 'When required by law or requested by investigative authorities'],
    s4Title: '4. Data Processing Delegation',
    s4ColA: 'Processor',
    s4ColB: 'Task',
    s4Rows: [
      ['Google (Google AI)', 'Fortune text generation (AI processing)'],
      ['Cloudflare, Inc.', 'Server hosting and log management'],
      ['Google AdSense', 'Ad service delivery'],
    ],
    s5Title: '5. Use of Cookies',
    s5Body: 'The Service uses cookies to serve Google AdSense ads. You may decline cookies via your browser settings, but some features may be limited.',
    s5LinkPrefix: 'For more information on how Google uses advertising cookies, see the ',
    s5LinkText: 'Google Advertising Policy',
    s5LinkSuffix: '.',
    s6Title: '6. User Rights',
    s6Intro: 'Users may exercise the following rights at any time:',
    s6Items: ['Request access to personal information', 'Request deletion of personal information', 'Request restriction of processing'],
    s6Outro: 'To exercise these rights, please contact the Privacy Officer below by email.',
    s7Title: '7. Privacy Officer',
    s7ManagerLabel: 'Officer',
    s7ManagerValue: 'Fortune Teller Operations Team',
    s7EmailLabel: 'Email',
    s8Title: '8. Policy Changes',
    s8Body: 'This Privacy Policy may be amended in accordance with changes in laws or the Service. Updates will be announced via site notice.',
  },
  zh: {
    back: '← 返回首页',
    title: '隐私政策',
    lastUpdated: '最后更新：2025年3月3日',
    s1Title: '1. 收集的个人信息及目的',
    s1Intro: '今日运势（以下简称"服务"）为提供运势服务，仅收集以下最少量信息。',
    s1Items: [
      { label: '出生日期', desc: '：用于计算星座和生肖、生成运势，不存储在服务器上。' },
      { label: '访问日志（IP、浏览器信息）', desc: '：由Cloudflare服务器自动收集，用于维护服务稳定性及防止滥用。' },
      { label: 'Cookie及广告数据', desc: '：可能通过Google AdSense收集，用于提供个性化广告。' },
    ],
    s2Title: '2. 个人信息保留期限',
    s2Body: '出生日期在生成运势后立即销毁，不单独存储。访问日志根据Cloudflare政策最多保留30天后自动删除。',
    s3Title: '3. 向第三方提供个人信息',
    s3Intro: '服务原则上不向第三方提供用户个人信息。以下情况除外：',
    s3Items: ['用户事先同意的情况', '依据法律法规或应调查机关要求的情况'],
    s4Title: '4. 个人信息处理委托',
    s4ColA: '受托方',
    s4ColB: '委托事务',
    s4Rows: [
      ['Google (Google AI)', '运势文本生成（AI处理）'],
      ['Cloudflare, Inc.', '服务器托管及日志管理'],
      ['Google AdSense', '广告服务提供'],
    ],
    s5Title: '5. Cookie使用',
    s5Body: '服务使用Cookie提供Google AdSense广告。您可以在浏览器设置中拒绝Cookie，但部分服务功能可能受限。',
    s5LinkPrefix: '有关Google广告Cookie使用方式的详细信息，请参阅',
    s5LinkText: 'Google广告政策',
    s5LinkSuffix: '。',
    s6Title: '6. 用户权利',
    s6Intro: '用户可随时行使以下权利：',
    s6Items: ['申请查阅个人信息', '申请删除个人信息', '申请停止处理个人信息'],
    s6Outro: '如需行使上述权利，请通过电子邮件联系以下隐私保护负责人。',
    s7Title: '7. 隐私保护负责人',
    s7ManagerLabel: '负责人',
    s7ManagerValue: '今日运势运营团队',
    s7EmailLabel: '电子邮件',
    s8Title: '8. 政策变更',
    s8Body: '本隐私政策可能因法律法规或服务变更而修订，变更时将通过网站公告告知。',
  },
  ja: {
    back: '← ホームへ',
    title: 'プライバシーポリシー',
    lastUpdated: '最終更新日：2025年3月3日',
    s1Title: '1. 収集する個人情報と目的',
    s1Intro: '今日の運勢（以下「サービス」）は、運勢サービスの提供のため、以下の最小限の情報を収集します。',
    s1Items: [
      { label: '生年月日', desc: '：星座および干支の計算、運勢生成に使用され、サーバーには保存されません。' },
      { label: 'アクセスログ（IP・ブラウザ情報）', desc: '：サービスの安定性維持および不正利用防止のため、Cloudflareサーバーに自動収集されます。' },
      { label: 'Cookieおよび広告データ', desc: '：Google AdSenseを通じてパーソナライズ広告の配信を目的として収集される場合があります。' },
    ],
    s2Title: '2. 個人情報の保持期間',
    s2Body: '生年月日は運勢生成後に即座に破棄され、別途保存されません。アクセスログはCloudflareのポリシーに従い、最大30日間保管後に自動削除されます。',
    s3Title: '3. 第三者への個人情報提供',
    s3Intro: 'サービスは原則としてユーザーの個人情報を第三者に提供しません。ただし、以下の場合は例外です。',
    s3Items: ['ユーザーが事前に同意した場合', '法令に基づく場合または捜査機関からの要請がある場合'],
    s4Title: '4. 個人情報処理の委託',
    s4ColA: '受託業者',
    s4ColB: '委託業務',
    s4Rows: [
      ['Google (Google AI)', '運勢テキスト生成（AI処理）'],
      ['Cloudflare, Inc.', 'サーバーホスティングおよびログ管理'],
      ['Google AdSense', '広告サービスの提供'],
    ],
    s5Title: '5. Cookieの使用',
    s5Body: 'サービスはGoogle AdSense広告の提供のためにCookieを使用します。Cookieはブラウザの設定で拒否できますが、一部のサービス機能が制限される場合があります。',
    s5LinkPrefix: 'GoogleによるCookieの使用方法の詳細については、',
    s5LinkText: 'Google広告ポリシー',
    s5LinkSuffix: 'をご参照ください。',
    s6Title: '6. ユーザーの権利',
    s6Intro: 'ユーザーはいつでも以下の権利を行使することができます。',
    s6Items: ['個人情報の閲覧請求', '個人情報の削除請求', '個人情報処理の停止請求'],
    s6Outro: '権利の行使は、以下のプライバシー責任者にメールでご連絡ください。',
    s7Title: '7. プライバシー責任者',
    s7ManagerLabel: '責任者',
    s7ManagerValue: '今日の運勢 運営チーム',
    s7EmailLabel: 'メール',
    s8Title: '8. ポリシーの変更',
    s8Body: '本プライバシーポリシーは法令およびサービスの変更に応じて修正される場合があり、変更時はサイト上の告知にてお知らせします。',
  },
};

const siteName = { ko: '오늘의 운세', en: 'Fortune Teller', zh: '今日运势', ja: '今日の運勢' };

export default function PrivacyPage() {
  const { lang } = useLang();
  const c = content[lang];

  useEffect(() => {
    document.title = `${c.title} | ${siteName[lang]}`;
  }, [lang, c.title]);

  return (
    <div style={{ background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">{c.back}</Link>
        <h1 className="text-3xl font-bold text-white mb-2">{c.title}</h1>
        <p className="text-white/40 text-sm mb-10">{c.lastUpdated}</p>

        <div className="space-y-10 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">{c.s1Title}</h2>
            <p>{c.s1Intro}</p>
            <ul className="mt-3 space-y-2 pl-4 list-disc">
              {c.s1Items.map((item, i) => (
                <li key={i}><strong className="text-white">{item.label}</strong>{item.desc}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">{c.s2Title}</h2>
            <p>{c.s2Body}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">{c.s3Title}</h2>
            <p>{c.s3Intro}</p>
            <ul className="mt-3 space-y-2 pl-4 list-disc">
              {c.s3Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">{c.s4Title}</h2>
            <table className="w-full text-sm border border-white/10 rounded-lg overflow-hidden mt-3">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-4 py-2 text-left text-white">{c.s4ColA}</th>
                  <th className="px-4 py-2 text-left text-white">{c.s4ColB}</th>
                </tr>
              </thead>
              <tbody>
                {c.s4Rows.map(([a, b], i) => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="px-4 py-2">{a}</td>
                    <td className="px-4 py-2">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">{c.s5Title}</h2>
            <p>{c.s5Body}</p>
            <p className="mt-2">
              {c.s5LinkPrefix}
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">{c.s5LinkText}</a>
              {c.s5LinkSuffix}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">{c.s6Title}</h2>
            <p>{c.s6Intro}</p>
            <ul className="mt-3 space-y-2 pl-4 list-disc">
              {c.s6Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="mt-3">{c.s6Outro}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">{c.s7Title}</h2>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p><strong className="text-white">{c.s7ManagerLabel}</strong>: {c.s7ManagerValue}</p>
              <p className="mt-1"><strong className="text-white">{c.s7EmailLabel}</strong>: <a href="mailto:dhcho0607@gmail.com" className="text-purple-400">dhcho0607@gmail.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">{c.s8Title}</h2>
            <p>{c.s8Body}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
