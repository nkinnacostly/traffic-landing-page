"use client";
import { ChevronsDown, Github, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#team",
    label: "Team",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Showcase Your Value ",
    description: "Highlight how your product solves user problems.",
  },
  {
    title: "Build Trust",
    description:
      "Leverages social proof elements to establish trust and credibility.",
  },
  {
    title: "Capture Leads",
    description:
      "Make your lead capture form visually appealing and strategically.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        {/* <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" /> */}
        <svg
          width="203"
          height="23"
          viewBox="0 0 203 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M184.771 22.3011H192.809L203 10.6905L190.997 -3.05176e-05H182.953L194.955 10.6905L184.771 22.3011Z"
            className="fill-[#68AF6B] dark:fill-[#68AF6B]"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M174.994 22.3011H183.039L193.223 10.6905L181.22 -3.05176e-05H173.182L185.185 10.6905L174.994 22.3011Z"
            className="fill-[#F5B341] dark:fill-[#F5B341]"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M165.222 22.3011H173.26L183.444 10.6905L171.441 -3.05176e-05H163.404L175.406 10.6905L165.222 22.3011Z"
            className="fill-[#FF5390] dark:fill-[#FF5390]"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.19754 22.1377H11.6177L13.8928 5.57761H21.9446L22.6863 0.15744H0.741708L0 5.57761H8.47258L6.19754 22.1377Z"
            className="fill-foreground"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.9528 0.278189L22.9646 22.0231H28.5203L29.5972 14.1638H40.8012L39.7243 22.0231H45.0946L45.8292 16.6742L42.1991 12.4664L46.9917 8.25155L47.7048 3.03107L45.3299 0.271057H25.9528V0.278189ZM30.3603 9.63512L30.8025 5.39169H42.0065L41.5643 9.63512H30.3603Z"
            className="fill-foreground"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M70.4621 21.8945L73.0296 3.18777L70.619 0.399231H54.1374L50.9566 3.1949L48.3892 21.8945H54.1303L55.0217 15.3974H65.8122L64.9207 21.8945H70.455H70.4621ZM67.1957 5.37723L66.5253 10.2411H55.7349L56.4053 5.37723H67.1957Z"
            className="fill-foreground"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M94.5957 8.62225H80.9312L81.3733 5.39867H97.6624L98.3542 0.342224H79.2694L76.3454 2.92394L73.728 21.9516H79.0983L80.2251 13.7429H93.8896L94.5957 8.62225Z"
            className="fill-foreground"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M150.225 8.73635H139.271L140.405 0.477722H135.12L132.189 21.8232H137.474L138.558 13.9354H149.512L148.428 21.8232H153.713L154.44 16.5314L149.876 11.2396L149.797 11.1469L149.904 11.0542L155.916 5.76952L156.644 0.477722H151.359L150.225 8.73635Z"
            className="fill-foreground"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M119.529 8.62225H105.864L106.306 5.39867H122.596L123.287 0.342224H104.21L101.279 2.92394L98.6683 21.9516H104.031L105.158 13.7429H118.823L119.529 8.62225Z"
            className="fill-foreground"
          />
          <path
            d="M131.891 0.105164H126.601L123.567 22.1949H128.857L131.891 0.105164Z"
            className="fill-foreground"
          />
        </svg>
      </Link>
      {/* <!-- Mobile --> */}
      {/* <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                    Shadcn
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div> */}

      {/* <!-- Desktop --> */}
      {/* <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <Image
                  src="https://avatars.githubusercontent.com/u/75042455?v=4"
                  alt="RadixLogo"
                  className="h-full w-full rounded-md object-cover"
                  width={600}
                  height={600}
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}

      <div className="hidden lg:flex">
        <ToggleTheme />
        {/* 
        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            aria-label="View on GitHub"
            href="https://github.com/nobruf/shadcn-landing-page.git"
            target="_blank"
          >
            <Github className="size-5" />
          </Link>
        </Button> */}
      </div>
    </header>
  );
};
