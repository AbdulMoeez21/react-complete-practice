import React from "react";
import NetflixCards from "../components/NetflixCards";
import Sdata from "../data/Sdata";

const Netlfix = () => {
  return (
    <div>
      <h1>List of Top 5 netflix Series in 2022</h1>
      <div className="min">
        {/* <NetflixCards
          imgsrc={Sdata[0].imgsrc}
          title={Sdata[0].title}
          link={Sdata[0].link}
        />
        <NetflixCards
          imgsrc={Sdata[1].imgsrc}
          title={Sdata[1].title}
          link={Sdata[1].link}
        />
        <NetflixCards
          imgsrc={Sdata[2].imgsrc}
          title={Sdata[2].title}
          link={Sdata[2].link}
        />
        <NetflixCards
          imgsrc={Sdata[2].imgsrc}
          title={Sdata[2].title}
          link={Sdata[2].link}
        />
        <NetflixCards
          imgsrc={Sdata[2].imgsrc}
          title={Sdata[2].title}
          link={Sdata[2].link}
        />
        <NetflixCards
          imgsrc={Sdata[2].imgsrc}
          title={Sdata[2].title}
          link={Sdata[2].link}

        /> */}
        {Sdata.map((val) => {
          return (
            <NetflixCards
              key={val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              link={val.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Netlfix;
