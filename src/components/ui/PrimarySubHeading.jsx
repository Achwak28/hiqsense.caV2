function PrimarySubHeading({ subText, custColor, tarnsformBusinessLg }) {
  return (
    <>
      <p
        className={`font-hebrew-regular text-txt-primary text-sm lg:text-[18px] text-center leading-6 tracking-[0.25px] mb-10 lg:mb-20 ${tarnsformBusinessLg}`}
        style={{ color: custColor }}
      >
        {subText}
      </p>
    </>
  );
}

export default PrimarySubHeading;
