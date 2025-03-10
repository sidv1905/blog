interface SectionPillsProps {
  allPosts: any;
}

export default function SectionPosts(props: SectionPillsProps) {
  return (
    <div>
      {props.allPosts
        .filter((post, index) => {
          return true;
        })
        .map((post, index) => {
          const href = `/blog/posts/${post.file.split('/').pop().split('.').shift()}`;
          return (
            <div>
              {index !== 0 && <hr />}
              <div class="post-item">
                <h2>
                  <a href={href}>{post.frontmatter.title}</a>{' '}
                  <p class="subtitle"> ~ {post.frontmatter.topic}</p>
                </h2>
                <p>{post.frontmatter.description}</p>
                <div class="post-item-footer">
                  <span class="post-item-date">
                    — {post.frontmatter.publishDate}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
