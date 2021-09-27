import React from 'react';
import Typewriter from 'typewriter-effect';

export default function Typing() {

    return(
      <div style={{position: 'absolute', height: '500px', width: '278px', top: '10px', right: '2px', fontFamily: "'Dr Sugiyama', cursive", fontSize: '21px', color: 'white', textAlign: 'left'}}>
        <Typewriter
          onInit={(typewriter) => {
          typewriter.typeString(`fugace.`)
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(2500)
              // .deleteAll()
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .start();
          }}
        />
      </div>
    )
}