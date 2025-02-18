'use client';

import { usePathname } from 'next/navigation';
import { en } from '@/locale/en';
import { ja } from '@/locale/ja';
import { TranslationType } from '@/type';

export function useTranslations(): TranslationType {
    const pathname = usePathname();
    const isJapanese = pathname.startsWith('/ja');

    return isJapanese ? ja : en;
}
