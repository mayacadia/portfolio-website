import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi'

const Footer = ({ data }) => {
  const { personal, social } = data
  const currentYear = new Date().getFullYear()

  const socialIcons = {
    GitHub: FiGithub,
    LinkedIn: FiLinkedin,
    Twitter: FiTwitter,
  }

  return (
    <footer className="bg-dark-lighter text-gray-300">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              {personal.name.split(' ')[0]}
            </h3>
            <p className="text-gray-400">
              {personal.title} based in {personal.location.split(',')[0]}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {social.map((link) => {
                const Icon = socialIcons[link.name]
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-light rounded-lg hover:bg-primary-500 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© {currentYear} {personal.name}. Made with</span>
            <FiHeart className="text-red-500" />
            <span>and React</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
