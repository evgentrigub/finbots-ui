/**
 * Стратегии торговли из теханализа TradingView по интервалам
 */
export enum StrategyName {
  tv1 = 'tv1',
  tv5 = 'tv5',
  tv15 = 'tv15',
  tv30 = 'tv30',
  tv60 = 'tv60',
  simpleTV = 'simpleTV' // TODO если убрать значение, то база не поднимается
}

/**
 * Общая модель стратегии
 * @param payload - информация о стратегии
 */
export interface StrategyViewModel {
  value: StrategyName;
  name: string;
  description: string;
  disabled: boolean;
}
