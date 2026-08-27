export const ZODIAC_ANIMALS = [
  { id: 'rat', rank: 1, chinese: '鼠', element: 'Water', yinYang: 'Yang' },
  { id: 'ox', rank: 2, chinese: '牛', element: 'Earth', yinYang: 'Yin' },
  { id: 'tiger', rank: 3, chinese: '虎', element: 'Wood', yinYang: 'Yang' },
  { id: 'rabbit', rank: 4, chinese: '兔', element: 'Wood', yinYang: 'Yin' },
  { id: 'dragon', rank: 5, chinese: '龙', element: 'Earth', yinYang: 'Yang' },
  { id: 'snake', rank: 6, chinese: '蛇', element: 'Fire', yinYang: 'Yin' },
  { id: 'horse', rank: 7, chinese: '马', element: 'Fire', yinYang: 'Yang' },
  { id: 'goat', rank: 8, chinese: '羊', element: 'Earth', yinYang: 'Yin' },
  { id: 'monkey', rank: 9, chinese: '猴', element: 'Metal', yinYang: 'Yang' },
  { id: 'rooster', rank: 10, chinese: '鸡', element: 'Metal', yinYang: 'Yin' },
  { id: 'dog', rank: 11, chinese: '狗', element: 'Earth', yinYang: 'Yang' },
  { id: 'pig', rank: 12, chinese: '猪', element: 'Water', yinYang: 'Yin' },
];

export const ZODIAC_YEARS = [
  { animal: 'rat', years: [1912, 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020, 2032] },
  { animal: 'ox', years: [1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021, 2033] },
  { animal: 'tiger', years: [1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022, 2034] },
  { animal: 'rabbit', years: [1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023, 2035] },
  { animal: 'dragon', years: [1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024, 2036] },
  { animal: 'snake', years: [1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025, 2037] },
  { animal: 'horse', years: [1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026, 2038] },
  { animal: 'goat', years: [1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027, 2039] },
  { animal: 'monkey', years: [1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028, 2040] },
  { animal: 'rooster', years: [1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029, 2041] },
  { animal: 'dog', years: [1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030, 2042] },
  { animal: 'pig', years: [1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031, 2043] },
];

export const ELEMENTS = {
  Metal: { years: [1960, 1961, 1970, 1971, 1980, 1981, 1990, 1991, 2000, 2001, 2010, 2011, 2020, 2021], color: '#E8D5B7', traits: 'Strong, determined, independent' },
  Water: { years: [1952, 1953, 1962, 1963, 1972, 1973, 1982, 1983, 1992, 1993, 2002, 2003, 2012, 2013, 2022, 2023], color: '#4A90D9', traits: 'Intuitive, flexible, persuasive' },
  Wood: { years: [1954, 1955, 1964, 1965, 1974, 1975, 1984, 1985, 1994, 1995, 2004, 2005, 2014, 2015, 2024, 2025], color: '#5B8C5A', traits: 'Creative, generous, idealistic' },
  Fire: { years: [1956, 1957, 1966, 1967, 1976, 1977, 1986, 1987, 1996, 1997, 2006, 2007, 2016, 2017, 2026, 2027], color: '#DC2626', traits: 'Passionate, energetic, adventurous' },
  Earth: { years: [1958, 1959, 1968, 1969, 1978, 1979, 1988, 1989, 1998, 1999, 2008, 2009, 2018, 2019, 2028, 2029], color: '#C4A46C', traits: 'Practical, stable, nurturing' },
};

