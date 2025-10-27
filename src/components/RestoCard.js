import { useState } from "react";

const RestoCard = ({ restoData }) => {
  const [loadDetails, setLoadDetails] = useState(false);
  if (!restoData || !restoData.info) {
    return null;
  }
  const handleClick = () => {
    setLoadDetails(true);
  };

  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    restoData.info;
  const cuisinesString = cuisines.join(", ");
  const baseUrl = "https://media-assets.swiggy.com/swiggy/image/upload/";

  return (
    <div onClick={handleClick} className="restoCard">
      <img
        className="restoImage"
        src={baseUrl + cloudinaryImageId}
        alt="restoPhoto"
      />
      <h3 className="restoName">{name}</h3>

      <h4 className="restoCuisine">{cuisinesString}</h4>
      <h4 className="restoRating">{avgRating}</h4>
      <h4 className="restoRating">{costForTwo}</h4>
    </div>
  );
};

export default RestoCard;
