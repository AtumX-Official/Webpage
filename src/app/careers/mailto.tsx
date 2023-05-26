"use client";

const MailTo: React.FC = () => {
  return (
    <>
      {/* <a
        data-testid="linkElement"
        href="mailto:info@atumx.in?subject=Applying for the role electrical enginner"
        target="_self"
        class="kuTaGy wixui-button zKbzSQ"
        aria-disabled="false"
      >
        <span class="M3I7Z2 wixui-button__label">Apply Now</span>
      </a> */}
      <a
        href="mailto:info@atumx.in"
        target="_"
        className="rounded-full border-2 self-center px-6 md:px-48 w-fit border-orange-600 hover:border-orange-400"
      >
        APPLY
      </a>
    </>
  );
};

export default MailTo;
