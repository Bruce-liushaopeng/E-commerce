import { UserButton } from "@clerk/nextjs";
import {MainNav} from "./main-nav";

// we put it outside of the ui folder because it's not reusable
export default function navbar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div>
            This will be a store switcher
        </div>
        <MainNav className="mx-6"/>
        <div className="ml-auto flex items-center space-x-4"> 
            <UserButton afterSignOutUrl="/"/>
        </div>
      </div>
    </div>
  );
}
