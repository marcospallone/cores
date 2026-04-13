import { RichTranslationValues, useTranslations } from 'next-intl';
import React, { JSX } from 'react';

export function richText(
  t: ReturnType<typeof useTranslations>,
  key: string,
  values: RichTranslationValues = {
    br: () => <br />
  }
): JSX.Element {
  return t.rich(key, values) as JSX.Element;
}
