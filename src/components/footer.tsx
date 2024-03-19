import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { siteConfig } from "@/../config/site"
import useModal from "@/hooks/use-modal"
import { H2 } from "./form"
import { ModeToggle } from "./mode-toggle"

export default function Footer() {
  const router = useRouter()
  const currentPathname = usePathname()
  const modal = useModal()

  const footerModals = [
    {
      title: "Legal",
      content: (
        <ul className="mt-2">
          <li className="text-xl">Jeremie Meyer, autoentreprise</li>
          <li>SIREN : 947 456 414</li>
          <li>
            Contact :{" "}
            <Link
              href="mailto:jeremie.meyer357@gmail.com"
              className="underline underline-offset-2 decoration-zinc-700 hover:decoration-zinc-400 hover:text-zinc-100 transition-all"
            >
              jeremie.meyer357@gmail.com
            </Link>
          </li>
          {/* <li>Numéro TVA : xxx</li> */}
          <li>
            Site hébergé par :{" "}
            <Link
              target="_blank"
              href="https://www.o2switch.fr/"
              className="underline underline-offset-2 decoration-zinc-700 hover:decoration-zinc-400 hover:text-zinc-100 transition-all"
            >
              o2switch
            </Link>
          </li>
        </ul>
      ),
      showScrollbar: false,
    },
    {
      title: "RGPD",
      content: (
        <>
          <H2 className="mt-2">Collecte de données personnelles</H2>
          <p className="mb-8">
            Lorsque vous visitez ce site web, nous pouvons collecter certaines
            informations personnelles que vous choisissez de nous fournir,
            telles que votre nom, votre adresse e-mail et vos coordonnées
            professionnelles. Nous ne collectons ces informations que lorsque
            vous les soumettez volontairement via nos formulaires de contact ou
            d'autres moyens de communication.
          </p>

          <H2>Utilisation des données personnelles</H2>
          <p className="mb-4">
            Les données personnelles que vous nous fournissez peuvent être
            utilisées aux fins suivantes :
          </p>
          <ul className="px-8 mb-8">
            <li style={{ listStyleType: "circle" }}>
              Pour vous contacter et répondre à vos demandes.
            </li>
            <li style={{ listStyleType: "circle" }}>
              Pour vous fournir des informations sur nos services ou projets.
            </li>
            <li style={{ listStyleType: "circle" }}>
              Pour personnaliser votre expérience sur ce site web.
            </li>
          </ul>

          <H2>Protection des données personnelles</H2>
          <p className="mb-8">
            Nous prenons la protection de vos données personnelles au sérieux.
            Nous mettons en œuvre des mesures de sécurité appropriées pour
            protéger vos informations contre tout accès non autorisé,
            divulgation, altération ou destruction.
          </p>

          <H2>Cookies et technologies similaires</H2>
          <p className="mb-8">
            Ce site web utilise des cookies et d'autres technologies similaires
            pour améliorer votre expérience de navigation. Vous pouvez gérer vos
            préférences en matière de cookies via les paramètres de votre
            navigateur.
          </p>

          <H2>Partage des données personnelles</H2>
          <p className="mb-8">
            Nous ne vendons, ne louons ni ne partageons vos données personnelles
            avec des tiers à des fins de marketing. Cependant, dans certaines
            circonstances, nous pouvons être amenés à partager vos informations
            avec des prestataires de services tiers qui nous aident à gérer ce
            site web ou à répondre à vos demandes.
          </p>

          <H2>Vos droits</H2>
          <p className="mb-8">
            Vous avez le droit d'accéder, de corriger, de mettre à jour ou de
            supprimer vos données personnelles que nous détenons. Si vous
            souhaitez exercer l'un de ces droits, veuillez{" "}
            <Link
              href="/contact"
              className="underline underline-offset-2 decoration-zinc-700 hover:decoration-zinc-400 hover:text-zinc-100 transition-all"
            >
              me contacter
            </Link>
            .
          </p>

          <H2>Modifications de la déclaration de confidentialité</H2>
          <p className="mb-4">
            Nous nous réservons le droit de modifier cette déclaration relative
            aux données personnelles à tout moment. Les modifications seront
            publiées sur cette page, et la date de la dernière mise à jour sera
            révisée en conséquence.
          </p>

          <p className="mb-4">
            En utilisant ce site web, vous consentez à la collecte et à
            l'utilisation de vos données personnelles conformément à cette
            déclaration.
          </p>

          <p className="mb-8">
            Si vous avez des questions ou des préoccupations concernant notre
            politique de confidentialité, veuillez{" "}
            <Link
              href="/contact"
              className="underline underline-offset-2 decoration-zinc-700 hover:decoration-zinc-400 hover:text-zinc-100 transition-all"
            >
              me contacter
            </Link>
            .
          </p>
        </>
      ),
      showScrollbar: true,
    },
  ]

  return (
    <footer>
      <div className="mx-auto p-6 md:py-8">
        <div className="flex flex-col md:flex-row sm:items-center justify-between gap-2">
          <Link href="/" className="text-2xl font-bold font-typewriter">
            jm
          </Link>
          <ul className="flex flex-col md:flex-row mb-6 text-zinc-500 dark:text-zinc-400 sm:mb-0 gap-2 md:gap-6">
            {footerModals.map((footerModal) => (
              <li
                key={footerModal.title}
                onClick={() => modal.onOpen(footerModal)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    modal.onOpen(footerModal)
                  }
                }}
                className="hover:text-black dark:hover:text-zinc-200 transition-all"
              >
                {footerModal.title}
              </li>
            ))}
          </ul>
          <ModeToggle />
        </div>
        <span className="flex flex-col my-6 text-sm text-zinc-500 dark:text-zinc-400 sm:text-center">
          <span>
            © {new Date().getFullYear()}{" "}
            <a
              target="_blank"
              href="jeremiemeyer.fr"
              className="hover:text-black dark:hover:text-zinc-200 transition-all"
            >
              Jeremie Meyer
            </a>
          </span>
          <span>All rights reserved.</span>
        </span>
      </div>
    </footer>
  )
}
