'use client';

import { useRef, useState } from 'react';
import { tIdol, type IdolLang } from '@/lib/idol-i18n';

interface IdolUploadProps {
  onImageReady: (base64: string, mimeType: string, preview: string) => void;
  lang: IdolLang;
}

const MAX_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const TARGET_SIZE = 1024;

async function resizeImage(file: File): Promise<{ base64: string; mimeType: string; preview: string }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const canvas = document.createElement('canvas');
      const scale = Math.min(1, TARGET_SIZE / Math.max(img.width, img.height));
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      const ctx = canvas.getContext('2d');
      if (!ctx) return reject(new Error('canvas error'));
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const preview = canvas.toDataURL('image/jpeg', 0.9);
      resolve({ base64: preview.split(',')[1], mimeType: 'image/jpeg', preview });
    };
    img.onerror = reject;
    img.src = url;
  });
}

export default function IdolUpload({ onImageReady, lang }: IdolUploadProps) {
  const tr = tIdol(lang);
  const fileRef = useRef<HTMLInputElement>(null);
  const camRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState('');
  const [processing, setProcessing] = useState(false);

  const processFile = async (file: File) => {
    setError('');
    if (!ALLOWED_TYPES.includes(file.type)) { setError(tr.invalidFile); return; }
    if (file.size > MAX_SIZE) { setError(tr.fileTooLarge); return; }
    setProcessing(true);
    try {
      const { base64, mimeType, preview } = await resizeImage(file);
      setPreview(preview);
      onImageReady(base64, mimeType, preview);
    } catch { setError(tr.errorMsg); }
    finally { setProcessing(false); }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) processFile(f);
    e.target.value = '';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) processFile(f);
  };

  return (
    <div className="space-y-3">
      {/* 업로드 영역 */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileRef.current?.click()}
        className="relative cursor-pointer rounded-3xl overflow-hidden transition-all duration-200"
        style={{
          border: `1.5px dashed ${dragOver ? 'rgba(206,220,238,0.5)' : 'rgba(184,199,220,0.18)'}`,
          background: dragOver ? '#1b2231' : '#121722',
          minHeight: '240px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {preview ? (
          <div className="relative w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={preview} alt="preview" className="w-full object-cover" style={{ maxHeight: '320px' }} />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
              style={{ background: 'rgba(0,0,0,0.6)' }}>
              <p className="text-[#0a0e14] text-sm font-semibold">{tr.uploadBtn}</p>
            </div>
          </div>
        ) : (
          <div className="text-center px-8 py-10">
            <div className="text-5xl mb-3">🤳</div>
            <p className="text-[#bdc5d1] font-bold mb-1">{tr.uploadTitle}</p>
            <p className="text-[#9aa3b2] text-xs">{tr.uploadDesc}</p>
            {processing && <p className="text-[#9aa3b2] text-xs mt-3 animate-pulse">{tr.analyzing}</p>}
          </div>
        )}
      </div>

      {error && <p className="text-[#9b3a3a] text-xs text-center">{error}</p>}

      <div className="flex gap-2">
        <button
          onClick={() => fileRef.current?.click()}
          className="flex-1 rounded-full py-3.5 text-sm font-semibold transition-all hover:border-[rgba(184,199,220,0.28)] hover:text-[#f2f0ea]"
          style={{ background: '#101620', border: '1px solid rgba(184,199,220,0.14)', color: '#ccd2dc' }}
        >
          📁 {tr.uploadBtn}
        </button>
        <button
          onClick={() => camRef.current?.click()}
          className="flex-1 rounded-full py-3.5 text-sm font-semibold transition-all hover:border-[rgba(184,199,220,0.28)] hover:text-[#f2f0ea]"
          style={{ background: '#101620', border: '1px solid rgba(184,199,220,0.14)', color: '#ccd2dc' }}
        >
          📷 {tr.cameraBtn}
        </button>
      </div>

      <p className="text-center text-[#9aa3b2] text-xs">{tr.privacyNote}</p>

      <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={handleChange} />
      <input ref={camRef} type="file" accept="image/*" capture="user" className="hidden" onChange={handleChange} />
    </div>
  );
}
