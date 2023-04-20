import { createSvgIcon } from '@mui/material';
import * as React from 'react';
import { SVGProps } from 'react';

const Waiter = createSvgIcon(
    <>
        <path d="M21.4836 10.5H6.51638C6.77342 6.59122 10.0259 3.5 14 3.5C17.9741 3.5 21.2266 6.59122 21.4836 10.5Z" stroke="#1976d2" fill="none" strokeWidth={1}/>
        <path d="M6.5 12H21.5" stroke="#1976d2" strokeLinecap="round" fill="none" strokeWidth={1} />
        <mask id="path-3-inside-1_604_54" fill="white">
            <rect x={0.256012} y={15.6567} width={5.55621} height={7} rx={0.5} transform="rotate(-8.35439 0.256012 15.6567)" />
        </mask>
        <rect
            x={0.256012}
            y={15.6567}
            width={5.55621}
            height={7}
            rx={0.5}
            transform="rotate(-8.35439 0.256012 15.6567)"
            stroke="#1976d2"
            strokeWidth={2}
            mask="url(#path-3-inside-1_604_54)"
            fill="none"
        />
        <path
            d="M7.44682 21.1543L6.55542 15.3602C6.5224 15.1456 6.63182 14.9343 6.82903 14.8433C7.4388 14.5619 8.75037 14 9.5 14C10.5 14 11.5 14.5 13 14.5C14.1247 14.5 16.3738 14.2189 17.4289 14.0782C17.7305 14.038 17.9962 14.2738 17.9356 14.572C17.8725 14.8826 17.7475 15.2525 17.5 15.5C16.9429 16.0571 12.8249 16.6498 13.5 18C13.9602 18.9204 14.8441 18.5701 14.9818 18.5085L14.9847 18.5072C14.9962 18.502 15.0068 18.4973 15.0186 18.4925C16.7234 17.8048 20.5073 15.4982 22.5 15C24.3789 14.5303 22.7276 16.2669 22.5207 16.479C22.5068 16.4932 22.4932 16.5054 22.4775 16.5176C22.0424 16.858 15.4174 22.0165 13 22.5C11.259 22.8482 9.56379 21.987 7.84153 21.5752C7.63727 21.5264 7.47875 21.3619 7.44682 21.1543Z"
            stroke="#1976d2"
            fill="none"
            strokeWidth={1}
        />
        <path d="M12 2H16" stroke="#1976d2" strokeLinecap="round" fill="none" strokeWidth={1}/>
        <path d="M14 3V2" stroke="#1976d2" strokeLinecap="round" fill="none" strokeWidth={1}/>
    </>,
    'Waiter',
);

export default Waiter;
