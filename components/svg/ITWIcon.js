import * as React from "react";

function ITWIcon(props) {
  return (
    <svg
      width={60}
      height={61}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="mx-2"
    >
      <rect
        x={7.376}
        y={0.57}
        width={53}
        height={53}
        rx={26.5}
        transform="rotate(8 7.376 .57)"
        fill="#FB37FF"
        fillOpacity={0.9}
      />
      <path
        d="M10.288 37.333l4.072.572 2.645-18.815-4.073-.572-2.644 18.815zM18.442 38.479l4.087.574 1.836-13.066 3.17.446.808-5.75-10.427-1.465-.808 5.75 3.17.445-1.836 13.066zM29.511 40.035l4.72.663 3.926-12.08.443 12.694 4.72.663 6.252-18.308-4.1-.576-3.722 12.268-.435-12.852-4.51-.634-3.946 12.236-.21-12.82-4.115-.579.977 19.325z"
        fill="#000"
      />
    </svg>
  );
}

export default ITWIcon;