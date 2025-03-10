import { useRef } from 'react';
import styles from './styles/sectionPills.module.css';

interface SectionPillsProps {
  allPosts: any;
}

export default function SectionPills(props: SectionPillsProps) {
  const containerRef = useRef(null);

  const scrollContainerRight = () => {
    containerRef?.current.scrollBy(100, 0); // Scroll right by 50 pixels
  };

  const scrollContainerLeft = () => {
    containerRef?.current.scrollBy(-100, 0); // Scroll left by 50 pixels
  };
  let allSections = props.allPosts.map((post) => {
    return post.frontmatter.topic;
  });
  let uniqueSections = [...new Set(allSections)];

  return (
    <div className={styles.pillsContainer}>
      <div className={styles.lefter} onClick={scrollContainerLeft}>
        <p>&lt;</p>
      </div>
      <div className={styles.pills} ref={containerRef}>
        {uniqueSections.map((section) => {
          return (
            <a href={`/blog/posts/${section}`} className={`${styles.pillItem}`}>
              {section}
            </a>
          );
        })}
      </div>
      <div className={styles.righter} onClick={scrollContainerRight}>
        <p>&gt;</p>
      </div>
    </div>
  );
}
