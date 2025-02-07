import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, Package2, Sun, Moon } from "lucide-react"; // Import Sun and Moon icons
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";
import { useTheme } from "next-themes"; // Import useTheme hook

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <DesktopNav />
        <MobileNav />
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
      <footer className="border-t p-4 text-center">
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-500">Twitter</a>
          <a href="#" className="text-blue-500">LinkedIn</a>
          <a href="#" className="text-blue-500">GitHub</a>
        </div>
        <p className="mt-4">&copy; 2023 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

const DesktopNav = () => (
  <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm">
    <NavItem
      to="/"
      className="flex items-center gap-2 text-lg font-semibold md:text-base"
    >
      <Package2 className="h-6 w-6" />
      <span>My Blog</span>
    </NavItem>
    <NavItem to="/add-post" className="flex items-center gap-2 text-lg font-semibold md:text-base">
      <span>Add Post</span>
    </NavItem>
    {navItems.map((item) => (
      <NavItem key={item.to} to={item.to}>
        {item.title}
      </NavItem>
    ))}
    <ThemeToggle /> {/* Add ThemeToggle component */}
  </nav>
);

const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <nav className="grid gap-6 text-lg font-medium">
        <NavItem
          to="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Package2 className="h-6 w-6" />
          <span>My Blog</span>
        </NavItem>
        <NavItem to="/add-post" className="flex items-center gap-2 text-lg font-semibold">
          <span>Add Post</span>
        </NavItem>
        {navItems.map((item) => (
          <NavItem key={item.to} to={item.to}>
            {item.title}
          </NavItem>
        ))}
        <ThemeToggle /> {/* Add ThemeToggle component */}
      </nav>
    </SheetContent>
  </Sheet>
);

const NavItem = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
        className,
      )
    }
  >
    {children}
  </NavLink>
);

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default Layout;