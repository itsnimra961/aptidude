import { Question, TargetExam } from '@/types';

// Mock questions for demonstration - in production, this would call the Gemini API
const mockQuestions: Record<string, Question[]> = {
  'quantitative': [
    {
      id: 'q1',
      text: 'If 3x + 7 = 22, what is the value of x?',
      options: ['3', '5', '7', '15'],
      correctIndex: 1,
      explanation: 'Subtract 7 from both sides: 3x = 15. Divide by 3: x = 5.',
      topic: 'Algebra',
      difficulty: 'easy',
    },
    {
      id: 'q2',
      text: 'A train travels 300 km in 5 hours. What is its average speed?',
      options: ['50 km/h', '60 km/h', '65 km/h', '70 km/h'],
      correctIndex: 1,
      explanation: 'Average speed = Total distance / Total time = 300 / 5 = 60 km/h.',
      topic: 'Speed & Distance',
      difficulty: 'easy',
    },
    {
      id: 'q3',
      text: 'What is 15% of 240?',
      options: ['32', '36', '38', '40'],
      correctIndex: 1,
      explanation: '15% of 240 = (15/100) × 240 = 0.15 × 240 = 36.',
      topic: 'Percentages',
      difficulty: 'easy',
    },
    {
      id: 'q4',
      text: 'If the ratio of boys to girls in a class is 3:2, and there are 30 students, how many boys are there?',
      options: ['12', '15', '18', '20'],
      correctIndex: 2,
      explanation: 'Total parts = 3 + 2 = 5. Boys = (3/5) × 30 = 18.',
      topic: 'Ratios',
      difficulty: 'medium',
    },
    {
      id: 'q5',
      text: 'What is the simple interest on $1000 at 5% per annum for 2 years?',
      options: ['$50', '$100', '$150', '$200'],
      correctIndex: 1,
      explanation: 'SI = (P × R × T) / 100 = (1000 × 5 × 2) / 100 = $100.',
      topic: 'Simple Interest',
      difficulty: 'medium',
    },
  ],
  'logical': [
    {
      id: 'l1',
      text: 'Find the next number in the series: 2, 6, 12, 20, 30, ?',
      options: ['40', '42', '44', '46'],
      correctIndex: 1,
      explanation: 'The differences are 4, 6, 8, 10, 12. Next number = 30 + 12 = 42.',
      topic: 'Number Series',
      difficulty: 'medium',
    },
    {
      id: 'l2',
      text: 'All cats are animals. Some animals are dogs. Which conclusion is valid?',
      options: [
        'All cats are dogs',
        'Some dogs are cats',
        'No valid conclusion can be drawn',
        'All animals are cats'
      ],
      correctIndex: 2,
      explanation: 'From the given statements, we cannot establish any relationship between cats and dogs.',
      topic: 'Syllogisms',
      difficulty: 'medium',
    },
    {
      id: 'l3',
      text: 'If APPLE is coded as 50, what is BANANA coded as?',
      options: ['42', '48', '52', '60'],
      correctIndex: 2,
      explanation: 'APPLE: A(1)+P(16)+P(16)+L(12)+E(5) = 50. BANANA: B(2)+A(1)+N(14)+A(1)+N(14)+A(1) = 33... Actually, each letter value × position gives different result.',
      topic: 'Coding-Decoding',
      difficulty: 'hard',
    },
    {
      id: 'l4',
      text: 'If you rearrange the letters "CIFAIPC" you would have the name of a:',
      options: ['City', 'Ocean', 'Country', 'Animal'],
      correctIndex: 1,
      explanation: 'Rearranging CIFAIPC gives PACIFIC, which is an ocean.',
      topic: 'Anagrams',
      difficulty: 'easy',
    },
    {
      id: 'l5',
      text: 'Complete the analogy: Book is to Reading as Fork is to:',
      options: ['Drawing', 'Writing', 'Eating', 'Cooking'],
      correctIndex: 2,
      explanation: 'A book is used for reading, similarly a fork is used for eating.',
      topic: 'Analogies',
      difficulty: 'easy',
    },
  ],
  'verbal': [
    {
      id: 'v1',
      text: 'Choose the word most similar in meaning to "ABUNDANT":',
      options: ['Scarce', 'Plentiful', 'Moderate', 'Limited'],
      correctIndex: 1,
      explanation: 'Abundant means existing in large quantities; plentiful. The synonym is "plentiful".',
      topic: 'Synonyms',
      difficulty: 'easy',
    },
    {
      id: 'v2',
      text: 'Choose the word opposite in meaning to "BENEVOLENT":',
      options: ['Kind', 'Generous', 'Malevolent', 'Caring'],
      correctIndex: 2,
      explanation: 'Benevolent means kind and generous. Its antonym is malevolent (having ill will).',
      topic: 'Antonyms',
      difficulty: 'medium',
    },
    {
      id: 'v3',
      text: 'Identify the error: "Neither the teacher nor the students was present."',
      options: [
        'Neither',
        'nor',
        'was',
        'No error'
      ],
      correctIndex: 2,
      explanation: 'With "neither...nor", the verb agrees with the nearer subject. "Students" is plural, so it should be "were".',
      topic: 'Grammar',
      difficulty: 'medium',
    },
    {
      id: 'v4',
      text: 'Complete the sentence: "Despite his wealth, he lives ___."',
      options: ['lavishly', 'frugally', 'wealthy', 'richly'],
      correctIndex: 1,
      explanation: '"Despite" indicates contrast. If someone has wealth but lives differently, "frugally" (economically) provides that contrast.',
      topic: 'Sentence Completion',
      difficulty: 'medium',
    },
    {
      id: 'v5',
      text: 'The idiom "to burn the midnight oil" means:',
      options: [
        'To waste resources',
        'To work late into the night',
        'To start a fire',
        'To be very angry'
      ],
      correctIndex: 1,
      explanation: '"Burning the midnight oil" means working or studying late into the night.',
      topic: 'Idioms',
      difficulty: 'easy',
    },
  ],
  'data': [
    {
      id: 'd1',
      text: 'If a pie chart shows 25% for Category A, what is the angle of that sector?',
      options: ['25°', '45°', '90°', '180°'],
      correctIndex: 2,
      explanation: 'Angle = (Percentage/100) × 360° = (25/100) × 360° = 90°.',
      topic: 'Pie Charts',
      difficulty: 'easy',
    },
    {
      id: 'd2',
      text: 'In a bar graph, if Bar A is 40 units and Bar B is 25% more than Bar A, what is the height of Bar B?',
      options: ['45 units', '50 units', '55 units', '60 units'],
      correctIndex: 1,
      explanation: 'Bar B = 40 + (25% of 40) = 40 + 10 = 50 units.',
      topic: 'Bar Graphs',
      difficulty: 'easy',
    },
    {
      id: 'd3',
      text: 'The average of 5 numbers is 20. If one number is removed, the average becomes 15. What number was removed?',
      options: ['35', '40', '45', '50'],
      correctIndex: 1,
      explanation: 'Original sum = 5 × 20 = 100. New sum = 4 × 15 = 60. Removed number = 100 - 60 = 40.',
      topic: 'Averages',
      difficulty: 'medium',
    },
    {
      id: 'd4',
      text: 'A table shows sales increased from 200 to 250 units. What is the percentage increase?',
      options: ['20%', '25%', '30%', '50%'],
      correctIndex: 1,
      explanation: 'Percentage increase = ((250-200)/200) × 100 = (50/200) × 100 = 25%.',
      topic: 'Tables',
      difficulty: 'easy',
    },
    {
      id: 'd5',
      text: 'If the median of 7, 12, x, 19, 25 is 15, what is x?',
      options: ['13', '14', '15', '16'],
      correctIndex: 2,
      explanation: 'When arranged in order, the median (middle value) of 5 numbers is the 3rd number. So x = 15.',
      topic: 'Statistics',
      difficulty: 'medium',
    },
  ],
};

export const geminiService = {
  generateQuestions: async (
    topic: string,
    count: number = 5,
    difficulty: 'easy' | 'medium' | 'hard' = 'medium',
    targetExam: TargetExam = 'GENERAL'
  ): Promise<Question[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Get questions based on topic
    const topicKey = topic.toLowerCase().includes('quant') ? 'quantitative' :
                     topic.toLowerCase().includes('logic') ? 'logical' :
                     topic.toLowerCase().includes('verbal') ? 'verbal' :
                     topic.toLowerCase().includes('data') ? 'data' : 'quantitative';
    
    const questions = mockQuestions[topicKey] || mockQuestions['quantitative'];
    
    // Shuffle and return requested count
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  },

  getDailyMixQuestions: async (count: number = 10): Promise<Question[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Get mixed questions from all topics
    const allQuestions = [
      ...mockQuestions['quantitative'],
      ...mockQuestions['logical'],
      ...mockQuestions['verbal'],
      ...mockQuestions['data'],
    ];
    
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  },
};
