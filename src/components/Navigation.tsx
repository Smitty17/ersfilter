import { NavButton } from "./Button";
import DarkModeToggle from "./DarkMode";

const Navigation = (props) => {

  return (
    <nav className={`${props.className} h-full overflow-y-scroll`}>
      <div className="flex flex-col h-full ">
        <NavButton
          path="/"
          label="Home" />
        <NavButton
          path="/organizations"
          label="Organizations" />
        <NavButton
          path="/tenants"
          label="Tenants" />

        <NavButton
          path="/"
          label="Orders" />
        <div className="flex-grow">
        </div>
        <NavButton
          path="/sign-in"
          label="Sign In" />
        <NavButton
          path="/logout"
          label="Sign Out" />
        <div className="p-gut">
          <DarkModeToggle />
        </div>
      </div>
    </nav>

  );
}

export default Navigation;
