import { useState } from "react"

function Users() {

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) ?

    JSON.parse(localStorage.getItem('users'))

    :
    [



      {
        name: 'user1',
        TCKN: '11111111111',
        password: 'p11111111111',
        balance: 10497.80,

        water: {
          subscriptions: [
            {
              no: '90082430',
              invoiceCost: 87.95,
            },

            {
              no: '44199658',
              invoiceCost: 108.76,
            },

            {
              no: '48259103',
              invoiceCost: 47.09,
            },

            {
              no: '62557764',
              invoiceCost: 55.98,
            },

            {
              no: '90734992',
              invoiceCost: 317.74,
            },

            {
              no: '72413613',
              invoiceCost: 127.69,
            },

            {
              no: '66436948',
              invoiceCost: 174.38,
            },

          ]
        },

        electric: {
          subscriptions: [
            {
              no: '17322388',
              invoiceCost: 160.43,
            },

            {
              no: '80913679',
              invoiceCost: 107.86,
            },

            {
              no: '17203539',
              invoiceCost: 212.08,
            },

            {
              no: '50263480',
              invoiceCost: 77.85,
            },

            {
              no: '95517760',
              invoiceCost: 301.65,
            },

            {
              no: '16434963',
              invoiceCost: 17.08,
            },

            {
              no: '78368574',
              invoiceCost: 84.35,
            },

            {
              no: '15399434',
              invoiceCost: 27.94,
            },

          ]
        },


        gas: {
          subscriptions: [
            {
              no: '557863276760',
              invoiceCost: 467.89,
            },

            {
              no: '368385488525',
              invoiceCost: 708.21,
            },

            {
              no: '257043243784',
              invoiceCost: 673.08,
            },

            {
              no: '174236216290',
              invoiceCost: 408.66,
            },

            {
              no: '584532836014',
              invoiceCost: 801.33,
            },

            {
              no: '694816777274',
              invoiceCost: 560.13,
            },

            {
              no: '237542548210',
              invoiceCost: 357.38,
            },

            {
              no: '225262816603',
              invoiceCost: 381.98,
            },

            {
              no: '923309938648',
              invoiceCost: 637.88,
            },

          ]
        },


        realties: [
          {
            no: '90817650',
            blockNo: '64897',
            parcelNumber: '13',

            property: 'Arsa',

            propertyTax: 204.75,

          },

          {
            no: '85472587',
            blockNo: '26518',
            parcelNumber: '48',

            property: 'Tarla',

            propertyTax: 368.07,

          },

          {
            no: '79805046',
            blockNo: '87945',
            parcelNumber: '47',

            property: 'Arsa',

            propertyTax: 216.44,

          },

          {
            no: '91776518',
            blockNo: '24678',
            parcelNumber: '32',

            property: 'Tarla',

            propertyTax: 198.31,

          },

          {
            no: '40395414',
            blockNo: '13647',
            parcelNumber: '9',

            property: 'Arsa',

            propertyTax: 178.24,

          },

          {
            no: '29801437',
            blockNo: '20198',
            parcelNumber: '8',

            property: 'Tarla',

            propertyTax: 341.70,

          },

          {
            no: '53141377',
            blockNo: '74610',
            parcelNumber: '3',

            property: 'Arsa',

            propertyTax: 217.84,

          },



        ]


      },

      {
        name: 'user2',
        TCKN: '22222222222',
        password: 'p22222222222',

        balance: 1628.47,



        water: {
          subscriptions: [
            {
              no: '46830899',
              invoiceCost: 167.49,
            },

            {
              no: '17740924',
              invoiceCost: 98.72,
            },

          ]
        },

        electric: {
          subscriptions: [
            {
              no: '24745495',
              invoiceCost: 249.13,
            },

            {
              no: '59220964',
              invoiceCost: 136.64,
            },

          ]
        },

        gas: {
          subscriptions: [
            {
              no: '821258772084',
              invoiceCost: 914.34,
            },

            {
              no: '149011396165',
              invoiceCost: 467.03,
            },

          ]
        },



        realties: [
          {
            no: '33415386',
            blockNo: '29476',
            parcelNo: '17',

            property: 'Arsa',

            propertyTax: 687.27,

          },

          {
            no: '75699587',
            blockNo: '16087',
            parcelNo: '6',

            property: 'Tarla',

            propertyTax: 347.46,

          },

          {
            no: '29090938',
            blockNo: '60074',
            parcelNo: '84',

            property: 'Tarla',

            propertyTax: 496.08,

          },
        ]

      },


      {
        name: 'user3',
        TCKN: '33333333333',
        password: 'p33333333333',
        balance: 2087.09,



        water: {
          subscriptions: [
            {
              no: '72098929',
              invoiceCost: 206.09,
            },

            {
              no: '74256215',
              invoiceCost: 162.83,
            },

            {
              no: '46436894',
              invoiceCost: 302.77,
            },


            {
              no: '15901145',
              invoiceCost: 234.54,
            },

          ]
        },


        electric: {
          subscriptions: [
            {
              no: '78468114',
              invoiceCost: 108.64,
            },

            {
              no: '43009671',
              invoiceCost: 274.03,
            },

            {
              no: '92051460',
              invoiceCost: 147.93,
            },

            {
              no: '37776042',
              invoiceCost: 224.27,
            },

            {
              no: '60874051',
              invoiceCost: 133.72,
            },

          ]
        },

        gas: {
          subscriptions: [

            {
              no: '714328605058',
              invoiceCost: 468.13,
            },

            {
              no: '707156094753',
              invoiceCost: 276.37,
            },

            {
              no: '911729002331',
              invoiceCost: 164.11,
            },

            {
              no: '354055101131',
              invoiceCost: 477.06,
            },

          ]
        },


        realties: [
          {
            no: '18470696',
            blockNo: '34908',
            parcelNumber: '21',

            property: 'Arsa',

            propertyTax: 214.17,

          },

          {
            no: '68325626',
            blockNo: '71649',
            parcelNumber: '14',

            property: 'Tarla',

            propertyTax: 164.89,

          },

          {
            no: '44915833',
            blockNo: '64879',
            parcelNumber: '13',

            property: 'Tarla',

            propertyTax: 474.23,

          },
        ]


      },



    ])

  return ([users, setUsers])

}

