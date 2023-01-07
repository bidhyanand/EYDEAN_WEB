// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function menuData () {
  return {
    title: [
      {
        name: 'Home',
        href: '/'
      },
      {
        name: 'About',
        href: '/about'
      },
      {
        name: 'Contact',
        href: '/contact'
      }
    ],

    expertise : [
    {
      name: 'Web Development',
      href: '/web-development'
    }
    
    ]

  }
}