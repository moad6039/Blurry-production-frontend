// lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const IMAGES = {
  hero: 'https://cdn.myportfolio.com/c005775b-fd65-4e69-934d-1eb80e8a753d/aec092a3-662a-4215-b5d3-58bb11b5e588_rwc_0x192x3840x2164x32.jpg?h=adb1cb232ef0862e5978227e742d3e59',
  portrait: 'https://cdn.myportfolio.com/c005775b-fd65-4e69-934d-1eb80e8a753d/8041ff52-1c99-4ca6-a948-8a4c5d60333c_rwc_0x403x1365x769x32.jpg?h=d55c04d7d2e9ec02f423b68dfb800023',
  studio: 'https://cdn.myportfolio.com/c005775b-fd65-4e69-934d-1eb80e8a753d/97eb1d94-6f9a-4f34-ad5f-a856bb3ba702_rwc_0x69x3840x2164x32.jpg?h=3271ad82d4e3c7cdce285f10e6f508e0',
  events: 'https://cdn.myportfolio.com/c005775b-fd65-4e69-934d-1eb80e8a753d/5ee36e23-9964-4d11-956a-1903020868a0_rwc_0x868x1365x769x32.jpg?h=a045e3e870d0673ca33ae773b5478970',
  corporate: 'https://cdn.myportfolio.com/c005775b-fd65-4e69-934d-1eb80e8a753d/169c0938-6519-4356-9cc6-ac05abc15897_rwc_0x725x1365x769x32.jpg?h=908baf69558e269a0e1efdf994184b83',
  mariage2: 'https://cdn.myportfolio.com/c005775b-fd65-4e69-934d-1eb80e8a753d/2f2abe49-f239-476f-8b2c-e99c85d41f1c_carw_16x9x32.jpg?h=e963ba9c456cd45d60a6825d3261988a',
  portrait2: 'https://cdn.myportfolio.com/c005775b-fd65-4e69-934d-1eb80e8a753d/58b80a5b-95ea-4f06-9ec6-ff940a89d601_carw_16x9x32.jpg?h=1861dcd8f95bb522d54055a8f6665299',
};

export const SERVICES = ['Mariage', 'Portrait', 'Studio', 'Événement', 'Corporate', 'Autre'] as const;
export const BUDGETS = ['< 500€', '500€ – 1000€', '1000€ – 2000€', '2000€ – 5000€', '> 5000€'] as const;
