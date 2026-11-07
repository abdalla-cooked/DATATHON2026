// Risk tiers used by the badge and the narration jokes (PLAN.md section 8).
export const tierOf = (p) => (p < 0.2 ? 'chill' : p < 0.6 ? 'sus' : 'screwed');
export const TIER_LABEL = { chill: 'Chill', sus: 'Sus', screwed: 'Screwed' };
export const pct = (x) => (x * 100).toFixed(1) + '%';
export const score100 = (p) => (p * 100).toFixed(0);
