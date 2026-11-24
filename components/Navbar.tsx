"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/portfolio" },
  { label: "About Us", href: "/about" },
];

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function Navigation({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href ||
      pathname.startsWith(`${href}/`);
  }

  return (
    <header
      className="iv-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="iv-container iv-header-inner">

        <Link
          href="/"
          className="iv-brand"
          onClick={() => setOpen(false)}
          aria-label="Indovate Technologies homepage"
        >
          <Image
            src="/Images/indovatelogo.png"
            alt=""
            width={46}
            height={46}
            className="h-[46px] w-[46px] object-contain"
          />

          <div>
            <span className="iv-brand-name">
              Indovate Technologies
            </span>

            <span className="iv-brand-caption">
              Software &amp; AI Engineering
            </span>
          </div>
        </Link>

        <nav
          className="iv-desktop-nav"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="iv-nav-link"
              aria-current={
                isActive(item.href) ? "page" : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="iv-header-cta">
          <Link
            href="/contact"
            className="iv-button-primary"
          >
            Discuss Your Project
            <ArrowIcon />
          </Link>
        </div>

        <button
          ref={menuButton}
          type="button"
          className="iv-menu-button"
          aria-label={
            open ? "Close navigation" : "Open navigation"
          }
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      <nav
        id="mobile-navigation"
        className="iv-mobile-menu"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="iv-mobile-link"
            aria-current={
              isActive(item.href) ? "page" : undefined
            }
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}

        <Link
          href="/contact"
          className="iv-button-primary mt-6 w-full"
          onClick={() => setOpen(false)}
        >
          Discuss Your Project
          <ArrowIcon />
        </Link>
      </nav>
    </header>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Navigation
      key={pathname}
      pathname={pathname}
    />
  );
}
