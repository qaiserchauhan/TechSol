import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { CourseType } from '@/app/types/course'
import { Hourtype } from '@/app/types/hour'
import { CourseDetailType } from '@/app/types/coursedetail'
import { MentorType } from '@/app/types/mentor'
import { TestimonialType } from '@/app/types/testimonial'
import { FooterLinkType } from '@/app/types/footerlinks'

const HeaderData: HeaderItem[] = [
  { label: 'Home', href: '/#Home' },
  { label: 'Courses', href: '/#Courses' },
  { label: 'Mentors', href: '/#mentors-section' },
  { label: 'Testimonial', href: '/#testimonial-section' },
  { label: 'Join', href: '/#join-section' },
  { label: 'Contact Us', href: '/#contact' },
  // { label: 'Docs', href: '/documentation' },
]

const CourseData: CourseType[] = [
  { name: 'Mobile Development' },
  { name: 'Web Development' },
  { name: 'Data Science' },
  { name: 'Cloud Computing' },
  { name: 'Cyber Security' },
]

const HourData: Hourtype[] = [
  { name: '20hrs in a Month' },
  { name: '30hrs in a Month' },
  { name: '40hrs in a Month' },
  { name: '50hrs in a Month' },
]

const Companiesdata: { imgSrc: string }[] = [
  {
    imgSrc: '/images/slickCompany/airbnb.svg',
  },
  {
    imgSrc: '/images/slickCompany/hubspot.svg',
  },
  {
    imgSrc: '/images/slickCompany/microsoft.svg',
  },
  {
    imgSrc: '/images/slickCompany/google.svg',
  },
  {
    imgSrc: '/images/slickCompany/walmart.svg',
  },
  {
    imgSrc: '/images/slickCompany/fedex.svg',
  },
]

const CourseDetailData: CourseDetailType[] = [
  {
    course: 'Full-Stack Web Development',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'MERN/MEAN/Java+React',
    price: '24999',
    category: 'webdevelopment',
  },
  {
    course: 'Node.js',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Backend with Node.js and Express.js',
    price: '4999',
    category: 'webdevelopment',
  },
  {
    course: 'Database',
    imageSrc: '/images/courses/coursesThree.svg',
    profession: 'Learn Mongodb with Mongoose',
    price: '4999',
    category: 'webdevelopment',
  },
  {
    course: 'React.js',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'Learn React with Redux toolkit',
    price: '4999',
    category: 'webdevelopment',
  },
  {
    course: 'React Native',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Learn React Native with Node.js',
    price: '4999',
    category: 'mobiledevelopment',
  },
  {
    course: 'Swift',
    imageSrc: '/images/courses/coursesThree.svg',
    profession: 'Learn Swift from Scratch',
    price: '3900',
    category: 'mobiledevelopment',
  },
  {
    course: 'Flutter',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'Flutter App Development',
    price: '3900',
    category: 'mobiledevelopment',
  },
  {
    course: 'Onsen UI',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Learn Onsen Ui with HTML, CSS',
    price: '3900',
    category: 'mobiledevelopment',
  },
  {
    course: 'Data Analyst',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Learn Python-Lib/SQL/Power Bi',
    price: '21999',
    category: 'datascience',
  },
  {
    course: 'AWS & DevOps',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'AWS certification Training',
    price: '14999',
    category: 'cloudcomputing',
  },
  // {
  //   course: 'Bokeh',
  //   imageSrc: '/images/courses/coursesOne.svg',
  //   profession: 'Learn Bokeh with Python',
  //   price: '99',
  //   category: 'datascience',
  // },
  // {
  //   course: 'Scikit',
  //   imageSrc: '/images/courses/coursesThree.svg',
  //   profession: 'Scikit with Python Development',
  //   price: '89',
  //   category: 'datascience',
  // },
  {
    course: 'CyberSecurity',
    imageSrc: '/images/courses/coursesThree.svg',
    profession: 'Cyber Security learning with Burp Suit',
    price: '21000',
    category: 'cybersecurity',
  },
  {
    course: 'Iaas',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'Info-as-a-Service',
    price: '4900',
    category: 'cloudcomputing',
  },
  {
    course: 'Paas',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Platform-as-a-Service',
    price: '4999',
    category: 'cloudcomputing',
  },
  {
    course: 'Saas',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Software-as-a-Service',
    price: '4999',
    category: 'cloudcomputing',
  },
]

const MentorData: MentorType[] = [
  {
    name: 'Senior AWS & DevOps Engineer',
    href: '#',
    imageSrc: '/images/mentor/boy1.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Qaiser Chauhan',
  },
  {
    name: 'Full-Stack Web-Developer Trainer',
    href: '#',
    imageSrc: '/images/mentor/boy2.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Ahmed',
  },
  {
    name: 'Data Analyst',
    href: '#',
    imageSrc: '/images/mentor/boy3.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Pravesh Kumar',
  },
  // {
  //   name: 'UI/UX Designer',
  //   href: '#',
  //   imageSrc: '/images/mentor/boy4.svg',
  //   imageAlt: "Front of men's Basic Tee in black.",
  //   color: 'Andrew Williams',
  // },
  // {
  //   name: 'Web Development / Web Design',
  //   href: '#',
  //   imageSrc: '/images/mentor/boy5.svg',
  //   imageAlt: "Front of men's Basic Tee in black.",
  //   color: 'Brad Schiff',
  // },
  // {
  //   name: 'Adobe Certified Instructor',
  //   href: '#',
  //   imageSrc: '/images/mentor/girl1.svg',
  //   imageAlt: "Front of men's Basic Tee in black.",
  //   color: 'Daniel Walter Scott',
  // },
]

const TestimonialData: TestimonialType[] = [
  {
    profession: 'Full-Stack Web Developer',
    name: 'Bilal',
    imgSrc: '/images/testimonial/user-1.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
    "This course gave me hands-on experience in building real-world web apps. The step-by-step guidance and practical projects boosted my confidence as a full-stack developer."  },
  {
    profession: 'AWS and DevOps',
    name: 'Aimen',
    imgSrc: '/images/testimonial/user-2.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
    "A solid blend of theory and practice. I gained in-depth knowledge of cloud infrastructure, Docker, and CI/CD pipelines. Perfect for anyone looking to enter cloud and DevOps roles."  },
  {
    profession: 'Data Analyst',
    name: 'Tanzeel Ur Rehman',
    imgSrc: '/images/testimonial/user-3.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
    "From data cleaning to visualization, this course covered everything. The real datasets and tools like Excel, SQL, and Python helped me land my first data analyst role!"  },
  // {
  //   profession: 'UX/UI Designer',
  //   name: 'Andrew Williams',
  //   imgSrc: '/images/testimonial/user-1.jpg',
  //   starimg: '/images/testimonial/stars.png',
  //   detail:
  //     "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
  // },
]

const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Company',
    links: [
      { label: 'Home', href: '/#Home' },
      { label: 'Courses', href: '/#Courses' },
      { label: 'Mentors', href: '/#mentors-section' },
      { label: 'Testimonial', href: '/#testimonial-section' },
      { label: 'Join', href: '/#join-section' },
      { label: 'Contact Us', href: '/#contact' },
    ],
  },
  {
    section: 'Support',
    links: [
      { label: 'Help center', href: '/' },
      { label: 'Terms of service', href: '/' },
      { label: 'Legal', href: '/' },
      { label: 'Privacy Policy', href: '/' },
      { label: 'Status', href: '/' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    CourseData,
    HourData,
    Companiesdata,
    CourseDetailData,
    MentorData,
    TestimonialData,
    FooterLinkData,
  })
}
