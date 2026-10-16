import { useState } from "react";
import mediaData from "../data/media.json";
import MediaArticleRow, { type MediaArticle } from "../components/MediaArticleRow";

interface MediaProps {
  page?: boolean;
}

type MediaRecord = Record<string, unknown>;

function isRecord(value: unknown): value is MediaRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function firstString(record: MediaRecord, keys: string[]) {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return "";
}

function isVerified(record: MediaRecord) {
  const value = record.verified ?? record.isVerified ?? record.verificationStatus;
  return value === true || (typeof value === "string" && ["verified", "confirmed"].includes(value.toLowerCase()));
}

function validUrl(value: string) {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? value : "";
  } catch {
    return "";
  }
}

function normalizeArticle(value: unknown, index: number): MediaArticle {
  const record = isRecord(value) ? value : {};
  const date = firstString(record, ["date", "publicationDate", "publishedAt", "published_date"]);
  const parsedDate = Date.parse(date);
  const dateObject = Number.isNaN(parsedDate) ? null : new Date(parsedDate);

  return {
    id: firstString(record, ["id", "slug"]) || `media-record-${index + 1}`,
    publication: firstString(record, ["publication", "publicationName", "outlet", "source"]) || "Publication unavailable",
    headline: firstString(record, ["headline", "title", "articleTitle"]) || "Headline unavailable",
    date,
    dateLabel: dateObject ? new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(dateObject) : "Date unavailable",
    year: dateObject ? String(dateObject.getFullYear()) : "",
    url: validUrl(firstString(record, ["url", "link", "articleUrl"])),
    verified: isVerified(record),
  };
}

const articles = (Array.isArray(mediaData) ? mediaData : []).map(normalizeArticle);

function newestFirst(left: MediaArticle, right: MediaArticle) {
  const leftDate = Date.parse(left.date);
  const rightDate = Date.parse(right.date);
  if (Number.isNaN(leftDate) || Number.isNaN(rightDate)) return 0;
  return rightDate - leftDate;
}

export default function Media({ page = false }: MediaProps) {
  const homepageArticles = articles.filter((article) => article.verified && article.url).sort(newestFirst).slice(0, 3);

  return (
    <section id={page ? "media-page" : "media"} className="editorial-section media-section">
      <div className="container-site">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">{page ? "Press and Coverage" : "Selected Press Coverage"}</p>
            <h2 className="section-title">In the Media</h2>
          </div>
          <div className="section-intro-block">
            <p className="section-intro">News coverage and reporting featuring our chambers and its legal work.</p>
            {!page && <a className="section-link" href="/media">View all coverage <span aria-hidden="true">-&gt;</span></a>}
          </div>
        </div>
        {page ? <MediaArchive /> : <MediaList articles={homepageArticles} emptyMessage="No verified press coverage has been supplied." />}
      </div>
    </section>
  );
}

function MediaList({ articles: visibleArticles, emptyMessage }: { articles: MediaArticle[]; emptyMessage: string }) {
  return visibleArticles.length === 0 ? (
    <div className="empty-state"><span className="empty-state-mark" aria-hidden="true">—</span><p>{emptyMessage}</p></div>
  ) : (
    <div className="media-list">{visibleArticles.map((article) => <MediaArticleRow article={article} key={article.id} />)}</div>
  );
}

function MediaArchive() {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("all");
  const years = Array.from(new Set(articles.map((article) => article.year).filter(Boolean))).sort((left, right) => Number(right) - Number(left));
  const normalizedQuery = query.trim().toLowerCase();
  const filteredArticles = articles
    .filter((article) => !normalizedQuery || `${article.headline} ${article.publication}`.toLowerCase().includes(normalizedQuery))
    .filter((article) => year === "all" || article.year === year)
    .sort(newestFirst);

  return (
    <div className="media-archive">
      <div className="media-filters" role="search">
        <label>Search coverage<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Headline or publication" /></label>
        <label>Filter by year<select value={year} onChange={(event) => setYear(event.target.value)}><option value="all">All years</option>{years.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
      </div>
      <MediaList articles={filteredArticles} emptyMessage="No coverage matches your search." />
    </div>
  );
}
