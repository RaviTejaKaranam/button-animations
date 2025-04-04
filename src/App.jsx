import "./App.css";
import ButtonSpinner from "./assets/components/loadingButtons/ButtonSpinner";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import ButtonProgressBar from "./assets/components/loadingButtons/ButtonProgressBar";
import ButtonPulsingDots from "./assets/components/loadingButtons/ButtonPulsingDots";
import ButtonCircularLoader from "./assets/components/loadingButtons/ButtonCircularLoader";
import ButtonBounceLoader from "./assets/components/loadingButtons/ButtonBounceLoader";
import ButtonRotatingLoader from "./assets/components/loadingButtons/ButtonRotatingLoader";
import ButtonLinearLoader from "./assets/components/loadingButtons/ButtonLinearLoader";
import ButtonTickLoader from "./assets/components/loadingButtons/ButtonTickLoader";
import ButtonPercentageLoader from "./assets/components/loadingButtons/ButtonPercentageLoader";
import ButtonTypingLoader from "./assets/components/loadingButtons/ButtonTypingLoader";
import ButtonSuccess from "./assets/components/statesButtons/ButtonSuccess";
import ButtonWarning from "./assets/components/statesButtons/ButtonWarning";
import ButtonError from "./assets/components/statesButtons/ButtonError";
import ButtonDisabled from "./assets/components/statesButtons/ButtonDisabled";
import ButtonToggle from "./assets/components/statesButtons/ButtonToggle";
import ButtonConfettiSuccess from "./assets/components/statesButtons/ButtonConfettiSuccess";
import ButtonFireworks from "./assets/components/statesButtons/ButtonFireworks";
import ButtonCollapseError from "./assets/components/statesButtons/ButtonCollapseError";
import ButtonBreakInHalf from "./assets/components/statesButtons/ButtonBreakInHalf";
import ButtonHoverLift from "./assets/components/ButtonHoverEffects/ButtonHoverLift";
import ButtonRefuel from "./assets/components/statesButtons/ButtonRefuel";
import ButtonHoverSlideText from "./assets/components/ButtonHoverEffects/ButtonHoverSlideText";
import ButtonHoverZoomPulse from "./assets/components/ButtonHoverEffects/ButtonHoverZoomPulse";
import ButtonHoverGradient from "./assets/components/ButtonHoverEffects/ButtonHoverGradient";
import ButtonHoverIconSpin from "./assets/components/ButtonHoverEffects/ButtonHoverIconSpin";
import ButtonHoverUnderline from "./assets/components/ButtonHoverEffects/ButtonHoverUnderline";
import ButtonHoverShine from "./assets/components/ButtonHoverEffects/ButtonHoverShine";
import ButtonHoverTilt from "./assets/components/ButtonHoverEffects/ButtonHoverTilt";
import ButtonHoverBlob from "./assets/components/ButtonHoverEffects/ButtonHoverBlob";
import ButtonHoverGlow from "./assets/components/ButtonHoverEffects/ButtonHoverGlow";
import ButtonClickRipple from "./assets/components/clickFeedback/ButtonClickRipple";
import ButtonClickBounce from "./assets/components/clickFeedback/ButtonClickBounce";
import ButtonClickSquish from "./assets/components/clickFeedback/ButtonClickSquish";
import ButtonClickExplosion from "./assets/components/clickFeedback/ButtonClickExplosion";
import ButtonClickMessageSend from "./assets/components/clickFeedback/ButtonClickMessageSend";
import ButtonFlip from "./assets/components/ButtonTransformations/ButtonFlip";
import ButtonSkewAnimation from "./assets/components/ButtonTransformations/ButtonSkewAnimation";
import ButtonHoverBackgroundChange from "./assets/components/ButtonHoverEffects/ButtonHoverBackgroundChange";
import ButtonHoverBackgroundChangeLeft from "./assets/components/ButtonHoverEffects/ButtonHoverBackgroundChangeLeft";
import ButtonRotatingOnClick from "./assets/components/ButtonTransformations/ButtonRotatingOnClick";
import ButtonClickToExpand from "./assets/components/ButtonTransformations/ButtonClickToExpand";
import ButtonShatterOnClick from "./assets/components/ButtonTransformations/ButtonShatterOnClick";
import ButtonMorphOnClick from "./assets/components/ButtonTransformations/ButtonMorphOnClick";
import ButtonGlassmorphism from "./assets/components/ButtonTransformations/ButtonGlassmorphism";
import ButtonClaymorphism from "./assets/components/ButtonTransformations/ButtonClaymorphism";

function App() {
  return (
    <>
      <Navbar />
      <div className=" md:px-24 md:py-8 px-2 py-2">
        <Home />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 place-items-center">
          <ButtonSpinner />
          <ButtonProgressBar />
          <ButtonPulsingDots />
          <ButtonCircularLoader />
          <ButtonBounceLoader />
          <ButtonRotatingLoader />
          <ButtonLinearLoader />
          <ButtonTickLoader />
          <ButtonPercentageLoader />
          <ButtonTypingLoader />
          <ButtonSuccess />
          <ButtonConfettiSuccess />
          <ButtonFireworks />
          <ButtonError />
          <ButtonCollapseError />
          <ButtonBreakInHalf />
          {/* <ButtonEmojiPop /> */}
          <ButtonWarning />
          <ButtonRefuel />
          <ButtonDisabled />
          <ButtonToggle />
          <ButtonHoverLift />
          <ButtonHoverSlideText />
          <ButtonHoverZoomPulse />
          <ButtonHoverGradient />
          <ButtonHoverIconSpin />
          <ButtonHoverUnderline />
          <ButtonHoverShine />
          <ButtonHoverTilt />
          <ButtonHoverBlob />
          <ButtonHoverGlow />
          <ButtonHoverBackgroundChangeLeft />
          <ButtonHoverBackgroundChange />
          <ButtonClickRipple />
          <ButtonClickBounce />
          <ButtonClickSquish />
          <ButtonClickExplosion />
          <ButtonClickMessageSend />
          <ButtonFlip />
          <ButtonSkewAnimation />
          <ButtonRotatingOnClick />
          <ButtonClickToExpand />
          <ButtonShatterOnClick />
          <ButtonMorphOnClick />
          <ButtonGlassmorphism />
          <ButtonClaymorphism />
        </div>
      </div>
    </>
  );
}

export default App;
