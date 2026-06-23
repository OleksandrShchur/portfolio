import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { profile } from '@/data/profile';
import { copyToClipboard, cn } from '@/utils';
import { Button } from './Button';

interface CopyEmailProps {
  className?: string;
}

export function CopyEmail({ className }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(profile.email);
    if (!success) return;

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className={cn('relative', className)}>
      <Button
        type="button"
        variant="outline"
        magnetic
        onClick={handleCopy}
        aria-label="Copy email to clipboard"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        {copied ? 'Copied!' : 'Copy Email'}
      </Button>

      {copied && (
        <div
          role="status"
          className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-violet-primary/30 bg-base-elevated px-3 py-2 text-sm text-violet-glow shadow-glow-sm"
        >
          {profile.email}
        </div>
      )}
    </div>
  );
}
