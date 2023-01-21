import colors from "../globalVariables";
import { ReactCompareSlider, ReactCompareSliderHandle, ReactCompareSliderImage } from "react-compare-slider";
import oldPhoto from "../../assets/old.png";
import newPhoto from "../../assets/new.png";

function CompareSlider(props: {width: string}) {
  return (
    <ReactCompareSlider
      handle={
        <ReactCompareSliderHandle
          buttonStyle={{
            backdropFilter: undefined,
            background: colors.accent,
            border: 0,
            color: colors.background
          }}
          linesStyle={{
            color: colors.background
          }}
        />
      }
      itemOne={
        <ReactCompareSliderImage
          src={oldPhoto}
          alt="one"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src={newPhoto}
          alt="two"
        />
      }
      style={{
        display: "flex",
        width: props.width,
        border: `5px solid ${colors.main}`,
        borderRadius: '3px'
      }}
    />
  );
}

export default CompareSlider;