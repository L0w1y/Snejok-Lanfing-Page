import Image from "next/image";
import Link from "next/link"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// import { CheckIcon } from "lucide-react"
import { JSX, SVGProps } from "react"
// import { url } from "inspector";
import Cover from "/public/cover.png";
import Placeholder from "/public/placeholder.svg";

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
        <div className="absolute inset-0">
          <Image
            alt="Hero"
            src={Cover}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent from-1% to-white dark:to-black"/>
        </div>
      
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Bring Your Digital Identity to Life
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Create a unique, customizable avatar that represents you online. Our powerful avatar creator makes it
                  easy to express your personality.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#pricing">Create avatar</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32 relative z-10">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800" id="about">About Me</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unleash Your Digital Creativity</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {/* Hello there! */}I&apos;m SnejOk, a passionate furry artist with a knack for crafting mesmerizing 3D avatars and captivating artworks. Through my vibrant and whimsical creations, I strive to bring joy, spark imagination, and capture the unique essence of characters. With meticulous attention to detail, I aim to create pieces that evoke a sense of liveliness and leave a lasting impression. Join me on this exciting journey as we explore the boundless possibilities of furry art and celebrate the beauty of individuality together!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="https://t.me/SnejOkWinter">Send Telegram
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="https://discord.gg/RmtrE5HkKE">Send Discord
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="https://vk.com/snowfur101">Send VK
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 relative z-10"></section> */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 relative z-10">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Showcase Our Creativity</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out some of the amazing avatars created with love.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-950">
                <div className="mt-2 text-center">
                <Image
                  alt="Avatar 1"
                  className="mx-auto aspect-square overflow-hidden rounded-lg object-cover"
                  height="300"
                  src={Placeholder}
                  width="300"
                  />
                  <h3 className="text-sm font-semibold">Avatar name</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Sample pack</p>
                </div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-950">
                <Image
                  alt="Avatar 2"
                  className="mx-auto aspect-square overflow-hidden rounded-lg object-cover"
                  height="300"
                  src={Placeholder}
                  width="300"
                />
                <div className="mt-2 text-center">
                  <h3 className="text-sm font-semibold">Avatar name</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Sample pack</p>
                </div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-950">
                <Image
                  alt="Avatar 3"
                  className="mx-auto aspect-square overflow-hidden rounded-lg object-cover"
                  height="300"
                  src={Placeholder}
                  width="300"
                />
                <div className="mt-2 text-center">
                  <h3 className="text-sm font-semibold">Avatar name</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Sample pack</p>
                </div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-950">
                <Image
                  alt="Avatar 4"
                  className="mx-auto aspect-square overflow-hidden rounded-lg object-cover"
                  height="300"
                  src={Placeholder}
                  width="300"
                />
                <div className="mt-2 text-center">
                  <h3 className="text-sm font-semibold">Avatar name</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Sample pack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6" id="pricing">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Artwork pricing</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose the plan that fits to your needs. Switch between &apos;Simple&apos; and &apos;Complicated&apos; to see the different
              features.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl">
            <Tabs className="w-full" defaultValue="simple">
              <TabsList className="grid w-[300px] grid-cols-2 rounded-full mx-auto">
                <TabsTrigger className="rounded-full" value="simple">
                  Simple
                </TabsTrigger>
                <TabsTrigger className="rounded-full" value="complicated">
                  Complicated
                </TabsTrigger>
              </TabsList>
              <TabsContent value="simple">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>Avatar name</CardTitle>
                      <CardDescription>A simple avatar, with default materials, created for personal use.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-1">
                        <h3 className="text-4xl font-bold">from $0.99</h3>
                        <p className="text-gray-500 dark:text-gray-400">estemated price.</p>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                          Note
                        </li>
                        <li>
                          <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                          Note
                        </li>
                        <li>
                          <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                          Note
                        </li>
                        <li>
                          <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                          Note
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      {/* <Button>Get Started</Button> */}
                    </CardFooter>
                  </Card>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>Avatar name</CardTitle>
                      <CardDescription>A simple avatar, with default materials, created for personal use.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-1">
                        <h3 className="text-4xl font-bold">from $0.200</h3>
                        <p className="text-gray-500 dark:text-gray-400">estemated price.</p>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                          Note
                        </li>
                        <li>
                          <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                          Note
                        </li>
                        <li>
                          <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                          Note
                        </li>
                        <li>
                          <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                          Note
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      {/* <Button>Get Started</Button> */}
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="complicated">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>Avatar name</CardTitle>
                      <CardDescription>A simple avatar, with default materials, created for personal use.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-1">
                        <h3 className="text-4xl font-bold">from $1</h3>
                        <p className="text-gray-500 dark:text-gray-400">estemated price.</p>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                          Note
                        </li>
                        <li>
                          <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                          Note
                        </li>
                        <li>
                          <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                          Note
                        </li>
                        <li>
                          <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                          Note
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      {/* <Button>Get Started</Button> */}
                    </CardFooter>
                  </Card>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>Avatar name</CardTitle>
                      <CardDescription>A simple avatar, with default materials, created for personal use.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-1">
                        <h3 className="text-4xl font-bold">from $2</h3>
                        <p className="text-gray-500 dark:text-gray-400">estemated price.</p>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                          Note
                        </li>
                        <li>
                          <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                          Note
                        </li>
                        <li>
                          <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                          Note
                        </li>
                        <li>
                          <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                          Note
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      {/* <Button>Get Started</Button> */}
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unleash Your Digital Creativity</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {/* Hello there! */}I&apos;m SnejOk, a passionate furry artist with a knack for crafting mesmerizing 3D avatars and captivating artworks. Through my vibrant and whimsical creations, I strive to bring joy, spark imagination, and capture the unique essence of characters. With meticulous attention to detail, I aim to create pieces that evoke a sense of liveliness and leave a lasting impression. Join me on this exciting journey as we explore the boundless possibilities of furry art and celebrate the beauty of individuality together!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="https://google.com">Join Telegram
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="https://google.com">Join Discord
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="https://google.com">Join VK
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
>>>>>>> parent of 7042aab (Big update, but dick is still small)
    </>
  )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}