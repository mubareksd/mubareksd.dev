import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p className="text-xl mb-8">{t('description')}</p>
      <Link href="/" className="text-primary hover:underline">
        {t('backHome')}
      </Link>
    </div>
  );
}
