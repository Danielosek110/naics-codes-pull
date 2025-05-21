#!/usr/bin/env tsx
import fs from 'fs';
import path from 'path';
import { Industry } from 'naics';

// Zero‑pad a code string up to the desired length (default: 6 digits)
const pad = (code: string, length = 6): string => code.padEnd(length, '0');

const main = async (): Promise<void> => {
  // 1) Pull in every NAICS entry (2–6 digits)
  const allEntries = Array.from(Industry.codes());

  // 2) Filter down to only the 6‑digit "national industry" entries
  const nationals = allEntries.filter(ent => ent.code.length === 6);

  // 3) Build a row for each, climbing back up the hierarchy
  const rows = nationals.map(nat => {
    const ind5 = nat.parent(); // 5‑digit NAICS industry
    const grp4 = ind5?.parent(); // 4‑digit industry group
    const sub3 = grp4?.parent(); // 3‑digit subsector
    const sec2 = sub3?.parent(); // 2‑digit sector

    return {
      sector_code: sec2?.code || '',
      sector_title: sec2?.title || '',
      subsector_code: sub3?.code || '',
      subsector_title: sub3?.title || '',
      industry_group_code: grp4?.code || '',
      industry_group_title: grp4?.title || '',
      naics_industry_code: ind5?.code || '',
      naics_industry_title: ind5?.title || '',
      national_industry_code: nat.code,
      national_industry_title: nat.title,
    };
  });

  // 4) Build the header
  const header = [
    'sector_code',
    'sector_title',
    'subsector_code',
    'subsector_title',
    'industry_group_code',
    'industry_group_title',
    'naics_industry_code',
    'naics_industry_title',
    'national_industry_code',
    'national_industry_title',
  ].join(',');

  // 5) Serialize to CSV
  const lines = rows.map(r =>
    [
      r.sector_code,
      `"${r.sector_title.replace(/"/g, '""')}"`,
      r.subsector_code,
      `"${r.subsector_title.replace(/"/g, '""')}"`,
      r.industry_group_code,
      `"${r.industry_group_title.replace(/"/g, '""')}"`,
      r.naics_industry_code,
      `"${r.naics_industry_title.replace(/"/g, '""')}"`,
      r.national_industry_code,
      `"${r.national_industry_title.replace(/"/g, '""')}"`,
    ].join(',')
  );

  const csv = [header, ...lines].join('\n');

  // 6) Write file
  const dataDir = path.resolve(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }
  // Get the current date
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');
  const year = now.getFullYear();
  // Create the output file path
  const outPath = path.resolve(dataDir, `${month}-${date}-${year}.csv`);
  // Write the CSV to the output file
  fs.writeFileSync(outPath, csv, 'utf8');
  // Log the success
  console.log(`✅ Wrote ${rows.length} rows to ${outPath}`);
};

main().catch(err => {
  console.error('❌ Error generating CSV:', err);
  process.exit(1);
});
