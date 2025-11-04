// Complete leave type from database
export interface LeaveType {
    leave_type_id: number;
    type_name: string;
    description: string;
    default_days: number;
    created_at: Date;
}

// creating new leave types
export interface NewLeaveType {
    type_name: string;
    description: string;
    default_days: number;
}

// Updating leave types
export interface UpdateLeaveType {
    type_name?: string;
    description?: string;
    default_days?: number;
}