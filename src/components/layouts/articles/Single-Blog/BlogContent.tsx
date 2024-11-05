import "./blogStyles.css";
function BlogContent({ content }: { content: string }) {
  return (
    <div>
      <div
        className="wp-content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}

export default BlogContent;
