'use client';

import React from 'react';
import { notificationConstants } from '../../../src/modules/notifications/notifications.constant';
import NotificationItem from '../../../src/modules/notifications/components/notification-item';

const NotificationsPage = () => {
  return (
    <div className="bg-light-grey max-w-[75rem] mx-auto w-full p-4 text-black">
      <div className="bg-white rounded-md">
        <h1 className="text-xl md:text-[30px] font-bold p-5">Notifications</h1>
        {notificationConstants.map((item, i) => (
          <NotificationItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;
