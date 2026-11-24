import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const clients = [
  {
    name: "Apisec",
    logo: "/Images/Apisec_Logo.svg",
    focus: "API security and product engineering",
  },
  {
    name: "Artificio",
    logo: "/Images/artificio_logo.svg",
    focus: "Digital products and web platforms",
  },
  {
    name: "Belsio",
    logo: "/Images/Belsio_logo.svg",
    focus: "ERP and enterprise business systems",
  },
  {
    name: "Fluence",
    logo: "/Images/fluence_logo.svg",
    focus: "Software workflows and integration",
  },
];

export default function TrustedClients() {
  return (
    <section
      id="trusted-clients"
      className="iv-clients"
      aria-labelledby="clients-heading"
    >
      <div className="iv-container">

        <div className="iv-clients-intro">
          <p className="iv-section-label">
            Our Clients
          </p>

          <h2
            id="clients-heading"
            className="iv-section-heading"
          >
            Clients and products we have supported.
          </h2>

          <p className="iv-section-description">
            From digital products to enterprise platforms,
            we support businesses with software engineering,
            system integration and practical technology solutions.
          </p>
        </div>

        <div className="iv-client-motion">



          <div className="iv-client-marquee" tabIndex={0} role="region" aria-label="Client showcase">

            <div className="iv-client-track">

              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  className={`iv-client-group ${
                    copy === 1
                      ? "iv-client-group-duplicate"
                      : ""
                  }`}
                  aria-hidden={
                    copy === 1 ? true : undefined
                  }
                >
                  {clients.map((client) => (
                    <li
                      key={client.name}
                      className="iv-client-card"
                    >
                      <div className="iv-client-logo">
                        <Image
                          src={client.logo}
                          alt={
                            copy === 0
                              ? `${client.name} logo`
                              : ""
                          }
                          width={180}
                          height={64}
                          unoptimized
                          className="iv-client-image"
                        />
                      </div>

                      <h3>{client.name}</h3>

                      <p>{client.focus}</p>
                    </li>
                  ))}
                </ul>
              ))}

            </div>

          </div>

        </div>

        <div className="iv-clients-bottom">
          <Link
            href="/portfolio"
            className="iv-client-link"
          >
            Explore Our Work
            <FiArrowRight
              size={18}
              aria-hidden="true"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}
