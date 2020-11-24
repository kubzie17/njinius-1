/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {

  docs: [
    { type: 'category', label: 'Introduction', items: ['about', 'faq'] }, 

    {
      type: 'category',
      label: 'Legal',

      items: [
        'legal/cookiePolicy',
        'legal/disclaimer',
        'legal/privacyNotice',
        'legal/termsOfUse',
      ]
    },

  ],
  businessItems: [
    {
      type: 'category',
      label: 'Business',
      collapsed: false,
      items:[
        'topics/business/about',
        'topics/business/index',
        'topics/business/entrepreneur',
        'topics/business/marketing',
        'topics/business/strategicPlanning',
        'topics/business/accountingAndFinance',
        'topics/business/technology',
        'topics/business/operation',
        'topics/business/humanResources',],
    },
  ],
  
  bookclubItems: [
    {
      type: 'category',
      label: 'Book Club',
      collapsed: false,
      items:['topics/bookClub/about'],
    },
  ],

  softwareItems: [
    {
      type: 'category',
      label: 'Software',
      collapsed: false,
      items:[
        'topics/software/about',
        {
          type: 'category',
          label: 'programming',
          collapsed: false,
          items:[
            'topics/software/programming/about',
            'topics/software/programming/forLoop',
            'topics/software/programming/functionsAndParameters',
            'topics/software/programming/inheritance',
            'topics/software/programming/overload',
            'topics/software/programming/passByReference',
            'topics/software/programming/pointers',
            'topics/software/programming/polymorphism',
            'topics/software/programming/reference',
            'topics/software/programming/switch',
            'topics/software/programming/whileLoop',
            'topics/software/programming/array',
            'topics/software/programming/classMethods',
            'topics/software/programming/constructors',
            'topics/software/programming/dataTypes',
            'topics/software/programming/exceptions',
            'topics/software/programming/abstraction',
            'topics/software/programming/property',
            'topics/software/programming/accessModifiers',
            'topics/software/programming/methods',
            'topics/software/programming/deconstructor',
            'topics/software/programming/memberInitialisation',

            {
              type: 'category',
              label: 'C#',
              collapsed: false,
              items:[
                'topics/software/programming/csharp/about'
              ],
            },
            {
              type: 'category',
              label: 'C++',
              collapsed: false,
              items:[
                'topics/software/programming/c++/about'
              ],
            },
            {
              type: 'category',
              label: 'Python',
              collapsed: false,
              items:[
                'topics/software/programming/python/about'
              ],
            },
            {
              type: 'category',
              label: 'JavaScript',
              collapsed: false,
              items:[
                'topics/software/programming/javascript/about'
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Tools',
          collapsed: false,
          items:[
            'topics/software/tools/about'
          ],
        },

        {
          type: 'category',
          label: 'IDEs',
          collapsed: false,
          items:[
            'topics/software/ide/about'
          ],
        },
        
    ],
    },
  ],

  contributeItems: [
    {
      type: 'category',
      label: 'Contribute',
      collapsed: false,
      items:['contribute/About', 'contribute/How To'],
    },
  ],

}
