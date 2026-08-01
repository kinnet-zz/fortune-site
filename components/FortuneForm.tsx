'use client';

import { useState, useEffect, FormEvent } from 'react';
import { type Lang, t } from '@/lib/i18n';
import { getLocalDateInputValue, type FortuneErrorState } from '@/lib/homeFortune';

interface FortuneFormProps {
  onSubmit: (birthDate: string, gender: string) => void;
  isLoading: boolean;
  lang: Lang;
  error?: FortuneErrorState | null;
}

export default function FortuneForm({ onSubmit, isLoading, lang, error }: FortuneFormProps) {
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [today, setToday] = useState('');

  const minDate = '1900-01-01';
  const tr = t(lang);

  useEffect(() => {
    setToday(getLocalDateInputValue());
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (birthDate && gender && !isLoading) {
      onSubmit(birthDate, gender);
    }
  };

  const isValid = birthDate.length > 0 && gender.length > 0;

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className="relative rounded-[1.75rem] p-[1px]"
        style={{
          background: 'linear-gradient(145deg, rgba(216,180,254,0.45), rgba(129,140,248,0.16), rgba(244,114,182,0.24))',
          boxShadow: '0 24px 80px rgba(3,0,18,0.48)',
        }}
      >
        <div
          className="rounded-[1.7rem] p-5 sm:p-7"
          style={{
            background: 'linear-gradient(145deg, rgba(13,7,31,0.98), rgba(27,12,52,0.96))',
            backdropFilter: 'blur(20px)',
          }}
        >
          <form onSubmit={handleSubmit} className="relative z-10">
            <div className="mb-6">
              <p className="text-white text-lg font-semibold leading-relaxed text-keep-all">
                {tr.formSubtitle}
              </p>
              <p className="text-purple-200/80 text-sm mt-1.5 text-keep-all">
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
                    aria-pressed={gender === value}
                    className="min-h-11 py-3 rounded-xl font-semibold text-base transition-all duration-200 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#130a2c]"
                    style={{
                      background: gender === value
                        ? 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)'
                        : 'rgba(255,255,255,0.03)',
                      borderColor: gender === value
                        ? 'rgba(139,92,246,0.8)'
                        : 'rgba(255,255,255,0.1)',
                      color: gender === value ? '#fff' : 'rgba(255,255,255,0.72)',
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
              <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-purple-700/70 to-indigo-700/70 focus-within:from-purple-400 focus-within:to-pink-400 transition-colors">
                <input
                  id="birthDate"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  min={minDate}
                  max={today}
                  required
                  disabled={isLoading}
                  className="w-full min-h-12 rounded-xl px-4 py-3 text-white text-base font-medium
                    bg-gray-900/80 outline-none cursor-pointer
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all duration-200 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-purple-200
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
                w-full min-h-12 py-3.5 px-6 rounded-xl font-bold text-lg
                transition-all duration-300 transform ripple-btn
                relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#130a2c]
                ${isValid && !isLoading
                  ? 'hover:scale-[1.02] active:scale-[0.98] cursor-pointer'
                  : 'opacity-70 cursor-not-allowed'
                }
              `}
              style={{
                background: isValid && !isLoading
                  ? 'linear-gradient(135deg, #7c3aed 0%, #a855f7 40%, #ec4899 100%)'
                  : 'linear-gradient(135deg, #4c2c75 0%, #37306f 100%)',
                boxShadow: isValid && !isLoading
                  ? '0 0 30px rgba(168,85,247,0.4), 0 0 60px rgba(168,85,247,0.15), 0 4px 20px rgba(0,0,0,0.4)'
                  : 'none',
                letterSpacing: '0.02em',
              }}
            >
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

            {isLoading && (
              <p className="mt-4 text-center text-purple-100 text-sm leading-6" role="status" aria-live="polite">
                {tr.loadingTitle} · {tr.loadingMessages[0]}
              </p>
            )}
            {error?.scope === 'form' && !isLoading && (
              <div
                role="alert"
                aria-live="assertive"
                className={`mt-4 rounded-xl px-4 py-3 text-sm leading-6 ${error.code === 'QUOTA_EXCEEDED' ? 'text-yellow-100 bg-yellow-400/10 border border-yellow-300/30' : 'text-red-100 bg-red-400/10 border border-red-300/30'}`}
              >
                <p className="font-semibold">{error.code === 'QUOTA_EXCEEDED' ? tr.quotaTitle : tr.errorTitle}</p>
                <p className="mt-1 opacity-90">{error.code === 'QUOTA_EXCEEDED' ? `${tr.quotaMsg1} ${tr.quotaMsg2}` : tr.generalError}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