// Heavenly-stem element of the six most recent birth years for each animal (60-year cycle).
// Derived from the sexagenary cycle: stem element (Jia/Yi=Wood, Bing/Ding=Fire, Wu/Ji=Earth, Geng/Xin=Metal, Ren/Gui=Water) + earthly branch animal.
export const BORN_ERAS = {
  rat: [
    { year: 1960, stem: '庚', element: 'Metal' },
    { year: 1972, stem: '壬', element: 'Water' },
    { year: 1984, stem: '甲', element: 'Wood' },
    { year: 1996, stem: '丙', element: 'Fire' },
    { year: 2008, stem: '戊', element: 'Earth' },
    { year: 2020, stem: '庚', element: 'Metal' },
  ],
  ox: [
    { year: 1961, stem: '辛', element: 'Metal' },
    { year: 1973, stem: '癸', element: 'Water' },
    { year: 1985, stem: '乙', element: 'Wood' },
    { year: 1997, stem: '丁', element: 'Fire' },
    { year: 2009, stem: '己', element: 'Earth' },
    { year: 2021, stem: '辛', element: 'Metal' },
  ],
  tiger: [
    { year: 1962, stem: '壬', element: 'Water' },
    { year: 1974, stem: '甲', element: 'Wood' },
    { year: 1986, stem: '丙', element: 'Fire' },
    { year: 1998, stem: '戊', element: 'Earth' },
    { year: 2010, stem: '庚', element: 'Metal' },
    { year: 2022, stem: '壬', element: 'Water' },
  ],
  rabbit: [
    { year: 1963, stem: '癸', element: 'Water' },
    { year: 1975, stem: '乙', element: 'Wood' },
    { year: 1987, stem: '丁', element: 'Fire' },
    { year: 1999, stem: '己', element: 'Earth' },
    { year: 2011, stem: '辛', element: 'Metal' },
    { year: 2023, stem: '癸', element: 'Water' },
  ],
  dragon: [
    { year: 1964, stem: '甲', element: 'Wood' },
    { year: 1976, stem: '丙', element: 'Fire' },
    { year: 1988, stem: '戊', element: 'Earth' },
    { year: 2000, stem: '庚', element: 'Metal' },
    { year: 2012, stem: '壬', element: 'Water' },
    { year: 2024, stem: '甲', element: 'Wood' },
  ],
  snake: [
    { year: 1965, stem: '乙', element: 'Wood' },
    { year: 1977, stem: '丁', element: 'Fire' },
    { year: 1989, stem: '己', element: 'Earth' },
    { year: 2001, stem: '辛', element: 'Metal' },
    { year: 2013, stem: '癸', element: 'Water' },
    { year: 2025, stem: '乙', element: 'Wood' },
  ],
  horse: [
    { year: 1966, stem: '丙', element: 'Fire' },
    { year: 1978, stem: '戊', element: 'Earth' },
    { year: 1990, stem: '庚', element: 'Metal' },
    { year: 2002, stem: '壬', element: 'Water' },
    { year: 2014, stem: '甲', element: 'Wood' },
    { year: 2026, stem: '丙', element: 'Fire' },
  ],
  goat: [
    { year: 1955, stem: '乙', element: 'Wood' },
    { year: 1967, stem: '丁', element: 'Fire' },
    { year: 1979, stem: '己', element: 'Earth' },
    { year: 1991, stem: '辛', element: 'Metal' },
    { year: 2003, stem: '癸', element: 'Water' },
    { year: 2015, stem: '乙', element: 'Wood' },
  ],
  monkey: [
    { year: 1956, stem: '丙', element: 'Fire' },
    { year: 1968, stem: '戊', element: 'Earth' },
    { year: 1980, stem: '庚', element: 'Metal' },
    { year: 1992, stem: '壬', element: 'Water' },
    { year: 2004, stem: '甲', element: 'Wood' },
    { year: 2016, stem: '丙', element: 'Fire' },
  ],
  rooster: [
    { year: 1957, stem: '丁', element: 'Fire' },
    { year: 1969, stem: '己', element: 'Earth' },
    { year: 1981, stem: '辛', element: 'Metal' },
    { year: 1993, stem: '癸', element: 'Water' },
    { year: 2005, stem: '乙', element: 'Wood' },
    { year: 2017, stem: '丁', element: 'Fire' },
  ],
  dog: [
    { year: 1958, stem: '戊', element: 'Earth' },
    { year: 1970, stem: '庚', element: 'Metal' },
    { year: 1982, stem: '壬', element: 'Water' },
    { year: 1994, stem: '甲', element: 'Wood' },
    { year: 2006, stem: '丙', element: 'Fire' },
    { year: 2018, stem: '戊', element: 'Earth' },
  ],
  pig: [
    { year: 1959, stem: '己', element: 'Earth' },
    { year: 1971, stem: '辛', element: 'Metal' },
    { year: 1983, stem: '癸', element: 'Water' },
    { year: 1995, stem: '乙', element: 'Wood' },
    { year: 2007, stem: '丁', element: 'Fire' },
    { year: 2019, stem: '己', element: 'Earth' },
  ],
};

export const COMPATIBILITY = {
  rat: { best: ['dragon', 'monkey', 'ox'], worst: ['horse', 'goat', 'rabbit'] },
  ox: { best: ['rat', 'snake', 'rooster'], worst: ['horse', 'dog', 'goat'] },
  tiger: { best: ['horse', 'dog', 'pig'], worst: ['monkey', 'snake'] },
  rabbit: { best: ['goat', 'pig', 'dog'], worst: ['rat', 'rooster', 'dragon'] },
  dragon: { best: ['rat', 'monkey', 'rooster'], worst: ['rabbit', 'dog', 'ox'] },
  snake: { best: ['ox', 'rooster', 'monkey'], worst: ['tiger', 'pig', 'horse'] },
  horse: { best: ['tiger', 'goat', 'dog'], worst: ['rat', 'ox', 'snake'] },
  goat: { best: ['rabbit', 'horse', 'pig'], worst: ['rat', 'ox', 'dog'] },
  monkey: { best: ['rat', 'dragon', 'snake'], worst: ['tiger', 'pig', 'horse'] },
  rooster: { best: ['ox', 'snake', 'dragon'], worst: ['rabbit', 'dog', 'rat'] },
  dog: { best: ['tiger', 'rabbit', 'horse'], worst: ['ox', 'dragon', 'goat'] },
  pig: { best: ['rabbit', 'goat', 'tiger'], worst: ['snake', 'monkey', 'pig'] },
};

export const LUCKY_THINGS = {
  rat: { numbers: [2, 3], colors: ['Blue', 'Gold', 'Green'], flowers: ['Lily', 'African Violet'] },
  ox: { numbers: [1, 9], colors: ['Blue', 'Red', 'Purple'], flowers: ['Peony', 'Tulip'] },
  tiger: { numbers: [1, 3, 4], colors: ['Blue', 'Gray', 'Orange'], flowers: ['Calla Lily', 'Yellow Lily'] },
  rabbit: { numbers: [1, 3, 9], colors: ['Red', 'Pink', 'Purple'], flowers: ['Plantain Lily', 'Jasmine'] },
  dragon: { numbers: [1, 7, 9], colors: ['Gold', 'Silver', 'Yellow'], flowers: ['Blood Lily', 'Verbena'] },
  snake: { numbers: [2, 8, 9], colors: ['Black', 'Red', 'Yellow'], flowers: ['Orchid', 'Cactus'] },
  horse: { numbers: [2, 3, 7], colors: ['Green', 'Yellow', 'Purple'], flowers: ['Sunflower', 'Jasmine'] },
  goat: { numbers: [2, 7, 8], colors: ['Green', 'Red', 'Purple'], flowers: ['Carnation', 'Primrose'] },
  monkey: { numbers: [4, 9], colors: ['Blue', 'Gold', 'White'], flowers: ['Chrysanthemum', 'Orchid'] },
  rooster: { numbers: [5, 7, 8], colors: ['Gold', 'Brown', 'Yellow'], flowers: ['Gladiola', 'Cockscomb'] },
  dog: { numbers: [3, 7], colors: ['Green', 'Red', 'Purple'], flowers: ['Rose', 'Gerbera'] },
  pig: { numbers: [2, 5, 8], colors: ['Yellow', 'Gray', 'Brown'], flowers: ['Hydrangea', 'Daisy'] },
};

/**
 * Chinese New Year dates (lunar new year start) from 1900 to 2035.
 * Used by the calculator and to derive exact zodiac year ranges.
 */
