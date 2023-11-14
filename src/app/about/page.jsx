import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hey! I'm Michael, MDL for short.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              To start, I'm a data analyst.
            </p>
            <p>
              This can mean a lot of things to many people: SQL query monkey, 
              A/B tester of button colors, or the first person to be fired when 
              revenue dips slightly. While I think I'm much more of a generalist, 
              I've mostly positioned myself in business intelligence and data engineering.
            </p>
            <p>
              My passion for analytics has mostly stemmed from reading 
              <a href="https://fivethirtyeight.com/features/best-charts-2022/" target="_blank"> 538 articles </a>
              during my time in university. I've always admired the way they do a 
              majority of their storytelling through responsive visualizations instead 
              of treating them as afterthoughts between boring walls of text. While I’m 
              nowhere near their level of technical artistry, I hope to be one day soon.
            </p>
            <p>
              In the meantime, I dabble in a few things outside of work to convince creatives that I'm not a robot.
              I had a brief stint in 
              <a href="https://www.flickr.com/photos/mdeanphoto/albums/72157633589423632" target="_blank"> photography, </a>
              skateboard on the weekends (Oregon weather permitting), and have recently become obsessed with learning to play the drums.
              If I am for some reason not doing anything listed above, I am more than likely building out a ridiculous pet project, some
              of which you can see in the projects tab above.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/aspiringadult" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="https://github.com/MDeanLindsay" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/michaeldeanlindsay/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:michaeldeanlindsay@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              michaeldeanlindsay@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
