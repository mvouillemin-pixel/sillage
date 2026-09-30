type VarianteFond = "marketing" | "app" | "discret";

export function FondSillage({ variante }: { variante: VarianteFond }) {
  return (
    <div
      aria-hidden="true"
      className={`fond-sillage fond-sillage--${variante}`}
    >
      {variante !== "discret" ? (
        <svg
          className="fond-sillage__motif"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <g fill="none" stroke="currentColor" strokeLinecap="round">
            <path d="M-90 690C210 450 450 410 690 500C930 590 1130 540 1530 190" />
            <path d="M-120 748C190 500 440 456 680 546C930 640 1160 582 1560 230" />
            <path d="M-150 808C170 550 420 505 670 598C930 694 1190 630 1590 275" />
            <path d="M-180 866C150 606 400 555 660 650C930 748 1210 681 1620 322" />
            <path d="M120 930C400 710 640 680 865 745C1080 808 1280 758 1540 555" />
          </g>
        </svg>
      ) : null}
    </div>
  );
}