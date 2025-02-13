// vai tipar a interface que representa o objeto/operação
// do mocks/operations-list-response.mock.ts

export interface IOperationResponse {
    customerName: string;
    customerStatus: number;
    operationDate: string;
    operationValue: number;
    operationRisk: number;
}