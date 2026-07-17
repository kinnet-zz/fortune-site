export const runtime = 'edge';

import type { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';

export const metadata: Metadata = {
  title: 'StarFate | 별자리·12지 운세 해석 가이드',
  description: '서양 별자리와 동양 12지를 함께 읽는 운세 해석 가이드. 오늘의 운세 도구, 별자리 백과, 12지 설명, 자기성찰용 해석 예시를 제공합니다.',
  alternates: { canonical: 'https://starfate.day' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '오늘의 운세는 무료인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '네. 회원가입이나 결제 없이 무료로 이용할 수 있습니다.' },
    },
    {
      '@type': 'Question',
      name: '운세는 매일 바뀌나요?',
      acceptedAnswer: { '@type': 'Answer', text: '오늘 날짜를 기준으로 별자리와 띠의 상징을 다시 조합해 매일 다른 참고 문장을 제공합니다.' },
    },
    {
      '@type': 'Question',
      name: '생년월일 정보가 저장되나요?',
      acceptedAnswer: { '@type': 'Answer', text: '입력한 생년월일은 운세 생성에만 사용되며 별도 프로필로 저장하지 않습니다.' },
    },
    {
      '@type': 'Question',
      name: '운세 결과는 얼마나 정확한가요?',
      acceptedAnswer: { '@type': 'Answer', text: '운세는 오락과 자기성찰을 위한 참고 콘텐츠이며 실제 미래를 예측하지 않습니다.' },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
