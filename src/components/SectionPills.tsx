import styles from './styles/sectionPills.module.css';

interface SectionPillsProps {
  allPosts: any;
}

export default function SectionPills(props: SectionPillsProps) {
  const allSections = props.allPosts.map((post) => {
    return post.frontmatter.topic;
  });
  return (
    <div className={styles.pillsContainer}>
      {allSections.map((section) => {
        return (
          <a href={`/blog/${section}`} className={`${styles.pillItem}`}>
            {section}
          </a>
        );
      })}
    </div>
  );
}
