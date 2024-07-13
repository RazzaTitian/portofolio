import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";

const ProfilePage = () => {
  return (
    <main>
      <Navbar shouldHideOnScroll className="bg-violet-400">
        <NavbarContent>
          <NavbarBrand>
            <h1 className="text-violet-800 font-semibold text-2xl select-none">
              GhostBlade
            </h1>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent>
          <NavbarItem className="font-semibold hover:text-violet-700 transition-colors hover:underline cursor-pointer">
            Home
          </NavbarItem>
          <NavbarItem
            as={Link}
            href="/profile"
            className="font-semibold underline hover:text-violet-700 transition-colors hover:underline cursor-pointer"
          >
            Profile
          </NavbarItem>
          <NavbarItem className="font-semibold hover:text-violet-700 transition-colors hover:underline cursor-pointer">
            Content
          </NavbarItem>
          <NavbarItem className="font-semibold hover:text-violet-700 transition-colors hover:underline cursor-pointer">
            About Us
          </NavbarItem>
          <NavbarItem className="font-semibold hover:text-violet-700 transition-colors hover:underline cursor-pointer">
            Contacts
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <div className="relative flex flex-col p-8 bg-violet-400/50">
        <Button
          as={Link}
          href="/"
          className="absolute top-4 left-4 z-10 bg-violet-400 font-semibold"
        >
          Back
        </Button>

        <div className="flex flex-row justify-center min-h-screen">
          <div className="max-w-prose">
            <div>
              <h1 className="font-semibold text-violet-600 text-4xl text-center">
                My Background
              </h1>
            </div>
            <div className="flex flex-col gap-2 p-2">
              <p className="text-justify text-xl">
                Ever-stressed about college life on UGM, this guy decided he has
                had enough. I mainly play Elden Ring, watch some good YouTube
                videos, or hang out with my best friend Aria. Or eat. Preferably
                eating. I&apos;m highly addicted to Olive Fried Chicken.
              </p>
              <p className="text-justify text-xl">
                Oh you wanted an actual background? Alrighty, where do I start?
                I used to be a video editor, but I mainly edit for fun now. Most
                of the video I edit now doesn&apos;t really see the light of
                day. I edited using primarily Adobe Premiere Pro, sometimes
                sprinkled with a bit of After Effects, but I used to learn Sony
                Vegas Pro, believe it or not.
              </p>
              <p className="text-justify text-xl">
                Enter my college life. I am a college student at Universitas
                Gadjah Mada, Fakultas Teknik, but specifically as the IT
                Engineer in the Departemen Teknik Elektro dan Teknologi
                Informasi. Here, my experiences in video editing is kind of
                used, and here as well is where I met my future coach Aria.
              </p>
              <p className="text-justify text-xl">
                Nowadays, I mostly kind of roam around, trying out stuff. But
                I&apos;m interested in Security Systems and Artificial
                Intelligence as a whole. And, as you can probably see, I have
                quite the interest in web development too! Thanks to Aria who
                taught me about web development, I now have this page.{" "}
                <a
                  href="https://petrusariaa.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Check him out!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
