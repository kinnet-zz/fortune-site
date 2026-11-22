'use client';

export const runtime = 'edge';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { DAILY_ZODIACS, getTodayKST } from '@/lib/dailyHoroscope';
import ConstellationIcon, { type ZodiacSlug } from '@/components/Constellation';
import { useLang } from '@/lib/useLang';
import { t, type Lang } from '@/lib/i18n';

type ScoreMap = Record<string, { score: number; summary: string; luckyColor: string }>;

const COPY: Record<Lang, {
  backToBlog: string;
  heroAccent: string;
  intro: string;
  todayScore: string;
  luckyColor: string;
  preparing: string;
  detail: string;
  note: string;
  howTitle: string;
  howBody1: string;
  howBody2: string;
  linkHow: string;
  linkZodiac: string;
  linkFortune: string;
}> = {
  ko: {
    backToBlog: '블로그 목록으로',
    heroAccent: '열두 별자리의 오늘',
    intro: '종합운·연애운·금전운·직업운을 별자리별로 확인하세요. 매일 한국 시간 자정을 기준으로 새로운 참고 문장을 제공합니다.',
    todayScore: '오늘의 점수',
    luckyColor: '행운색',
    preparing: '준비 중',
    detail: '자세히 보기',
    note: '✦ 매일 자정(KST) 이후 별자리의 상징과 날짜를 바탕으로 새로운 자기성찰 문장을 제공합니다.',
    howTitle: '오늘의 별자리 운세를 읽는 방법',
    howBody1:
      '자신의 생일이 포함된 별자리를 선택하면 오늘의 종합 흐름과 연애·인간관계, 금전, 직업, 생활 건강 조언을 확인할 수 있습니다. 점수는 하루를 돌아보기 위한 가벼운 지표이며 실제 사건을 예측하지 않습니다.',
    howBody2:
      '결과가 좋을 때는 이미 계획한 행동을 차분히 이어가고, 낮게 나왔을 때는 중요한 결정을 서두르지 않는 자기점검 질문으로 활용해보세요.',
    linkHow: '운세를 건강하게 읽는 법',
    linkZodiac: '12별자리 상세 가이드',
    linkFortune: '생년월일 맞춤 운세',
  },
  en: {
    backToBlog: 'Back to the blog',
    heroAccent: "today's reading for the twelve signs",
    intro: 'See overall, love, money and career fortune for each sign. New reference sentences are provided each day after midnight, Korea time.',
    todayScore: "Today's score",
    luckyColor: 'Lucky colour',
    preparing: 'Preparing',
    detail: 'Read more',
    note: '✦ After midnight (KST) each day, new self-reflection sentences are provided based on the signs and the date.',
    howTitle: 'How to read today\'s horoscope',
    howBody1:
      'Choose the sign that contains your birthday to see today\'s overall flow plus advice on love and relationships, money, work and everyday health. The score is a light indicator for looking back on your day; it does not predict actual events.',
    howBody2:
      'When the result is good, continue with the actions you already planned. When it is low, use it as a check-in question rather than rushing an important decision.',
    linkHow: 'How to read a fortune well',
    linkZodiac: 'Full guide to the 12 signs',
    linkFortune: 'Fortune from your birth date',
  },
  zh: {
    backToBlog: '返回博客列表',
    heroAccent: '十二星座的今天',
    intro: '按星座查看综合运、爱情运、财运与事业运。每天韩国时间午夜之后提供新的参考句子。',
    todayScore: '今日分数',
    luckyColor: '幸运色',
    preparing: '准备中',
    detail: '查看详情',
    note: '✦ 每天午夜（KST）之后，依据星座的象征与日期提供新的自省句子。',
    howTitle: '如何读懂今日星座运势',
    howBody1:
      '选择包含自己生日的星座，即可查看今天的整体走向，以及爱情与人际关系、金钱、工作、日常健康的建议。分数只是回看一天的轻指标，并不预测实际事件。',
    howBody2: '结果好时，平静地继续已计划的行动；结果偏低时，把它当作自省提问，不要急于做重要决定。',
    linkHow: '如何健康地看待运势',
    linkZodiac: '十二星座详细指南',
    linkFortune: '按生日查看运势',
  },
  ja: {
    backToBlog: 'ブログ一覧へ',
    heroAccent: '十二星座の今日',
    intro: '総合運・恋愛運・金運・仕事運を星座ごとに確認できます。毎日、韓国時間の0時を基準に新しい参考の文章をお届けします。',
    todayScore: '今日のスコア',
    luckyColor: 'ラッキーカラー',
    preparing: '準備中',
    detail: '詳しく見る',
    note: '✦ 毎日0時（KST）以降、星座の象徴と日付をもとに新しい自己省察の文章を提供します。',
    howTitle: '今日の星座運勢の読み方',
    howBody1:
      '自分の誕生日を含む星座を選ぶと、今日の全体的な流れと、恋愛・人間関係、お金、仕事、生活の健康についての助言を確認できます。スコアは一日を振り返るための軽い指標で、実際の出来事を予測するものではありません。',
    howBody2:
      '結果が良いときは、すでに計画した行動を落ち着いて続けましょう。低いときは、大切な決断を急がないための自己点検の問いとして使ってみてください。',
    linkHow: '運勢を健全に読む方法',
    linkZodiac: '12星座の詳しいガイド',
    linkFortune: '生年月日から見る運勢',
  },
};

