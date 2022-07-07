import Link from "next/link";
import { withRouter } from "next/router";

// const Button = props => (
//   <Link href={props.path}>
//     <div
//       className={`Button ${
//         props.router.pathname === props.path ? "active" : ""
//         }`}
//     >
//       {/* <div className="Icon">{props.icon}</div> */}
//       <span className="Label">{props.label}</span>
//     </div>
//   </Link>
// );


export const NavButton = props => {
  return (
    <Link href={props.path}>
      <div className="w-full py-4 cursor-pointer px-gut">
        {/* <div className="Icon">{props.icon}</div> */}
        <span className="Label">{props.label}</span>
      </div>
    </Link>
  );
};

export default withRouter(NavButton);
