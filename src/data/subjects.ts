import { Subject, Unit, Level } from '@/types';

const createLevels = (unitId: string, count: number = 10): Level[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${unitId}-level-${i + 1}`,
    unitId,
    order: i + 1,
    type: i === count - 1 ? 'test' : i % 3 === 2 ? 'practice' : 'lesson',
    status: i === 0 ? 'current' : 'locked',
    stars: 0,
    xpEarned: 0,
  }));
};

export const subjects: Subject[] = [
  {
    id: 'quantitative',
    name: 'Quantitative Aptitude',
    icon: '🔢',
    color: 'hsl(145, 65%, 42%)',
    description: 'Master numbers, algebra, geometry, and more',
    units: [
      {
        id: 'quant-basics',
        title: 'Number Foundations',
        description: 'Build your base with numbers, operations, and basic calculations',
        color: 'hsl(145, 65%, 42%)',
        levels: createLevels('quant-basics'),
      },
      {
        id: 'quant-percentages',
        title: 'Percentages & Ratios',
        description: 'Master percentage calculations and ratio problems',
        color: 'hsl(200, 70%, 50%)',
        levels: createLevels('quant-percentages'),
      },
      {
        id: 'quant-algebra',
        title: 'Algebraic Expressions',
        description: 'Solve equations and simplify expressions',
        color: 'hsl(270, 60%, 55%)',
        levels: createLevels('quant-algebra'),
      },
      {
        id: 'quant-geometry',
        title: 'Geometry Essentials',
        description: 'Explore shapes, angles, and spatial reasoning',
        color: 'hsl(340, 70%, 55%)',
        levels: createLevels('quant-geometry'),
      },
    ],
  },
  {
    id: 'logical',
    name: 'Logical Reasoning',
    icon: '🧠',
    color: 'hsl(270, 60%, 55%)',
    description: 'Sharpen your analytical and reasoning skills',
    units: [
      {
        id: 'logic-patterns',
        title: 'Pattern Recognition',
        description: 'Identify sequences and patterns in numbers and shapes',
        color: 'hsl(270, 60%, 55%)',
        levels: createLevels('logic-patterns'),
      },
      {
        id: 'logic-syllogisms',
        title: 'Syllogisms',
        description: 'Master logical deductions and conclusions',
        color: 'hsl(200, 70%, 50%)',
        levels: createLevels('logic-syllogisms'),
      },
      {
        id: 'logic-puzzles',
        title: 'Logic Puzzles',
        description: 'Solve complex puzzles using logical thinking',
        color: 'hsl(145, 65%, 42%)',
        levels: createLevels('logic-puzzles'),
      },
    ],
  },
  {
    id: 'verbal',
    name: 'Verbal Ability',
    icon: '📚',
    color: 'hsl(25, 95%, 55%)',
    description: 'Enhance vocabulary and comprehension skills',
    units: [
      {
        id: 'verbal-vocab',
        title: 'Vocabulary Builder',
        description: 'Expand your word power with synonyms and antonyms',
        color: 'hsl(25, 95%, 55%)',
        levels: createLevels('verbal-vocab'),
      },
      {
        id: 'verbal-grammar',
        title: 'Grammar Essentials',
        description: 'Perfect your grammar and sentence structure',
        color: 'hsl(340, 70%, 55%)',
        levels: createLevels('verbal-grammar'),
      },
      {
        id: 'verbal-comprehension',
        title: 'Reading Comprehension',
        description: 'Understand and analyze written passages',
        color: 'hsl(200, 70%, 50%)',
        levels: createLevels('verbal-comprehension'),
      },
    ],
  },
  {
    id: 'data',
    name: 'Data Interpretation',
    icon: '📊',
    color: 'hsl(200, 70%, 50%)',
    description: 'Analyze charts, graphs, and tables effectively',
    units: [
      {
        id: 'data-basics',
        title: 'Chart Basics',
        description: 'Learn to read and interpret basic charts',
        color: 'hsl(200, 70%, 50%)',
        levels: createLevels('data-basics'),
      },
      {
        id: 'data-advanced',
        title: 'Advanced Analysis',
        description: 'Complex data interpretation and comparisons',
        color: 'hsl(145, 65%, 42%)',
        levels: createLevels('data-advanced'),
      },
    ],
  },
];

export const getSubjectById = (id: string): Subject | undefined => {
  return subjects.find(s => s.id === id);
};

export const getUnitById = (subjectId: string, unitId: string): Unit | undefined => {
  const subject = getSubjectById(subjectId);
  return subject?.units.find(u => u.id === unitId);
};
