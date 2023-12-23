type DogSizeData = {
  [key: number]: number;
  cap: string;
};

type CalcData = {
  [key: string]: DogSizeData;
};

export const sizeIcons = [
  {
    icon: 'smallDog',
    description: '> 20lbs',
    calcKey: 'sm',
  },
  {
    icon: 'mediumDog',
    description: '21-50lbs',
    calcKey: 'md',
  },
  {
    icon: 'largeDog',
    description: '51-100lbs',
    calcKey: 'lg',
  },
  {
    icon: 'giantDog',
    description: '< 100lbs',
    calcKey: 'xl',
  },
]

export const calcData: CalcData = {
  sm: { 1: 15, 2: 24, 3: 28, 4: 32, 5: 36, 6: 40, 7: 44, 8: 48, 9: 52, 10: 56, 11: 60, 12: 64, 13: 68, 14: 72, 15: 76, 16: 80, cap: '85+'},
  md: { 1: 15, 2: 24, 3: 28, 4: 32, 5: 36, 6: 42, 7: 47, 8: 51, 9: 56, 10: 60, 11: 65, 12: 69, 13: 74, 14: 78, 15: 83, 16: 87, cap: '93+'},
  lg: { 1: 15, 2: 24, 3: 28, 4: 32, 5: 36, 6: 45, 7: 50, 8: 55, 9: 61, 10: 66, 11: 72, 12: 77, 13: 82, 14: 88, 15: 93, 16: 99, cap: '104+'},
  xl: { 1: 12, 2: 22, 3: 31, 4: 38, 5: 45, 6: 49, 7: 56, 8: 64, 9: 71, 10: 79, 11: 86, 12: 93, 13: 100, 14: 107, 15: 114, 16: 121, cap: '125+'}
}

export const inputConversion = (val: string | number): "cap" | number | false => {
  if (Number(val)) {
    const roundedAge = Math.round(Number(val));
    return roundedAge > 16 ? 'cap' : Math.round(Number(val));
  }
  // in cases where the user enters text instead of a number
  return false;
}