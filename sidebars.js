/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  "docs": [
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
        {
          type: 'category',
          label: 'Business',
          items: [
            'topics/business/index',
            'topics/business/entrepreneur',
            'topics/business/marketing',
            'topics/business/strategicPlanning',
            'topics/business/accountingAndFinance',
            'topics/business/technology',
            'topics/business/operation',
            'topics/business/humanResources',
          ]
        },
        {
          type: 'category',
          label: 'Book Club',
          items: [
            'topics/bookClub/index',
          ]
        },
      ]
    },

    {type: 'category', label: 'Live Sessions', items: ['doc6']},

    {type: 'category', label: 'Contribute', items: ['doc7']},

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
}
