import { ArrowUpRight } from "lucide-react";

export interface MediaArticle {
  id: string;
  publication: string;
  headline: string;
  date: string;
  dateLabel: string;
  year: string;
  url: string;
  verified: boolean;
}

interface MediaArticleRowProps {
  article: MediaArticle;
}

export default function MediaArticleRow({ article }: MediaArticleRowProps) {
  const articleContent = (
    <>
      <div className="media-row-meta">
        <span>{article.publication}</span>
        <time dateTime={article.date || undefined}>{article.dateLabel}</time>
      </div>
      <h3>{article.headline}</h3>
      {article.url && <span className="media-row-action">Read article <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" /></span>}
    </>
  );

  return article.url ? (
    <a className="media-article-row" href={article.url} target="_blank" rel="noopener noreferrer" aria-label={`Read ${article.headline} on ${article.publication}`}>
      {articleContent}
    </a>
  ) : (
    <article className="media-article-row media-article-row-unlinked">
      {articleContent}
    </article>
  );
}
