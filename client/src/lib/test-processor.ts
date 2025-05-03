interface TestResults {
  primaryType?: string;
  secondaryType?: string;
  tertiaryType?: string;
  scores?: {[key: string]: number};
  recommendedCareers?: string[];
}

interface PersonalityType {
  name: string;
  description: string;
  careers?: string[];
}

// Function to process Holland test results
export const processTestResults = (
  answers: { [key: string]: string },
  personalityTypes?: { [key: string]: PersonalityType }
): TestResults => {
  // Initialize scores for each type
  const scores: { [key: string]: number } = {};
  
  if (personalityTypes) {
    Object.keys(personalityTypes).forEach(type => {
      scores[type] = 0;
    });
  } else {
    // Default Holland types if no personality types provided
    scores['R'] = 0; // Realistic
    scores['I'] = 0; // Investigative
    scores['A'] = 0; // Artistic
    scores['S'] = 0; // Social
    scores['E'] = 0; // Enterprising
    scores['C'] = 0; // Conventional
  }
  
  // Process each answer
  Object.entries(answers).forEach(([questionId, value]) => {
    const numericalValue = parseInt(value, 10);
    
    // Map question ID to personality type (this is a simplified mapping)
    // In a real application, each question would be associated with a specific type
    if (questionId.startsWith('R')) {
      scores['R'] += numericalValue;
    } else if (questionId.startsWith('I')) {
      scores['I'] += numericalValue;
    } else if (questionId.startsWith('A')) {
      scores['A'] += numericalValue;
    } else if (questionId.startsWith('S')) {
      scores['S'] += numericalValue;
    } else if (questionId.startsWith('E')) {
      scores['E'] += numericalValue;
    } else if (questionId.startsWith('C')) {
      scores['C'] += numericalValue;
    } else {
      // For test questions that don't start with a type code
      // Map based on question number (simplification)
      const qNum = parseInt(questionId.replace('q', ''), 10);
      
      if (qNum % 6 === 1) scores['R'] += numericalValue;
      else if (qNum % 6 === 2) scores['I'] += numericalValue;
      else if (qNum % 6 === 3) scores['A'] += numericalValue;
      else if (qNum % 6 === 4) scores['S'] += numericalValue;
      else if (qNum % 6 === 5) scores['E'] += numericalValue;
      else scores['C'] += numericalValue;
    }
  });
  
  // Sort personality types by score
  const sortedTypes = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);
  
  // Get top three personality types
  const primaryType = sortedTypes[0];
  const secondaryType = sortedTypes[1];
  const tertiaryType = sortedTypes[2];
  
  // Get recommended careers for the primary type
  let recommendedCareers: string[] = [];
  
  if (personalityTypes && personalityTypes[primaryType]?.careers) {
    recommendedCareers = personalityTypes[primaryType].careers || [];
  } else {
    // Default career recommendations based on Holland codes
    switch (primaryType) {
      case 'R':
        recommendedCareers = ['Mühendis', 'Teknisyen', 'Marangoz', 'Elektrikçi', 'İnşaat Ustası'];
        break;
      case 'I':
        recommendedCareers = ['Bilim İnsanı', 'Araştırmacı', 'Doktor', 'Ekonomist', 'Matematikçi'];
        break;
      case 'A':
        recommendedCareers = ['Grafik Tasarımcı', 'Müzisyen', 'Yazar', 'Fotoğrafçı', 'Mimar'];
        break;
      case 'S':
        recommendedCareers = ['Öğretmen', 'Psikolog', 'Sosyal Hizmet Uzmanı', 'Danışman', 'Hemşire'];
        break;
      case 'E':
        recommendedCareers = ['Pazarlamacı', 'Yönetici', 'Avukat', 'Siyasetçi', 'Girişimci'];
        break;
      case 'C':
        recommendedCareers = ['Muhasebeci', 'Bankacı', 'Sekreter', 'Veri Analisti', 'İstatistikçi'];
        break;
    }
  }
  
  // Return the results
  return {
    primaryType,
    secondaryType,
    tertiaryType,
    scores,
    recommendedCareers
  };
};
