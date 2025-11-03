import {getPool} from "../db/config";
import { Notification, NewNotification, UpdateNotification } from "../types/notification.types";

export const getAllNotifications = async (): Promise<Notification[]> => {
    const pool = await getPool();
    const result = await pool.request().query('SELECT * FROM Notification');
    return result.recordset;
}

export const getNotificationById = async (id: number): Promise<Notification> => {
  const pool = await getPool();
  const result = await pool.request()
        .input('id',id)
        .query('SELECT * FROM Notification WHERE notification_id= @id');
    return result.recordset[0];  
}

export const createNotification = async (notification: NewNotification) => {
    const pool = await getPool();
    const result = await pool.request()
        .input('employee_id',notification.employee_id)
        .input('request_id', notification.request_id)
        .input('message', notification.message)
        .query(`INSERT INTO Nofitication(employee_id, request_id, message)
            OUTPUT INSERTED.*
            VALUES (@)employee_id, @request_id, @message`);
            return{message: "Notification created successfully", notification: result.recordset[0]};
}

export const updateNotification = async (id: number, notificationUpdates:UpdateNotification)=> {
    const pool = await getPool();
    await pool.request()
        .input('id', id)
        .query(`UPDATE Nofitication SET 
                employee_id = COALESCE(@employee_id, employee_id),
                request_id = COALESCE(@request_id, request_id),
                message = COALESCE(@message, message),
                WHERE notification_id= @id`);

        return{message: "Notification upddated successfully"};
}

export const deleteNotification = async (id:number) =>{
    const pool = await getPool();
    await pool.request()
        .input('id', id)
        .query('DELETE FROM Notification WHERE notification_id =@id');
    return{message: "Notification deleted successfully";}
}

