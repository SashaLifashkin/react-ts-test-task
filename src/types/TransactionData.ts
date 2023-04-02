export interface TransactionData {
    id: number,
    type: string;
    sum: number;
    name: string;
    description: string;
    date: string;
    pending: boolean;
    authorizedUser: string;
    iconName: string;
    iconPrefix: string;
}
