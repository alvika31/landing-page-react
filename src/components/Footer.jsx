import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Menu",
    items: ["Home", "About", "Service", "Client", "Contact"],
  },
  {
    title: "Service",
    items: [
      "Web Design",
      "Web Development",
      "Human Resources",
      "Database Server",
    ],
  },
  {
    title: "Contact",
    items: [
      "<h1>Whatsapp:</h1><p>+62 895-3266-51557</p>",
      "<h1>Telepon:</h1><p>+62 895-3266-51557</p>",
    ],
  },
];

const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="relative w-ful bg-blue-50 py-20">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div>
            <Typography variant="h5" className="mb-6">
              Zenoh Tech Innovations
            </Typography>
            <Typography className="mr-10">
              Zenoh Tech Innovations adalah solusi TI yang andal untuk bisnis
              Anda. Kami menyediakan bimbingan terpercaya dan inovatif untuk
              mendukung pertumbuhan bisnis Anda melalui teknologi.
            </Typography>
          </div>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <div
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                      dangerouslySetInnerHTML={{ __html: link }}
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">Zenoh</a>. All Rights
            Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
