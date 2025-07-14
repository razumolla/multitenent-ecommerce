"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavbarSidebar from "./navbar-sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  children: React.ReactNode;
  isActive?: boolean;
  href: string;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <nav>
      <Button
        variant="outline"
        className={cn(
          "bg-transparent hover:bg-transparent hover:border-primary border-transparent px-3.5 text-lg",
          isActive && "bg-black text-white hover:bg-black hover:text-white"
        )}
      >
        <Link href={href}>{children}</Link>
      </Button>
    </nav>
  );
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between h-20 border-b font-medium text-black bg-white px-6">
      <Link href="/" className="">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          Funroad
        </span>
      </Link>

      {/* for mobile view  */}
      <NavbarSidebar
        items={navbarItems}
        isOpen={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      {/* For desktop view  */}
      <div className="gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button
          asChild
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:text-black
            hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href="/sign-in">Log In</Link>
        </Button>

        <Button
          asChild
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black hover:bg-pink-400 
           text-white hover:text-black
            transition-colors text-lg"
        >
          <Link href="/sign-up">Start selling</Link>
        </Button>
      </div>

      {/* For mobile view:  right side menu icon  */}
      <div className="flex items-center justify-center lg:hidden">
        <Button
          variant="ghost"
          className="size-12 border-transparent bg-white"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
