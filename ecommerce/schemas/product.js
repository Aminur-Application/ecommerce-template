export default {
 name: 'product',
 title: 'Product',
 type: 'document',
 fields: [
  {
   name: 'image',
   title: 'Image',
   type: 'array',
   of: [{type: 'image'}],
   options:{
    hotspot: true
   }
  },
  {
   name: 'name',
   title: 'Name',
   type: 'string',
  },
  {
   name: 'slug',
   title: 'Slug',
   type: 'slug',
   options: {
    source: 'name',
    maxLength: 90,
   },
  },
  {
   name: 'price',
   title: 'Price',
   type: 'number',
  },
  {
   name: 'details',
   title: 'Details',
   type: 'text',
  },
  // {
  //   name: 'rating',
  //   title: 'Rating',
  //   type: 'rating',
  //   description: 'Apply a rating out of 5 stars',
  //   options: {
  //     stars: 5
  //   }
  // },
  {
    name: 'note',
    title: 'Note',
    type: 'string',
  },
  {
    name: 'link',
    title: 'Product Link',
    type: 'url'
  },
  {
    name: 'tags',
    title: 'Tags',
    type: 'tags',
    options: {
      predefinedTags:[
        {label: "Facial Cream", value: 'facial-cream'},
        {label: "Shampoo", value: 'shampoo'},
        {label: "Body moisturiser", value: 'body-moisturiser'}
      ]
    }
  }

 ]

}