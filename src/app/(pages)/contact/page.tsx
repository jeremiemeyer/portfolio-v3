import ContactForm from "@/components/shared/contact-form"
import SocialMediaIcons from "@/components/common/social-media-icons"
import HeadingText from "@/components/common/heading-text"
import FadeInOnEntry from "@/components/animations/fade-in-on-entry"
import SectionCard from "@/components/pages/home/section-card"
import { Mail, Phone } from "lucide-react"
import CopyEmail from "@/components/shared/copy-info"
import CopyInfo from "@/components/shared/copy-info"

export const metadata = {
  title: "Contact | Jeremie Meyer",
  description: "Page de contact",
}

export default function Contact() {
  return (
    <>
      <div className="flex flex-col items-center text-center space-y-2 gap-4 my-6">
        <HeadingText title="Contact" subtext="shoot me a message" />
      </div>
      {/* <SocialMediaIcons /> */}
      <SectionCard className="flex flex-col max-w-4xl space-y-12 md:space-y-0 md:flex-row items-center text-zinc-800 dark:text-zinc-400">
        <div className="md:w-2/4 flex items-center text-center md:text-left mx-6">
          {/* Center horizontally */}
          <div className="justify-center">
            {/* Align content to the left */}
            <p className="items-center mb-2">
              <span className="ml-3 flex flex-row items-center text-green-500 dark:text-green-400 drop-shadow-glowLight dark:drop-shadow-glowDark">
                <span className="pulsating-circle h-2 w-2 mr-2" />
                Available for work
              </span>
            </p>
            <p className="mb-6">Let's discuss working together!</p>
            <ul className="space-y-3">
              <li className="flex flex-row">
                <span className="mr-4">
                  <Phone />
                </span>
                <CopyInfo
                  infoType="phone"
                  infoToCopy={`(+33) 6 70 43 93 91`}
                >
                  <a className="cursor-pointer hover:text-black dark:hover:text-zinc-200 transition-all" href="tel:+33670439391">{`(+33) 6 70 43 93 91`}</a>
                </CopyInfo>
              </li>
              <li className="flex flex-row">
                <span className="mr-4">
                  <Mail />
                </span>
                <CopyInfo
                  infoType="email"
                  infoToCopy={process.env.NEXT_PUBLIC_CONTACT_EMAIL!}
                >
                  <a className="cursor-pointer hover:text-black dark:hover:text-zinc-200 transition-all" href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_MAIL}`}>{`${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}</a>
                </CopyInfo>
              </li>
            </ul>
          </div>
        </div>
        <ContactForm className="col col-span-3" />
      </SectionCard>
    </>
  )
}
