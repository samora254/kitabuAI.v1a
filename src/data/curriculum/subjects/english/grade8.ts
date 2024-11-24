import { Topic } from '../../index';

export const grade8English: Topic[] = [
  {
    id: 'listening-and-speaking',
    title: 'Listening and Speaking',
    description: 'Advanced communication skills and public speaking',
    gradeLevel: 8,
    learningObjectives: [
      'Master complex listening comprehension',
      'Develop confident public speaking skills',
      'Participate effectively in debates',
      'Build advanced vocabulary'
    ],
    subtopics: [
      {
        id: 'active-listening',
        title: 'Active Listening',
        content: 'Developing advanced listening skills and response techniques.',
        examples: [
          'Note-taking during lectures',
          'Summarizing spoken content',
          'Responding to complex instructions'
        ],
        exercises: [
          {
            id: 'listen-1',
            question: 'What is the most effective way to show active listening?',
            options: [
              'Interrupting frequently',
              'Making eye contact and nodding',
              'Looking away',
              'Talking over others'
            ],
            correctAnswer: 1,
            explanation: 'Making eye contact and nodding shows engagement and understanding while listening.',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'public-speaking',
        title: 'Public Speaking',
        content: 'Mastering presentation and speech delivery.',
        examples: [
          'Formal presentations',
          'Impromptu speeches',
          'Debate techniques'
        ],
        exercises: [
          {
            id: 'speak-1',
            question: 'What is the most important aspect of a persuasive speech?',
            options: [
              'Speaking quickly',
              'Using complex words',
              'Clear arguments with evidence',
              'Being loud'
            ],
            correctAnswer: 2,
            explanation: 'A persuasive speech needs clear arguments supported by evidence to convince the audience.',
            difficulty: 'medium'
          }
        ]
      }
    ]
  },
  {
    id: 'reading-and-comprehension',
    title: 'Reading and Comprehension',
    description: 'Advanced reading analysis and critical thinking',
    gradeLevel: 8,
    learningObjectives: [
      'Analyze complex texts critically',
      'Make advanced inferences',
      'Evaluate multiple perspectives',
      'Master reading techniques'
    ],
    subtopics: [
      {
        id: 'critical-reading',
        title: 'Critical Reading',
        content: 'Advanced text analysis and evaluation.',
        examples: [
          'Identifying author bias',
          'Analyzing text structure',
          'Evaluating arguments'
        ],
        exercises: [
          {
            id: 'read-1',
            question: 'What indicates potential bias in a text?',
            options: [
              'Clear headings',
              'Emotional language',
              'Proper punctuation',
              'Page numbers'
            ],
            correctAnswer: 1,
            explanation: 'Emotional language often indicates bias as it attempts to influence readers\' feelings rather than present objective facts.',
            difficulty: 'medium'
          }
        ]
      }
    ]
  },
  {
    id: 'writing-and-composition',
    title: 'Writing and Composition',
    description: 'Advanced writing techniques and styles',
    gradeLevel: 8,
    learningObjectives: [
      'Master various writing styles',
      'Develop strong arguments',
      'Create compelling narratives',
      'Perfect technical writing'
    ],
    subtopics: [
      {
        id: 'advanced-writing',
        title: 'Advanced Writing Techniques',
        content: 'Mastering different writing styles and purposes.',
        examples: [
          'Argumentative essays',
          'Research papers',
          'Creative writing'
        ],
        exercises: [
          {
            id: 'write-1',
            question: 'What makes an effective thesis statement?',
            options: [
              'Being very long',
              'Clear, specific argument',
              'Using many adjectives',
              'Being very general'
            ],
            correctAnswer: 1,
            explanation: 'An effective thesis statement presents a clear, specific argument that guides the entire paper.',
            difficulty: 'medium'
          }
        ]
      }
    ]
  }
];