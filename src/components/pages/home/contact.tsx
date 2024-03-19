import HeadingText from "@/components/common/heading-text"
import ContactForm from "../../shared/contact-form"
import SectionCard from "./section-card"

export default function Contact() {
  return (
    <>
      <SectionCard className="max-w-2xl">
        <div
          id="root"
          className="flex flex-col items-center max-w-xl mx-auto"
        >
          <HeadingText title="Let's get in touch" />
          <ContactForm />
        </div>
      </SectionCard>
      {}
    </>
  )
}