const WEEKDAYS: Record<Lang, string[]> = {
  ko: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  zh: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  ja: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
};

function formatDate(iso: string, lang: Lang) {
  const [y, m, d] = iso.split('-').map(Number);
  const weekdayIndex = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
  const weekday = WEEKDAYS[lang][weekdayIndex];
  if (lang === 'ko') return { main: `${y}년 ${m}월 ${d}일`, weekday };
  if (lang === 'ja') return { main: `${y}年${m}月${d}日`, weekday };
  if (lang === 'zh') return { main: `${y}年${m}月${d}日`, weekday };
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return { main: `${months[m - 1]} ${d}, ${y}`, weekday };
}

function ScoreBar({ score }: { score: number }) {
  return (
    <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-[rgba(0,0,0,0.08)]">
      <div
        className="h-1 rounded-full transition-all duration-700"
        style={{
          width: `${score}%`,
          background: 'linear-gradient(90deg, #e6ecf5, #d3b47c)',
          boxShadow: 'none',
        }}
      />
    </div>
  );
}

export default function DailyHoroscopePage() {
  const { lang } = useLang();
  const copy = COPY[lang];
  const tr = t(lang);
  const today = getTodayKST();
  const { main: dateMain, weekday: dateWeekday } = formatDate(today, lang);
  const [scores, setScores] = useState<ScoreMap>({});
  const [loading, setLoading] = useState(true);
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${dateMain} ${tr.zodiacSigns.length} ${copy.heroAccent}`,
    url: 'https://starfate.day/blog/daily',
    inLanguage: lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : lang === 'zh' ? 'zh-CN' : 'en-US',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: DAILY_ZODIACS.map((zodiac, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: `${tr.zodiacSigns[index]} — ${copy.heroAccent}`,
        url: `https://starfate.day/blog/daily/${zodiac.slug}`,
      })),
    },
  };

  useEffect(() => {
    // 12개 동시 fetch. Each language is cached and served separately, so a
    // language switch refetches instead of showing Korean summaries.
    let cancelled = false;
    setLoading(true);
    Promise.allSettled(
      DAILY_ZODIACS.map((z) =>
        fetch(`/api/daily-horoscope?zodiac=${z.slug}&date=${today}&lang=${lang}`)
          .then((r) => r.json() as Promise<{ score: number; summary: string; luckyColor: string; zodiac: string }>)
          .then((data) => ({ slug: z.slug, score: data.score, summary: data.summary, luckyColor: data.luckyColor }))
      )
    ).then((results) => {
      if (cancelled) return;
      const map: ScoreMap = {};
      for (const r of results) {
        if (r.status === 'fulfilled') {
          map[r.value.slug] = { score: r.value.score, summary: r.value.summary, luckyColor: r.value.luckyColor };
        }
      }
      setScores(map);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [today, lang]);

  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />

      {/* 히어로 */}
      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 50% 70% at 50% -10%, rgba(206,220,238,0.2) 0%, transparent 64%)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl px-5 pb-12 pt-10 text-center sm:pt-14">
          <Link href="/blog" className="mb-8 inline-flex min-h-11 items-center gap-2 text-[0.78rem] text-[var(--muted)] transition-colors hover:text-[var(--gold)]">
            <span aria-hidden="true">←</span> {copy.backToBlog}
          </Link>
          <div>
            <span className="eyebrow eyebrow-center mx-auto">Daily horoscope</span>
            <h1 className="mt-5 font-display text-[2.1rem] font-semibold leading-[1.15] text-[var(--ink)] sm:text-[3rem]">
              {dateMain}
              {dateWeekday ? <span className="ml-2 text-[0.55em] font-normal text-[var(--muted)]">{dateWeekday}</span> : null}
              <br />
              <span className="gold-ink italic">{copy.heroAccent}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-[0.88rem] leading-7 text-[var(--muted)] text-keep-all">
              {copy.intro}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
          {DAILY_ZODIACS.map((z, index) => {
            const data = scores[z.slug];
            const score = data?.score;
            return (
              <Link
                key={z.slug}
                href={`/blog/daily/${z.slug}`}
                className="zodiac-card card-lift group relative flex flex-col rounded-2xl border border-[var(--line)] bg-[#101620] p-4 hover:border-[rgba(206,220,238,0.45)] hover:bg-[#101620]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[var(--ink)]">
                    <ConstellationIcon slug={z.slug as ZodiacSlug} size={40} strokeWidth={1.2} />
                  </span>
                  <span className="text-[0.55rem] uppercase tracking-[0.22em] text-[var(--muted-2)]">{z.dateRange}</span>
                </div>
                <div className="mt-2 text-[0.92rem] font-semibold text-[var(--ink)]">{tr.zodiacSigns[index]}</div>

                {loading ? (
                  <div className="mt-3 h-8 animate-pulse rounded bg-[#101620]/[0.05]" />
                ) : score !== undefined ? (
                  <>
                    <div className="mt-3 flex items-baseline justify-between">
                      <span className="text-[0.6rem] uppercase tracking-[0.18em] text-[var(--muted-2)]">{copy.todayScore}</span>
                      <span className="font-display text-[1.2rem] font-semibold text-[var(--gold)]">{score}</span>
                    </div>
                    <ScoreBar score={score} />
                    {data.summary && (
                      <p className="mt-2.5 line-clamp-2 text-[0.7rem] leading-5 text-[var(--muted)]">{data.summary}</p>
                    )}
                    {data.luckyColor && (
                      <div className="mt-2 flex items-center gap-1.5 text-[0.62rem] text-[var(--muted-2)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#e6ecf5]" aria-hidden="true" />
                        {copy.luckyColor} · {data.luckyColor}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="mt-3 text-[0.7rem] text-[var(--muted-2)]">{copy.preparing}</div>
                )}

                <span className="mt-3 inline-flex items-center gap-1 text-[0.66rem] font-medium text-[var(--gold)] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  {copy.detail} <span aria-hidden="true">→</span>
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-[rgba(206,220,238,0.32)] bg-[rgba(206,220,238,0.09)] p-6 text-center">
          <p className="text-[0.8rem] leading-6 text-[var(--muted)]">{copy.note}</p>
        </div>

        <section className="card-lux mt-6 space-y-4 rounded-2xl p-6 sm:p-7">
          <h2 className="font-display text-[1.15rem] font-semibold text-[var(--ink)]">{copy.howTitle}</h2>
          <p className="text-[0.82rem] leading-7 text-[var(--muted)] text-keep-all">{copy.howBody1}</p>
          <p className="text-[0.82rem] leading-7 text-[var(--muted)] text-keep-all">{copy.howBody2}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--line)] pt-4 text-[0.76rem]">
            <Link href="/blog/how-to-read-daily-fortune" className="text-[var(--gold)] transition-colors hover:text-[#f2f0ea]">
              {copy.linkHow} →
            </Link>
            <Link href="/zodiac" className="text-[var(--gold)] transition-colors hover:text-[#f2f0ea]">
              {copy.linkZodiac} →
            </Link>
            <Link href="/" className="text-[var(--gold)] transition-colors hover:text-[#f2f0ea]">
              {copy.linkFortune} →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
