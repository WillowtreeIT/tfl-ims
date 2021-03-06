import {Incident} from "../data/incident";
import {incidentList} from './mock/incident.mock';

const initialState: Array<Incident> = incidentList();

class ActionType {
    id!: string;
    type!: string;
    payload!: Incident;
}

export function incidentReducer(state = initialState, action: ActionType): Array<Incident> {
    // When the app loads this would check for the state, which is undefined, so set it to null in the argument.
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    ...action.payload
                }];
        case 'DELETE':
            return state.filter(
                incident => incident.id !== action.payload.id
            );
        default:
            return state;
    }
}