export const LUNAR_NEW_YEAR_DATES = buildLunarDates();

function buildLunarDates() {
  const years = {};
  const data = [
    [2035, 2, 8], [2034, 2, 19], [2033, 1, 31], [2032, 2, 11], [2031, 1, 23], [2030, 2, 3],
    [2029, 2, 13], [2028, 1, 26], [2027, 2, 6], [2026, 2, 17], [2025, 1, 29], [2024, 2, 10],
    [2023, 1, 22], [2022, 2, 1], [2021, 2, 12], [2020, 1, 25], [2019, 2, 5], [2018, 2, 16],
    [2017, 1, 28], [2016, 2, 8], [2015, 2, 19], [2014, 1, 31], [2013, 2, 10], [2012, 1, 23],
    [2011, 2, 3], [2010, 2, 14], [2009, 1, 26], [2008, 2, 7], [2007, 2, 18], [2006, 1, 29],
    [2005, 2, 9], [2004, 1, 22], [2003, 2, 1], [2002, 2, 12], [2001, 1, 24], [2000, 2, 5],
    [1999, 2, 16], [1998, 1, 28], [1997, 2, 7], [1996, 2, 19], [1995, 1, 31], [1994, 2, 10],
    [1993, 1, 23], [1992, 2, 4], [1991, 2, 15], [1990, 1, 27], [1989, 2, 6], [1988, 2, 17],
    [1987, 1, 29], [1986, 2, 9], [1985, 2, 20], [1984, 2, 2], [1983, 2, 13], [1982, 1, 25],
    [1981, 2, 5], [1980, 2, 16], [1979, 1, 28], [1978, 2, 7], [1977, 2, 18], [1976, 1, 31],
    [1975, 2, 11], [1974, 1, 23], [1973, 2, 3], [1972, 2, 15], [1971, 1, 27], [1970, 2, 6],
    [1969, 2, 17], [1968, 1, 30], [1967, 2, 9], [1966, 1, 21], [1965, 2, 2], [1964, 2, 13],
    [1963, 1, 25], [1962, 2, 5], [1961, 2, 15], [1960, 1, 28], [1959, 2, 8], [1958, 2, 18],
    [1957, 1, 31], [1956, 2, 12], [1955, 1, 24], [1954, 2, 3], [1953, 2, 14], [1952, 1, 27],
    [1951, 2, 6], [1950, 2, 17], [1949, 1, 29], [1948, 2, 10], [1947, 1, 22], [1946, 2, 2],
    [1945, 2, 13], [1944, 1, 25], [1943, 2, 5], [1942, 2, 15], [1941, 1, 27], [1940, 2, 8],
    [1939, 2, 19], [1938, 1, 31], [1937, 2, 11], [1936, 1, 24], [1935, 2, 4], [1934, 2, 14],
    [1933, 1, 26], [1932, 2, 6], [1931, 2, 17], [1930, 1, 30], [1929, 2, 10], [1928, 1, 23],
    [1927, 2, 2], [1926, 2, 13], [1925, 1, 24], [1924, 2, 5], [1923, 2, 16], [1922, 2, 18],
    [1921, 2, 8], [1920, 2, 20], [1919, 2, 1], [1918, 2, 11], [1917, 1, 23], [1916, 2, 3],
    [1915, 2, 14], [1914, 1, 26], [1913, 2, 6], [1912, 2, 18], [1911, 1, 30], [1910, 2, 10],
    [1909, 1, 22], [1908, 2, 2], [1907, 2, 13], [1906, 1, 25], [1905, 2, 4], [1904, 2, 16],
    [1903, 1, 29], [1902, 2, 8], [1901, 2, 19], [1900, 1, 31],
  ];
  for (const [y, m, d] of data) years[y] = { month: m, day: d };
  return years;
}

const MONTH_ABBR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * Exact lunar date ranges for each zodiac sign cycle.
 * Each range runs from one Chinese New Year to the next, e.g. Rat 2008: Feb 7, 2008 – Jan 25, 2009.
 */
export const ZODIAC_LUNAR_RANGES = ZODIAC_YEARS.map((entry) => {
  const ranges = entry.years
    .filter((y) => LUNAR_NEW_YEAR_DATES[y] && LUNAR_NEW_YEAR_DATES[y + 1])
    .map((y) => {
      const start = LUNAR_NEW_YEAR_DATES[y];
      const end = LUNAR_NEW_YEAR_DATES[y + 1];
      const fmt = (d) => `${MONTH_ABBR[d.month - 1]} ${d.day}`;
      return {
        year: y,
        start: fmt(start),
        end: fmt(end),
        startMonth: start.month,
        startDay: start.day,
        endMonth: end.month,
        endDay: end.day,
      };
    });
  return { animal: entry.animal, ranges };
});

/**
 * In-depth sign profiles: personality, love, and career.
 * Based on traditional Chinese zodiac interpretations.
 */
