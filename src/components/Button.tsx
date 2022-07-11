import Link from "next/link";
import { withRouter } from "next/router";


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
