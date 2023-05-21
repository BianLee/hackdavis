import React from "react";
import Image from "next/image";
import Navbar from "components/Navbar";
import "../../app/globals.css";
import axios from "axios";

export default class Analytics extends React.Component {
  constructor() {
    super();
    this.state = {
      returnedData: [[]],
      mostCommon: "",
      showFirstStats: false,
    };
  }

  componentDidMount = () => {
    axios
      .get("https://hackdavisapi.vercel.app/api/getPost")
      .then((response) => {
        this.setState({
          returnedData: response.data,
        });
        // setMostCommon(response.data[index]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  showFirstStatsFunc = () => {
    if (!this.state.showFirstStats) {
      this.setState({
        showFirstStats: true,
      });
    }
  };

  findMostCommon = () => {
    console.log(this.state.returnedData);
    var max = this.state.returnedData[0].count;
    console.log(max);
    var index = 0;
    for (var i = 0; i < this.state.returnedData.length; i++) {
      if (this.state.returnedData[i].count > max) {
        max = this.state.returnedData[i].count;
        index = i;
      }
    }
    console.log(max);
    this.setState({
      mostCommon: this.state.returnedData[index].name,
    });
  };
  render() {
    return (
      <>
        <div>
          <Navbar />
          <main className="flex min-h-screen flex-col items-center justify-between p-2">
            <div className="container">
              <div className="text-5xl pb-7 font-semibold ">
                Research & Analytics
              </div>
              <br />
              <div className="text-xl pt-11 font-semibold">
                <button
                  onClick={this.showFirstStatsFunc}
                  style={{ color: "red" }}
                >
                  reveal
                </button>{" "}
                Number of conditions diagnosed to users:{" "}
                <span style={{ color: "red" }}>
                  {this.state.showFirstStats == true ? (
                    <>{this.state.returnedData.length}</>
                  ) : (
                    <></>
                  )}
                </span>
                <br />
                <button onClick={this.findMostCommon} style={{ color: "red" }}>
                  reveal
                </button>{" "}
                Most common type of diagnosis amongst users:{" "}
                <span style={{ color: "red" }} key={1}>
                  {this.state.mostCommon}
                </span>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}
