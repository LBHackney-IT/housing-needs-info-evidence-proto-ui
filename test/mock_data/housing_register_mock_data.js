const HousingRegisterMockData = {
  BASE: {
    listState: {
      URG: {
        1: 331,
        2: 252,
        3: 157,
        4: 129,
        5: 43,
        6: 22,
        7: 1
      },
      RES: {
        0: 1,
        1: 2837,
        2: 877,
        3: 369,
        4: 45,
        6: 2
      },
      HOM: {
        1: 833,
        2: 1860,
        3: 702,
        4: 105,
        5: 10,
        6: 3,
        7: 1
      },
      GEN: {
        1: 1066,
        2: 1464,
        3: 1619,
        4: 250,
        5: 27,
        6: 7,
        7: 1
      }
    },
    newMembers: {
      GEN: {
        1: 87,
        2: 115,
        3: 83,
        4: 12,
        5: 1
      },
      HOM: {
        1: 81,
        2: 154,
        3: 48,
        4: 2,
        5: 1
      },
      RES: {
        1: 77,
        2: 28,
        3: 5,
        4: 2
      },
      URG: {
        1: 11,
        2: 17,
        3: 9,
        4: 10,
        5: 3
      }
    },
    newProperties: {
      0: 356,
      1: 1618,
      2: 555,
      3: 291,
      4: 52,
      5: 5
    }
  }
};

HousingRegisterMockData.URG = {
  ...{
    customerData: {
      band: 'URG',
      bedrooms: 1,
      position: 319
    }
  },
  ...HousingRegisterMockData.BASE
};

HousingRegisterMockData.HOM = {
  ...{
    customerData: {
      band: 'HOM',
      bedrooms: 1,
      position: 319
    }
  },
  ...HousingRegisterMockData.BASE
};

HousingRegisterMockData.GEN = {
  ...{
    customerData: {
      band: 'GEN',
      bedrooms: 1,
      position: 319
    }
  },
  ...HousingRegisterMockData.BASE
};

module.exports = HousingRegisterMockData;
