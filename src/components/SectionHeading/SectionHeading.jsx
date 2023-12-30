const SectionHeading = ({ title, description, title_color, mobile }) => {
  return (
    <div
      className={
        mobile === false
          ? "hidden md:block"
          : "text-center max-w-[600px] mx-auto "
      }
    >
      <h2
        className={`${
          title_color ? `text-${title_color}` : "text-primary"
        } font-sans text-2xl md:text-4xl font-extrabold mb-2`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`${
            title_color ? `text-${title_color}` : "text-[#777777]"
          } text-sm md:text-base font-thin font-inter text-center`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
