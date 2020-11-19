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
      label: 'Topic',

      items: [
        'topics/index',
        {
          type: 'category',
          label: 'Software',
          items:[
            'topics/software/index',
            'topics/software/forLoop',
            'topics/software/functionsAndParameters',
            'topics/software/inheritance',
            'topics/software/overload',
            'topics/software/passByReference',
            'topics/software/pointers',
            'topics/software/polymorphism',
            'topics/software/reference',
            'topics/software/switch',
            'topics/software/whileLoop',
            'topics/software/array',
            'topics/software/classMethods',
            'topics/software/constructors',
            'topics/software/dataTypes',
            'topics/software/exceptions',
            'topics/software/abstraction',
            'topics/software/property',
            'topics/software/accessModifiers',
            'topics/software/methods',
            'topics/software/deconstructor',
            'topics/software/memberInitialisation',
          ]
        },
       
        
      ]
    },

    {type: 'category', label: 'Live Sessions', items: ['doc6']},

    {type: 'category', label: 'Contribute', items: ['contribute']},

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
        'topicss/business/about',
        'topicss/business/index',
        'topicss/business/entrepreneur',
        'topicss/business/marketing',
        'topicss/business/strategicPlanning',
        'topicss/business/accountingAndFinance',
        'topicss/business/technology',
        'topicss/business/operation',
        'topicss/business/humanResources',],
    },
  ],
  
  bookclubItems: [
    {
      type: 'category',
      label: 'Book Club',
      collapsed: false,
      items:['topicss/bookClub/about'],
    },
  ],

  softwareItems: [
    {
      type: 'category',
      label: 'Software',
      collapsed: false,
      items:[
        'topicss/software/about',
        {
          type: 'category',
          label: 'programming',
          collapsed: false,
          items:[
            'topicss/software/programming/about',
            {
              type: 'category',
              label: 'C#',
              collapsed: false,
              items:[
                'topicss/software/programming/csharp/about'
              ],
            },
            {
              type: 'category',
              label: 'C++',
              collapsed: false,
              items:[
                'topicss/software/programming/c++/about'
              ],
            },
            {
              type: 'category',
              label: 'Python',
              collapsed: false,
              items:[
                'topicss/software/programming/python/about'
              ],
            },
            {
              type: 'category',
              label: 'JavaScript',
              collapsed: false,
              items:[
                'topicss/software/programming/javascript/about'
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Tools',
          collapsed: false,
          items:[
            'topicss/software/tools/about'
          ],
        },

        {
          type: 'category',
          label: 'IDEs',
          collapsed: false,
          items:[
            'topicss/software/ide/about'
          ],
        },
    ],
    },
  ],
}
