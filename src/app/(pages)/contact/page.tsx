import HeadingText from "@/components/common/heading-text"
import SectionCard from "@/components/pages/home/section-card"
import ContactForm from "@/components/shared/contact-form"
import CopyInfo from "@/components/shared/copy-info"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"

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
      <SectionCard className="flex flex-col md:max-w-4xl space-y-6 md:space-x-4 md:space-y-0 md:flex-row items-center text-zinc-800 dark:text-zinc-400">
        <div className="md:w-2/4 flex flex-row sm:flex-col items-center text-center md:text-left mx-6 gap-6">
          <Image
            className="hover:grayscale-0 overlay-btn rounded-full bg-white group-hover:bg-blue-50 dark:bg-zinc-900/40 dark:group-hover:bg-zinc-900/70 group-hover:scale-105 transition-all"
            src="/static/pic-no-bg-bw.webp"
            alt="profile pic"
            width={120}
            height={120}
          />

          {/* Center horizontally */}
          <div className="justify-center">
            {/* Align content to the left */}
            <p className="items-center mb-2 mt-2 md:mt-0">
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
                <CopyInfo infoType="phone" infoToCopy={`(+33) 6 70 43 93 91`}>
                  <a
                    className="cursor-pointer hover:text-black dark:hover:text-zinc-200 transition-all"
                    href="tel:+33670439391"
                  >{`(+33) 6 70 43 93 91`}</a>
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
                  <a
                    className="cursor-pointer hover:text-black dark:hover:text-zinc-200 transition-all"
                    href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_MAIL}`}
                  >{`${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}</a>
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
