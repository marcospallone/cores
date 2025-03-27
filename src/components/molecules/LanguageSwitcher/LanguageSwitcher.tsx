'use client';

import {usePathname, useRouter} from 'next/navigation';
import {useLocale} from 'next-intl';
import { Button } from '@mui/material';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const otherLocale = currentLocale === 'en' ? 'it' : 'en';

  const switchLanguage = () => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${otherLocale}`);
    router.push(newPath);
  };

  return (
    <Button onClick={switchLanguage}>
      {otherLocale === 'en' ? '🇬🇧 English' : '🇮🇹 Italiano'}
    </Button>
  );
}
