import * as notificationRepository from '../repositories/notifications.repositories'
import { NewNotification, UpdateNotification } from '../types/notification.types'

export const getAllNotifications = async() => await notificationRepository.getAllNotifications();
export const getNotification =async(id: number) => await notificationRepository.getNotificationById(id);
export const addNotification = async (notification:NewNotification) => await notificationRepository.createNotification(notification);

export const modifyNotification = async (id: number, notificationUpdates:UpdateNotification) => {
    const existingNotification = await notificationRepository.getNotificationById(id);
    if(!existingNotification){
        throw new Error('Notification not found');
    }
    return await notificationRepository.updateNotification(id, notificationUpdates);
};

export const removeNotification= async (id: number) => {
    const existingNotification = await notificationRepository.getNotificationById(id);
    if(!existingNotification){
        throw new Error('Notification not found');
    }
    return await notificationRepository.deleteNotification(id);
}

