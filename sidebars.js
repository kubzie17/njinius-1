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
      label: 'Track',

      items: [
        'track/index',
        {
          type: 'category',
          label: 'Software',
          items:[
            'track/software/index',
            'track/software/forLoop',
            'track/software/functionsAndParameters',
            'track/software/inheritance',
            'track/software/overload',
            'track/software/passByReference',
            'track/software/pointers',
            'track/software/polymorphism',
            'track/software/reference',
            'track/software/switch',
            'track/software/whileLoop',
            'track/software/array',
            'track/software/classMethods',
            'track/software/constructors',
            'track/software/dataTypes',
            'track/software/exceptions',
            'track/software/abstraction',
            'track/software/property',
            'track/software/accessModifiers',
            'track/software/methods',
            'track/software/deconstructor',
            'track/software/memberInitialisation',
          ]
        },
        {
          type: 'category',
          label: 'business',
          items: [
            'track/business/index',
            'track/business/entrepreneur',
            'track/business/marketing',
            'track/business/strategicPlanning',
            'track/business/accountingAndFinance',
            'track/business/technology',
            'track/business/operation',
            'track/business/humanResources',
          ]
        },
        {
          type: 'category',
          label: 'book club',
          items: [
            'track/bookClub/index',
          ]
        },
      ]
    },

    {type: 'category', label: 'Schedule', items: ['doc6']},

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
