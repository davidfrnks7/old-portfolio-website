import React, { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Captcha = (): JSX.Element => {
  const [token, setToken] = useState<unknown>(null);
  const captchaRef = useRef<unknown>(null);

  const onExpire = () => {
    console.log("hCaptcha Token Expired");
  };

  const onError = (err: unknown) => {
    console.log(`hCaptcha Error: ${err}`);
  };

  useEffect(() => {
    if (token) {
      console.log(`hCaptcha Token: ${token}`);
    }
  }, [token]);

  return (
    <HCaptcha
      // This is testing sitekey, will autopass
      // Make sure to replace
      sitekey="10000000-ffff-ffff-ffff-000000000001"
      onVerify={setToken}
      onError={onError}
      onExpire={onExpire}
      ref={captchaRef}
    />
  );
};

export default Captcha;
