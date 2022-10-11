import React, { Component } from "react";

class Main_page extends Component {
  render() {
    return (
      <>
        <div className="mainpage url1">
          <div className="text_right">
            <p className="title_short textalign_right">
              Choose the best sound for your style
            </p>
            <div className="clearing_float" />
            <p className="subtext">
              Each group of person have different style of sound that they like,
              some of you prefer warm sound, anothers prefer cool sound, and the
              other prefer flat sound, you can choose the guitar sound that you
              prefer in Fwood guitar.
            </p>
          </div>
        </div>
        <div className="mainpage url2">
          <div className="text_left">
            <p className="title_long textalign_left">
              “I pay no attention whatever to anybody's praise or blame. I
              simply follow my own feelings.”
            </p>
            <div className="clearing_float" />
            <p className="subtext textalign_right">
              <i>Wolfgang Amadeus Mozart</i>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Main_page;
