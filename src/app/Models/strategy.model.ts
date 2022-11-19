/**
 * Стратегии торговли
 * Список всех возможный страгтегий
 * (теханализ их источников, собственный теханализ, арбитраж и т.д.)
 */
export enum StrategyList {
  simpleTV = 'simpleTV',
  simpleRaddar = 'simpleRaddar',
  arbitration = 'arbitration'
}

/**
 * Общая модель стратегии
 * @param payload - информация о стратегии
 */
export interface StrategyViewModel {
  value: StrategyList;
  name: string;
  description: string;
  disabled: boolean;
}
