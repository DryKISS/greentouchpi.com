/**
 * Layout - Header
 */

import Link from 'next/link'

const items = [
  {
    href: '/',
    title: 'Home '
  },
  {
    href: '/treatment',
    title: 'Massages '
  },
  {
    href: '/membership',
    title: 'Treatment plans '
  },
  {
    href: '/specialoffer',
    title: 'Promotions '
  },
  {
    href: '/book-massage',
    title: 'Book Treatment '
  },
  {
    href: '/blog',
    title: 'Blog '
  },
  {
    href: '/tea',
    title: 'Tea '
  },
  {
    href: '/contactus',
    title: 'Contact Us '
  },
  {
    href: '/blog',
    title: 'Blog '
  }
]

export const renderItem = (title, href, isActive) => (
  <li class={isActive} itemprop='itemListElement' itemscope itemtype='http://schema.org/ListItem'>
    <Link href={href} passHref>
      <a itemprop='item' itemscope='itemscope' itemtype='http://schema.org/Thing'>
        {title}
      </a>
    </Link>
    <meta content='1' itemprop='position' />
  </li>
)

export const LayoutHeader = () => (
  <>
    <div class='container mainLogo text-center'>
      {' '}
      <a href='/' title='Green Touch Spa and Massage'>
        <figure class='image' itemprop='image' itemscope itemtype='http://schema.org/ImageObject'>
          {' '}
          <img
            src='assets/images/greentouch-logo.png'
            alt='Green Touch logo'
            class='image__img'
            itemprop='contentUrl'
          />
        </figure>
      </a>
      <p> Traditional Thai massage treatments in Wimbledon, London, UK </p>
    </div>
    <nav class='navbar navbar-default navbar-static-top' id='navbar' role='navigation'>
      <div class='container'>
        <div class='navbar-header'>
          {' '}
          <button
            aria-expanded='false'
            class='navbar-toggle collapsed'
            data-target='#navbar-collapse'
            data-toggle='collapse'
            type='button'
          >
            {' '}
            <span class='sr-only'>Toggle Navigation</span>
            <span class='icon-bar' /> <span class='icon-bar' /> <span class='icon-bar' />{' '}
          </button>{' '}
        </div>
        <div class='navbar-collapse collapse' id='navbar-collapse'>
          <ul class='nav navbar-left navbar-nav'>
            {items.map(item => renderItem(item.title, item.href))}
          </ul>

          <ul class='nav navbar-nav navbar-right'>
            {renderItem('Phone : +44 208 540 3888 ', 'tel:+442085403888')}
          </ul>
        </div>
      </div>
    </nav>
  </>
)
