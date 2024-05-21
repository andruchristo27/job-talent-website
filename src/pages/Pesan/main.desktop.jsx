import React from 'react';
import AppLayout from '../../components/appLayout.desktop';
import Chat from './chat';
import Friends from './friends';

export default function Desktop() {
  return (
    <AppLayout>
      <div className="">
        <Friends />
      </div>
      <div className="">
        <Chat />
      </div>
    </AppLayout>
  );
}
