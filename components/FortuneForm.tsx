'use client';

import { useState, useEffect, FormEvent } from 'react';
import { type Lang, t } from '@/lib/i18n';

interface FortuneFormProps {
  onSubmit: (birthDate: string, gender: string) => void;
  isLoading: boolean;
  lang: Lang;
}

export default function FortuneForm({ onSubmit, isLoading, lang }: FortuneFormProps) {
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [today, setToday] = useState('');
  const [shuffledSigns, setShuffledSigns] = useState<string[]>([]);

  const minDate = '1900-01-01';
  const tr = t(lang);

  useEffect(() => {
    setToday(new Date().toISOString().split('T')[0]);
    const signs = tr.zodiacSigns;
    const shuffled = [...signs].sort(() => Math.random() - 0.5);
    setShuffledSigns(shuffled.slice(0, 4));
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (birthDate && gender && !isLoading) {
      onSubmit(birthDate, gender);
    }
  };

  const isValid = birthDate.length > 0 && gender.length > 0;

  return (
    <div className="w-full max-w-md mx-auto">
      {/* 헤더 영역 */}
      <div className="text-center mb-8">
        {/* 별자리 기호 장식 */}
        <div className="flex justify-center items-center gap-4 mb-5">
          {['♈','♓','♒'].map((sign, i) => (
            <span
              key={sign}
              className="text-purple-300/40 font-light select-none"
              style={{
                fontSize: `${18 + i * 4}px`,
                animation: `twinkle ${3 + i * 0.6}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {sign}
            </span>
          ))}
        </div>

        <h2 className="font-serif-display text-3xl font-bold mb-2 shimmer-text leading-tight tracking-wide">
          {tr.formTitle}
        </h2>
      </div>

      {/* 카드 */}
      <div
        className="relative rounded-3xl p-[1px]"
        style={{
          background: 'linear-gradient(135deg, rgba(192,132,252,0.4), rgba(99,102,241,0.2), rgba(236,72,153,0.3))',
          boxShadow: '0 0 40px rgba(139,92,246,0.15), 0 0 80px rgba(139,92,246,0.08)',
        }}
      >
        <div
          className="rounded-3xl p-8"
          style={{
            background: 'linear-gradient(135deg, rgba(10,0,20,0.96) 0%, rgba(20,5,45,0.96) 100%)',
            backdropFilter: 'blur(24px)',
          }}
        >
          {/* 별자리 배경 기호 */}
          <div
            className="absolute top-4 right-6 select-none pointer-events-none font-serif-display"
            style={{ fontSize: '56px', color: 'rgba(192,132,252,0.06)' }}
          >
            ✦
          </div>
          <div
            className="absolute bottom-4 left-6 select-none pointer-events-none font-serif-display"
            style={{ fontSize: '36px', color: 'rgba(99,102,241,0.06)' }}
          >
            ✦
          </div>

          <form onSubmit={handleSubmit} className="relative z-10">
            {/* 안내 텍스트 */}
            <div className="mb-6 text-center">
              <p className="text-white/80 text-base font-medium leading-relaxed">
                {tr.formSubtitle}
              </p>
              <p className="text-purple-300/60 text-sm mt-1">
                {tr.formHint}
              </p>
            </div>

            {/* 성별 선택 */}
            <div className="mb-6">
              <label className="block text-purple-200 text-sm font-semibold mb-2 tracking-wide">
                {tr.genderLabel}
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[{ value: '남자', emoji: '♂️', label: tr.male }, { value: '여자', emoji: '♀️', label: tr.female }].map(({ value, emoji, label }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setGender(value)}
                    disabled={isLoading}
                    className="py-3 rounded-2xl font-semibold text-base transition-all duration-200 border"
                    style={{
                      background: gender === value
                        ? 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)'
                        : 'rgba(255,255,255,0.03)',
                      borderColor: gender === value
                        ? 'rgba(139,92,246,0.8)'
                        : 'rgba(255,255,255,0.1)',
                      color: gender === value ? '#fff' : 'rgba(255,255,255,0.4)',
                      boxShadow: gender === value ? '0 0 20px rgba(139,92,246,0.4)' : 'none',
                    }}
                  >
                    {emoji} {label}
                  </button>
                ))}
              </div>
            </div>

            {/* 날짜 입력 */}
            <div className="mb-6">
              <label
                htmlFor="birthDate"
                className="block text-purple-200 text-sm font-semibold mb-2 tracking-wide"
              >
                {tr.dateLabel}
              </label>
              <div
                className={`relative rounded-2xl p-[1px] transition-all duration-300 ${
                  isFocused
                    ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500'
                    : 'bg-gradient-to-r from-purple-800/50 to-indigo-800/50'
                }`}
              >
                <input
                  id="birthDate"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  min={minDate}
                  max={today}
                  required
                  disabled={isLoading}
                  className="w-full rounded-2xl px-4 py-4 text-white text-base font-medium
                    bg-gray-900/80 outline-none cursor-pointer
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all duration-300
                    [color-scheme:dark]"
                  style={{ colorScheme: 'dark' }}
                />
              </div>
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              disabled={!isValid || isLoading}
              className={`
                w-full py-4 px-6 rounded-2xl font-bold text-lg
                transition-all duration-300 transform ripple-btn
                relative overflow-hidden
                ${isValid && !isLoading
                  ? 'hover:scale-[1.02] active:scale-[0.98] cursor-pointer'
                  : 'opacity-40 cursor-not-allowed'
                }
              `}
              style={{
                background: isValid && !isLoading
                  ? 'linear-gradient(135deg, #7c3aed 0%, #a855f7 40%, #ec4899 100%)'
                  : 'linear-gradient(135deg, #3b1a6b 0%, #2d2060 100%)',
                boxShadow: isValid && !isLoading
                  ? '0 0 30px rgba(168,85,247,0.4), 0 0 60px rgba(168,85,247,0.15), 0 4px 20px rgba(0,0,0,0.4)'
                  : 'none',
                letterSpacing: '0.02em',
              }}
            >
              {isValid && !isLoading && (
                <div
                  className="absolute inset-0 animate-shimmer opacity-20"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    backgroundSize: '200% 100%',
                  }}
                />
              )}
              <span className="relative z-10 flex items-center justify-center gap-2 font-serif-display tracking-wide">
                {isLoading ? (
                  <>
                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>{tr.loadingBtn}</span>
                  </>
                ) : (
                  <span>{tr.submitBtn}</span>
                )}
              </span>
            </button>
          </form>

          {/* 하단 장식 */}
          <div className="mt-6 pt-4 border-t border-white/5 flex justify-center gap-6">
            {shuffledSigns.map((sign, i) => (
              <span key={sign} className="text-purple-400/40 text-xs font-medium animate-twinkle"
                style={{ animationDelay: `${i * 0.3}s` }}>
                {sign}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 문구 */}
      <p className="text-center text-white/20 text-xs mt-6 leading-relaxed">
        {tr.footerText}
      </p>
    </div>
  );
}
