// components/ComponentA.js
import React from 'react';
import ComponentB from './ComponentB';

const ComponentA = () => {
    return (
      <ComponentB varName='value goes here' anotherVar="this sucker" yetAnotherNewVar="the last one"/>
    );

    // tweet = System.FetchTweet
    // return (
      // // like button
      // <ComponentB numericValue=tweet.likes callbackFunc=tweet.likeThisTweet />
      // // retweet button
      // <ComponentB numericValue=tweet.retweets callbackFunc=tweet.retweetThisTweet />
    // )
};

export default ComponentA;
