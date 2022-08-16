import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import s from './../Intro.module.scss';

export const TypingEffect = () => {

  return (
      <ReactTypingEffect
        className={`${s.textIntro} ${s.textIntroAccent}`}
        speed={100}
        eraseSpeed={40}
        eraseDelay={2000}
        text={["Frontend developer"]}
        cursor=''
      />
  );
}
