import styles from "./skeletomMovie-item.module.css";

export default function SkeletonMovieItem() {
  return (
    <div className={styles.container}>
      <div className={styles.skeletonImage} />
    </div>
  );
}
