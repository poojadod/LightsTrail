// src/components/PWAInstallPrompt.tsx
import { usePWA } from '../hooks/usePWA';

export const PWAInstallPrompt = () => {
  const { isInstallable, installPWA } = usePWA();

  if (!isInstallable) return null;

  return (
    <button 
      onClick={installPWA}
      className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
    >
      Install App
    </button>
  );
};