'use client';

import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import { infoCopy } from '@/lib/info-copy';
import { TAROT_CARDS } from '@/lib/tarot-data';

const ROMAN = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI'];

export function TarotInfo() {
  const { lang } = useLang();
  const copy = infoCopy(lang);

  return (
    <div className="max-w-2xl mx-auto px-6 pb-20 space-y-8">
      <div style={{ background: '#101620', border: '1px solid rgba(184,199,220,0.14)' }} className="rounded-2xl p-6">
        <h2 className="text-[#f2f0ea] font-bold text-base mb-3">{copy.tarot.title}</h2>
        {copy.tarot.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`text-[#9aa3b2] text-sm leading-relaxed ${index < copy.tarot.paragraphs.length - 1 ? 'mb-3' : ''} text-keep-all`}
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div style={{ background: '#101620', border: '1px solid rgba(184,199,220,0.14)' }} className="rounded-2xl p-6">
        <h2 className="text-[#f2f0ea] font-bold text-base mb-5">{copy.tarot.cardsTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TAROT_CARDS.map((card, index) => (
            <div key={card.id} className="rounded-xl p-3" style={{ background: 'rgba(230,236,245,0.035)', border: '1px solid rgba(184,199,220,0.12)' }}>
              <div className="flex items-baseline justify-between gap-2">
                <div className="min-w-0">
                  <div className="text-[0.66rem] font-semibold text-[#9aa3b2]">{ROMAN[index]}</div>
                  <div className="mt-0.5 text-[0.8rem] font-semibold text-[#f2f0ea]">{card.name[lang]}</div>
                </div>
                <div className="text-[0.6rem] text-[#9aa3b2]">{card.emoji}</div>
              </div>
              <p className="text-[#9aa3b2] text-xs leading-relaxed pt-1.5">{card.keyword[lang]}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: '#101620', border: '1px solid rgba(184,199,220,0.14)' }} className="rounded-2xl p-6">
        <h2 className="text-[#f2f0ea] font-bold text-base mb-3">{copy.tarot.tipsTitle}</h2>
        <div className="space-y-2 text-sm text-[#9aa3b2]">
          {copy.tarot.tips.map((tip) => (
            <div key={tip.title} className="flex gap-2">
              <span className="text-[#8fa2bb] flex-shrink-0">▸</span>
              <span className="text-keep-all">
                <strong className="text-[#ccd2dc]">{tip.title}:</strong> {tip.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PastLifeInfo() {
  const { lang } = useLang();
  const copy = infoCopy(lang);

  return (
    <div className="space-y-5 mt-10">
      <div className="rounded-2xl p-6" style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}>
        <h2 className="text-[#f2f0ea] font-bold text-base mb-3">{copy.pastLife.whatTitle}</h2>
        {copy.pastLife.whatParagraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`text-[#9aa3b2] text-sm leading-relaxed ${index < copy.pastLife.whatParagraphs.length - 1 ? 'mb-3' : ''} text-keep-all`}
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="rounded-2xl p-6" style={{ background: 'rgba(206,220,238,0.07)', border: '1px solid rgba(206,220,238,0.15)' }}>
        <h2 className="text-[#f2f0ea] font-bold text-base mb-3">{copy.pastLife.linkTitle}</h2>
        {copy.pastLife.linkParagraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`text-[#9aa3b2] text-sm leading-relaxed ${index < copy.pastLife.linkParagraphs.length - 1 ? 'mb-3' : ''} text-keep-all`}
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="rounded-2xl p-5" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.05)' }}>
        <h2 className="text-[#f2f0ea] font-bold text-sm mb-3">{copy.pastLife.typesTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#9aa3b2]">
          {copy.pastLife.types.map((item) => (
            <div key={item.title} className="rounded-xl p-3" style={{ background: 'rgba(206,220,238,0.08)', border: '1px solid rgba(206,220,238,0.12)' }}>
              <div className="text-xl mb-1">{item.emoji}</div>
              <div className="text-[#bdc5d1] font-medium mb-1">{item.title}</div>
              <div className="leading-relaxed text-keep-all">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function NumerologyInfo() {
  const { lang } = useLang();
  const copy = infoCopy(lang);

  return (
    <div className="max-w-2xl mx-auto px-6 pb-20 space-y-6">
      <div className="rounded-2xl p-6" style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}>
        <h2 className="text-[#f2f0ea] font-bold text-base mb-3">{copy.numerology.title}</h2>
        {copy.numerology.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`text-[#bdc5d1] text-sm leading-relaxed ${index < copy.numerology.paragraphs.length - 1 ? 'mb-3' : ''} text-keep-all`}
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="rounded-2xl p-6" style={{ background: 'rgba(206,220,238,0.07)', border: '1px solid rgba(206,220,238,0.15)' }}>
        <h2 className="text-[#f2f0ea] font-bold text-base mb-4">{copy.numerology.numbersTitle}</h2>
        <div className="grid grid-cols-3 gap-3">
          {copy.numerology.numbers.map(({ n, meaning, color }) => (
            <div key={n} className="rounded-xl p-3 text-center" style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}>
              <div className="text-2xl font-black mb-1" style={{ color }}>{n}</div>
              <div className="text-[#bdc5d1] text-xs text-keep-all">{meaning}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl p-5 text-center" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.05)' }}>
        <p className="text-[#9aa3b2] text-xs mb-3">{copy.common.ctaNote}</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-full font-bold text-[#101620] text-sm"
          style={{ background: 'linear-gradient(135deg, #e6ecf5 0%, #f4f8fd 100%)' }}
        >
          {copy.common.ctaButton} →
        </Link>
      </div>
    </div>
  );
}

export function IdolAgencyInfo() {
  const { lang } = useLang();
  const copy = infoCopy(lang);

  return (
    <div className="max-w-2xl mx-auto px-6 pb-20 space-y-6">
      <div className="rounded-2xl p-6" style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}>
        <h2 className="text-[#f2f0ea] font-bold text-base mb-3">{copy.idol.title}</h2>
        {copy.idol.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`text-[#bdc5d1] text-sm leading-relaxed ${index < copy.idol.paragraphs.length - 1 ? 'mb-3' : ''} text-keep-all`}
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="space-y-4">
        {copy.idol.agencies.map((agency) => (
          <div key={agency.name} className="rounded-2xl p-5" style={{ background: 'rgba(0,0,0,0.03)', border: `1px solid ${agency.color}25` }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{agency.emoji}</span>
              <div>
                <h3 className="text-[#f2f0ea] font-bold text-sm">{agency.name}</h3>
                <div className="flex flex-wrap gap-2 mt-0.5">
                  <span className="text-[#9aa3b2] text-xs">{copy.idol.foundedLabel} {agency.founded}</span>
                  <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: `${agency.color}18`, color: agency.color }}>
                    {agency.style}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-[#bdc5d1] text-xs leading-relaxed mb-2 text-keep-all">{agency.desc}</p>
            <p className="text-[#9aa3b2] text-xs text-keep-all">
              <span className="text-[#9aa3b2]">{copy.idol.artistsLabel}</span> {agency.artists}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl p-5 text-center" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.05)' }}>
        <p className="text-[#9aa3b2] text-xs mb-3">{copy.common.ctaNote}</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-full font-bold text-[#101620] text-sm"
          style={{ background: 'linear-gradient(135deg, #e6ecf5 0%, #f4f8fd 100%)' }}
        >
          {copy.common.ctaButton} →
        </Link>
      </div>
    </div>
  );
}
