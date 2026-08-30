import { Link } from 'react-router-dom'
import Artwork from './Artwork'
import Icon from './Icon'

/**
 * ProjectCard — one card in the projects grid.
 * The whole card is clickable via the stretched-link technique in globals.css,
 * while the accessible name still comes from the real <a> around the title.
 */
export default function ProjectCard({ project }) {
  const { slug, title, summary, category, cover, tools = [], year } = project

  return (
    <article className="pcard">
      <div className="pcard__media">
        <span className="chip pcard__cat">{category}</span>
        <Artwork
          image={cover?.image}
          alt={cover?.alt || `${title} cover image`}
          gradient={cover?.gradient}
          label={cover?.label}
        />
      </div>

      <div className="pcard__body">
        <h3 className="pcard__title">
          <Link to={`/projects/${slug}`}>{title}</Link>
        </h3>
        <p className="pcard__summary">{summary}</p>

        <div className="pcard__foot">
          <span className="pcard__tools">
            {tools.slice(0, 3).join(' · ')}
            {tools.length > 3 ? ` +${tools.length - 3}` : ''}
          </span>
          <span className="pcard__cta">
            View case study
            <Icon name="arrow" size={15} className="btn__arrow" />
          </span>
        </div>

        {year && <span className="sr-only">Year: {year}</span>}
      </div>
    </article>
  )
}