export const SIGN_PROFILES = {
  rat: {
    personality: 'Quick-witted, charming, and ambitious, Rats are natural socialites with sharp minds. They excel at spotting opportunities and are known for their resourcefulness and attention to detail. Their adaptability makes them successful in fast-changing environments.',
    love: 'Rats are devoted and attentive partners who value intellectual connection. They are most compatible with Dragons, Monkeys, and Oxen, while relationships with Horses, Goats, or Rabbits may require extra effort.',
    career: 'Rats thrive in careers that reward analysis and networking — finance, journalism, marketing, and research. Their ability to plan ahead makes them excellent strategists and negotiators.',
  },
  ox: {
    personality: 'Diligent, patient, and determined, Oxen are the dependable workers of the zodiac. They approach life with steady persistence and a strong sense of duty, rarely giving up once they commit to a goal. Their quiet strength earns them deep respect.',
    love: 'Oxen are loyal and protective partners who express love through action rather than words. They match best with Snakes, Roosters, and Rats; Tigers, Dragons, and Dogs may clash with their stubborn streak.',
    career: 'Oxen excel in roles requiring endurance and precision — engineering, agriculture, healthcare, and management. Their methodical approach and reliability make them pillars of any team.',
  },
  tiger: {
    personality: 'Bold, charismatic, and adventurous, Tigers are natural leaders who are unafraid of risk. They possess magnetic energy that draws others in, and their courage allows them to take on challenges others avoid. Impulsiveness is their main challenge.',
    love: 'Tigers are passionate, generous lovers who wear their hearts on their sleeves. Best matches include Horses, Dogs, and Pigs; Snakes and Monkeys may find the Tiger\'s intensity overwhelming.',
    career: 'Tigers shine in dynamic careers — entrepreneurship, entertainment, public relations, and competitive fields. They perform best when given freedom and leadership, and wilt under micromanagement.',
  },
  rabbit: {
    personality: 'Gentle, intuitive, and artistic, Rabbits are the peacemakers of the zodiac. They possess refined taste and a strong aesthetic sense, and their tactful nature helps them avoid conflict. They value comfort, stability, and close-knit relationships.',
    love: 'Rabbits are tender and considerate partners who create harmonious homes. They are most compatible with Goats, Pigs, and Dogs; Rats, Dragons, and Roosters may test their patience.',
    career: 'Rabbits flourish in creative and people-oriented fields — design, writing, diplomacy, and education. Their calm judgment and eye for detail make them trusted advisors and collaborators.',
  },
  dragon: {
    personality: 'Confident, visionary, and energetic, Dragons are the most dynamic sign of the zodiac. They are born leaders with grand ambitions and the charisma to inspire others. Their enthusiasm can occasionally tip into impatience or arrogance.',
    love: 'Dragons are magnetic and passionate partners who crave admiration. They align best with Monkeys, Rats, and Roosters; Oxen, Dogs, and Rabbits may struggle with the Dragon\'s forceful nature.',
    career: 'Dragons excel in high-visibility roles — executive leadership, entrepreneurship, entertainment, and technology. Their big-picture thinking and drive make them natural pioneers.',
  },
  snake: {
    personality: 'Wise, elegant, and strategic, Snakes are the philosophers of the zodiac. They observe deeply, think before acting, and keep their cards close. Their calm exterior hides intense focus and ambition.',
    love: 'Snakes are devoted but discreet partners who value loyalty and privacy. They harmonize with Roosters, Oxen, and Monkeys; Tigers, Horses, and Pigs may find them difficult to read.',
    career: 'Snakes thrive in roles that reward intellect and discretion — law, finance, research, and consulting. Their strategic minds excel at long-term planning and problem-solving.',
  },
  horse: {
    personality: 'Energetic, independent, and warm-hearted, Horses are the free spirits of the zodiac. They love freedom, movement, and social connection, and their optimism is contagious. Their restlessness can lead to impatience with routine.',
    love: 'Horses are passionate and playful partners who need space to thrive. Best matches are Tigers, Dogs, and Goats; Rats, Oxen, and Snakes may feel the Horse\'s independence as distance.',
    career: 'Horses excel in fast-paced, people-centered work — sales, journalism, travel, and entertainment. They perform best with variety and freedom, and dislike repetitive tasks.',
  },
  goat: {
    personality: 'Gentle, creative, and empathetic, Goats are the artists of the zodiac. They are deeply in tune with beauty and emotion, and they prefer harmony over confrontation. Their kindness makes them beloved friends.',
    love: 'Goats are romantic and nurturing partners who give generously. They pair best with Rabbits, Horses, and Pigs; Rats, Tigers, and Oxen may be too direct for their sensitive nature.',
    career: 'Goats shine in creative and caring professions — art, music, design, and social work. They work best in supportive environments with steady guidance.',
  },
  monkey: {
    personality: 'Clever, playful, and innovative, Monkeys are the inventors of the zodiac. They solve problems with wit and improvisation, and their humor lights up any room. Their versatility is unmatched, though focus can waver.',
    love: 'Monkeys are charming, entertaining partners who keep relationships lively. They connect best with Dragons, Rats, and Snakes; Tigers, Horses, and Pigs may not match their mental pace.',
    career: 'Monkeys excel in dynamic fields — technology, sales, marketing, and the arts. Their quick minds thrive on variety and challenge.',
  },
  rooster: {
    personality: 'Observant, confident, and hardworking, Roosters are the perfectionists of the zodiac. They have sharp attention to detail and strong organizational skills, and they take pride in their appearance and work. Their frankness can sometimes come across as critical.',
    love: 'Roosters are devoted partners who show love through acts of service and loyalty. They match well with Snakes, Oxen, and Dragons; Rabbits, Dogs, and Rats may clash with their directness.',
    career: 'Roosters excel in precision-driven roles — accounting, editing, fashion, and management. Their discipline and eye for detail make them outstanding operators.',
  },
  dog: {
    personality: 'Loyal, honest, and protective, Dogs are the guardians of the zodiac. They have a strong sense of justice and will stand up for those they care about. Their reliability and sincerity make them trusted confidants.',
    love: 'Dogs are faithful and devoted partners who value trust above all. They harmonize with Tigers, Rabbits, and Horses; Oxen, Dragons, and Roosters may challenge their cautious nature.',
    career: 'Dogs excel in service and justice-oriented careers — law enforcement, healthcare, social services, and security. Their integrity and diligence earn lasting respect.',
  },
  pig: {
    personality: 'Generous, sincere, and patient, Pigs are the gentle souls of the zodiac. They enjoy life\'s simple pleasures, work hard, and treat others with kindness. Their easygoing nature hides a strong inner resolve.',
    love: 'Pigs are warm, loyal partners who give love freely. They match best with Rabbits, Goats, and Tigers; Snakes and Monkeys may find them too trusting.',
    career: 'Pigs flourish in steady, rewarding work — hospitality, agriculture, the arts, and roles involving care. Their dedication and good nature make them valued colleagues.',
  },
};

