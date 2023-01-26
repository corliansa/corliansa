import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Footer, Logo } from "components";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Uses", href: "/uses" },
  { name: "Blog", href: "/blog" },
];

export const Base: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="isolate min-h-screen bg-gray-900 text-gray-300">
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">ONE</span>
                <Logo />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-semibold text-gray-100 hover:text-gray-400"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-gray-900 px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">ONE</span>
                    <Logo />
                  </Link>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div>{children}</div>
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
