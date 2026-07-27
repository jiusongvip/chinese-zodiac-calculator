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

export function getZodiacByDate(year, month, day) {
  const lunarDates = getLunarNewYearDates();
  let animalIndex = (year - 4) % 12;
  if (animalIndex < 0) animalIndex += 12;

  for (const ld of lunarDates) {
    if (year === ld.year) {
      if (month < ld.month || (month === ld.month && day < ld.day)) {
        animalIndex = (animalIndex - 1 + 12) % 12;
      }
      break;
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

function getLunarNewYearDates() {
  const years = {};
  const data = [
    [2026,2,17],[2025,1,29],[2024,2,10],[2023,1,22],[2022,2,1],[2021,2,12],[2020,1,25],
    [2019,2,5],[2018,2,16],[2017,1,28],[2016,2,8],[2015,2,19],[2014,1,31],[2013,2,10],
    [2012,1,23],[2011,2,3],[2010,2,14],[2009,1,26],[2008,2,7],[2007,2,18],[2006,1,29],
    [2005,2,9],[2004,1,22],[2003,2,1],[2002,2,12],[2001,1,24],[2000,2,5],[1999,2,16],
    [1998,1,28],[1997,2,7],[1996,2,19],[1995,1,31],[1994,2,10],[1993,1,23],[1992,2,4],
    [1991,2,15],[1990,1,27],[1989,2,6],[1988,2,17],[1987,1,29],[1986,2,9],[1985,2,20],
    [1984,2,2],[1983,2,13],[1982,1,25],[1981,2,5],[1980,2,16],[1979,1,28],[1978,2,7],
    [1977,2,18],[1976,1,31],[1975,2,11],[1974,1,23],[1973,2,3],[1972,2,15],[1971,1,27],
    [1970,2,6],[1969,2,17],[1968,1,30],[1967,2,9],[1966,1,21],[1965,2,2],[1964,2,13],
    [1963,1,25],[1962,2,5],[1961,2,15],[1960,1,28],[1959,2,8],[1958,2,18],[1957,1,31],
    [1956,2,12],[1955,1,24],[1954,2,3],[1953,2,14],[1952,1,27],[1951,2,6],[1950,2,17],
    [1949,1,29],[1948,2,10],[1947,1,22],[1946,2,2],[1945,2,13],[1944,1,25],[1943,2,5],
    [1942,2,15],[1941,1,27],[1940,2,8],[1939,2,19],[1938,1,31],[1937,2,11],[1936,1,24],
    [1935,2,4],[1934,2,14],[1933,1,26],[1932,2,6],[1931,2,17],[1930,1,30],[1929,2,10],
    [1928,1,23],[1927,2,2],[1926,2,13],[1925,1,24],[1924,2,5],[1923,2,16],[1922,2,18],
    [1921,2,8],[1920,2,20],[1919,2,1],[1918,2,11],[1917,1,23],[1916,2,3],[1915,2,14],
    [1914,1,26],[1913,2,6],[1912,2,18],
  ];
  for (const [y, m, d] of data) years[y] = { month: m, day: d };
  return years;
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