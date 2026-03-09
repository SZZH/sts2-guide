import { CARD_CROSSCHECK_RECORDS, CARD_CROSSCHECK_SUMMARY } from './cardsCrosscheck.generated';

export type CardVerificationStatus = 'cross-checked' | 'reconciled-text' | 'source-conflict' | 'provisional';

export interface CardVerificationRecord {
  status: CardVerificationStatus;
  label: string;
  reason: string;
  checkedAt: string;
  checkedSources: string[];
  preferredText: string | null;
}

export const CARD_VERIFICATION_SUMMARY = CARD_CROSSCHECK_SUMMARY;

export function getCardVerification(slug: string): CardVerificationRecord {
  const record = CARD_CROSSCHECK_RECORDS[slug as keyof typeof CARD_CROSSCHECK_RECORDS];

  if (record) {
    return {
      status: record.status,
      label: record.label,
      reason: record.reason,
      checkedAt: record.checkedAt,
      checkedSources: [...record.checkedSources],
      preferredText: record.preferredText,
    };
  }

  return {
    status: 'provisional',
    label: 'Provisional',
    reason:
      'This card does not yet have a generated cross-check record, so it remains provisional until the next full comparison run.',
    checkedAt: '2026-03-09',
    checkedSources: ['sts2.untapped.gg'],
    preferredText: null,
  };
}
