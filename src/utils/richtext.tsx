import { RichTranslationValues } from 'next-intl';
import React, { JSX } from 'react';

export function richText(
  t: any,
  key: string,
  values: RichTranslationValues = {
    br: () => <br />
  }
): JSX.Element {
  return t.rich(key, values) as JSX.Element;
}
