"use client";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
import { WaitlistDialog } from "@/components/waitlist-dialog";
import { Mockup } from "@/components/mockup";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Traffik App Is Coming! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Experience
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                All your favorite
              </span>
              stores in one place
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {/* {`We're more than just a tool, we're a community of passionate
            creators. Get access to exclusive resources, tutorials, and support.`} */}
            {`Traffik is your ultimate shopping companion, bringing together all your favorite stores in one seamless platform. Browse, compare, and shop from multiple retailers while enjoying exclusive deals, personalized recommendations, and a unified shopping experience.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <WaitlistDialog />
            {/* 
            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                Github respository
              </Link>
            </Button> */}
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Mockup theme={theme as "light" | "dark"} />
        </div>
      </div>
    </section>
  );
};
