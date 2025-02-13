import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { OperationsListResponse } from "../types/operations-list-response.type";
import { OperationsListResponseMock } from "../mocks/operations-list-response.mock";

// Service que vai simular a chamada http
@Injectable({
    providedIn: 'root',
})
export class OperationsService {
    getOperations(): Observable<OperationsListResponse>{
        return of(OperationsListResponseMock);
    }
}