import React, { useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface CaptchaProps {
  updateToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const Captcha = ({ updateToken }: CaptchaProps): JSX.Element => {
  const captchaRef = useRef<HCaptcha>(null);

  const onExpire = () => {
    console.log("hCaptcha Token Expired");
    updateToken(null);
  };

  const onError = (err: unknown) => {
    console.log(`hCaptcha Error: ${err}`);
  };

  return (
    <HCaptcha
      sitekey={
        process.env.NEXT_PUBLIC_HCAPTCHA_KEY
          ? process.env.NEXT_PUBLIC_HCAPTCHA_KEY
          : ""
      }
      onVerify={updateToken}
      onError={onError}
      onExpire={onExpire}
      theme="dark"
      ref={captchaRef}
    />
  );
};

export default Captcha;
