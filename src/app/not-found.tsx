import MyLink from "@/components/reusable-components/MyLink";
import notFoundImg from "/public/assets/images/404.png";
import MyImage from "@/components/reusable-components/MyImage";

export default function Notfound() {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700 dark:text-white">
        <section className="w-full lg:w-1/2 mx-8">
          <div className="text-1xl text-red-500 font-dark font-extrabold mb-8">
            404
          </div>
          <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
            Sorry we couldn&apos;t find the page you&apos;re looking for
          </p>
          <MyLink
            href="/"
            className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none duration-300 bg-red-600 active:bg-red-700 hover:bg-red-700"
          >
            back to homepage
          </MyLink>
        </section>
        <section className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
          <MyImage
            src={notFoundImg}
            alt="Page not found"
            placeholder="blur"
            width={540}
            height={260}
            sizes="(min-width: 1280px) 540px, (min-width: 1040px) 440px, (min-width: 780px) 312px, (min-width: 620px) 540px, calc(93.33vw - 20px)"
            className="rounded-md"
          />
        </section>
      </div>
    </main>
  );
}
