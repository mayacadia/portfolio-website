import { useEffect } from 'react'

const SEO = ({ data }) => {
  const { personal, social } = data

  useEffect(() => {
    // Person Schema
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": personal.name,
      "jobTitle": personal.title,
      "description": personal.tagline,
      "email": personal.email,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Valenzuela City",
        "addressCountry": "Philippines"
      },
      "url": "https://jeremiahrosales.dev",
      "image": `https://jeremiahrosales.dev${personal.profileImage}`,
      "sameAs": social.map(s => s.url),
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Pamantasan ng Lungsod ng Valenzuela"
      },
      "knowsAbout": [
        "Software Development",
        "Backend Development",
        "Automation",
        "Node.js",
        "React",
        "Python",
        "JavaScript",
        "TypeScript",
        "PostgreSQL",
        "Web Development"
      ]
    }

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Jeremiah Rosales Portfolio",
      "description": "Software Developer & Automation Specialist Portfolio",
      "url": "https://jeremiahrosales.dev",
      "author": {
        "@type": "Person",
        "name": personal.name
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://jeremiahrosales.dev/#projects?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }

    // Professional Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Jeremiah Rosales - Software Development Services",
      "description": "Professional software development, backend solutions, and automation services",
      "provider": {
        "@type": "Person",
        "name": personal.name
      },
      "areaServed": "Worldwide",
      "serviceType": [
        "Backend Development",
        "Web Development",
        "Automation Solutions",
        "API Development",
        "Database Design"
      ]
    }

    // Add schemas to head
    const script1 = document.createElement('script')
    script1.type = 'application/ld+json'
    script1.text = JSON.stringify(personSchema)
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.type = 'application/ld+json'
    script2.text = JSON.stringify(websiteSchema)
    document.head.appendChild(script2)

    const script3 = document.createElement('script')
    script3.type = 'application/ld+json'
    script3.text = JSON.stringify(serviceSchema)
    document.head.appendChild(script3)

    return () => {
      document.head.removeChild(script1)
      document.head.removeChild(script2)
      document.head.removeChild(script3)
    }
  }, [personal, social])

  return null
}

export default SEO
