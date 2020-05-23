// <!-- Fertilizer -->
export interface Fertilizer {
  id: number;
  n: number;
  p: number;
  k: number;
  s: number;
  kgPerHa: number;
  pricePerTon: number;
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

// <!-- Strategy -->
export interface Strategy {
  id: number;
  fertilizers: Fertilizer[];
}

export function newStrategy(): Strategy {
  const strategy: Strategy = {
    id: new Date().getTime(),
    fertilizers: [newFertilizer()],
  };

  return strategy;
}

// <!-- Summary -->
export interface Summary {
  n: number;
  p: number;
  k: number;
  s: number;
  pricePerHa: number;
}

export function calculateSummary(strategy: Strategy): Summary {
  const summary: Summary = {
    n: 0,
    p: 0,
    k: 0,
    s: 0,
    pricePerHa: 0,
  };

  strategy.fertilizers.forEach((fertilizer) => {
    summary.n += (fertilizer.n * fertilizer.kgPerHa) / 100;
    summary.p += (fertilizer.p * fertilizer.kgPerHa) / 100;
    summary.k += (fertilizer.k * fertilizer.kgPerHa) / 100;
    summary.s += (fertilizer.s * fertilizer.kgPerHa) / 100;
    summary.pricePerHa += (fertilizer.pricePerTon * fertilizer.kgPerHa) / 1000;
  });
  return summary;
}
