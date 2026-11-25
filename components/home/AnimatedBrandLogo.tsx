import BrandLogo from "../BrandLogo";

import styles from "./HomeHeroRedesign.module.css";

export default function AnimatedBrandLogo() {
  return (
    <div className={styles.brandStage}>

      <div
        className={styles.brandGrid}
        aria-hidden="true"
      />

      <div className={styles.logoWrapper}>

        <BrandLogo
          fetchPriority="high"
          width={192}
          height={192}
          loading="eager"
          className={styles.animatedLogo}
        />

      </div>

    </div>
  );
}
