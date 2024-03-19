import { Maybe, Tuple } from "../types"
import { Stack } from "./stack"
import React from "react"
import { H1, H2, H3 } from "@/components/form"
import HeadingText from "@/components/common/heading-text"


export interface BlogPostSubSection {
    title: string
    href: string
    subSectionContent: React.ReactNode
}

export interface BlogPostSection {
  title: string
  href: string
  sectionContent?: React.ReactNode
  subSections?: BlogPostSubSection[]
}

export interface BlogPost {
  title: string
  slug: string
  datePublished: Date
  shortDescription: string
  content: BlogPostSection[]
}

export const blogposts: BlogPost[] = [
  {
    title: "Premier article",
    slug: "premier-article",
    datePublished: new Date("2023-11-30"),
    shortDescription: "Un article de test",
    content: [
      {
        title: "Première section",
        href: "premiere-section",
        sectionContent: (
          <>
            <p className="pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem suscipit amet laudantium rem dicta? Et aliquam laboriosam, soluta, magni vel, corporis architecto nam excepturi iste earum ad optio. Eum natus sed quidem magnam temporibus maxime minus quibusdam dolorem harum, incidunt dolores laudantium, provident porro nisi  quisquam illum, facilis architecto corrupti accusantium tempore odit harum magni repellendus. Tempora quasi deserunt saepe. Libero dignissimos exercitationem esse nulla voluptatibus ducimus nihil non laborum.
            </p>
            <p className="pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, itaque, delectus magni accusantium nam porro illo quis praesentium iure corrupti deleniti beatae ea quam voluptate nihil vel blanditiis fugit saepe. Excepturi asperiores porro odio ipsum autem omnis, consequuntur nostrum ex. At ducimus, incidunt voluptatum delectus vel aut excepturi nihil eaque voluptate cumque! Nisi voluptatum magni, expedita tempora soluta, est quisquam error neque ducimus eveniet eius molestiae harum rerum cum vero numquam perspiciatis laudantium, officia eligendi dolorem suscipit quam. Vero asperiores magni dolor inventore quibusdam ea aliquam, doloribus beatae recusandae consectetur! Consectetur eveniet in, porro perspiciatis enim accusamus sint mollitia excepturi quos odit optio explicabo nihil sapiente id ipsum aperiam atque? Officia 
            </p>
          </>
        ),
      },
      {
        title: "Deuxième section",
        href: "deuxieme-section",
        subSections: [
          {
            title: "Première sous-section",
            href: "premiere-sous-section",
            subSectionContent: (
              <>
                <p>Contenu de la 1ère sous-section</p>
              </>
            ),
          },
          {
            title: "Deuxième sous-section",
            href: "deuxieme-sous-section",
            subSectionContent: (
              <>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam architecto eveniet at aperiam, omnis praesentium? Odio non minima possimus alias quisquam, laboriosam delectus et quam, laudantium dicta fugiat reiciendis eaque. Non quaerat aliquam repudiandae beatae perferendis suscipit iste provident a nesciunt animi quod ducimus sed, veniam quis unde facere laboriosam nisi nulla consequatur mollitia eum tenetur reiciendis? Recusandae facere repellendus amet suscipit a iure, vero, sit commodi id natus quidem culpa repudiandae ipsa, iste perspiciatis fugiat! Earum libero suscipit ea natus architecto a asperiores fugiat possimus alias sint animi consequuntur corrupti non totam ipsam est accusamus eveniet ab, maxime consequatur fugit ex labore? Numquam blanditiis autem praesentium possimus eius, quasi, illo laboriosam libero nam nihil, veritatis dicta! Harum voluptates laborum recusandae optio vitae maiores quis vel unde amet quam magnam iure tempora, alias aliquid necessitatibus provident placeat quo iusto repellendus ex. Unde iure ipsum error distinctio consequuntur, natus alias, veniam saepe minima repudiandae in cumque nesciunt peratis esse pariatur earum in facilis ipsa accusantium amet. Consectetur aliquam laborum doloremque, cum voluptates velit ipsum quaerat. Possimus, eos facilis?</p>
              </>
            ),
          },
        ],
      },
      // Add more sections or subsections as needed
    ],
  },
]
