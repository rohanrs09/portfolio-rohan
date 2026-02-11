
const Footer = () => {
  return (
    <footer className="!mt-auto flex flex-col items-center justify-center py-4">
      <div className="flex w-full flex-wrap items-center justify-center gap-2 text-center sm:justify-between">
        <span>&copy; {new Date().getFullYear()} Developed with 🤍 by Rohan</span>
      </div>
    </footer>
  );
};

export default Footer;
