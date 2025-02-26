import React from 'react';
import MessageLayout from './components/message-layout';
import ChatWindow from './components/chat-window';
import MessageBubble from './components/message-bubble';

const MessagesPage = () => {
  return (
    <MessageLayout>
      <ChatWindow
        recipientName="Timothy Ruecker"
        recipientAvatar="/Ellipse 24.svg"
      >
        <MessageBubble
          content="Lorem ipsum dolor sit amet consectetur. Ac ultrices tortor urna nunc ultrices nunc elementum. Arcu massa eu nec ultrices et. Non et varius at elementum. Diam porta malesuada a nibh mattis non justo egestas sit. Enim at faucibus ultrices massa metus sed diam. Sit scelerisque viverra tortor massa volutpat urna sit lectus."
          timestamp="4:52 PM"
          isOwn={true}
        />
        <MessageBubble
          content="Lorem ipsum dolor sit amet consectetur. Ac ultrices tortor urna nunc ultrices nunc elementum. Arcu massa eu nec ultrices et. Non et varius at elementum. Diam porta malesuada a nibh mattis non justo egestas sit. Enim at faucibus ultrices massa metus sed diam. Sit scelerisque viverra tortor massa volutpat urna sit lectus."
          timestamp="4:53 PM"
          isOwn={false}
        />
        <MessageBubble
          content="Lorem ipsum dolor sit amet consectetur. Ac ultrices tortor urna nunc ultrices nunc elementum. Arcu massa eu nec ultrices et. Non et varius at elementum. Diam porta malesuada a nibh mattis non justo egestas sit. Enim at faucibus ultrices massa metus sed diam. Sit scelerisque viverra tortor massa volutpat urna sit lectus."
          timestamp="4:53 PM"
          isOwn={false}
        />
        <MessageBubble
          content="Lorem ipsum dolor sit amet consectetur. Ac ultrices tortor urna nunc ultrices nunc elementum. Arcu massa eu nec ultrices et. Non et varius at elementum. Diam porta malesuada a nibh mattis non justo egestas sit. Enim at faucibus ultrices massa metus sed diam. Sit scelerisque viverra tortor massa volutpat urna sit lectus."
          timestamp="4:53 PM"
          isOwn={true}
        />
      </ChatWindow>
    </MessageLayout>
  );
};

export default MessagesPage;
