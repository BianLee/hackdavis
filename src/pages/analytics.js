import Image from "next/image";
import Navbar from "components/Navbar";
import "../../app/globals.css";

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-between p-2">
        <div className="container">
          <div className="text-5xl pb-7 font-semibold ">Yolo County Data Analysis</div>
          <br />
          <div className="text-lg">
We wanted to answer the question: To what extent does Mental Health play a role in the Davis Community?          </div>
        </div>

        
      </main>
      
      <div className="container mx-auto px-4">
      <div className="flex items-center justify-center">
        <ImageWithCaption
          src="data1.png"
          alt="Data Visualization 1"
          caption="There is a clear increase in health service required as kids grow older."
        />
         
      </div>
      <div className="flex items-center justify-center">
        <ImageWithCaption
          src="data2.png"
          alt="Data Visualization 1"
          caption="There is a polarizing difference in the number of kids by age."
        />
         
      </div>
      <div className="flex items-center justify-center">
        <ImageWithCaption
          src="data3.png"
          alt="Data Visualization 1"
          caption="There is a clear correlation between 1 MHS and 5 MHS."
        />
         
      </div>
      <div className="flex items-center justify-center">
        <ImageWithCaption
          src="data4.png"
          alt="Data Visualization 1"
          caption="There is a clear uptick in the services required by a teenager. "
        />
         
      </div>
      <div className="flex items-center justify-center">
        <ImageWithCaption
          src="data5.png"
          alt="Data Visualization 1"
          caption="The data collection is fair amongst all age groups."
        />
         
      </div>
      <div className="flex items-center justify-center">
        <ImageWithCaption
          src="data6.png"
          alt="Data Visualization 1"
          caption="The heatmap shows that majority of youth require some MHS."
        />
         
      </div>
      <div className="flex items-center justify-center">
        <ImageWithCaption
          src="data7.png"
          alt="Data Visualization 1"
          caption="This violin plot shows that the total count stays standard by age."
        />
         
      </div>
      
    </div>


    </div>
  );
}



const ImageWithCaption = ({ src, alt, caption }) => {
  return (
    <div className="w-1/2 p-4 pb-4">
      <br/>
      <img src={src} alt={alt} className="w-full mx-auto" />
      {caption && <p style={{color: '#75e07e'}} className="text-center font-semibold pt-2 mb-5">{caption}</p>}
    </div>
  );
};
