import { useTranslations } from 'next-intl'
import { GraduationCap, MapPin } from 'lucide-react'

export default function Education() {
  const t = useTranslations('education')

  return (
    <section id="education" className="container center-content py-16">
      <h2 className="text-3xl font-bold mb-8 animate-slideInLeft">{t('title')}</h2>
      <div className="space-y-8">
        <div className="bg-card p-6 rounded-lg shadow-md animate-scaleIn">
          <h3 className="text-xl font-semibold mb-2">{t('bsc.degree')}</h3>
          <p className="text-muted-foreground mb-2">{t('bsc.institution')}</p>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{t('bsc.location')}</span>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md animate-scaleIn animation-delay-200">
          <h3 className="text-xl font-semibold mb-2">{t('bootcamp.program')}</h3>
          <p className="text-muted-foreground mb-2">{t('bootcamp.institution')}</p>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{t('bootcamp.location')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}