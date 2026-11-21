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

  const privacyNote = lang === 'ko'
    ? '입력한 정보는 저장되지 않습니다'
    : lang === 'ja'
      ? '入力した情報は保存されません'
      : lang === 'zh'
        ? '输入的信息不会被保存'
        : 'Your details are not stored';

  const isValid = birthDate.length > 0 && gender.length > 0;
  const stripEmoji = (value: string) => value.replace(/^[^A-Za-z가-힣\u3040-\u30FF\u4E00-\u9FFF]+/, '').trim();

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="rounded-[22px] border border-[#e8eaef] bg-white p-5 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.25)] sm:p-7">
        <form onSubmit={handleSubmit}>
          <div className="mb-6 flex items-start gap-3">
            <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-[#eef2ff] text-[#3b5bdb]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M12 7.4v9.2M7.4 12h9.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
                <circle cx="12" cy="12" r="1.7" fill="currentColor" />
              </svg>
            </span>
            <div>
              <p className="text-[1.02rem] font-semibold leading-snug tracking-[-0.02em] text-[#0f172a] text-keep-all">
                {tr.formSubtitle}
              </p>
              <p className="mt-1.5 text-[0.78rem] leading-5 text-[#64748b] text-keep-all">
                {tr.formHint}
              </p>
            </div>
          </div>

          {/* 성별 선택 */}
          <div className="mb-5">
            <label className="mb-2 block text-[0.7rem] font-semibold tracking-[0.04em] text-[#475569]">
              {stripEmoji(tr.genderLabel)}
            </label>
            <div className="grid grid-cols-2 gap-1 rounded-full border border-[#e8eaef] bg-[#f8f9fb] p-1">
              {[{ value: '남자', type: 'male' as const, label: tr.male }, { value: '여자', type: 'female' as const, label: tr.female }].map(({ value, type, label }) => {
                const selected = gender === value;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setGender(value)}
                    disabled={isLoading}
                    aria-pressed={selected}
                    className={`flex min-h-11 items-center justify-center gap-2 rounded-full text-[0.86rem] font-medium transition-all duration-200 ${
                      selected
                        ? 'bg-white text-[#0f172a] shadow-[0_1px_6px_rgba(15,23,42,0.12)]'
                        : 'text-[#64748b] hover:text-[#0f172a]'
                    }`}
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
              className="mb-2 block text-[0.7rem] font-semibold tracking-[0.04em] text-[#475569]"
            >
              {stripEmoji(tr.dateLabel)}
            </label>
            <div className="rounded-xl border border-[#e8eaef] bg-[#f8f9fb] transition-colors focus-within:border-[#3b5bdb] focus-within:bg-white">
              <input
                id="birthDate"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                min={minDate}
                max={today}
                required
                disabled={isLoading}
                className="min-h-12 w-full rounded-xl bg-transparent px-4 py-3 text-base font-medium text-[#0f172a] outline-none [color-scheme:light] disabled:cursor-not-allowed disabled:opacity-50"
                style={{ colorScheme: 'light' }}
              />
            </div>
          </div>

          {/* 제출 버튼 */}
          <button
            type="submit"
            disabled={!isValid || isLoading}
            className={`btn-primary w-full text-[0.92rem] ${isValid && !isLoading ? '' : '!cursor-not-allowed'}`}
          >
            {isLoading ? (
              <>
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white" />
                <span>{tr.loadingBtn}</span>
              </>
            ) : (
              <>
                <span>{tr.submitBtn}</span>
                <span aria-hidden="true" className="text-[1.02rem] leading-none">→</span>
              </>
            )}
          </button>

          <p className="mt-3.5 flex items-center justify-center gap-1.5 text-[0.7rem] text-[#64748b]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="5" y="10.5" width="14" height="9" rx="2.4" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8.5 10.5V8a3.5 3.5 0 017 0v2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {privacyNote}
          </p>

          {isLoading && (
            <p className="mt-4 text-center text-[0.8rem] leading-6 text-[#3b5bdb]" role="status" aria-live="polite">
              {tr.loadingTitle} · {tr.loadingMessages[0]}
            </p>
          )}
          {error?.scope === 'form' && !isLoading && (
            <div
              role="alert"
              aria-live="assertive"
              className={`mt-4 rounded-xl border px-4 py-3 text-[0.82rem] leading-6 ${
                error.code === 'QUOTA_EXCEEDED'
                  ? 'border-amber-200 bg-amber-50 text-amber-900'
                  : 'border-rose-200 bg-rose-50 text-rose-900'
              }`}
            >
              <p className="font-semibold">{error.code === 'QUOTA_EXCEEDED' ? tr.quotaTitle : tr.errorTitle}</p>
              <p className="mt-1 opacity-90">{error.code === 'QUOTA_EXCEEDED' ? `${tr.quotaMsg1} ${tr.quotaMsg2}` : tr.generalError}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
