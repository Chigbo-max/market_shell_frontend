import HomeCard from "./HomeCard";
import Placeholder from "../placeholder";

function CardContainer({data, isLoading}) {

  const placeNumbers = [...Array(12).keys()].slice(0);
  return (
    <section className="py-12" id="shop">
      <h4 className="text-center text-2xl font-bold mb-8">Our Products</h4>
      <div className="max-w-6xl mx-auto px-4">


        <div className="flex flex-wrap justify-center -mx-2">
           {isLoading ? placeNumbers.map((index)=> (<Placeholder key={index} />
          )) : 
           
           data.map((item) => (
          <HomeCard item={item} key={item.id} />
           ))}
        </div>
      </div>
    </section>
  );
}

export default CardContainer;
