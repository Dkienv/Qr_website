export interface Tutorial {
  id: string;
  title: string;
  category: string;
  duration: string;
  difficulty: 'Easy' | 'Intermediate' | 'Advanced';
  youtubeUrl: string;
  thumbnailUrl?: string;
}

export interface MachineModel {
  id: string;
  name: string;
  slug: string;
  image: string;
  tutorials: Tutorial[];
}

export const machineModels: MachineModel[] = [
  {
    id: '1',
    name: 'X580 D',
    slug: 'x580-d',
    image: '/images/X580_D.png',
    tutorials: [
      {
        id: 't1',
        title: 'Getting Started with X580 D',
        category: 'SETUP & BASICS',
        duration: '8 min',
        difficulty: 'Easy',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder1',
      },
      {
        id: 't2',
        title: 'Perfect Espresso Extraction',
        category: 'BREWING TECHNIQUES',
        duration: '12 min',
        difficulty: 'Intermediate',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder2',
      },
      {
        id: 't3',
        title: 'Milk Steaming Mastery',
        category: 'BARISTA SKILLS',
        duration: '10 min',
        difficulty: 'Intermediate',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder3',
      },
      {
        id: 't4',
        title: 'Troubleshooting Common Issues',
        category: 'MAINTENANCE',
        duration: '15 min',
        difficulty: 'Easy',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder4',
      },
    ],
  },
  {
    id: '2',
    name: 'E30',
    slug: 'e30',
    image: '/images/E30-right.png',
    tutorials: [
      {
        id: 't5',
        title: 'E30 Initial Setup Guide',
        category: 'SETUP & BASICS',
        duration: '6 min',
        difficulty: 'Easy',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder5',
      },
      {
        id: 't6',
        title: 'Dialing In Your Grinder',
        category: 'GRINDER BASICS',
        duration: '9 min',
        difficulty: 'Intermediate',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder6',
      },
      {
        id: 't7',
        title: 'Cleaning and Maintenance',
        category: 'MAINTENANCE',
        duration: '7 min',
        difficulty: 'Easy',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder7',
      },
      {
        id: 't8',
        title: 'Advanced Pressure Profiling',
        category: 'ADVANCED TECHNIQUES',
        duration: '14 min',
        difficulty: 'Advanced',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder8',
      },
    ],
  },
  {
    id: '3',
    name: 'M50LT Black',
    slug: 'm50lt-black',
    image: '/images/M50LT-black-R.png',
    tutorials: [
      {
        id: 't9',
        title: 'Unboxing and First Use',
        category: 'SETUP & BASICS',
        duration: '5 min',
        difficulty: 'Easy',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder9',
      },
      {
        id: 't10',
        title: 'Temperature Surfing Techniques',
        category: 'BREWING TECHNIQUES',
        duration: '11 min',
        difficulty: 'Advanced',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder10',
      },
      {
        id: 't11',
        title: 'Portafilter Basket Selection',
        category: 'EQUIPMENT GUIDE',
        duration: '8 min',
        difficulty: 'Intermediate',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder11',
      },
      {
        id: 't12',
        title: 'Weekly Maintenance Routine',
        category: 'MAINTENANCE',
        duration: '10 min',
        difficulty: 'Easy',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder12',
      },
    ],
  },
  {
    id: '4',
    name: '2601 Pro',
    slug: '2601-pro',
    image: '/images/2601pro.png',
    tutorials: [
      {
        id: 't13',
        title: 'Pro Features Overview',
        category: 'SETUP & BASICS',
        duration: '10 min',
        difficulty: 'Easy',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder13',
      },
      {
        id: 't14',
        title: 'Optimal Brew Parameters',
        category: 'BREWING TECHNIQUES',
        duration: '13 min',
        difficulty: 'Intermediate',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder14',
      },
      {
        id: 't15',
        title: 'Latte Art Basics',
        category: 'BARISTA SKILLS',
        duration: '12 min',
        difficulty: 'Intermediate',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder15',
      },
      {
        id: 't16',
        title: 'Descaling and Deep Cleaning',
        category: 'MAINTENANCE',
        duration: '16 min',
        difficulty: 'Easy',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder16',
      },
    ],
  },
  {
    id: '5',
    name: 'K95L',
    slug: 'k95l',
    image: '/images/K95L.webp',
    tutorials: [
      {
        id: 't17',
        title: 'K95L Quick Start Guide',
        category: 'SETUP & BASICS',
        duration: '7 min',
        difficulty: 'Easy',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder17',
      },
      {
        id: 't18',
        title: 'Understanding Flow Control',
        category: 'BREWING TECHNIQUES',
        duration: '14 min',
        difficulty: 'Advanced',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder18',
      },
      {
        id: 't19',
        title: 'Cappuccino Perfect Pour',
        category: 'BARISTA SKILLS',
        duration: '9 min',
        difficulty: 'Intermediate',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder19',
      },
      {
        id: 't20',
        title: 'Troubleshooting Error Codes',
        category: 'TROUBLESHOOTING',
        duration: '11 min',
        difficulty: 'Easy',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder20',
      },
    ],
  },
  {
    id: '6',
    name: 'Colet',
    slug: 'colet',
    image: '/images/Colet.webp',
    tutorials: [
      {
        id: 't21',
        title: 'Colet Setup and Installation',
        category: 'SETUP & BASICS',
        duration: '6 min',
        difficulty: 'Easy',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder21',
      },
      {
        id: 't22',
        title: 'Single Origin Brewing Tips',
        category: 'BREWING TECHNIQUES',
        duration: '10 min',
        difficulty: 'Intermediate',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder22',
      },
      {
        id: 't23',
        title: 'Steam Wand Positioning',
        category: 'BARISTA SKILLS',
        duration: '8 min',
        difficulty: 'Intermediate',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder23',
      },
      {
        id: 't24',
        title: 'Monthly Maintenance Checklist',
        category: 'MAINTENANCE',
        duration: '12 min',
        difficulty: 'Easy',
        youtubeUrl: 'https://youtube.com/watch?v=placeholder24',
      },
    ],
  },
];

export function getModelBySlug(slug: string): MachineModel | undefined {
  return machineModels.find((model) => model.slug === slug);
}

export function getAllModelSlugs(): string[] {
  return machineModels.map((model) => model.slug);
}
