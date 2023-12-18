import React from "react";
import Button from "../common/button";
import GetMyLocation from "../services/getMyLocation";
const ProtoTestPage = ():JSX.Element=> {
  return <div>
    <GetMyLocation/>
    <Button/>
  </div>
};
export default ProtoTestPage