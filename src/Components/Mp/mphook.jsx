// import { useEffect, useState } from "react";
// // import { useAppSelector } from "../../../store/hooks/redux";
// // import products from "../../../utils/api/products";


// const useMercadoPago = (
//   id,
//   formId,
//   publicKey
// ) => {
//   const [preferenceId, setPreferenceId] = useState("");


//   function addCheckout() {
//     if (document) {
//       var div = document.getElementById(formId);

//       if (div) {
//         div.innerHTML = "";
//       }
//     }

//     const mp = new window.MercadoPago(publicKey, {
//       locale: "es-AR",
//     });

//     mp.checkout({
//       preference: {
//         id: preferenceId,
//       },
//       render: {
//         container: `#${formId}`,
//         label: "Buy now!",
//       },
//     });
//   }

//   useEffect(() => {
//     if (id) {
//       products
//         .createPreference(id)
//         .then((response) => setPreferenceId(response.data.id));
//     }
//   }, [id]);

//   useEffect(() => {
//     if (preferenceId) {
//       const script = document.createElement("script");
//       script.type = "text/javascript";
//       script.src = "https://sdk.mercadopago.com/js/v2";
//       script.addEventListener("load", addCheckout);
//       document.body.appendChild(script);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [preferenceId]);

//   return preferenceId;
// };

// export default useMercadoPago;