/** 2026 (Fire Horse year) annual horoscope previews for all twelve signs. */
export const HOROSCOPES_2026 = {
  rat: "The Rat shines in 2026 with career opportunities driven by quick thinking. Focus on networking to unlock financial gains.",
  ox: "Steady progress awaits the Ox in 2026. Your patience pays off professionally, but guard against stubbornness in relationships.",
  tiger: "2026 brings bold energy for the Tiger. Take calculated risks in love and career — fortune favors the brave this year.",
  rabbit: "A harmonious year for the Rabbit. Prioritize self-care and family; financial stability comes through cautious planning.",
  dragon: "The Dragon soars in 2026 with creative breakthroughs. Career expansion is favored, but watch your health amid the excitement.",
  snake: "Wisdom guides the Snake this year. Strategic moves in investments yield results. Trust your intuition in romantic matters.",
  horse: "As the ruling sign of 2026, the Horse enjoys a powerful year. Leadership opportunities abound; channel your fiery energy wisely.",
  goat: "A year of gentle growth for the Goat. Artistic pursuits flourish. Strengthen relationships through open communication.",
  monkey: "2026 rewards the Monkey's cleverness. New ventures succeed. Stay adaptable — unexpected changes bring hidden blessings.",
  rooster: "Precision and diligence elevate the Rooster in 2026. Career recognition arrives. Balance ambition with family time.",
  dog: "Loyalty brings rewards for the Dog this year. Legal and financial matters resolve favorably. Nurture your closest bonds.",
  pig: "The Pig enjoys abundance in 2026. Travel and education bring joy. Guard against overindulgence; maintain healthy routines.",
};

// Detailed 2026 horoscope by life area, used by the yearly-horoscope overview page.
// The summary mirrors HOROSCOPES_2026 (also shown on sign pages); the four areas add depth without duplication.
export const HOROSCOPES_2026_DETAIL = {
  rat: {
    summary: "The Rat shines in 2026 with career opportunities driven by quick thinking. Focus on networking to unlock financial gains.",
    career: "Networking pays off for the Rat — attend industry events and reconnect with past colleagues, because opportunities arrive through people rather than job postings.",
    love: "Single Rats may meet someone promising through work connections. Committed Rats should schedule quality time, as busy periods tempt you to drift apart.",
    health: "Your energy holds steady, but late-night work sessions will catch up. Protect your sleep schedule and add short walks to your daily routine.",
    wealth: "Financial gains come through side projects and smart negotiation. Avoid impulse purchases in spring, when spending temptations peak.",
  },
  ox: {
    summary: "Steady progress awaits the Ox in 2026. Your patience pays off professionally, but guard against stubbornness in relationships.",
    career: "Steady, visible progress marks the Ox year — take on leadership roles even if they feel premature; your diligence will be noticed.",
    love: "Your patience strengthens bonds, but avoid being overly stubborn in disagreements. Compromise early keeps small issues from growing.",
    health: "Physical routines built now will carry you through the year. Watch your posture and schedule regular stretching to counter long desk hours.",
    wealth: "Slow and steady wins: automatic savings and conservative investments outperform risky bets in 2026. Review subscriptions and cut waste.",
  },
  tiger: {
    summary: "2026 brings bold energy for the Tiger. Take calculated risks in love and career — fortune favors the brave this year.",
    career: "Bold moves are rewarded for the Tiger — pitch ambitious projects and volunteer for high-visibility assignments. Your courage sets you apart.",
    love: "Passion runs high, but check impulsiveness. Grand gestures work best when paired with consistent, small acts of care.",
    health: "Your fiery energy needs an outlet — intense workouts channel it productively. Beware of burnout from overcommitting.",
    wealth: "Calculated risks can pay off, especially mid-year. Set aside emergency funds before any large purchases.",
  },
  rabbit: {
    summary: "A harmonious year for the Rabbit. Prioritize self-care and family; financial stability comes through cautious planning.",
    career: "A quieter, steadier path suits the Rabbit — refine skills and deepen expertise rather than chasing promotions. Recognition follows competence.",
    love: "Home and family take center stage. Nurturing relationships brings deep satisfaction; don't neglect your own needs in the process.",
    health: "Gentle routines like yoga or tai chi suit your constitution. Prioritize rest; your sensitive nature absorbs stress easily.",
    wealth: "Cautious planning delivers stability — build a budget buffer and avoid speculative investments. Small consistent savings compound well.",
  },
  dragon: {
    summary: "The Dragon soars in 2026 with creative breakthroughs. Career expansion is favored, but watch your health amid the excitement.",
    career: "Creative breakthroughs mark the Dragon's year — lead projects that showcase originality. Your reputation grows through visible innovation.",
    love: "Your charisma attracts admirers, but depth matters more than drama. Invest in honest conversations with your partner.",
    health: "Excitement can push you past your limits. Schedule recovery time deliberately; monitor stress and avoid skipping meals.",
    wealth: "Expansion is favored, but manage cash flow carefully. Invest in skills and tools that multiply your earning potential.",
  },
  snake: {
    summary: "Wisdom guides the Snake this year. Strategic moves in investments yield results. Trust your intuition in romantic matters.",
    career: "Strategic moves win the Snake's year — research thoroughly before acting, and position yourself where your analytical edge shines.",
    love: "Intuition guides romance well in 2026. Trust your instincts, but communicate openly rather than reading minds.",
    health: "Your tendency to keep things inside affects your body. Journaling, massage, and breathing exercises release stored tension.",
    wealth: "Your investment instincts are sharp — but verify facts before acting. Diversify rather than concentrating on one bet.",
  },
  horse: {
    summary: "As the ruling sign of 2026, the Horse enjoys a powerful year. Leadership opportunities abound; channel your fiery energy wisely.",
    career: "As the year's ruling sign, the Horse commands attention — accept leadership offers and public roles; your presence inspires others.",
    love: "Your magnetism is at its peak. Channel fiery energy into deepening one meaningful bond rather than spreading it thin.",
    health: "High momentum risks burnout. Balance intense activity with proper meals, hydration, and early nights.",
    wealth: "Income rises, but so do expenses. Lock in gains, avoid lifestyle inflation, and plan for a strong finish to the year.",
  },
  goat: {
    summary: "A year of gentle growth for the Goat. Artistic pursuits flourish. Strengthen relationships through open communication.",
    career: "Artistic and creative pursuits flourish for the Goat — bring aesthetics and empathy into your work; they become your edge.",
    love: "Open communication deepens bonds. Express your needs gently rather than expecting others to guess them.",
    health: "Creative flow nourishes you; schedule time for hobbies. Gentle movement keeps your energy balanced.",
    wealth: "Steady income is secure, but avoid financing impulsive purchases. Seek advice before major financial commitments.",
  },
  monkey: {
    summary: "2026 rewards the Monkey's cleverness. New ventures succeed. Stay adaptable — unexpected changes bring hidden blessings.",
    career: "The Monkey's cleverness unlocks new ventures — pitch innovative ideas and embrace change. Adaptability is your superpower in 2026.",
    love: "Playfulness attracts, but consistency builds trust. Show up reliably; humor works best when paired with dependability.",
    health: "Your active mind needs physical release. Regular exercise prevents mental clutter and improves focus.",
    wealth: "Unexpected gains may appear, but so do unexpected costs. Maintain a buffer and verify every deal before signing.",
  },
  rooster: {
    summary: "Precision and diligence elevate the Rooster in 2026. Career recognition arrives. Balance ambition with family time.",
    career: "Precision elevates the Rooster — polish your craft and showcase your attention to detail. Recognition arrives for visible quality.",
    love: "Balance ambition with family time. Small rituals — shared meals, weekend walks — keep bonds strong.",
    health: "Your discipline supports great routines. Avoid perfectionism-driven stress; schedule genuine downtime.",
    wealth: "Your meticulous planning pays off. Keep organized records and review investments quarterly.",
  },
  dog: {
    summary: "Loyalty brings rewards for the Dog this year. Legal and financial matters resolve favorably. Nurture your closest bonds.",
    career: "Loyalty and integrity open doors for the Dog — legal, regulatory, and partnership matters resolve in your favor. Trust is your currency.",
    love: "Your closest bonds deepen. Be open to new connections too; this year rewards both stability and welcome surprises.",
    health: "Your vigilance can tip into worry. Meditation and outdoor time restore calm; watch tension in your shoulders and jaw.",
    wealth: "Favorable resolutions improve finances. Consolidate debts and build a safety net for peace of mind.",
  },
  pig: {
    summary: "The Pig enjoys abundance in 2026. Travel and education bring joy. Guard against overindulgence; maintain healthy routines.",
    career: "Travel and learning enrich the Pig's year — seek training, certifications, or international exposure. New knowledge multiplies your value.",
    love: "Joy and generosity define your relationships in 2026. Shared experiences — trips, classes, celebrations — strengthen bonds.",
    health: "Pleasure temptations need balance. Maintain healthy routines and moderate indulgences; regular activity keeps you vibrant.",
    wealth: "Abundance flows, but guard against overindulgence spending. Automate savings before lifestyle upgrades.",
  },
};

