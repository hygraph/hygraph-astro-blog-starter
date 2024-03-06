const AllPages = `
  query AllPages {
    pages {
    title
    slug
    seoOverride {
      title
      image {
        height
        width
        url
      }
      description
    }
    content {
      html
      raw
    }
  }
}


`

const SinglePage = `
  query SinglePage($slug: String!) {
    page(where: { slug: $slug }) {
      title
      seoOverride {
        title
        image {
          height
          width
          url
        }
        description
      }
      content {
        html
        raw
      }
    }
  }
`

export { AllPages, SinglePage }
