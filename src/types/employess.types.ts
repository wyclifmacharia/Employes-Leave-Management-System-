export interface Employee {
    employee_id: number;
    first_name: string;
    last_name: string;
    email: string;
    hashed_pass: string;
    role: string;
    date_joined: Date;
    is_active: boolean;
    department_id: number;
}
export interface NewEmployee {
    first_name: string;
    last_name: string;
    email: string;
    hashed_pass: string;
    role: string;
    department_id: number;
    date_joined: Date;
    employee_id:number;
}
export interface UpdateEmployee {
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
    role?: string;
    is_active?: boolean;
    department_id?: number;
}