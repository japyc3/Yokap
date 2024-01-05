export interface Operation {
    type: OperationType;
    amount: number;
    note: string;
    date: Date;
}

export enum OperationType{
    IN, OUT, LOAD, CREDIT
}