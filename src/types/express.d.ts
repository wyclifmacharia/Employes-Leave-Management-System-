
declare global {
    namespace Express {
        interface Request {
            Employee?: {
                sub: number;          
                first_name: string;
                last_name: string;
                exp: number;
                iat: number;
                role?: string;        
                email?: string;       
            };
        }
    }
}

export {};
