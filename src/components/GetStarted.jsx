import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  const handleRedirect = () => {
    const websiteUrl = "https://iapoteka.ba/product-category/amitamin/"; 
    window.open(websiteUrl, "_blank");
  };

  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[3px] cursor-pointer`} onClick={handleRedirect}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[23px] leading-[23.4px] mr-0">
            <span className="text-gradient">Naruči</span>
          </p>
        </div>
        
        <p className="font-poppins font-medium text-[22px] leading-[23.4px] mr-0">
          <span className="text-gradient">Ovdje</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