export function getZodiacByDate(year, month, day) {
  let animalIndex = (year - 4) % 12;
  if (animalIndex < 0) animalIndex += 12;

  const ld = LUNAR_NEW_YEAR_DATES[year];
  if (ld) {
    if (month < ld.month || (month === ld.month && day < ld.day)) {
      animalIndex = (animalIndex - 1 + 12) % 12;
    }
  }

  const animal = ZODIAC_ANIMALS[animalIndex];
  const elementKey = getElementKey(year);
  return {
    animal,
    element: elementKey,
    elementInfo: ELEMENTS[elementKey],
    lucky: LUCKY_THINGS[animal.id],
  };
}

function getElementKey(year) {
  const stemIndex = (year - 4) % 10;
  const elements = ['Wood', 'Wood', 'Fire', 'Fire', 'Earth', 'Earth', 'Metal', 'Metal', 'Water', 'Water'];
  return elements[stemIndex < 0 ? stemIndex + 10 : stemIndex];
}

export function getCompatibility(sign1, sign2) {
  const data = COMPATIBILITY[sign1];
  if (!data) return { score: 0, label: 'Unknown' };
  if (data.best.includes(sign2)) return { score: 5, label: 'Best Match' };
  if (data.worst.includes(sign2)) return { score: 1, label: 'Challenging Match' };
  return { score: 3, label: 'Neutral Match' };
}

/**
 * Unique SEO metadata (meta description + H1 tagline) for each sign page.
 * Keeps every /signs/[animal] title/description/H1 distinct from the others.
 */
