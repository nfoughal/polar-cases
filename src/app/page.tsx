import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { ArrowRight, Check, Star } from 'lucide-react';
import Phone from "@/components/Phone";
import { Mr_De_Haviland } from "next/font/google";
import { Icons } from "@/components/Icons";
import Test from "@/components/Test";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 lg:gap-x-0 xl:gap-8 lg:pt-16 xl:pt-20 lg:pb-24 xl-pb-56 ">
          <div className="col-span-2 px-6 lg:px-0 lg-pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="relative w-28 hidden lg:block">
                 <div className="absolute inset-x-0 
                  bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28 "/>
                <img src="/penguin1.png" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance  font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg-text-7xl ">
                Your Image on a{' '}
                <span className="bg-orange-600 text-white px-1">Custom</span> 
                {' '}Phone Case
              </h1>
              <p className="mt-8  text-lg  text-balance md:text-wrap ">
                Capture your favorite memories with your own,{' '}
                <span className='font-semibold'>one-of-one</span> phone case.
                PolarCase allows you to protect your memories, not just your
                phone case.
              </p>
              <ul className="mt-8 text-left font-medium  ">
                <div className="space-y-2">
                  <li className="flex gap-1.5 ">
                    <Check className="text-orange-500 h-5 w-5"/>
                    Hight-quality, durable material
                  </li>
                  <li className="flex gap-1.5 ">
                  <Check className="text-yellow-700 h-5 w-5"/>
                  5 year print gurantee
                  </li>
                  <li className="flex gap-1.5 items-center ">
                  <Check className="text-yellow-700 h-5 w-5"/>
                    Moder iphone models supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="h-10 w-10 inline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user photo"
                  />
                  <img
                    className="h-10 w-10 inline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user photo"
                  />
                  <img
                    className="h-10 w-10 inline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user photo"
                  />
                  <img
                    className="h-10 w-10 inline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user photo"
                  />
                  <img
                    className="h-10 w-10 inline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    alt="user photo"
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5 text-yellow-600">
                    <Star className="h-4 w-4"/>
                    <Star className="h-4 w-4"/>
                    <Star className="h-4 w-4"/>
                    <Star className="h-4 w-4"/>
                    <Star className="h-4 w-4"/>
                  </div>
                  <p><span className="font-semibold">1.250</span> Happy customers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full mt-32 flex justify-center items-center px-8 sm:px-16 md:px-32 lg:mx-0 h-fit">
            <div className="relative">
              <img
                src="/your-image.png"
                className="w-40 lg:w-44 absolute overflow-hidden -top-20  left-56 select-none hidden sm:block lg:hidden xl:block "
              />
              <img
                src="/line.png"
                className="w-20 absolute -bottom-6 -left-6 select-none"
              />
              <img/>
              <Phone className='w-64' imageSrc='/girl.jpg'/>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* customers */}

      <section>
        <MaxWidthWrapper className="pb-24 flex flex-col gap-8">
          <div className="flex items-center justify-center flex-col lg:flex-row gap-4 sm-gap-6">
            <h2 className="order-1 text-center text-balance !leading-tight font-bold text-2xl  md:text-5xl  text-gray-900">
              What our {' '} 
              <span className="relative px-2">
                customers
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-orange-600"/>
              </span>
              say
            </h2>
            <img src="/penguin1.png"  className="w-24  order-0 lg:order-2" />
          </div>
          
          {/* card 1 */}
          <div className="mx-auto grid grid-cols-1 max-w-2xl  px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-24 mt-8">
            <div className="flex flex-col  gap-4 ">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-4 w-4 text-orange-600 fill-orange-600"/>
                <Star className="h-4 w-4 text-orange-600 fill-orange-600"/>
                <Star className="h-4 w-4 text-orange-600 fill-orange-600"/>
                <Star className="h-4 w-4 text-orange-600 fill-orange-600"/>
                <Star className="h-4 w-4 text-orange-600 fill-orange-600"/>
              </div>
              <div className="text-lg leading-8 text-justify">
                <p>
                  I couldn't be happier with my custom case from Polarcases! 
                  The design process was so easy, and I loved how I could see
                  exactly how my case would look before ordering.
                  <span className="text-white bg-slate-800"> The quality
                  is outstanding—it's durable
                  </span>
                  , and the colors are vibrant. Plus,
                  shipping was super fast! I've already recommended Polarcases
                  to all my friends.
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <img 
                src="/users/user-3.png"
                className="rounded-full h-12 w-12 object-cover"
                alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Sarah</p>
                  <div className="flex gap-2 items-center text-zinc-600">
                    <Check className="text-orange-600 h-4 w-4 "/>
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          {/* order 2 */}
          <div className="flex flex-col  gap-4 ">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-4 w-4 text-orange-600 fill-orange-600"/>
                <Star className="h-4 w-4 text-orange-600 fill-orange-600"/>
                <Star className="h-4 w-4 text-orange-600 fill-orange-600"/>
                <Star className="h-4 w-4 text-orange-600 fill-orange-600"/>
                <Star className="h-4 w-4 text-orange-600 "/>
              </div>
              <div className="text-lg leading-8 text-justify">
                <p>
                Polarcases made it so simple to create a unique phone case that reflects 
                my style. The case fits perfectly and offers great protection. The only 
                reason I’m giving four stars instead of five is because the shipping 
                took a day longer than expected, {' '}
                <span className="text-white bg-slate-800">
                but the product itself is top-notch
                </span>.
                Definitely coming back for more!
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <img 
                src="/users/user-1.png"
                className="rounded-full h-12 w-12 object-cover"
                alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">James </p>
                  <div className="flex gap-2 items-center text-zinc-600">
                    <Check className="text-orange-600 h-4 w-4 "/>
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper>
          <Test />
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center ">
              <h2 className="mt-2 tracking-tight font-bold  text-2xl md:text-5xl  text-center md:leading-normal">
                Upload your photo and get{' '}
                <span className="px-2  bg-orange-600 text-white">
                  your own case
                </span>{' '}
                now
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col gap-40  items-center lg:flex-row lg:justify-around lg:gap-0">
              <img 
                className="absolute top-[400px] md:top-1/2  z-8 left-[52%] -translate-x-1/2 -translate-y-1/2 rotate-90 lg:rotate-0 w-36 md:w-20 lg:w-24"
                src="/arrow.png"
              />
              <div className="relative h-80 md:h-[490px] w-72 md:min-w-72 rounded-2xl  shadow-xl">
                <img
                  src="/young2.jpg"
                  className="h-full w-full rounded-xl "
                />
              </div>
              <Phone className="w-60 sd:shrink-0" imageSrc="/young.jpg"/>
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className="h-5 w-5 text-orange-600 inline mr-1.5"/>
              High-quality silicone material
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-orange-600 inline mr-1.5"/>
              cratch- and fingerprint resistant coating
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-orange-600 inline mr-1.5"/>
              Wireless charging compatible
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-orange-600 inline mr-1.5"/>
              4 year print warranty
            </li>

            <div className="flex justify-center">
              <Link
                className={buttonVariants({
                  size: 'lg',
                  className: ''
                })}
                href='/configure/upload'
              >
                Create your case now
                <ArrowRight  className="h-4 w-4 ml-1.5"/>
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>

  );
}
