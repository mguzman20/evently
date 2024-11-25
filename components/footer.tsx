
import { Ticket } from 'lucide-react';
import Link from 'next/link';

const sections = [
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Help', href: '#' },
      { name: 'Login', href: '/sign-in' },
    ],
  },
  {
    title: 'Social',
    links: [
      { name: 'Twitter', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'LinkedIn', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <section className="mb-10 mt-20">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
            <div className="col-span-2 mb-8 lg:mb-0">
                <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <Ticket />
                    <p className="text-lg font-bold">Evently</p>
                    <span className="sr-only">Evently</span>
                </Link>
            </div>
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="font-medium hover:text-primary">
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Evently</p>
            <ul className="flex items-center gap-4">
              <li className="underline hover:text-primary">
                <a href="#"> Terms and Conditions</a>
              </li>
              <li className="underline hover:text-primary">
                <a href="#"> Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}