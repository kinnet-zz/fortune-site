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

function GenderMark({ type }: { type: 'male' | 'female' }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {type === 'male' ? (
        <>
          <circle cx="10" cy="14" r="5.4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14 10l6-6M14.6 4H20v5.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : (
        <>
          <circle cx="12" cy="9.5" r="5.4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 14.9V21M9.2 18.4h5.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
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
  const stripEmoji = (value: string) => value.replace(/^[^A-Za-z가-힣\u3040-\u30FF\u4E00-\u9FFF]+/, '').trim();

  return (
    <div className="mx-auto w-full max-w-md">
      <div
        className="relative rounded-[0.45rem] p-[1px]"
        style={{
          background:
            'linear-gradient(150deg, rgba(226,205,162,0.75) 0%, rgba(169,128,63,0.3) 40%, rgba(37,45,85,0.7) 100%)',
          boxShadow: '0 34px 70px -36px rgba(20,23,43,0.55)',
        }}
      >
        <div
          className="relative overflow-hidden rounded-[0.42rem] p-5 sm:p-7"
          style={{
            background:
              'linear-gradient(165deg, #161d3d 0%, #111730 60%, #0e142b 100%)',
            backdropFilter: 'blur(22px)',
          }}
        >
          {/* 모서리 장식 */}
          <span className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l border-t border-[rgba(226,205,162,0.55)]" aria-hidden="true" />
          <span className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b border-r border-[rgba(226,205,162,0.55)]" aria-hidden="true" />

          <form onSubmit={handleSubmit} className="relative z-10">
            <div className="mb-6">
              <p className="font-display text-[1.22rem] font-semibold leading-snug text-[#f7f0e1] text-keep-all">
                {tr.formSubtitle}
              </p>
              <p className="mt-2 text-[0.78rem] leading-6 text-[rgba(247,240,225,0.55)] text-keep-all">
                {tr.formHint}
              </p>
            </div>

            {/* 성별 선택 */}
            <div className="mb-5">
              <label className="mb-2 block text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-[rgba(226,205,162,0.8)]">
                {stripEmoji(tr.genderLabel)}
              </label>
              <div className="relative grid grid-cols-2 gap-1 rounded-full border border-[rgba(226,205,162,0.18)] bg-white/[0.035] p-1">
                <span className="pointer-events-none absolute inset-y-2 left-1/2 w-px -translate-x-1/2 bg-[rgba(226,205,162,0.18)]" aria-hidden="true" />
                {[{ value: '남자', type: 'male' as const, label: tr.male }, { value: '여자', type: 'female' as const, label: tr.female }].map(({ value, type, label }) => {
                  const selected = gender === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setGender(value)}
                      disabled={isLoading}
                      aria-pressed={selected}
                      className="flex min-h-11 items-center justify-center gap-2 rounded-full text-[0.85rem] font-semibold transition-all duration-300"
                      style={{
                        background: selected
                          ? 'linear-gradient(120deg, #e8d3a6, #c3a165)'
                          : 'transparent',
                        color: selected ? '#1a1408' : 'rgba(247,240,225,0.62)',
                        boxShadow: selected ? '0 6px 18px -12px rgba(0,0,0,0.5)' : 'none',
                      }}
                    >
                      <GenderMark type={type} />
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 날짜 입력 */}
            <div className="mb-6">
              <label
                htmlFor="birthDate"
                className="mb-2 block text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-[rgba(226,205,162,0.8)]"
              >
                {stripEmoji(tr.dateLabel)}
              </label>
              <div className="relative rounded-xl border border-[rgba(226,205,162,0.2)] bg-[rgba(20,23,43,0.03)] transition-colors focus-within:border-[rgba(226,205,162,0.75)]">
                <input
                  id="birthDate"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  min={minDate}
                  max={today}
                  required
                  disabled={isLoading}
                  className="min-h-12 w-full rounded-xl bg-transparent px-4 py-3 text-base font-medium text-[#f7f0e1] outline-none [color-scheme:dark] disabled:cursor-not-allowed disabled:opacity-50"
                  style={{ colorScheme: 'dark' }}
                />
              </div>
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              disabled={!isValid || isLoading}
              className={`btn-gold-warm w-full text-[0.95rem] ${isValid && !isLoading ? '' : '!cursor-not-allowed'}`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 font-display tracking-[0.02em]">
                {isLoading ? (
                  <>
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-[#1a1408]/30 border-t-[#1a1408]" />
                    <span>{tr.loadingBtn}</span>
                  </>
                ) : (
                  <>
                    <span>{tr.submitBtn}</span>
                    <span aria-hidden="true" className="text-[1.05rem] leading-none">→</span>
                  </>
                )}
              </span>
            </button>

            {isLoading && (
              <p className="mt-4 text-center text-[0.8rem] leading-6 text-[rgba(226,205,162,0.85)]" role="status" aria-live="polite">
                {tr.loadingTitle} · {tr.loadingMessages[0]}
              </p>
            )}
            {error?.scope === 'form' && !isLoading && (
              <div
                role="alert"
                aria-live="assertive"
                className={`mt-4 rounded-xl border px-4 py-3 text-[0.82rem] leading-6 ${error.code === 'QUOTA_EXCEEDED' ? 'border-amber-300/30 bg-amber-400/10 text-amber-100' : 'border-rose-300/25 bg-rose-400/10 text-rose-100'}`}
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
