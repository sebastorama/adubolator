export interface Fertilizer {
  id: number;
  n: number;
  p: number;
  k: number;
  s: number;
  kgPerHa: number;
  pricePerTon: number;
}

export interface Strategy {
  id: number;
  fertilizers: Fertilizer[];
}

export function newFertilizer(): Fertilizer {
  const fertilizer = {
    id: new Date().getTime(),
    n: 0,
    p: 0,
    k: 0,
    s: 0,
    kgPerHa: 0,
    pricePerTon: 0,
  };
  return fertilizer;
}

export function newStrategy(): Strategy {
  const strategy: Strategy = {
    id: new Date().getTime(),
    fertilizers: [newFertilizer()],
  };

  return strategy;
}

export const MAP: Fertilizer = {
  id: new Date().getTime(),
  n: 11,
  p: 52,
  k: 0,
  s: 0,
  kgPerHa: 0,
  pricePerTon: 0,
};

export const KCl: Fertilizer = {
  id: new Date().getTime(),
  n: 0,
  p: 0,
  k: 60,
  s: 0,
  kgPerHa: 0,
  pricePerTon: 0,
};
