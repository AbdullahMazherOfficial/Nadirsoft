const QRCode = () => (
  <svg width="64" height="64" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_339_8591)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0761719 0H18.9626V18.8378H0.0761719V0ZM47.1842 47.2535H52V52H47.1842V47.2535ZM37.9294 47.245H42.7451V51.7669H37.9294H37.9251H33.1136V42.5196H37.777V37.8324H42.5208V28.4877H47.3366V33.0817H51.9238V37.8282H47.3366V42.5747H42.5928H42.5208H37.9294V47.245ZM23.6302 37.7562H28.2936V33.0096H23.7826V28.2631H28.2936V23.5165H23.7064V28.2631H18.8864V23.5165H23.626V9.42103H28.4417V23.5123H33.1051V28.2588H37.6924V23.5123H42.5081V28.2588H37.9294V33.0054H33.1136V42.3501H28.446V51.7712H23.6302V37.7562ZM47.1038 23.5123H51.9196V28.2588H47.1038V23.5123ZM9.4834 23.5123H14.2992V28.2588H9.4834V23.5123ZM0.0761719 23.5123H4.89193V28.2588H0.0761719V23.5123ZM23.6302 0H28.446V4.74654H23.6302V0ZM0 33.0817H18.8864V51.9195H0V33.0817ZM4.58724 37.6587H14.2992V47.3467H4.58724V37.6587ZM33.0332 0H51.9196V18.8378H33.0332V0ZM37.6247 4.57702H47.3366V14.265H37.6247V4.57702ZM4.66341 4.57702H14.3753V14.265H4.66341V4.57702Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_339_8591">
    <rect width="52" height="52" fill="white"/>
    </clipPath>
    </defs>
  </svg>
);



const AppleIcon = () => (
  <svg width="17" height="17" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 14.6726C16.5359 15.7135 16.3123 16.1783 15.7145 17.0987C14.8807 18.3828 13.703 19.9828 12.2455 19.9965C10.951 20.0078 10.6184 19.1442 8.85974 19.1544C7.10224 19.1635 6.73591 20.0124 5.44025 19.9999C3.98278 19.9862 2.86692 18.5419 2.032 17.2567C-0.301978 13.6658 -0.545827 9.44994 0.893664 7.20791C1.91625 5.61587 3.53104 4.68406 5.04807 4.68406C6.59319 4.68406 7.56521 5.54087 8.84176 5.54087C10.0812 5.54087 10.8364 4.68179 12.6231 4.68179C13.9716 4.68179 15.4032 5.4261 16.4224 6.71018C13.0827 8.56131 13.6243 13.384 17 14.6726ZM11.2679 3.24771C11.9163 2.40453 12.4096 1.2159 12.2309 0C11.1701 0.0738631 9.93065 0.755677 9.20585 1.64544C8.5496 2.45226 8.00684 3.64884 8.21697 4.81247C9.37441 4.84769 10.5723 4.14884 11.2679 3.24771Z" fill="white"/>
  </svg>
);

const PlayStoreIcon = ({ className }) => (
  <svg className={`${className ? 'fill-black' : 'fill-white'}`} width="17" height="17" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.1202 0.508333L14.0372 6.79667L11.6972 9.14083L3.1202 0.508333ZM0.85845 0L10.8795 10L0.859282 20C0.349369 19.7742 0 19.2717 0 18.6875C0 18.6683 0 18.6492 0.000831831 18.6308V18.6333V1.3675C0 1.35167 0 1.3325 0 1.31333C0 0.729167 0.349369 0.226667 0.850132 0.00416667L0.859282 0.000833333L0.85845 0ZM17.4302 8.82833C17.7746 9.08417 17.995 9.49083 17.995 9.94833C17.995 9.96667 17.995 9.98417 17.9942 10.0025V10C17.9975 10.0358 18 10.0783 18 10.1208C18 10.5508 17.792 10.9325 17.471 11.1692L17.4676 11.1717L15.1277 12.4992L12.5939 10L15.1285 7.46083L17.4302 8.82833ZM3.1202 19.4917L11.698 10.8592L14.038 13.2033L3.1202 19.4917Z"/>
  </svg>
);


const RedirectIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_628_2245)">
    <path d="M17 7L7 17" stroke="#CFCFCF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 7H17V16" stroke="#CFCFCF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_628_2245">
    <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0)"/>
    </clipPath>
    </defs>
  </svg>
);


const LeftArrowIcon = () => (
  <svg width="24" height="12" viewBox="0 0 26 14" fill="none">
    <path d="M6.10274 0.261536C6.56098 -0.112038 7.23719 -0.08546 7.66427 0.341614C8.09109 0.768724 8.11789 1.44501 7.74435 1.90314L7.66427 1.992L3.9836 5.67267H23.8567C24.501 5.67267 25.0236 6.19533 25.0236 6.83966C25.0234 7.48379 24.5008 8.00665 23.8567 8.00665H3.9836L7.66427 11.6873C8.11941 12.143 8.11972 12.8823 7.66427 13.3377C7.2088 13.793 6.46948 13.7928 6.01388 13.3377L0.340049 7.66388C-0.113683 7.21022 -0.113683 6.4691 0.340049 6.01544L6.10274 0.261536Z" fill="white"/>
  </svg>
);

