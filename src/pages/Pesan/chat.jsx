import React from 'react';
import { MdOutlineEmojiEmotions, MdSend } from 'react-icons/md';
import { useSelector } from 'react-redux';

import DummyGroups from '../../dummy/DummyGroups';
import DummyMessages from '../../dummy/DummyMessages';

export default function Chat() {
  const selectedChatroom = useSelector((state) => state.group.selectedChatroom);
  const selectedGroup = '0';
  const chatroom = DummyGroups[selectedChatroom];



  return (
    <div className="w-full">
      <div className="h-12 w-full flex flex-col">
        <div className="w-full py-2 font-semibold min-w-[3rem] overflow-hidden overflow-ellipsis whitespace-nowrap px-4">
          Anto Ramadhan
        </div>
        <div className="divider divider-vertical my-0"></div>
      </div>
      <div className="px-4 w-full h-[calc(100vh-7.25rem)] overflow-y-auto overflow-x-hidden flex flex-col justify-start gap-1 scrollbar-hide select-text">
        {DummyMessages.map((m, i) => (
          <div key={i} className={`chat ${m.sender === 'you' ? 'chat-end' : 'chat-start'}`}>
            <Message
              pic={m.pic}
              name={m.name}
              time={m.time}
              message={m.message}
            />
          </div>
        ))}
        <div className="chat chat-start">
          <div className="chat-bubble opacity-0"></div>
        </div>
      </div>
      <div className="input-group relative bottom-10 w-full px-8 flex flex-row ">
        <button className="btn btn-square text-2xl">
          <MdOutlineEmojiEmotions />
        </button>
        <input
          type="text"
          placeholder="Type your message..."
          className="input input-bordered flex-1"
        />
        <button className="btn btn-square">
          <MdSend />
        </button>
      </div>
    </div>
  );
}

function Message({ pic, name, time, message }) {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={pic} />
        </div>
      </div>
      <div className="chat-header">
        {name}
        <time className="text-xs opacity-50"> {time}</time>
      </div>
      <div className="chat-bubble break-words chat-bubble-primary">
        {message}
      </div>
    </div>
  );
}