export const SIGN_META = {
  rat: {
    metaDescription: 'Rat Chinese zodiac: quick-witted, charming, ambitious. Personality, love matches, lucky numbers, birth years 2020 & 2032, and the 2026 horoscope.',
    h1Tagline: 'The Quick-Witted First Sign',
  },
  ox: {
    metaDescription: 'Ox Chinese zodiac: diligent, patient, determined. Personality, love compatibility, lucky items, birth years 2021 & 2033, and the 2026 horoscope.',
    h1Tagline: 'The Diligent Second Sign',
  },
  tiger: {
    metaDescription: 'Tiger Chinese zodiac: bold, charismatic, adventurous. Personality, love matches, lucky numbers, birth years 2022 & 2034, and the 2026 horoscope.',
    h1Tagline: 'The Courageous Third Sign',
  },
  rabbit: {
    metaDescription: 'Rabbit Chinese zodiac: gentle, intuitive, artistic. Personality, love compatibility, lucky colors, birth years 2023 & 2035, and the 2026 horoscope.',
    h1Tagline: 'The Gentle Fourth Sign',
  },
  dragon: {
    metaDescription: 'Dragon Chinese zodiac: confident, visionary, energetic. Personality, love matches, lucky items, birth years 2024 & 2036, and the 2026 horoscope.',
    h1Tagline: 'The Legendary Fifth Sign',
  },
  snake: {
    metaDescription: 'Snake Chinese zodiac: wise, elegant, strategic. Personality, love matches, lucky numbers, birth years 2025 & 2037, and the 2026 horoscope.',
    h1Tagline: 'The Wise Sixth Sign',
  },
  horse: {
    metaDescription: 'Horse Chinese zodiac: energetic, independent, warm-hearted. Personality, matches, lucky items, birth years 2026 & 2038, and the 2026 horoscope.',
    h1Tagline: 'The Spirited Seventh Sign',
  },
  goat: {
    metaDescription: 'Goat Chinese zodiac: gentle, creative, empathetic. Personality, love compatibility, lucky items, birth years 2027 & 2039, and the 2026 horoscope.',
    h1Tagline: 'The Creative Eighth Sign',
  },
  monkey: {
    metaDescription: 'Monkey Chinese zodiac: clever, playful, innovative. Personality, best matches, lucky numbers, birth years 2028 & 2040, and the 2026 horoscope.',
    h1Tagline: 'The Clever Ninth Sign',
  },
  rooster: {
    metaDescription: 'Rooster Chinese zodiac: observant, confident, hardworking. Personality, matches, lucky colors, birth years 2029 & 2041, and 2026 horoscope.',
    h1Tagline: 'The Punctual Tenth Sign',
  },
  dog: {
    metaDescription: 'Dog Chinese zodiac: loyal, honest, protective. Personality, love compatibility, lucky items, birth years 2030 & 2042, and the 2026 horoscope.',
    h1Tagline: 'The Loyal Eleventh Sign',
  },
  pig: {
    metaDescription: 'Pig Chinese zodiac: generous, sincere, patient. Personality, love matches, lucky numbers, birth years 2031 & 2043, and the 2026 horoscope.',
    h1Tagline: 'The Generous Twelfth Sign',
  },
};

/**
 * Full compatibility description library (single source of truth).
 * Keys follow "{sign1}_{sign2}" and lookups are bidirectional.
 */
