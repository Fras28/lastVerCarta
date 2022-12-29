// import { KEYS } from "../../../appConfig";
import useMercadoPago from "./mphook";

const FORM_ID = "payment-form";


const BuyItemButton = ({ id }) => {
  const PUBLIC_KEY = "TEST-aac3334a-b0e2-4981-98e7-d22f3818c218";
  const preferenceId = useMercadoPago(id, FORM_ID, PUBLIC_KEY);

  return (
    <div id={FORM_ID}>
       <button >pagar</button>
    </div>
  );
};

export default BuyItemButton;