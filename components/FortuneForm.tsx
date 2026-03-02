'use client';

import { useState, FormEvent } from 'react';

interface FortuneFormProps {
  onSubmit: (birthDate: string, gender: string) => void;
  isLoading: boolean;
}

export default function FortuneForm({ onSubmit, isLoading }: FortuneFormProps) {
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const today = new Date().toISOString().split('T')[0];
  const minDate = '1900-01-01';

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
        {/* 장식 별들 */}
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="text-2xl animate-twinkle" style={{ animationDelay: '0s' }}>⭐</span>
          <span className="text-3xl animate-twinkle" style={{ animationDelay: '0.4s' }}>🌙</span>
          <span className="text-4xl animate-float">✨</span>
          <span className="text-3xl animate-twinkle" style={{ animationDelay: '0.8s' }}>🌙</span>
          <span className="text-2xl animate-twinkle" style={{ animationDelay: '0.2s' }}>⭐</span>
        </div>

        <h1 className="text-4xl font-black mb-2 bg-gradient-to-r from-purple-300 via-pink-200 to-indigo-300 bg-clip-text text-transparent leading-tight">
          오늘의 운세
        </h1>
        <p className="text-purple-200/70 text-sm font-medium tracking-widest uppercase">
          Daily Fortune
        </p>
      </div>

      {/* 카드 */}
      <div
        className="relative rounded-3xl p-[1px] animate-pulse-glow"
        style={{
          background: 'linear-gradient(135deg, rgba(139,92,246,0.6), rgba(99,102,241,0.3), rgba(168,85,247,0.6))',
        }}
      >
        <div
          className="rounded-3xl p-8"
          style={{
            background: 'linear-gradient(135deg, rgba(15,10,40,0.95) 0%, rgba(25,10,60,0.95) 100%)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* 카드 내부 장식 */}
          <div className="absolute top-4 right-6 text-purple-400/30 text-5xl select-none pointer-events-none">
            ✦
          </div>
          <div className="absolute bottom-4 left-6 text-indigo-400/20 text-3xl select-none pointer-events-none">
            ✦
          </div>

          <form onSubmit={handleSubmit} className="relative z-10">
            {/* 안내 텍스트 */}
            <div className="mb-6 text-center">
              <p className="text-white/80 text-base font-medium leading-relaxed">
                별자리가 당신의 운명을 속삭입니다
              </p>
              <p className="text-purple-300/60 text-sm mt-1">
                생년월일을 입력하면 오늘의 운세를 알려드려요
              </p>
            </div>

            {/* 성별 선택 */}
            <div className="mb-6">
              <label className="block text-purple-200 text-sm font-semibold mb-2 tracking-wide">
                👤 성별
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[{ value: '남자', emoji: '♂️', label: '남자' }, { value: '여자', emoji: '♀️', label: '여자' }].map(({ value, emoji, label }) => (
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
                🗓️ 생년월일
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
                transition-all duration-300 transform
                relative overflow-hidden
                ${isValid && !isLoading
                  ? 'hover:scale-[1.02] active:scale-[0.98] cursor-pointer'
                  : 'opacity-50 cursor-not-allowed'
                }
              `}
              style={{
                background: isValid && !isLoading
                  ? 'linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #6366f1 100%)'
                  : 'linear-gradient(135deg, #4c1d95 0%, #3730a3 100%)',
                boxShadow: isValid && !isLoading
                  ? '0 0 30px rgba(139, 92, 246, 0.5), 0 4px 15px rgba(0,0,0,0.3)'
                  : 'none',
              }}
            >
              {/* 버튼 shimmer 효과 */}
              {isValid && !isLoading && (
                <div
                  className="absolute inset-0 animate-shimmer opacity-30"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    backgroundSize: '200% 100%',
                  }}
                />
              )}

              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>운세 확인 중...</span>
                  </>
                ) : (
                  <>
                    <span>🔮</span>
                    <span>운세 보기</span>
                    <span>✨</span>
                  </>
                )}
              </span>
            </button>
          </form>

          {/* 하단 장식 */}
          <div className="mt-6 pt-4 border-t border-white/5 flex justify-center gap-6">
            {['양자리', '황소자리', '쌍둥이자리', '게자리'].map((sign, i) => (
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
        ✦ 오늘 하루도 별빛이 당신을 비추기를 ✦
      </p>
    </div>
  );
}