export const COMPATIBILITY_DETAILS = {
  neutral: 'This is a neutral compatibility pairing. While there are no major conflicts, the relationship may require conscious effort to build deep understanding. With mutual respect and open communication, this pair can develop a strong and balanced bond over time.',
  best: {
    rat_dragon: 'An ambitious power couple. Both are confident and driven, building success together through mutual respect and shared goals.',
    rat_monkey: 'A playful, intellectually stimulating pair. Their clever banter and shared wit keep the relationship fresh and exciting.',
    rat_ox: 'A practical and grounded match. The Rat provides resourcefulness while the Ox offers steadfast reliability and loyalty.',
    ox_snake: 'A calm, deeply loyal match. The Ox provides stability while the Snake offers wisdom and strategic thinking.',
    ox_rooster: 'A hardworking and detail-oriented pair. Together they create a well-organized and prosperous life.',
    tiger_horse: 'An adventurous, high-energy duo. Both love freedom and action, making them natural partners in exploration.',
    tiger_dog: 'A loyal and protective pair. They share a strong sense of justice and will always have each other\'s backs.',
    tiger_pig: 'A warm and generous match. The Tiger brings excitement while the Pig brings comfort and affection.',
    rabbit_goat: 'A gentle, artistic match. Both value harmony and beauty, creating a peaceful and nurturing home together.',
    rabbit_pig: 'A kind and compassionate pair. They understand each other\'s emotional needs and build a loving bond.',
    rabbit_dog: 'A faithful and honest connection. Both value loyalty and create a safe, trustworthy relationship.',
    dragon_rat: 'A dynamic and powerful union. Both are ambitious and inspire each other to reach greater heights.',
    dragon_monkey: 'A creative and charismatic pair. Their combined talents and confidence attract success and admiration.',
    dragon_rooster: 'A confident and successful pair. The Dragon dreams big and the Rooster handles the details — a perfect execution team.',
    snake_ox: 'A steady and wise partnership. The Snake brings intuition and the Ox provides unshakeable stability.',
    snake_rooster: 'An analytical and efficient match. Both are sharp-minded and work well together toward shared goals.',
    snake_monkey: 'A clever and strategic duo. They communicate on a high intellectual level and solve problems effortlessly.',
    horse_tiger: 'A passionate and freedom-loving pair. They share an adventurous spirit and zest for life.',
    horse_goat: 'A creative and affectionate match. The Horse provides energy while the Goat adds warmth and artistry.',
    horse_dog: 'An honest and active pair. Both are straightforward and enjoy an energetic, outdoorsy lifestyle together.',
    goat_rabbit: 'A soft and harmonious union. Both appreciate beauty, art, and a peaceful domestic life.',
    goat_horse: 'A warm and supportive pair. The Goat\'s tenderness balances the Horse\'s adventurous nature beautifully.',
    goat_pig: 'A gentle and generous match. Both are kind-hearted and create a cozy, loving environment.',
    monkey_rat: 'A witty and resourceful pair. Their shared intelligence and humor make life an exciting game.',
    monkey_dragon: 'A bold and visionary duo. Together they can achieve anything they set their minds to.',
    monkey_snake: 'A deep and intellectual connection. Both are strategic thinkers who understand each other intuitively.',
    rooster_ox: 'A dependable and efficient pair. They share strong work ethics and build security together.',
    rooster_snake: 'A sophisticated and perceptive match. Both appreciate precision and have excellent judgment.',
    rooster_dragon: 'A glamorous and ambitious union. Together they command attention and achieve great things.',
    dog_tiger: 'A courageous and loyal pair. They share strong values and will fight for what they believe in.',
    dog_rabbit: 'A calm and faithful match. The Dog provides protection while the Rabbit brings peace to the home.',
    dog_horse: 'An active and honest pair. Both are straightforward and enjoy a life filled with movement and purpose.',
    pig_rabbit: 'A sweet and nurturing connection. Both are gentle souls who prioritize harmony and comfort.',
    pig_goat: 'A warm and artistic match. They create a beautiful life filled with creativity, kindness, and good food.',
    pig_tiger: 'An exciting yet comforting pair. The Tiger brings adventure while the Pig offers unconditional support.',
  },
  worst: {
    rat_horse: 'The Rat is cautious and detail-oriented while the Horse is impulsive and freedom-loving. Their pacing and priorities often clash.',
    rat_goat: 'The Rat is practical and direct, while the Goat is sensitive and dreamy. Their different worldviews can lead to frustration.',
    rat_rabbit: 'The Rat is ambitious and assertive, while the Rabbit prefers peace and quiet. Their social styles are fundamentally at odds.',
    ox_horse: 'The Ox values routine and stability, but the Horse craves freedom and spontaneity. Their lifestyles pull in opposite directions.',
    ox_dog: 'Both are stubborn in their own ways. The Ox is rigid in methods while the Dog is rigid in principles, leading to deadlock.',
    ox_goat: 'The Ox values routine and blunt honesty, while the Goat is sensitive and artistic. Misunderstandings arise from their different emotional languages.',
    tiger_monkey: 'Both are clever and competitive, but their strong personalities can lead to power struggles and a battle of wills.',
    tiger_snake: 'The Tiger is bold and direct while the Snake is subtle and strategic. Their approaches to life are almost opposite.',
    rabbit_rat: 'The Rabbit craves harmony and calm, while the Rat is restless and ambitious. Their energy levels and needs differ significantly.',
    rabbit_rooster: 'The Rabbit craves peace and quiet while the Rooster is direct and critical. Their communication styles are fundamentally different.',
    rabbit_dragon: 'The Rabbit is gentle and reserved, while the Dragon is fiery and demanding. The Rabbit may feel overwhelmed by the Dragon\'s intensity.',
    dragon_rabbit: 'The Dragon is bold and visionary while the Rabbit is cautious and comfort-seeking. The Dragon may seem overwhelming to the sensitive Rabbit.',
    dragon_dog: 'The Dragon is bold and visionary, the Dog is loyal and practical. The Dragon may seem arrogant to the Dog, while the Dog seems pessimistic to the Dragon.',
    dragon_ox: 'Both are strong-willed and stubborn. The Dragon wants to lead with vision while the Ox insists on tradition — a clash of egos.',
    snake_tiger: 'The Snake is private and analytical, the Tiger is open and impulsive. Their contrasting approaches to decision-making create friction.',
    snake_pig: 'The Snake is private and analytical, the Pig is open and trusting. Their contrasting approaches to intimacy can create distance.',
    snake_horse: 'The Snake is cautious and strategic, the Horse is reckless and spontaneous. Their different risk tolerances cause tension.',
    horse_rat: 'The Horse gallops ahead while the Rat plans every step. Their natural rhythms are completely out of sync.',
    horse_ox: 'The Horse wants freedom and adventure; the Ox wants routine and stability. Neither is willing to bend easily.',
    horse_snake: 'The Horse lives in the moment while the Snake thinks several moves ahead. Patience becomes a major issue.',
    goat_rat: 'The Goat is sensitive and artistic, the Rat is pragmatic and blunt. Their emotional languages are hard to reconcile.',
    goat_ox: 'The Goat needs appreciation and tenderness; the Ox gives practicality and tough love. Both feel misunderstood.',
    goat_dog: 'The Goat is optimistic and carefree, while the Dog is anxious and serious. Their outlooks on life create a persistent mood gap.',
    monkey_tiger: 'Both are strong personalities who love to lead. The Monkey uses wit, the Tiger uses force — neither backs down easily.',
    monkey_pig: 'The Monkey is clever and mischievous, while the Pig is honest and trusting. The Monkey\'s games may hurt the sincere Pig.',
    monkey_horse: 'The Monkey is a strategist who plans carefully, while the Horse acts on impulse. Their decision-making styles clash.',
    rooster_rabbit: 'The Rooster is blunt and critical, the Rabbit is sensitive and harmony-seeking. Words can wound easily here.',
    rooster_dog: 'The Rooster speaks his mind freely while the Dog is anxious and cautious. Their communication creates unnecessary stress.',
    rooster_rat: 'Both are clever but competitive. The Rooster\'s pride and the Rat\'s resourcefulness can turn into a rivalry rather than a partnership.',
    dog_ox: 'Both are stubborn and set in their ways. The Dog follows his conscience while the Ox follows his habits — they rarely align.',
    dog_dragon: 'The Dog is grounded and skeptical, the Dragon is grandiose and optimistic. Their worldviews are fundamentally incompatible.',
    dog_goat: 'The Dog is protective and anxious, while the Goat is gentle and carefree. The Dog\'s worry can smother the Goat\'s lightness.',
    pig_snake: 'The Pig is open-hearted and trusting, the Snake is private and guarded. Trust is a recurring challenge in this pairing.',
    pig_monkey: 'The Pig is honest and straightforward, while the Monkey loves clever tricks. The Pig may feel deceived or manipulated.',
    pig_pig: 'Two Pigs together may struggle with overindulgence and lack of direction. Neither provides the structure the other needs.',
  },
};

/**
 * Lookup a pairing description from the library (bidirectional).
 * Returns { text, kind } where kind is 'best' | 'worst' | 'neutral'.
 */
export function getCompatibilityDescription(sign1, sign2) {
  const a = sign1 < sign2 ? sign1 : sign2;
  const b = sign1 < sign2 ? sign2 : sign1;
  const bestKey = `${a}_${b}`;
  const worstKey = `${a}_${b}`;
  if (COMPATIBILITY_DETAILS.best[bestKey]) return { text: COMPATIBILITY_DETAILS.best[bestKey], kind: 'best' };
  if (COMPATIBILITY_DETAILS.worst[worstKey]) return { text: COMPATIBILITY_DETAILS.worst[worstKey], kind: 'worst' };
  return { text: COMPATIBILITY_DETAILS.neutral, kind: 'neutral' };
}
