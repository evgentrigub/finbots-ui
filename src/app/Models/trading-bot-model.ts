export interface TradingBot{
    id: number,
    name: string,
    strategy:string,
    conditions: string,
    instrument: string,
    result: string,
    time: string
}