const RightArrowIcon = () => (
  <svg width="24" height="12" viewBox="0 0 26 14" fill="none">
    <path d="M19.8973 0.261536C19.439 -0.112038 18.7628 -0.08546 18.3357 0.341614C17.9089 0.768724 17.8821 1.44501 18.2557 1.90314L18.3357 1.992L22.0164 5.67267H2.14335C1.49902 5.67267 0.976357 6.19533 0.976357 6.83966C0.976593 7.48379 1.49916 8.00665 2.14335 8.00665H22.0164L18.3357 11.6873C17.8806 12.143 17.8803 12.8823 18.3357 13.3377C18.7912 13.793 19.5305 13.7928 19.9861 13.3377L25.66 7.66388C26.1137 7.21022 26.1137 6.4691 25.66 6.01544L19.8973 0.261536Z" fill="white"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <path d="M1 4.165L4.165 7.33L10.495 1" stroke="#73C146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <path d="M4.16663 10H15.8333" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MinusIcon = () => (
  <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <path d="M10 4.1665V15.8332" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.16663 10H15.8333" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProfileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.66666 5.83333C6.66666 6.71739 7.01785 7.56523 7.64297 8.19036C8.26809 8.81548 9.11593 9.16667 9.99999 9.16667C10.884 9.16667 11.7319 8.81548 12.357 8.19036C12.9821 7.56523 13.3333 6.71739 13.3333 5.83333C13.3333 4.94928 12.9821 4.10143 12.357 3.47631C11.7319 2.85119 10.884 2.5 9.99999 2.5C9.11593 2.5 8.26809 2.85119 7.64297 3.47631C7.01785 4.10143 6.66666 4.94928 6.66666 5.83333Z" stroke="#C1C1C1" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 17.5V15.8333C5 14.9493 5.35119 14.1014 5.97631 13.4763C6.60143 12.8512 7.44928 12.5 8.33333 12.5H11.6667C12.5507 12.5 13.3986 12.8512 14.0237 13.4763C14.6488 14.1014 15 14.9493 15 15.8333V17.5" stroke="#C1C1C1" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 5.83366C2.5 5.39163 2.67559 4.96771 2.98816 4.65515C3.30072 4.34259 3.72464 4.16699 4.16667 4.16699H15.8333C16.2754 4.16699 16.6993 4.34259 17.0118 4.65515C17.3244 4.96771 17.5 5.39163 17.5 5.83366V14.167C17.5 14.609 17.3244 15.0329 17.0118 15.3455C16.6993 15.6581 16.2754 15.8337 15.8333 15.8337H4.16667C3.72464 15.8337 3.30072 15.6581 2.98816 15.3455C2.67559 15.0329 2.5 14.609 2.5 14.167V5.83366Z" stroke="#C1C1C1" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 5.83301L10 10.833L17.5 5.83301" stroke="#C1C1C1" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ContactIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path d="M4.16667 3.33301H7.5L9.16667 7.49967L7.08333 8.74967C7.9758 10.5593 9.44039 12.0239 11.25 12.9163L12.5 10.833L16.6667 12.4997V15.833C16.6667 16.275 16.4911 16.699 16.1785 17.0115C15.866 17.3241 15.442 17.4997 15 17.4997C11.7494 17.3021 8.68346 15.9218 6.38069 13.619C4.07792 11.3162 2.69754 8.25029 2.5 4.99967C2.5 4.55765 2.67559 4.13372 2.98816 3.82116C3.30072 3.5086 3.72464 3.33301 4.16667 3.33301Z" stroke="#C1C1C1" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DownArrowIcon = () => (
  <svg id="dropdown-arrow" className="transition-transform duration-300" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path d="M5 7.5L10 12.5L15 7.5" stroke="#C1C1C1" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="3" y1="3" x2="22" y2="22" stroke="black" strokeWidth="3" strokeLinecap="round" />
    <line x1="3" y1="22" x2="22" y2="3" stroke="black" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const HmabarIcon = () => (
  <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_520_1925)">
      <path d="M1.47046 2.22223H20.3593" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.47046 10H13.6927" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.47046 17.7778H22.5816" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_520_1925">
        <rect width="24.4444" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);




export {QRCode, AppleIcon, PlayStoreIcon, RedirectIcon, LeftArrowIcon, RightArrowIcon, CheckIcon, PlusIcon, MinusIcon, ProfileIcon, EmailIcon, ContactIcon, DownArrowIcon, CrossIcon, HmabarIcon };
