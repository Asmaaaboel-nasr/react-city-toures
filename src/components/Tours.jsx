import React, { Component } from "react";
import { tourData } from "./tourData";
import Tour from "./Tour";

class Tours extends Component {
  state = {
    tours: tourData
  };

  removeTour = id => {
    const { tours } = this.state;
    const filterdTours = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: filterdTours
    });
  };

  render() {
    const { tours } = this.state;

    return (
      <section className="tours">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
export default Tours;
