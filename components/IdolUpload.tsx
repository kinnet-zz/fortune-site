'use client';

import { useRef, useState } from 'react';
import { tIdol, type IdolLang } from '@/lib/idol-i18n';

interface IdolUploadProps {
  onImageReady: (base64: string, mimeType: string, preview: string) => void;
  lang: IdolLang;
}

const MAX_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const TARGET_SIZE = 1024; // 분석용 리사이즈 목표 px

async function resizeImage(file: File): Promise<{ base64: string; mimeType: string; preview: string }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      const canvas = document.createElement('canvas');
      const scale = Math.min(1, TARGET_SIZE / Math.max(img.width, img.height));
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      const ctx = canvas.getContext('2d');
      if (!ctx) return reject(new Error('canvas error'));
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const preview = canvas.toDataURL('image/jpeg', 0.9);
      const base64 = preview.split(',')[1];
      resolve({ base64, mimeType: 'image/jpeg', preview });
    };
    img.onerror = reject;
    img.src = objectUrl;
  });
}

export default function IdolUpload({ onImageReady, lang }: IdolUploadProps) {
  const tr = tIdol(lang);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState('');
  const [processing, setProcessing] = useState(false);

  const processFile = async (file: File) => {
    setError('');
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError(tr.invalidFile);
      return;
    }
    if (file.size > MAX_SIZE) {
      setError(tr.fileTooLarge);
      return;
    }
    setProcessing(true);
    try {
      const { base64, mimeType, preview } = await resizeImage(file);
      setPreview(preview);
      onImageReady(base64, mimeType, preview);
    } catch {
      setError(tr.errorMsg);
    } finally {
      setProcessing(false);
    }
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
    e.target.value = '';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* 업로드 영역 */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className="relative cursor-pointer rounded-3xl transition-all duration-300"
        style={{
          border: `2px dashed ${dragOver ? 'rgba(168,85,247,0.8)' : 'rgba(255,255,255,0.15)'}`,
          background: dragOver
            ? 'rgba(168,85,247,0.1)'
            : preview
            ? 'transparent'
            : 'rgba(255,255,255,0.02)',
          minHeight: '280px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {preview ? (
          <div className="relative w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview}
              alt="preview"
              className="w-full rounded-3xl object-cover"
              style={{ maxHeight: '360px', objectFit: 'cover' }}
            />
            <div
              className="absolute inset-0 rounded-3xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"
              style={{ background: 'rgba(0,0,0,0.5)' }}
            >
              <p className="text-white font-semibold text-sm">{tr.uploadBtn}</p>
            </div>
          </div>
        ) : (
          <div className="text-center px-8 py-12">
            <div className="text-6xl mb-4">🤳</div>
            <p className="text-white/70 font-semibold text-lg mb-2">{tr.uploadTitle}</p>
            <p className="text-white/40 text-sm">{tr.uploadDesc}</p>
            {processing && (
              <p className="text-purple-300 text-sm mt-3 animate-pulse">처리 중...</p>
            )}
          </div>
        )}
      </div>

      {/* 에러 메시지 */}
      {error && (
        <p className="text-red-400 text-sm text-center px-4">{error}</p>
      )}

      {/* 버튼 영역 */}
      <div className="flex gap-3">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex-1 py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: 'linear-gradient(135deg, rgba(139,92,246,0.4), rgba(99,102,241,0.4))',
            border: '1px solid rgba(139,92,246,0.5)',
            color: 'rgba(255,255,255,0.9)',
          }}
        >
          📁 {tr.uploadBtn}
        </button>
        <button
          onClick={() => cameraInputRef.current?.click()}
          className="flex-1 py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          📷 {tr.cameraBtn}
        </button>
      </div>

      {/* 숨긴 파일 인풋 */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={handleFile}
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="user"
        className="hidden"
        onChange={handleFile}
      />

      {/* 개인정보 안심 문구 */}
      <p className="text-center text-white/30 text-xs">{tr.privacyNote}</p>
    </div>
  );
}
