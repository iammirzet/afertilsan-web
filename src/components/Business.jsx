import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { shield } from "../assets";

// const vitaminFeature = {
//   id: "feature-4",
//   icon: shield,
//   title: "Plant Antioxidants",
//   content:
//     "Plants protect themselves very efficiently from aggressive UV rays and free radicals. Beta-carotene and polyphenols from pine bark extract are in the focus of scientists when it comes to managing oxidative stress and protection of the DNA.",
// };

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className="{styles.flexStart}">
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} ml-5 text-gradient`}>
        Savršena Formula
      </h2>
      <p className={`${styles.paragraph} max-w-[990px] mt-5 ml-5`}>
        Formula proizvoda temelji se na četiri stupa mikronutrijenata uz opsežna
        klinička istraživanja: aminokiseline, vitamini, prateci elementi i
        antioksidativni ekstrakt borove kore.
      </p>
      <div>
        <br />
        <br />

        {/* <div className={`flex flex-row p-5 rounded-[20px]   feature-card`}>
          <div
            className={`w-[64px] h-[64px] rounded-full  ${styles.flexCenter} bg-dimBlue`}
          >
            <img
              src={vitaminFeature.icon}
              alt="star"
              className="w-[50%] h-[50%] object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
              {vitaminFeature.title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
              {vitaminFeature.content}
            </p>
          </div>
        </div> */}
      </div>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