export default Users


/*

    water: {
      subscriptions: [

        {
          no: '',
          invoiceCost: ,
        },
      ]
    },

        electric: {
      subscriptions: [
        {
          no: '',
          invoiceCost: ,
        },

      ]
    },

        gas: {
      subscriptions: [
        {
          no: '',
          invoiceCost: ,
        },

      ]
    },


    realties: [
      {
        no:'',
        blockNo:'',
        parcelNumber: '',

        property: '',

        propertyTax: ,

      },
    ]


*/

// waterSubNo 8 hane , electricSubNo 8 hane , gasSubNo 12 hane
/* 

69467716 - 61803990 - 92396546 - 
31225030 -  - 68908585 - 
21572843 - 79157178 - 82201731 - 
 - 99191075 - 66242071 - 
 -  - 71217079 - 
37661760 - 48313559 - 78789561 - 
10641291 -  - 98831814 - 
 - 32862489 -  - 
26884896 - 48300628 -  - 
97228306 -  - 49280891 - 
 -  - 67014804 - 
 -  - 36489444 -
 - 91785248 - 90400206 - 
 -  -  - 
10689733 - 64664927 -  -
 -  -  - 
 -  - 60409427 - 
16415212 -  - 58796913 - 
 -  -  - 
19961457 - 50561534 - 78616138 - 
 - 71230158 -  - 
 -  -  - 
99259913 -  - 69236544 - 
 -  - 60764550 - 
42672015 - 14559484 -  - 
 - 58633482 - 69661852 - 
87241021 -  - 53811470 - 
 - 59220964 - 48698433 - 
77036818 - 94330657 -  - 
68643772 - 44919348 - 33014270 -

------------------------------------------

598343320312 - 223856010867 - 220669423877 - 
732627824294 - 239314334375 - 487580487776 - 
112504489467 - 976765051272 - 224946506526 - 
474874081592 - 887006644098 - 650140934486 - 
 - 430940127294 - 142289543990 -
227869751038 - 396624780663 - 435607754895 - 
113958112121 - 848422524882 - 918372037932 - 
252418575573 - 115024209324 - 324002439809 - 
 -  -  -
534046191820 -  - 698707996779 - 
850506364579 - 755468343920 - 702062987100 - 
348416043275 - 520430319685 -  - 
 -  - 808807410283 - 
492727449756 - 908359675202 - 549049420885 - 
903772156992 -  -  - 
248896009569 -  - 654553309887 - 
 -  -  - 
568197741500 - 303066404390 - 642685787206 - 
795534820508 -  - 828713491670 - 




*/