function PrimaryButtonOutlined({ buttonlabel }) {
  return (
    <>
      <a href="#">
        <div
          className={`bg-transparent border border-btn-primary text-[#F6393D] font-hebrew-bold tracking-[0.1px] px-6 py-2.5 rounded text-sm mx-2 lg:inline-block lg:px-20`}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {buttonlabel}
        </div>
      </a>
    </>
  );
}

export default PrimaryButtonOutlined;
