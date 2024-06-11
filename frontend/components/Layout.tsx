import Link from "next/link"
import "../app/globals.css";
import HeaderIcon from "./Icons/HeaderIcon";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={'min-h-screen flex flex-col'}>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-4 pb-4">
          <div className="container">
            <h2 className="hover:brightness-90 ">
              <Link href={'/'} className="flex gap-1 text-white">
                <HeaderIcon />
                Game Directory
              </Link>
            </h2>
          </div>
        </div>
      </nav>
      <div className={'flex-grow'}>
        {children}
      </div>
      <div className={'bg-gray-800 h-10 mt-10'}></div>
    </div>
  );
}
