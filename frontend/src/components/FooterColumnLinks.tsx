import { Link } from 'react-router-dom'

const FooterColumnLinks = ({ title, links }: { title: string, links: string[] }) => {
  return (
    <div>
      <h3 className="text-white font-semibold text-lg mb-6">
        {title}
      </h3>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to=""
              className="hover:text-secondary-color transition"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterColumnLinks
