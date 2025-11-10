import { Employee } from './employess.types';

declare global {
    namespace Express {
        interface Request {
            Employee?: {
                employee_id: number;
                email: string;
                role: string;
                first_name: string;
                last_name: string;
            };
        }
    }
}
